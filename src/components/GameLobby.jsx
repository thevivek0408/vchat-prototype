import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Gamepad2,
    Users,
    Zap,
    QrCode,
    Copy,
    Share2,
    Mic,
    MicOff,
    Monitor,
    X,
    Trophy,
    RotateCcw,
    Wifi,
    Search
} from 'lucide-react';

const GameLobby = ({ onClose }) => {
    const [activeTab, setActiveTab] = useState('library');
    const [nearbyPlayers, setNearbyPlayers] = useState([]);
    const [scanning, setScanning] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    // Simulate scanning for nearby players
    useEffect(() => {
        if (activeTab === 'nearby') {
            setScanning(true);
            const timer = setTimeout(() => {
                setNearbyPlayers([
                    { id: 1, name: 'Rahul (Dev)', distance: '2m', avatar: '👨‍💻' },
                    { id: 2, name: 'Anjali', distance: '5m', avatar: '🎨' },
                    { id: 3, name: 'Guest_99', distance: '10m', avatar: '👾' },
                ]);
                setScanning(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [activeTab]);

    const games = [
        {
            id: 1,
            name: 'Code Racer',
            players: '2-8',
            image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500&q=80',
            description: 'Type fast to win! Developer edition.',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            id: 2,
            name: 'Pixel Party',
            players: '4-12',
            image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&q=80',
            description: 'Draw and guess with friends.',
            color: 'from-purple-500 to-pink-500'
        },
        {
            id: 3,
            name: 'Space Surviv.',
            players: '1-4',
            image: 'https://images.unsplash.com/photo-1560252829-84995932822a?w=500&q=80',
            description: 'Co-op survival shooter.',
            color: 'from-orange-500 to-red-500'
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute inset-4 md:inset-10 z-50 bg-[#313338] rounded-2xl shadow-2xl overflow-hidden border border-white/10 flex flex-col"
        >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-[#2b2d31] border-b border-[#1f2023]">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                        <Gamepad2 className="text-white" size={24} />
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-white">Arcade Lounge</h2>
                        <div className="flex items-center gap-2 text-xs text-green-400">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            Voice Connected
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button onClick={() => setIsMuted(!isMuted)} className={`p-2 rounded-lg transition-colors ${isMuted ? 'bg-red-500/20 text-red-500' : 'bg-[#1f2023] text-gray-400 hover:text-white'}`}>
                        {isMuted ? <MicOff size={20} /> : <Mic size={20} />}
                    </button>
                    <button onClick={onClose} className="p-2 bg-[#1f2023] rounded-lg text-gray-400 hover:text-white hover:bg-red-500/20 hover:text-red-500 transition-all">
                        <X size={20} />
                    </button>
                </div>
            </div>

            <div className="flex-1 flex min-h-0">
                {/* Sidebar */}
                <div className="w-64 bg-[#2b2d31] p-2 flex flex-col gap-1 border-r border-[#1f2023]">
                    <button
                        onClick={() => setActiveTab('library')}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'library' ? 'bg-[#404249] text-white' : 'text-gray-400 hover:text-white hover:bg-[#35373c]'}`}
                    >
                        <Gamepad2 size={18} />
                        Game Library
                    </button>
                    <button
                        onClick={() => setActiveTab('nearby')}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'nearby' ? 'bg-[#404249] text-white' : 'text-gray-400 hover:text-white hover:bg-[#35373c]'}`}
                    >
                        <Wifi size={18} />
                        Nearby Players
                        {scanning && <span className="ml-auto w-2 h-2 rounded-full bg-blue-500 animate-ping"></span>}
                    </button>
                    <button
                        onClick={() => setActiveTab('invite')}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'invite' ? 'bg-[#404249] text-white' : 'text-gray-400 hover:text-white hover:bg-[#35373c]'}`}
                    >
                        <QrCode size={18} />
                        Invite via QR
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 overflow-y-auto custom-scrollbar bg-[#313338]">
                    {activeTab === 'library' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {games.map((game) => (
                                <motion.div
                                    key={game.id}
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-[#2b2d31] rounded-xl overflow-hidden group border border-[#1f2023] hover:border-gray-600 transition-all cursor-pointer"
                                >
                                    <div className="h-32 bg-gray-700 relative overflow-hidden">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${game.color} opacity-80 group-hover:opacity-100 transition-opacity`}></div>
                                        <img src={game.image} alt={game.name} className="absolute inset-0 w-full h-full object-cover mix-blend-overlay" />
                                        <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md text-xs text-white font-bold flex items-center gap-1">
                                            <Users size={10} /> {game.players}
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-white font-bold mb-1">{game.name}</h3>
                                        <p className="text-xs text-gray-400 mb-3">{game.description}</p>
                                        <button className="w-full py-2 bg-[#5865f2] hover:bg-[#4752c4] text-white rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-2">
                                            <Zap size={16} /> Play Now
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'nearby' && (
                        <div className="max-w-md mx-auto">
                            <div className="text-center mb-6">
                                <div className="w-16 h-16 bg-blue-500/10 text-blue-400 rounded-full flex items-center justify-center mx-auto mb-3 animate-pulse">
                                    <Wifi size={32} />
                                </div>
                                <h2 className="text-xl font-bold text-white mb-2">Looking for Players...</h2>
                                <p className="text-gray-400 text-sm">Visible to other Vchat users nearby</p>
                            </div>

                            <div className="space-y-2">
                                {nearbyPlayers.map((player, index) => (
                                    <motion.div
                                        key={player.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-[#2b2d31] p-3 rounded-xl flex items-center gap-3 border border-[#1f2023]"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-xl">
                                            {player.avatar}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-white font-semibold text-sm">{player.name}</h4>
                                            <p className="text-xs text-gray-400">{player.distance} away</p>
                                        </div>
                                        <button className="px-3 py-1.5 bg-green-600 hover:bg-green-500 text-white text-xs font-bold rounded-lg transition-colors">
                                            Invite
                                        </button>
                                    </motion.div>
                                ))}
                                {scanning && (
                                    <div className="text-center py-4 text-gray-500 text-xs">
                                        Scanning nearby area...
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {activeTab === 'invite' && (
                        <div className="flex flex-col items-center justify-center h-full text-center">
                            <div className="bg-white p-4 rounded-2xl mb-6 shadow-xl">
                                <QrCode size={180} className="text-black" />
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-2">Scan to Join</h2>
                            <p className="text-gray-400 mb-6 max-w-xs">Ask friends to scan this code with their Vchat camera to instantly join your lobby.</p>

                            <div className="flex gap-3">
                                <button className="flex items-center gap-2 px-4 py-2 bg-[#2b2d31] hover:bg-[#35373c] text-white rounded-lg text-sm border border-[#1f2023] transition-colors">
                                    <Copy size={16} /> Copy Link
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2 bg-[#2b2d31] hover:bg-[#35373c] text-white rounded-lg text-sm border border-[#1f2023] transition-colors">
                                    <Share2 size={16} /> Share
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default GameLobby;
