import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QrCode, Scan, X, User, Users, Wallet, Gift, Download, Share2 } from 'lucide-react';

const QRScanner = ({ onClose }) => {
    const [activeTab, setActiveTab] = useState('scan'); // 'scan' or 'mycode'
    const [scanResult, setScanResult] = useState(null);

    // Mock QR code data for "My QR Code"
    const myQRData = {
        name: 'Vivek Vardhan',
        username: '@vivek_vardhan',
        userId: 'VC-123456',
        qrCode: '█████████████████\n█ ▄▄▄▄▄ █▀ █▄█ █\n█ █   █ █▀▀  ▀▄█\n█ █▄▄▄█ █ ▀█ ▀ █\n█▄▄▄▄▄▄▄█▄█ █▄█▄█\n█  ▄ ▀▄▄ ▄█▀▀ ▄██\n██▀▀█▄▄▄█ █ ▀▄ ▀█\n█▄██▄▄▄▄▀ ▀▀▀▄ ██\n█ ▄▄▄▄▄ █▄ ▀█▀▄▀█\n█ █   █ █ ▀█▀ ▀██\n█ █▄▄▄█ █▀▄ ▄ ▄▀█\n█▄▄▄▄▄▄▄█▄█▄██▄██'
    };

    const quickActions = [
        { icon: User, label: 'Add Friend', color: 'from-blue-500 to-cyan-500' },
        { icon: Users, label: 'Join Group', color: 'from-purple-500 to-pink-500' },
        { icon: Wallet, label: 'Payment', color: 'from-green-500 to-emerald-500' },
        { icon: Gift, label: 'Receive Gift', color: 'from-orange-500 to-red-500' },
    ];

    const handleScan = (action) => {
        // Mock scan result
        setScanResult({
            type: action.label,
            name: 'Amit Patel',
            username: '@amit_patel',
            message: `Scanned ${action.label} QR Code`
        });

        setTimeout(() => {
            setScanResult(null);
        }, 3000);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex flex-col"
        >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
                <h2 className="text-xl font-bold text-white">QR Code</h2>
                <button
                    onClick={onClose}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                    <X size={20} className="text-white" />
                </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-white/10">
                <button
                    onClick={() => setActiveTab('scan')}
                    className={`flex-1 py-3 text-sm font-semibold transition-colors ${activeTab === 'scan'
                            ? 'text-primary-400 border-b-2 border-primary-400'
                            : 'text-gray-400'
                        }`}
                >
                    Scan QR Code
                </button>
                <button
                    onClick={() => setActiveTab('mycode')}
                    className={`flex-1 py-3 text-sm font-semibold transition-colors ${activeTab === 'mycode'
                            ? 'text-primary-400 border-b-2 border-primary-400'
                            : 'text-gray-400'
                        }`}
                >
                    My QR Code
                </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
                <AnimatePresence mode="wait">
                    {activeTab === 'scan' ? (
                        <motion.div
                            key="scan"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="space-y-6"
                        >
                            {/* Scanner Frame */}
                            <div className="relative aspect-square max-w-sm mx-auto">
                                {/* Animated scanning frame */}
                                <div className="absolute inset-0 border-2 border-primary-500 rounded-3xl overflow-hidden">
                                    <motion.div
                                        animate={{ y: ['0%', '100%'] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                                        className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary-400 to-transparent"
                                    />
                                </div>

                                {/* Corner brackets */}
                                {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((corner) => (
                                    <div
                                        key={corner}
                                        className={`absolute w-12 h-12 border-primary-400 ${corner.includes('top') ? 'border-t-4' : 'border-b-4'
                                            } ${corner.includes('left') ? 'border-l-4 left-0' : 'border-r-4 right-0'
                                            } ${corner.includes('top') ? 'top-0' : 'bottom-0'
                                            }`}
                                    />
                                ))}

                                {/* Center icon */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                                        <Scan size={40} className="text-primary-400" />
                                    </div>
                                </div>
                            </div>

                            <p className="text-center text-gray-400 text-sm">
                                Position the QR code within the frame
                            </p>

                            {/* Quick Actions */}
                            <div>
                                <h3 className="text-sm font-semibold text-gray-300 mb-3">Quick Scan</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    {quickActions.map((action, index) => (
                                        <motion.button
                                            key={action.label}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.1 }}
                                            onClick={() => handleScan(action)}
                                            className="glass p-4 rounded-2xl hover:bg-white/10 transition-colors"
                                        >
                                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center mx-auto mb-2`}>
                                                <action.icon className="text-white" size={24} />
                                            </div>
                                            <p className="text-xs font-medium text-white">{action.label}</p>
                                        </motion.button>
                                    ))}
                                </div>
                            </div>

                            {/* Scan Result */}
                            <AnimatePresence>
                                {scanResult && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        className="fixed bottom-24 left-4 right-4 p-4 glass-dark rounded-2xl border border-green-500/30 shadow-2xl"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                                                <QrCode className="text-green-400" size={24} />
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-semibold text-white">{scanResult.message}</p>
                                                <p className="text-sm text-gray-400">{scanResult.name} • {scanResult.username}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="mycode"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            {/* Profile Info */}
                            <div className="text-center">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-4xl mx-auto mb-3">
                                    👤
                                </div>
                                <h3 className="text-xl font-bold text-white">{myQRData.name}</h3>
                                <p className="text-sm text-gray-400">{myQRData.username}</p>
                            </div>

                            {/* QR Code */}
                            <div className="relative max-w-xs mx-auto">
                                <div className="p-6 glass rounded-3xl border border-white/10">
                                    <div className="aspect-square bg-white rounded-2xl p-4 flex items-center justify-center">
                                        <pre className="text-[6px] leading-[6px] text-black font-mono">
                                            {myQRData.qrCode}
                                        </pre>
                                    </div>
                                    <p className="text-center text-xs text-gray-400 mt-3">
                                        ID: {myQRData.userId}
                                    </p>
                                </div>

                                {/* Glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 blur-3xl -z-10" />
                            </div>

                            <p className="text-center text-sm text-gray-400">
                                Scan this code to add me on Vchat
                            </p>

                            {/* Actions */}
                            <div className="flex gap-3">
                                <button className="flex-1 flex items-center justify-center gap-2 py-3 glass rounded-xl hover:bg-white/10 transition-colors">
                                    <Download size={18} className="text-primary-400" />
                                    <span className="text-sm font-semibold text-white">Save</span>
                                </button>
                                <button className="flex-1 flex items-center justify-center gap-2 py-3 glass rounded-xl hover:bg-white/10 transition-colors">
                                    <Share2 size={18} className="text-primary-400" />
                                    <span className="text-sm font-semibold text-white">Share</span>
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default QRScanner;
