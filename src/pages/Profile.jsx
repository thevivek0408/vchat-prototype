import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Settings,
    Shield,
    Bell,
    CreditCard,
    FileText,
    HelpCircle,
    ChevronRight,
    Award,
    Hexagon,
    Sparkles,
    Link as LinkIcon,
    QrCode
} from 'lucide-react';
import QRScanner from '../components/QRScanner';

const Profile = () => {
    const [showQRScanner, setShowQRScanner] = useState(false);

    const stats = [
        { label: 'Connections', value: '234', gradient: 'from-blue-500 to-cyan-500' },
        { label: 'Groups', value: '12', gradient: 'from-purple-500 to-pink-500' },
        { label: 'Posts', value: '89', gradient: 'from-green-500 to-emerald-500' },
    ];

    // NFT Achievements (Blockchain-verified badges)
    const nftBadges = [
        {
            id: '0x7f3a...9c2d',
            name: '100-Day Streak',
            icon: '🔥',
            rarity: 'Legendary',
            gradient: 'from-orange-500 to-red-600',
            chain: 'Polygon'
        },
        {
            id: '0x4b2e...1a8f',
            name: 'Top Helper',
            icon: '🤝',
            rarity: 'Epic',
            gradient: 'from-purple-500 to-pink-600',
            chain: 'Polygon'
        },
        {
            id: '0x9d1c...5e3b',
            name: 'Early Adopter',
            icon: '🚀',
            rarity: 'Rare',
            gradient: 'from-blue-500 to-cyan-600',
            chain: 'Polygon'
        },
    ];

    const menuItems = [
        { icon: CreditCard, label: 'Payment Methods', gradient: 'from-blue-500 to-cyan-500' },
        { icon: FileText, label: 'Document Vault', gradient: 'from-purple-500 to-pink-500' },
        { icon: Bell, label: 'Notifications', gradient: 'from-green-500 to-emerald-500' },
        { icon: Shield, label: 'Privacy & Security', gradient: 'from-red-500 to-pink-500' },
        { icon: Settings, label: 'Settings', gradient: 'from-gray-500 to-gray-600' },
        { icon: HelpCircle, label: 'Help & Support', gradient: 'from-indigo-500 to-blue-500' },
    ];

    return (
        <div className="min-h-screen pb-24">
            {/* Header with Enhanced Avatar */}
            <header className="glass-dark border-b border-white/10 px-4 py-6 relative">
                {/* QR Code Button - Top Right */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowQRScanner(true)}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg z-10"
                >
                    <QrCode size={20} className="text-white" />
                </motion.button>

                <div className="flex items-center gap-4 mb-4">
                    {/* Avatar with gradient border */}
                    <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 via-accent-500 to-pink-500 animate-pulse blur-sm"></div>
                        <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-4xl shadow-xl border-2 border-white/20">
                            👤
                        </div>
                    </div>
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold text-white">Vivek Vardhan</h1>
                        <p className="text-gray-400">@vivek_vardhan</p>
                        <p className="text-sm text-gray-500 mt-1">Member since Jan 2024</p>
                    </div>
                </div>

                {/* Enhanced Stats */}
                <div className="grid grid-cols-3 gap-3">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="glass rounded-xl p-3 text-center cursor-pointer"
                        >
                            <p className={`text-2xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                                {stat.value}
                            </p>
                            <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </header>

            {/* NFT Achievements Section */}
            <div className="px-4 py-6">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <Award className="text-yellow-400" size={20} />
                        <h2 className="text-lg font-bold text-white">NFT Achievements</h2>
                        <span className="px-2 py-0.5 bg-purple-500/20 border border-purple-500/30 rounded-full text-[10px] text-purple-300 font-semibold">
                            BLOCKCHAIN
                        </span>
                    </div>
                    <button className="text-xs text-primary-400 hover:text-primary-300 transition-colors">
                        View All
                    </button>
                </div>

                <div className="grid grid-cols-3 gap-3">
                    {nftBadges.map((badge, index) => (
                        <motion.div
                            key={badge.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.15 }}
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            className="relative group cursor-pointer"
                        >
                            {/* Holographic effect */}
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${badge.gradient} opacity-20 group-hover:opacity-30 transition-opacity blur-xl`}></div>

                            {/* Card */}
                            <div className={`relative glass border border-white/10 rounded-2xl p-3 text-center overflow-hidden`}>
                                {/* Shine effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                <div className="relative z-10">
                                    <div className="text-3xl mb-2">{badge.icon}</div>
                                    <p className="text-[10px] font-bold text-white mb-1">{badge.name}</p>
                                    <div className="flex items-center justify-center gap-1 mb-1">
                                        <Hexagon size={8} className={`fill-current text-${badge.rarity === 'Legendary' ? 'orange' : badge.rarity === 'Epic' ? 'purple' : 'blue'}-400`} />
                                        <span className={`text-[8px] font-semibold text-${badge.rarity === 'Legendary' ? 'orange' : badge.rarity === 'Epic' ? 'purple' : 'blue'}-400`}>
                                            {badge.rarity}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-center gap-1 text-[8px] text-gray-500">
                                        <LinkIcon size={8} />
                                        <span>{badge.chain}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Blockchain Info */}
                <div className="mt-4 p-3 glass rounded-xl border border-purple-500/20">
                    <div className="flex items-start gap-2">
                        <Sparkles size={16} className="text-purple-400 mt-0.5" />
                        <div>
                            <p className="text-xs font-semibold text-purple-300">Blockchain Verified</p>
                            <p className="text-[10px] text-gray-400 mt-1">
                                Your achievements are permanently stored on Polygon blockchain. View on{' '}
                                <span className="text-primary-400 underline cursor-pointer">OpenSea</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Menu Items */}
            <div className="px-4 pb-4 space-y-2">
                {menuItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <motion.button
                            key={item.label}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.02, x: 4 }}
                            className="w-full card hover:bg-white/5 transition-all"
                        >
                            <div className="flex items-center gap-4">
                                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0`}>
                                    <Icon className="text-white" size={20} />
                                </div>
                                <span className="flex-1 text-left font-medium text-white">{item.label}</span>
                                <ChevronRight className="text-gray-500" size={20} />
                            </div>
                        </motion.button>
                    );
                })}
            </div>

            {/* QR Scanner Modal */}
            <AnimatePresence>
                {showQRScanner && (
                    <QRScanner onClose={() => setShowQRScanner(false)} />
                )}
            </AnimatePresence>
        </div>
    );
};

export default Profile;
