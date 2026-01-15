import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, MicOff, Volume2, Users, Headphones } from 'lucide-react';

const VoiceLounge = ({ groupName }) => {
    const [isJoined, setIsJoined] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    // Simulate active speakers with orbital positions
    const [speakers, setSpeakers] = useState([
        { id: 1, name: 'Amit', avatar: '👨‍💼', angle: 0, distance: 80, isSpeaking: true },
        { id: 2, name: 'Priya', avatar: '👩‍🎨', angle: 120, distance: 80, isSpeaking: false },
        { id: 3, name: 'Rahul', avatar: '👨‍💻', angle: 240, distance: 80, isSpeaking: false },
    ]);

    // Self avatar for when joined
    const self = { id: 0, name: 'You', avatar: '👤', angle: 270, distance: 80 };

    useEffect(() => {
        // Orbital animation loop
        const interval = setInterval(() => {
            setSpeakers(prev => prev.map(s => ({
                ...s,
                angle: (s.angle + 0.5) % 360, // Slow rotation
                isSpeaking: Math.random() > 0.7 // Simulate speaking toggle
            })));
        }, 50);
        return () => clearInterval(interval);
    }, []);

    // Helper to calculate position from angle and distance
    const getPos = (angle, distance) => {
        const rad = (angle * Math.PI) / 180;
        return {
            x: Math.cos(rad) * distance,
            y: Math.sin(rad) * distance
        };
    };

    return (
        <div className="relative w-full h-48 bg-gradient-to-b from-black/40 to-transparent overflow-hidden rounded-b-3xl mb-4 border-b border-white/5">
            {/* Visualizer Background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                <div className="w-64 h-64 border border-white/10 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute w-48 h-48 border border-white/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            </div>

            {/* Core / Hub Status */}
            <div className="absolute top-4 left-4 z-10">
                <div className="flex items-center gap-2 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
                    <Headphones size={14} className={isJoined ? "text-green-400" : "text-gray-400"} />
                    <span className="text-xs font-medium text-white">
                        {isJoined ? "Connected" : "Voice Lounge"}
                    </span>
                    <span className="text-xs text-gray-500">
                        {isJoined ? "4 users" : "3 active"}
                    </span>
                </div>
            </div>

            {/* Join Button (if not connected) */}
            {!isJoined && (
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsJoined(true)}
                        className="px-6 py-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full text-white font-semibold shadow-lg shadow-primary-500/20 flex items-center gap-2"
                    >
                        <Volume2 size={18} />
                        Join Lounge
                    </motion.button>
                </div>
            )}

            {/* Orbital View */}
            <div className="absolute inset-0 flex items-center justify-center mt-6">
                {/* Central Core */}
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-gray-800 to-black border-2 ${isJoined ? 'border-green-500/50' : 'border-white/10'} flex items-center justify-center shadow-2xl relative z-0 transition-all duration-500`}>
                    <Users size={24} className="text-white/50" />
                    {/* Ripple effect when speaking */}
                    {isJoined && (
                        <div className="absolute inset-0 rounded-full border border-green-500/30 animate-ping" />
                    )}
                </div>

                {/* Orbiting Users */}
                <AnimatePresence>
                    {(isJoined ? [...speakers, self] : speakers).map((user) => {
                        const pos = getPos(user.angle, user.distance);
                        return (
                            <motion.div
                                key={user.id}
                                className="absolute"
                                animate={{ x: pos.x, y: pos.y }}
                                transition={{ duration: 0 }} // Direct updates for smoothness
                                drag={isJoined && user.id === 0} // Allow dragging self
                                dragConstraints={{ top: -50, bottom: 50, left: -100, right: 100 }}
                            >
                                <div className="relative group">
                                    {/* Speaking Indicator Ring */}
                                    {user.isSpeaking && (
                                        <div className="absolute -inset-2 bg-green-500/20 rounded-full blur-sm" />
                                    )}

                                    {/* Avatar */}
                                    <div className={`w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-xl shadow-lg relative z-10 ${user.isSpeaking ? 'scale-110 border-green-400' : ''} transition-all duration-300`}>
                                        {user.avatar}
                                    </div>

                                    {/* Name Tag */}
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-0.5 bg-black/60 rounded text-[10px] text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                                        {user.name}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* Controls (when joined) */}
            <AnimatePresence>
                {isJoined && (
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/10 z-30"
                    >
                        <button
                            onClick={() => setIsMuted(!isMuted)}
                            className={`p-2 rounded-full transition-colors ${isMuted ? 'bg-red-500/20 text-red-400' : 'hover:bg-white/10 text-white'}`}
                        >
                            {isMuted ? <MicOff size={18} /> : <Mic size={18} />}
                        </button>
                        <button
                            onClick={() => setIsJoined(false)}
                            className="px-4 py-1.5 bg-red-500 hover:bg-red-600 rounded-full text-xs font-semibold text-white transition-colors"
                        >
                            Leave
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default VoiceLounge;
