import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Zap,
    Droplet,
    Home as HomeIcon,
    FileText,
    CreditCard,
    Car,
    AlertCircle,
    CheckCircle,
    Clock,
    ChevronRight,
    Search,
    Wallet,
    Stethoscope,
    GraduationCap,
    Gamepad2,
    MoreVertical,
    Sun,
    CloudRain,
    Gift,
    Briefcase,
    Plane,
    Users,
    Music,
    Star
} from 'lucide-react';

const Government = () => {
    const navigate = useNavigate();
    const [selectedService, setSelectedService] = useState(null);

    // Mock Synergy Connections for the Hub
    const synergySpaces = [
        { id: 1, name: 'Amit & You', avatar: '👨‍💼', score: 85, status: 'Live Music', type: 'Work' },
        { id: 6, name: 'College Squad', avatar: '🎓', score: 95, status: '3 Active', type: 'Friends' },
        { id: 2, name: 'Family', avatar: '👨‍👩‍👧‍👦', score: 60, status: 'New Photo', type: 'Family' },
    ];

    const services = [
        {
            id: 1,
            name: 'Electricity Bill',
            icon: Zap,
            gradient: 'from-yellow-500 to-orange-500',
            provider: 'TSSPDCL',
            amount: 1340,
            dueDate: 'Today',
            status: 'due'
        },
        {
            id: 2,
            name: 'Water Bill',
            icon: Droplet,
            gradient: 'from-blue-500 to-cyan-500',
            provider: 'HMWSSB',
            amount: 450,
            dueDate: 'Jan 20',
            status: 'upcoming'
        },
    ];

    const certificates = [
        {
            id: 1,
            name: 'Birth Certificate',
            icon: FileText,
            gradient: 'from-purple-500 to-pink-500',
            description: 'Apply for certificate',
            fee: 50,
            blockchainVerified: true,
            blockchainId: '0x8a4f...3c9e',
            verifiedDate: 'Dec 15, 2023'
        },
        {
            id: 2,
            name: 'Income Certificate',
            icon: FileText,
            gradient: 'from-indigo-500 to-blue-500',
            description: 'Apply for certificate',
            fee: 50,
            blockchainVerified: true,
            blockchainId: '0x2b7d...5f1a',
            verifiedDate: 'Jan 5, 2024'
        },
    ];

    const applications = [
        {
            id: 1,
            type: 'Income Certificate',
            applicationNo: 'IC2024001234',
            status: 'In Progress',
            appliedDate: 'Jan 10, 2024',
            progress: 60
        }
    ];

    const rationCard = {
        cardNo: 'RC-TS-123456789',
        familyMembers: 4,
        cardType: 'White Card',
        entitlements: [
            { item: 'Rice', quantity: '12 kg', available: true },
            { item: 'Wheat', quantity: '8 kg', available: true },
            { item: 'Sugar', quantity: '4 kg', available: false },
        ],
        nearestShop: 'Fair Price Shop #42, Kukatpally'
    };

    if (selectedService?.type === 'bill') {
        return (
            <div className="min-h-screen">
                <header className="glass-dark border-b border-white/10 px-4 py-4 sticky top-0 z-40">
                    <button
                        onClick={() => setSelectedService(null)}
                        className="text-gray-400 hover:text-white mb-3"
                    >
                        ← Back
                    </button>
                    <div className="flex items-center gap-3">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${selectedService.gradient} flex items-center justify-center shadow-xl`}>
                            {selectedService.icon && <selectedService.icon className="text-white" size={28} />}
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white">{selectedService.name}</h1>
                            <p className="text-gray-400 text-sm">{selectedService.provider}</p>
                        </div>
                    </div>
                </header>

                <div className="px-4 py-6 space-y-4">
                    {/* Bill Details */}
                    <div className="card">
                        <h3 className="font-semibold text-white mb-4">Bill Details</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span className="text-gray-400">Consumer Number</span>
                                <span className="text-white font-semibold">1234567890</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Billing Period</span>
                                <span className="text-white">Dec 2024</span>
                            </div>
                            <div className="pt-3 border-t border-white/10 flex justify-between items-center">
                                <span className="text-lg text-gray-300">Total Amount</span>
                                <span className="text-2xl font-bold text-white">₹{selectedService.amount}</span>
                            </div>
                        </div>
                    </div>

                    <motion.button
                        className="btn-primary w-full"
                        whileTap={{ scale: 0.95 }}
                    >
                        Pay ₹{selectedService.amount} Now
                    </motion.button>
                </div>
            </div>
        );
    }

    if (selectedService?.type === 'ration') {
        return (
            <div className="min-h-screen">
                <header className="glass-dark border-b border-white/10 px-4 py-4 sticky top-0 z-40">
                    <button onClick={() => setSelectedService(null)} className="text-gray-400 hover:text-white mb-3">
                        ← Back
                    </button>
                    <h1 className="text-2xl font-bold text-white">Ration Card</h1>
                </header>
                <div className="px-4 py-6 space-y-4">
                    <div className="card bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/30">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <p className="text-gray-400 text-sm">Card Number</p>
                                <p className="text-white font-bold text-lg">{rationCard.cardNo}</p>
                            </div>
                            <span className="badge badge-success">{rationCard.cardType}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pb-24">
            {/* Immersive Header */}
            <div className="relative bg-gradient-to-b from-indigo-900/40 to-transparent pt-6 pb-4 px-4">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-white">Hub</h1>
                        <p className="text-gray-400 text-xs">Your Digital HQ</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                        <span className="text-lg">🌌</span>
                    </div>
                </div>

                {/* Search */}
                <div className="relative mb-2">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search spaces, services, bills..."
                        className="w-full bg-black/40 border border-white/10 rounded-2xl py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 transition-all shadow-inner"
                    />
                </div>
            </div>

            <div className="px-4 space-y-8">

                {/* 1. Synergy Spaces - New Hero Section */}
                <div>
                    <div className="flex items-center justify-between mb-3 px-1">
                        <h2 className="text-lg font-bold text-white flex items-center gap-2">
                            <Zap size={18} className="text-yellow-400 fill-yellow-400" />
                            Synergy Spaces
                        </h2>
                        <button className="text-primary-400 text-xs font-semibold">View All</button>
                    </div>

                    <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar -mx-4 px-4">
                        {/* Create New */}
                        <div className="min-w-[100px] h-[140px] rounded-3xl bg-white/5 border border-white/10 border-dashed flex flex-col items-center justify-center gap-2 flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                <Users size={20} className="text-gray-400" />
                            </div>
                            <span className="text-xs text-gray-400 text-center px-2">New Space</span>
                        </div>

                        {synergySpaces.map((space) => (
                            <motion.button
                                key={space.id}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate(`/synergy/${space.id}`)}
                                className="relative min-w-[130px] h-[140px] rounded-3xl overflow-hidden flex-shrink-0 group"
                            >
                                {/* Background Image/Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-700 opacity-80 group-hover:opacity-100 transition-opacity"></div>
                                <div className="absolute inset-0 bg-black/20"></div>

                                {/* Content */}
                                <div className="relative h-full flex flex-col justify-between p-3 z-10">
                                    <div className="flex justify-between items-start">
                                        <div className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-lg border border-white/10">
                                            {space.avatar}
                                        </div>
                                        <div className="px-1.5 py-0.5 rounded-md bg-black/30 backdrop-blur-md border border-white/10 flex items-center gap-1">
                                            <Zap size={10} className="text-yellow-300 fill-yellow-300" />
                                            <span className="text-[10px] font-bold text-white">{space.score}</span>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-white font-bold text-sm leading-tight mb-1">{space.name}</h3>
                                        {space.status === 'Live Music' ? (
                                            <div className="flex items-center gap-1 text-[10px] text-green-300">
                                                <Music size={10} className="animate-pulse" />
                                                <span>Listening</span>
                                            </div>
                                        ) : (
                                            <p className="text-[10px] text-white/70">{space.status}</p>
                                        )}
                                    </div>
                                </div>
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* 2. Smart Pulse (Redesigned Compact) */}
                <div className="relative overflow-hidden rounded-3xl p-5 border border-white/10 bg-gradient-to-r from-gray-900 to-gray-800">
                    <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary-500 to-accent-500 flex items-center justify-center">
                                <Sun size={16} className="text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-sm">Daily Pulse</h3>
                                <p className="text-[10px] text-gray-400">3 updates for today</p>
                            </div>
                        </div>
                        <button onClick={() => navigate('/pulse')} className="text-xs text-white/50 bg-white/10 px-3 py-1 rounded-full">Open AI</button>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center gap-3 p-2 rounded-xl bg-black/20 border border-white/5">
                            <div className="w-1 h-8 rounded-full bg-red-500"></div>
                            <div className="flex-1">
                                <p className="text-white text-xs font-medium">Electricity Bill Due</p>
                                <p className="text-gray-400 text-[10px]">₹1,340 • TSSPDCL</p>
                            </div>
                            <button className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-lg text-xs text-white font-medium transition-colors">Pay</button>
                        </div>
                    </div>
                </div>

                {/* 3. Super App Dock */}
                <div>
                    <h2 className="text-lg font-bold text-white mb-3">Services</h2>
                    <div className="glass-dark rounded-3xl p-4 border border-white/5">
                        <div className="grid grid-cols-4 gap-4">
                            {[
                                { name: 'Jobs', icon: Briefcase, color: 'text-indigo-400', bg: 'bg-indigo-500/10', path: '/jobs' },
                                { name: 'Travel', icon: Plane, color: 'text-sky-400', bg: 'bg-sky-500/10', path: '/travel' },
                                { name: 'Wallet', icon: Wallet, color: 'text-emerald-400', bg: 'bg-emerald-500/10', path: '/wallet' },
                                { name: 'Health', icon: Stethoscope, color: 'text-rose-400', bg: 'bg-rose-500/10', path: '/healthcare' },
                                { name: 'Learn', icon: GraduationCap, color: 'text-blue-400', bg: 'bg-blue-500/10', path: '/education' },
                                { name: 'Apps', icon: Gamepad2, color: 'text-violet-400', bg: 'bg-violet-500/10', path: '/miniapps' },
                                { name: 'Govt', icon: HomeIcon, color: 'text-orange-400', bg: 'bg-orange-500/10', path: '/government' },
                                { name: 'More', icon: MoreVertical, color: 'text-gray-400', bg: 'bg-white/5', path: '/miniapps' },
                            ].map((feature) => {
                                const Icon = feature.icon;
                                return (
                                    <motion.button
                                        key={feature.name}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => navigate(feature.path)}
                                        className="flex flex-col items-center gap-2"
                                    >
                                        <div className={`w-12 h-12 rounded-2xl ${feature.bg} flex items-center justify-center transition-colors hover:bg-opacity-20`}>
                                            <Icon className={feature.color} size={20} />
                                        </div>
                                        <span className="text-[10px] font-medium text-gray-400">{feature.name}</span>
                                    </motion.button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* 4. Active Utilities (Mini List) */}
                <div>
                    <h2 className="text-lg font-bold text-white mb-3">Active Services</h2>
                    <div className="space-y-3">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={service.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => setSelectedService({ ...service, type: 'bill' })}
                                    className="flex items-center gap-4 p-3 glass rounded-2xl cursor-pointer hover:bg-white/5"
                                >
                                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                                        <Icon className="text-white" size={18} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-white text-sm">{service.name}</h3>
                                        <p className="text-xs text-Red-400 text-red-400 font-medium">Due {service.dueDate}</p>
                                    </div>
                                    <span className="text-white font-bold text-sm">₹{service.amount}</span>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Government;
