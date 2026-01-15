import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Send, Gift, User, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Live = () => {
    const [selectedStream, setSelectedStream] = useState(null);
    const [comment, setComment] = useState('');

    const activeStreams = [
        {
            id: 1,
            user: "TechInsider",
            title: "Nothing Phone 3 Unboxing! 📱🔥",
            viewers: "12.5k",
            category: "Tech",
            image: "https://images.unsplash.com/photo-1550005809-91ad75fb315f?w=800&q=80",
            avatar: "T"
        },
        {
            id: 2,
            user: "GamingPro",
            title: "GTA VI Leaks Discussion 🎮",
            viewers: "8.2k",
            category: "Gaming",
            image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
            avatar: "G"
        },
        {
            id: 3,
            user: "ChefAnjali",
            title: "Making Butter Chicken 🍛 Can u smell it?",
            viewers: "5.1k",
            category: "Cooking",
            image: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?w=800&q=80",
            avatar: "C"
        },
        {
            id: 4,
            user: "MusicVibes",
            title: "Live Acoustic Session 🎸 Chill",
            viewers: "3.4k",
            category: "Music",
            image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
            avatar: "M"
        }
    ];

    const comments = [
        { user: "User123", text: "This looks amazing! 😍" },
        { user: "CoolDude", text: "Price reveal?" },
        { user: "TechFan", text: "Can you show the camera bump again?" },
        { user: "IndiaTech", text: "Sent a Super Chat! 💖" }
    ];

    return (
        <div className="min-h-screen bg-gray-950 text-white pb-24">
            {/* Header */}
            <div className="p-4 glass-dark sticky top-0 z-10 flex justify-between items-center">
                <h1 className="text-xl font-bold bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent">
                    Vchat Live 🔴
                </h1>
                <button className="bg-white/10 p-2 rounded-full">
                    <User size={20} />
                </button>
            </div>

            {/* Featured Tags */}
            <div className="px-4 mb-6 overflow-x-auto no-scrollbar flex gap-2">
                {['All', 'Trending', 'Music', 'Gaming', 'IRL', 'Tech'].map((tag, i) => (
                    <button key={i} className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap ${i === 0 ? 'bg-red-500 font-semibold' : 'glass-dark text-gray-300'}`}>
                        {tag}
                    </button>
                ))}
            </div>

            {/* Streams Grid */}
            <div className="px-2 grid grid-cols-2 gap-2">
                {activeStreams.map((stream) => (
                    <motion.div
                        key={stream.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedStream(stream)}
                        className="relative rounded-xl overflow-hidden aspect-[3/4] group"
                    >
                        <img src={stream.image} alt={stream.title} className="w-full h-full object-cover" />

                        {/* Overlay Gradient */}
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />

                        {/* Live Badge */}
                        <div className="absolute top-2 left-2 bg-red-600 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                            Live
                        </div>

                        {/* Viewers */}
                        <div className="absolute top-2 right-2 bg-black/40 backdrop-blur px-2 py-0.5 rounded text-[10px] flex items-center gap-1">
                            <User size={8} /> {stream.viewers}
                        </div>

                        {/* Info */}
                        <div className="absolute bottom-3 left-3 right-3">
                            <h3 className="text-sm font-semibold line-clamp-2 leading-tight mb-1">{stream.title}</h3>
                            <div className="flex items-center gap-1.5 opacity-80">
                                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-[8px] font-bold">
                                    {stream.avatar}
                                </div>
                                <span className="text-xs">{stream.user}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Full Screen Stream Modal */}
            <AnimatePresence>
                {selectedStream && (
                    <motion.div
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '100%' }}
                        className="fixed inset-0 z-50 bg-black flex flex-col"
                    >
                        {/* Video Area (Mock) */}
                        <div className="flex-1 relative bg-gray-900">
                            <img src={selectedStream.image} className="w-full h-full object-cover opacity-50" />

                            {/* Top Controls */}
                            <div className="absolute top-4 left-4 right-4 flex justify-between items-start safe-top">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center font-bold">
                                        {selectedStream.avatar}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-sm">{selectedStream.user}</h3>
                                        <p className="text-xs opacity-70 flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                                            {selectedStream.viewers} watching
                                        </p>
                                    </div>
                                </div>
                                <button onClick={() => setSelectedStream(null)} className="p-2 bg-black/20 rounded-full backdrop-blur">
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Floating Hearts Animation (Mock) */}
                            <div className="absolute right-4 bottom-32 flex flex-col items-center gap-4">
                                <FloatingHeart delay={0} />
                                <FloatingHeart delay={1} />
                                <FloatingHeart delay={0.5} />
                            </div>

                            {/* Comments Overlay */}
                            <div className="absolute bottom-24 left-4 right-16 h-48 overflow-y-auto no-scrollbar mask-gradient-top">
                                {comments.map((c, i) => (
                                    <div key={i} className="mb-2">
                                        <span className="font-semibold text-gray-300 text-sm">{c.user}: </span>
                                        <span className="text-sm opacity-90">{c.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bottom Input Area */}
                        <div className="p-3 bg-black/20 backdrop-blur border-t border-white/5 flex items-center gap-3 pb-6">
                            <input
                                type="text"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                placeholder="Say something..."
                                className="flex-1 bg-white/10 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-pink-500 border border-white/5"
                            />
                            <button className="p-2.5 bg-white/10 rounded-full text-pink-400 hover:bg-pink-500/20">
                                <Gift size={20} />
                            </button>
                            <button className="p-2.5 bg-pink-600 rounded-full text-white shadow-lg shadow-pink-600/30">
                                <Send size={20} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FloatingHeart = ({ delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 0, scale: 0 }}
        animate={{ opacity: [0, 1, 0], y: -100, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, delay: delay, ease: "easeOut" }}
        className="text-pink-500"
    >
        <Heart fill="currentColor" size={24} />
    </motion.div>
)

export default Live;
