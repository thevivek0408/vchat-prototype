import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Mic, Send, Sparkles, Zap, Receipt, MessageSquare, ArrowRight } from 'lucide-react';

const AIAssistant = () => {
    const [message, setMessage] = useState('');
    const [history, setHistory] = useState([
        { id: 1, sender: 'ai', text: 'Hello! I am your AI Twin. I currently have 3 insights for you.', type: 'greeting' },
    ]);

    // Reusing the insights data from AITwin widget
    const insights = [
        {
            id: 1,
            title: 'Bill Watch Alert',
            message: 'Electricity bill is 15% higher than usual this month (₹1,340).',
            action: 'Compare Rates',
            icon: Receipt,
            color: 'text-yellow-400',
            bg: 'bg-yellow-500/20'
        },
        {
            id: 2,
            title: 'Group Chat Digest',
            message: 'You missed 3 days of "Family". Summary: Amit and Priya fought about pizza.',
            action: 'Read Summary',
            icon: MessageSquare,
            color: 'text-blue-400',
            bg: 'bg-blue-500/20'
        },
        {
            id: 3,
            title: 'Auto-Draft Ready',
            message: 'Reply for Rahul: "On my way! See you in 10 mins."',
            action: 'Send Now',
            icon: Zap,
            color: 'text-purple-400',
            bg: 'bg-purple-500/20'
        }
    ];

    const handleSend = () => {
        if (!message.trim()) return;
        setHistory([...history, { id: Date.now(), sender: 'user', text: message }]);
        setMessage('');

        // Mock Response
        setTimeout(() => {
            setHistory(prev => [...prev, {
                id: Date.now() + 1,
                sender: 'ai',
                text: 'I can help with that! Is there anything else you need managed today?'
            }]);
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-[#0f1115] text-white pb-24">
            {/* Header */}
            <header className="sticky top-0 bg-[#0f1115]/80 backdrop-blur-md border-b border-white/10 p-4 z-40">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                        <Bot className="text-white" size={20} />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            AI Assistant
                        </h1>
                        <p className="text-xs text-gray-400">Your Personal Digital Twin</p>
                    </div>
                </div>
            </header>

            <div className="p-4 space-y-6">
                {/* Active Insights Cards */}
                <section>
                    <div className="flex items-center gap-2 mb-3">
                        <Sparkles size={16} className="text-yellow-400" />
                        <h2 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Active Insights</h2>
                    </div>

                    <div className="grid gap-3">
                        {insights.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="glass p-4 rounded-2xl border border-white/5 relative overflow-hidden group"
                            >
                                <div className={`absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity`}>
                                    <item.icon size={64} className={item.color} />
                                </div>

                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className={`p-2 rounded-lg ${item.bg} ${item.color}`}>
                                            <item.icon size={18} />
                                        </div>
                                        <h3 className={`font-semibold ${item.color}`}>{item.title}</h3>
                                    </div>
                                    <p className="text-sm text-gray-300 mb-4 ml-1">{item.message}</p>
                                    <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors">
                                        {item.action} <ArrowRight size={14} />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Conversation History */}
                <section className="space-y-4">
                    <div className="flex items-center gap-2 mb-2">
                        <MessageSquare size={16} className="text-blue-400" />
                        <h2 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Conversation</h2>
                    </div>

                    <div className="space-y-4">
                        {history.map(msg => (
                            <motion.div
                                key={msg.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div className={`max-w-[80%] p-4 rounded-2xl ${msg.sender === 'user'
                                        ? 'bg-blue-600 text-white rounded-tr-none'
                                        : 'glass border border-white/10 text-gray-200 rounded-tl-none'
                                    }`}>
                                    <p>{msg.text}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Input Area */}
            <div className="fixed bottom-[80px] left-0 right-0 px-4">
                <div className="max-w-md mx-auto glass-dark border border-white/10 rounded-2xl p-2 flex items-center gap-2 shadow-2xl">
                    <button className="p-2 hover:bg-white/10 rounded-xl text-gray-400 transition-colors">
                        <Mic size={20} />
                    </button>
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Ask your AI Twin..."
                        className="flex-1 bg-transparent border-none focus:ring-0 text-white placeholder-gray-500"
                    />
                    <button
                        onClick={handleSend}
                        className={`p-2 rounded-xl transition-all ${message.trim() ? 'bg-cyan-500 text-white' : 'bg-white/5 text-gray-500'}`}
                    >
                        <Send size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AIAssistant;
