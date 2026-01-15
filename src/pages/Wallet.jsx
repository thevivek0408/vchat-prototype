import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Wallet as WalletIcon,
    ArrowUpRight,
    ArrowDownLeft,
    Plus,
    Send,
    QrCode,
    CreditCard,
    TrendingUp,
    History,
    Gift,
    Zap,
    ShoppingBag,
    Coffee,
    Smartphone,
    ChevronRight,
    Eye,
    EyeOff
} from 'lucide-react';

const Wallet = () => {
    const [showBalance, setShowBalance] = useState(true);
    const [selectedTab, setSelectedTab] = useState('overview');

    const walletBalance = 12450.75;
    const rewardPoints = 1250;

    const transactions = [
        {
            id: 1,
            type: 'debit',
            title: 'Electricity Bill Payment',
            subtitle: 'TSSPDCL',
            amount: 1340,
            time: '2 hours ago',
            icon: Zap,
            gradient: 'from-yellow-500 to-orange-500',
            blockchainTx: '0x7f3a9c2d...4b8e1f6a',
            blockNumber: 18234567,
            gasUsed: '0.0012 MATIC',
            status: 'confirmed'
        },
        {
            id: 2,
            type: 'credit',
            title: 'Received from Amit Patel',
            subtitle: 'UPI Payment',
            amount: 5000,
            time: 'Yesterday',
            icon: ArrowDownLeft,
            gradient: 'from-green-500 to-emerald-500',
            blockchainTx: '0x4b2e1a8f...9d3c5e7b',
            blockNumber: 18234012,
            gasUsed: '0.0008 MATIC',
            status: 'confirmed'
        },
        {
            id: 3,
            type: 'debit',
            title: 'Coffee Shop',
            subtitle: 'Cafe Niloufer',
            amount: 280,
            time: 'Yesterday',
            icon: Coffee,
            gradient: 'from-amber-500 to-orange-500',
            blockchainTx: '0x9d1c5e3b...2f7a8c4d',
            blockNumber: 18233945,
            gasUsed: '0.0005 MATIC',
            status: 'confirmed'
        },
        {
            id: 4,
            type: 'debit',
            title: 'Mobile Recharge',
            subtitle: 'Airtel Prepaid',
            amount: 599,
            time: '2 days ago',
            icon: Smartphone,
            gradient: 'from-red-500 to-pink-500',
            blockchainTx: '0x3e8f2a1c...6b9d4e5f',
            blockNumber: 18232789,
            gasUsed: '0.0007 MATIC',
            status: 'confirmed'
        },
        {
            id: 5,
            type: 'credit',
            title: 'Cashback Reward',
            subtitle: 'Shopping reward',
            amount: 150,
            time: '3 days ago',
            icon: Gift,
            gradient: 'from-purple-500 to-pink-500',
            blockchainTx: '0x8c4d6e5f...1a3b7c9e',
            blockNumber: 18231456,
            gasUsed: '0.0003 MATIC',
            status: 'confirmed'
        },
    ];

    const quickActions = [
        { id: 1, name: 'Send Money', icon: Send, gradient: 'from-blue-500 to-cyan-500' },
        { id: 2, name: 'Receive', icon: QrCode, gradient: 'from-green-500 to-emerald-500' },
        { id: 3, name: 'Add Money', icon: Plus, gradient: 'from-purple-500 to-pink-500' },
        { id: 4, name: 'Pay Bills', icon: CreditCard, gradient: 'from-orange-500 to-red-500' },
    ];

    const linkedAccounts = [
        { id: 1, bank: 'HDFC Bank', accountNo: '****4567', type: 'Savings', primary: true },
        { id: 2, bank: 'SBI', accountNo: '****8901', type: 'Current', primary: false },
    ];

    const monthlySpending = [
        { category: 'Bills & Utilities', amount: 4200, percentage: 35, color: 'from-yellow-500 to-orange-500' },
        { category: 'Food & Dining', amount: 3100, percentage: 26, color: 'from-red-500 to-pink-500' },
        { category: 'Shopping', amount: 2800, percentage: 23, color: 'from-purple-500 to-pink-500' },
        { category: 'Transport', amount: 1900, percentage: 16, color: 'from-blue-500 to-cyan-500' },
    ];

    return (
        <div className="min-h-screen pb-20">
            {/* Header */}
            <header className="sticky top-0 glass-dark border-b border-white/10 z-40 px-4 py-4">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-2xl font-bold text-white">Vchat Wallet</h1>
                    <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                        <History size={22} className="text-gray-300" />
                    </button>
                </div>

                {/* Balance Card */}
                <motion.div
                    className="card bg-gradient-to-br from-primary-500 to-accent-500 border-0"
                    whileHover={{ scale: 1.02 }}
                >
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <p className="text-white/80 text-sm mb-1">Total Balance</p>
                            <div className="flex items-center gap-2">
                                {showBalance ? (
                                    <h2 className="text-3xl font-bold text-white">₹{walletBalance.toLocaleString('en-IN')}</h2>
                                ) : (
                                    <h2 className="text-3xl font-bold text-white">₹••••••</h2>
                                )}
                                <button
                                    onClick={() => setShowBalance(!showBalance)}
                                    className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                                >
                                    {showBalance ? (
                                        <Eye size={18} className="text-white/80" />
                                    ) : (
                                        <EyeOff size={18} className="text-white/80" />
                                    )}
                                </button>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-white/80 text-sm mb-1">Reward Points</p>
                            <p className="text-xl font-bold text-white flex items-center gap-1">
                                <Gift size={18} />
                                {rewardPoints}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-white/90 text-sm">
                        <TrendingUp size={16} />
                        <span>+₹2,340 this month</span>
                    </div>
                </motion.div>
            </header>

            <div className="px-4 py-4 space-y-6">
                {/* Quick Actions */}
                <div>
                    <h2 className="text-lg font-semibold text-white mb-3">Quick Actions</h2>
                    <div className="grid grid-cols-4 gap-3">
                        {quickActions.map((action) => {
                            const Icon = action.icon;
                            return (
                                <motion.button
                                    key={action.id}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex flex-col items-center gap-2"
                                >
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${action.gradient} flex items-center justify-center shadow-lg`}>
                                        <Icon className="text-white" size={24} />
                                    </div>
                                    <span className="text-xs text-gray-300 text-center">{action.name}</span>
                                </motion.button>
                            );
                        })}
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex gap-2 border-b border-white/10">
                    {['overview', 'transactions', 'analytics'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setSelectedTab(tab)}
                            className={`px-4 py-2 text-sm font-medium capitalize transition-colors relative ${selectedTab === tab
                                ? 'text-white'
                                : 'text-gray-400 hover:text-gray-300'
                                }`}
                        >
                            {tab}
                            {selectedTab === tab && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500"
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                    {selectedTab === 'overview' && (
                        <motion.div
                            key="overview"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="space-y-6"
                        >
                            {/* Linked Accounts */}
                            <div>
                                <h2 className="text-lg font-semibold text-white mb-3">Linked Accounts</h2>
                                <div className="space-y-2">
                                    {linkedAccounts.map((account) => (
                                        <div key={account.id} className="card">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                                                        <CreditCard className="text-white" size={20} />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-semibold text-white">{account.bank}</h3>
                                                        <p className="text-sm text-gray-400">{account.accountNo} • {account.type}</p>
                                                    </div>
                                                </div>
                                                {account.primary && (
                                                    <span className="badge badge-success">Primary</span>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                    <button className="w-full card border-dashed border-2 border-white/20 hover:border-primary-500/50 transition-colors text-center">
                                        <Plus className="mx-auto mb-1 text-gray-400" size={20} />
                                        <span className="text-sm text-gray-400">Add Bank Account</span>
                                    </button>
                                </div>
                            </div>

                            {/* Recent Transactions */}
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <h2 className="text-lg font-semibold text-white">Recent Transactions</h2>
                                    <button className="text-sm text-primary-400 hover:text-primary-300">View All</button>
                                </div>
                                <div className="space-y-2">
                                    {transactions.slice(0, 5).map((transaction, index) => {
                                        const Icon = transaction.icon;
                                        return (
                                            <motion.div
                                                key={transaction.id}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.05 }}
                                                className="card hover:bg-white/5 transition-colors cursor-pointer"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${transaction.gradient} flex items-center justify-center flex-shrink-0`}>
                                                        <Icon className="text-white" size={20} />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h3 className="font-medium text-white truncate">{transaction.title}</h3>
                                                        <p className="text-sm text-gray-400">{transaction.subtitle} • {transaction.time}</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className={`font-semibold ${transaction.type === 'credit' ? 'text-green-400' : 'text-white'
                                                            }`}>
                                                            {transaction.type === 'credit' ? '+' : '-'}₹{transaction.amount}
                                                        </p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {selectedTab === 'transactions' && (
                        <motion.div
                            key="transactions"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="space-y-2"
                        >
                            {transactions.map((transaction, index) => {
                                const Icon = transaction.icon;
                                return (
                                    <motion.div
                                        key={transaction.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="card hover:bg-white/5 transition-colors cursor-pointer"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${transaction.gradient} flex items-center justify-center flex-shrink-0`}>
                                                <Icon className="text-white" size={22} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-medium text-white truncate">{transaction.title}</h3>
                                                <p className="text-sm text-gray-400">{transaction.subtitle}</p>
                                                <p className="text-xs text-gray-500 mt-1">{transaction.time}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className={`text-lg font-semibold ${transaction.type === 'credit' ? 'text-green-400' : 'text-white'
                                                    }`}>
                                                    {transaction.type === 'credit' ? '+' : '-'}₹{transaction.amount}
                                                </p>
                                                <ChevronRight className="text-gray-400 ml-auto mt-1" size={16} />
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    )}

                    {selectedTab === 'analytics' && (
                        <motion.div
                            key="analytics"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="space-y-6"
                        >
                            {/* Monthly Summary */}
                            <div className="card bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/30">
                                <h3 className="font-semibold text-white mb-4">This Month's Summary</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-gray-400 text-sm mb-1">Total Spent</p>
                                        <p className="text-2xl font-bold text-white">₹12,000</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm mb-1">Total Received</p>
                                        <p className="text-2xl font-bold text-green-400">₹14,340</p>
                                    </div>
                                </div>
                            </div>

                            {/* Spending by Category */}
                            <div>
                                <h2 className="text-lg font-semibold text-white mb-3">Spending by Category</h2>
                                <div className="space-y-4">
                                    {monthlySpending.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-gray-300 text-sm">{item.category}</span>
                                                <span className="text-white font-semibold">₹{item.amount.toLocaleString('en-IN')}</span>
                                            </div>
                                            <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${item.percentage}%` }}
                                                    transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                                                    className={`h-2 rounded-full bg-gradient-to-r ${item.color}`}
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Insights */}
                            <div className="card bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/30">
                                <div className="flex gap-3">
                                    <TrendingUp className="text-blue-400 flex-shrink-0" size={24} />
                                    <div>
                                        <h3 className="font-semibold text-white mb-1">Smart Insight</h3>
                                        <p className="text-sm text-gray-300">
                                            You're spending 15% less on dining this month compared to last month. Keep it up! 🎉
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Wallet;
