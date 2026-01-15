import React, { useState } from 'react';
import { Newspaper, Bell, Share2, Bookmark, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Pulse = () => {
    const categories = ['Top Stories', 'Local', 'Tech', 'India', 'World', 'Sports'];
    const [selectedCategory, setSelectedCategory] = useState('Top Stories');

    const news = [
        {
            id: 1,
            title: "India Launches 50 New Satellites: A New Era for ISRO",
            summary: "The Indian Space Research Organisation (ISRO) has successfully placed 50 new satellites into orbit, marking a huge milestone for the nation's space capabilities.",
            source: "Science Daily",
            time: "2h ago",
            image: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=800&q=80",
            category: "Tech"
        },
        {
            id: 2,
            title: "Bangalore Metro Phase 3 Approved: What You Need to Know",
            summary: "The cabinet has given the green light for the much-awaited Phase 3 of the Namma Metro project, connecting key IT corridors.",
            source: "City News",
            time: "4h ago",
            image: "https://images.unsplash.com/photo-1556206079-747a7a424d3d?w=800&q=80", // Using a subway/train image
            category: "Local"
        },
        {
            id: 3,
            title: "Cricket World Cup 2027: India to Host Finals",
            summary: "BCCI confirmes that the Narendra Modi Stadium in Ahmedabad will host the grand finale of the 2027 ODI World Cup.",
            source: "Sports Star",
            time: "1h ago",
            image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80",
            category: "Sports"
        },
        {
            id: 4,
            title: "New Electric Vehicle Policy: Subsidies Increased by 20%",
            summary: "To push for greener transport, the government has announced a significant hike in subsidies for 2-wheeler and 4-wheeler EVs.",
            source: "Auto Weekly",
            time: "6h ago",
            image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
            category: "India"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-950 pb-24 text-white">
            {/* Header */}
            <div className="bg-gradient-to-br from-rose-900 via-gray-900 to-gray-900 p-6 pb-4 rounded-b-3xl border-b border-white/5 flex justify-between items-center sticky top-0 z-10 glass-dark">
                <div>
                    <h1 className="text-2xl font-bold flex items-center gap-2">
                        Vchat Pulse <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    </h1>
                    <p className="text-xs text-rose-300">Briefings • Local • Urgent</p>
                </div>
                <button className="p-2 bg-white/5 rounded-full hover:bg-white/10">
                    <Bell size={20} />
                </button>
            </div>

            {/* Categories */}
            <div className="px-4 py-4 pt-16 -mt-10 overflow-x-auto no-scrollbar flex gap-2">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap border transition-all ${selectedCategory === cat
                                ? 'bg-rose-600 border-rose-500 text-white shadow-lg shadow-rose-500/20'
                                : 'bg-white/5 border-white/5 text-gray-400'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* News Feed - Vertical Scroll "Shorts" Sytle Cards */}
            <div className="px-4 space-y-6 mt-2">
                {news.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl border border-white/10"
                    >
                        {/* Background Image */}
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                        {/* Dark Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent" />

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                            {/* Tags */}
                            <div className="flex items-center gap-2 mb-3">
                                <span className="px-2 py-0.5 rounded bg-rose-600 text-[10px] font-bold uppercase tracking-wider">
                                    {item.category}
                                </span>
                                <span className="text-xs text-gray-300 flex items-center gap-1">
                                    {item.source} • {item.time}
                                </span>
                            </div>

                            <h2 className="text-xl font-bold leading-tight mb-3 text-shadow-sm">
                                {item.title}
                            </h2>

                            <p className="text-sm text-gray-200 line-clamp-3 leading-relaxed mb-4 opacity-90">
                                {item.summary}
                            </p>

                            {/* Actions */}
                            <div className="flex items-center justify-between border-t border-white/10 pt-4">
                                <button className="text-xs font-bold text-rose-400 flex items-center gap-1 hover:text-rose-300">
                                    READ FULL STORY <ExternalLink size={12} />
                                </button>
                                <div className="flex gap-4">
                                    <button className="text-gray-400 hover:text-white"><Share2 size={18} /></button>
                                    <button className="text-gray-400 hover:text-white"><Bookmark size={18} /></button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="text-center py-8 text-gray-500 text-sm">
                You're all caught up! ✨
            </div>
        </div>
    );
};

export default Pulse;
