import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Bot, X, Zap, MessageSquare, Receipt, ArrowRight } from 'lucide-react';

const AITwin = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasUnread, setHasUnread] = useState(true);

    // Mock Insights Data
    const insights = [
        {
            id: 1,
            type: 'bill',
            title: 'Bill Watch Alert',
            message: 'Electricity bill is 15% higher than usual this month (₹1,340). Want me to compare rates?',
            action: 'Compare Rates',
            icon: Receipt,
            color: 'text-yellow-400',
            bg: 'bg-yellow-500/20'
        },
        {
            id: 2,
            type: 'digest',
            title: 'Group Chat Digest',
            message: 'You missed 3 days of "Family". Summary: Amit and Priya fought about pizza toppings, but they made up yesterday.',
            action: 'Read Full Summary',
            icon: MessageSquare,
            color: 'text-blue-400',
            bg: 'bg-blue-500/20'
        },
        {
            id: 3,
            type: 'draft',
            title: 'Auto-Draft Ready',
            message: 'I prepared a reply for Rahul: "On my way! See you in 10 mins." based on your location.',
            action: 'Send Now',
            icon: Zap,
            color: 'text-purple-400',
            bg: 'bg-purple-500/20'
        }
    ];

    return (
        <>
            {/* Expanded Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="fixed bottom-24 right-4 w-80 glass-dark border border-primary-500/30 rounded-3xl shadow-2xl z-50 overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 bg-gradient-to-r from-primary-600/20 to-accent-600/20 border-b border-white/10 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center">
                                    <Bot size={18} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-sm">AI Twin</h3>
                                    <p className="text-xs text-primary-300">Your Digital Delegate</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X size={16} className="text-gray-400" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-4 space-y-3 max-h-96 overflow-y-auto custom-scrollbar">
                            {insights.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-3 glass rounded-xl border border-white/5 hover:bg-white/5 transition-colors group"
                                >
                                    <div className="flex items-start gap-3 mb-2">
                                        <div className={`p-2 rounded-lg ${item.bg} ${item.color}`}>
                                            <item.icon size={16} />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className={`text-sm font-semibold ${item.color}`}>{item.title}</h4>
                                            <p className="text-xs text-gray-300 leading-relaxed mt-1">{item.message}</p>
                                        </div>
                                    </div>

                                    <button className="w-full mt-2 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-xs font-medium text-white transition-colors flex items-center justify-center gap-1 group-hover:text-primary-300">
                                        {item.action}
                                        <ArrowRight size={12} />
                                    </button>
                                </motion.div>
                            ))}
                        </div>

                        {/* Footer */}
                        <div className="p-3 border-t border-white/10 bg-black/20">
                            <input
                                type="text"
                                placeholder="Ask me anything..."
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Orb Trigger */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                    setIsOpen(!isOpen);
                    setHasUnread(false);
                }}
                className="fixed bottom-24 right-4 w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-accent-600 shadow-[0_0_20px_rgba(99,102,241,0.5)] z-40 flex items-center justify-center border-2 border-white/20"
            >
                <Bot size={28} className="text-white" />

                {/* Notification Badge */}
                {hasUnread && !isOpen && (
                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-black"></span>
                    </span>
                )}

                {/* Ambient Glow */}
                <div className="absolute inset-0 rounded-full bg-primary-500/30 blur-xl -z-10 animate-pulse" />
            </motion.button>
        </>
    );
};

export default AITwin;
