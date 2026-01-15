import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Music,
    Image as ImageIcon,
    MapPin,
    Calendar,
    CheckSquare,
    DollarSign,
    Heart,
    Zap,
    Play,
    Pause,
    SkipForward,
    Plus,
    Share2,
    MessageSquare,
    ChevronLeft,
    MoreVertical
} from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const SynergySpace = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState('canvas');
    const [isPlaying, setIsPlaying] = useState(false);

    // Mock Data for the Space
    const spaceData = {
        name: "Amit & You",
        connectionScore: 85,
        tier: "synergy",
        avatar: "👨‍💼",
        theme: "from-yellow-500 to-orange-500",
        music: {
            currentTrack: "Starboy",
            artist: "The Weeknd",
            progress: 45,
            duration: 210,
            queue: [
                { id: 1, title: "Blinding Lights", artist: "The Weeknd" },
                { id: 2, title: "Stay", artist: "Justin Bieber" }
            ]
        },
        canvasItems: [
            { id: 1, type: 'image', content: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987', x: 20, y: 20, rotation: -5, scale: 1 },
            { id: 2, type: 'note', content: 'Don\'t forget the meeting tomorrow!', x: 150, y: 100, rotation: 3, color: 'bg-yellow-200' },
            { id: 3, type: 'map', content: 'Cafe Niloufer', x: 50, y: 250, rotation: 0 },
        ],
        sharedVault: [
            { id: 1, name: 'Project_Alpha_Docs.pdf', type: 'doc', date: '2h ago' },
            { id: 2, name: 'Trip_Tickets.pdf', type: 'ticket', date: 'Yesterday' },
            { id: 3, name: 'Dinner_Bill_Split', type: 'bill', date: '3 days ago', amount: '₹1,240' }
        ]
    };

    return (
        <div className="min-h-screen pb-20 bg-gray-950">
            {/* Immersive Header */}
            <div className={`relative h-48 bg-gradient-to-br ${spaceData.theme}`}>
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

                {/* Nav */}
                <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-10">
                    <button onClick={() => navigate(-1)} className="p-2 bg-black/20 rounded-full hover:bg-black/30 text-white backdrop-blur-md">
                        <ChevronLeft size={24} />
                    </button>
                    <div className="flex items-center gap-2 px-3 py-1 bg-black/20 rounded-full backdrop-blur-md">
                        <Zap size={14} className="text-yellow-300 fill-yellow-300" />
                        <span className="text-white text-xs font-bold">SYNERGY SPACE</span>
                    </div>
                    <button className="p-2 bg-black/20 rounded-full hover:bg-black/30 text-white backdrop-blur-md">
                        <MoreVertical size={24} />
                    </button>
                </div>

                {/* Profile Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-950 to-transparent">
                    <div className="flex items-end justify-between">
                        <div className="flex items-center gap-4">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-md border-2 border-white/20 flex items-center justify-center text-4xl shadow-2xl"
                            >
                                {spaceData.avatar}
                            </motion.div>
                            <div>
                                <h1 className="text-2xl font-bold text-white mb-1">{spaceData.name}</h1>
                                <div className="flex items-center gap-2">
                                    <div className="h-1.5 w-24 bg-white/20 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${spaceData.connectionScore}%` }}
                                            className="h-full bg-white"
                                        />
                                    </div>
                                    <span className="text-xs text-white/80 font-medium">{spaceData.connectionScore}% Linked</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shared Music Player - Floating */}
            <div className="px-4 -mt-6 relative z-10 mb-6">
                <motion.div
                    whileTap={{ scale: 0.98 }}
                    className="glass-dark border border-white/10 p-4 rounded-2xl flex items-center gap-4 bg-black/40 backdrop-blur-xl shadow-xl"
                >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center animate-pulse-slow">
                        <Music size={20} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-green-400 px-1.5 py-0.5 bg-green-500/10 rounded-md">LIVE</span>
                            <h3 className="text-white font-medium truncate">{spaceData.music.currentTrack}</h3>
                        </div>
                        <p className="text-xs text-gray-400 truncate">{spaceData.music.artist}</p>
                    </div>
                    <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform"
                    >
                        {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-0.5" />}
                    </button>
                </motion.div>
            </div>

            {/* Tabs */}
            <div className="px-4 mb-6">
                <div className="flex p-1 bg-white/5 rounded-xl">
                    {['canvas', 'vault', 'moments'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === tab
                                    ? 'bg-white/10 text-white shadow-sm'
                                    : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Area */}
            <div className="px-4 min-h-[400px]">
                <AnimatePresence mode="wait">
                    {activeTab === 'canvas' && (
                        <motion.div
                            key="canvas"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="relative h-[400px] border border-white/10 rounded-3xl bg-white/5 overflow-hidden"
                        >
                            {/* Grid Pattern */}
                            <div className="absolute inset-0 opacity-20"
                                style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                            ></div>

                            {/* Draggable Items (Mock Visuals) */}
                            {spaceData.canvasItems.map((item) => (
                                <motion.div
                                    key={item.id}
                                    drag
                                    dragConstraints={{ left: 0, right: 250, top: 0, bottom: 300 }}
                                    initial={{ x: item.x, y: item.y, rotate: item.rotation }}
                                    className={`absolute cursor-grab active:cursor-grabbing shadow-2xl ${item.type === 'note' ? 'w-40 p-4 bg-yellow-200 text-black font-handwriting rotate-2 rounded-sm' :
                                            item.type === 'image' ? 'w-48 p-2 bg-white rounded-lg -rotate-2' :
                                                'w-40 p-3 glass-dark rounded-xl border border-white/20'
                                        }`}
                                >
                                    {item.type === 'image' && (
                                        <>
                                            <div className="aspect-[4/3] bg-gray-200 mb-2 rounded overflow-hidden">
                                                <img src={item.content} alt="Memory" className="w-full h-full object-cover" />
                                            </div>
                                            <p className="text-center text-xs text-gray-500 font-handwriting">Trip to Goa 🏖️</p>
                                        </>
                                    )}
                                    {item.type === 'note' && (
                                        <p className="font-medium text-sm leading-snug">{item.content}</p>
                                    )}
                                    {item.type === 'map' && (
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                                                <MapPin size={16} className="text-red-500" />
                                            </div>
                                            <div>
                                                <p className="text-white text-xs font-bold">Meet Here</p>
                                                <p className="text-gray-400 text-[10px]">{item.content}</p>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            ))}

                            {/* Toolbar */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 p-2 glass-dark rounded-full border border-white/10 shadow-xl">
                                <button className="p-2 hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-colors">
                                    <ImageIcon size={20} />
                                </button>
                                <button className="p-2 hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-colors">
                                    <CheckSquare size={20} />
                                </button>
                                <button className="p-2 hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-colors">
                                    <MapPin size={20} />
                                </button>
                                <div className="w-px h-6 bg-white/10 mx-1"></div>
                                <button className="p-2 bg-white text-black rounded-full hover:scale-110 transition-transform">
                                    <Plus size={20} />
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'vault' && (
                        <motion.div
                            key="vault"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="space-y-3"
                        >
                            <div className="grid grid-cols-2 gap-3 mb-4">
                                <div className="p-4 glass rounded-2xl border border-white/5">
                                    <p className="text-gray-400 text-xs mb-1">Shared Expenses</p>
                                    <p className="text-2xl font-bold text-white">₹12,450</p>
                                    <div className="flex -space-x-2 mt-2">
                                        <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-black"></div>
                                        <div className="w-6 h-6 rounded-full bg-green-500 border-2 border-black"></div>
                                    </div>
                                </div>
                                <div className="p-4 glass rounded-2xl border border-white/5">
                                    <p className="text-gray-400 text-xs mb-1">Upcoming Events</p>
                                    <p className="text-2xl font-bold text-white">3</p>
                                    <p className="text-xs text-gray-500 mt-2">Next: Tomorrow</p>
                                </div>
                            </div>

                            <h3 className="text-sm font-medium text-gray-400 px-1">Shared Files</h3>
                            {spaceData.sharedVault.map((file, i) => (
                                <motion.div
                                    key={file.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-3 glass hover:bg-white/5 rounded-xl flex items-center gap-3 transition-colors group"
                                >
                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${file.type === 'bill' ? 'bg-green-500/20 text-green-400' :
                                            file.type === 'ticket' ? 'bg-purple-500/20 text-purple-400' :
                                                'bg-blue-500/20 text-blue-400'
                                        }`}>
                                        {file.type === 'bill' ? <DollarSign size={20} /> :
                                            file.type === 'ticket' ? <Calendar size={20} /> :
                                                <CheckSquare size={20} />}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="text-white font-medium text-sm truncate">{file.name}</h4>
                                        <p className="text-xs text-gray-500">{file.date} {file.amount && `• ${file.amount}`}</p>
                                    </div>
                                    <button className="p-2 text-gray-500 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Share2 size={16} />
                                    </button>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default SynergySpace;
