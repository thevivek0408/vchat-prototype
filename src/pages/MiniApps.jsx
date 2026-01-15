import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Gamepad2,
    Calculator,
    Music,
    Camera,
    ShoppingCart,
    Utensils,
    Plane,
    Dumbbell,
    Book,
    Newspaper,
    Cloud,
    Compass,
    Star,
    TrendingUp,
    Download,
    Search,
    Sparkles,
    Zap
} from 'lucide-react';

const MiniApps = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'All Apps', icon: Sparkles },
        { id: 'games', name: 'Games', icon: Gamepad2 },
        { id: 'utilities', name: 'Utilities', icon: Calculator },
        { id: 'lifestyle', name: 'Lifestyle', icon: Star },
        { id: 'shopping', name: 'Shopping', icon: ShoppingCart },
    ];

    const miniApps = [
        {
            id: 1,
            name: 'Quick Games',
            description: 'Play casual games with friends',
            icon: Gamepad2,
            gradient: 'from-purple-500 to-pink-500',
            category: 'games',
            users: '2.5M',
            rating: 4.8,
            featured: true
        },
        {
            id: 2,
            name: 'Food Delivery',
            description: 'Order food from nearby restaurants',
            icon: Utensils,
            gradient: 'from-orange-500 to-red-500',
            category: 'lifestyle',
            users: '5.2M',
            rating: 4.6,
            featured: true
        },
        {
            id: 3,
            name: 'Fitness Tracker',
            description: 'Track workouts and health goals',
            icon: Dumbbell,
            gradient: 'from-green-500 to-emerald-500',
            category: 'lifestyle',
            users: '1.8M',
            rating: 4.7,
            featured: false
        },
        {
            id: 4,
            name: 'Music Player',
            description: 'Stream and share music',
            icon: Music,
            gradient: 'from-pink-500 to-rose-500',
            category: 'utilities',
            users: '3.4M',
            rating: 4.5,
            featured: true
        },
        {
            id: 5,
            name: 'Travel Booking',
            description: 'Book flights, hotels & more',
            icon: Plane,
            gradient: 'from-blue-500 to-cyan-500',
            category: 'lifestyle',
            users: '4.1M',
            rating: 4.4,
            featured: false
        },
        {
            id: 6,
            name: 'Photo Editor',
            description: 'Edit and enhance photos',
            icon: Camera,
            gradient: 'from-indigo-500 to-purple-500',
            category: 'utilities',
            users: '2.9M',
            rating: 4.6,
            featured: false
        },
        {
            id: 7,
            name: 'News Reader',
            description: 'Stay updated with latest news',
            icon: Newspaper,
            gradient: 'from-slate-500 to-gray-600',
            category: 'utilities',
            users: '1.5M',
            rating: 4.3,
            featured: false
        },
        {
            id: 8,
            name: 'Quick Shop',
            description: 'Shop from local stores',
            icon: ShoppingCart,
            gradient: 'from-yellow-500 to-orange-500',
            category: 'shopping',
            users: '3.7M',
            rating: 4.7,
            featured: true
        },
        {
            id: 9,
            name: 'Study Hub',
            description: 'Learn and collaborate',
            icon: Book,
            gradient: 'from-teal-500 to-cyan-500',
            category: 'utilities',
            users: '2.1M',
            rating: 4.8,
            featured: false
        },
        {
            id: 10,
            name: 'Weather Pro',
            description: 'Accurate weather forecasts',
            icon: Cloud,
            gradient: 'from-sky-500 to-blue-500',
            category: 'utilities',
            users: '1.2M',
            rating: 4.5,
            featured: false
        },
    ];

    const filteredApps = selectedCategory === 'all'
        ? miniApps
        : miniApps.filter(app => app.category === selectedCategory);

    const featuredApps = miniApps.filter(app => app.featured);

    return (
        <div className="min-h-screen pb-20">
            {/* Header */}
            <header className="sticky top-0 glass-dark border-b border-white/10 z-40 px-4 py-4">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h1 className="text-2xl font-bold text-white">Mini Apps</h1>
                        <p className="text-sm text-gray-400">Extend your Vchat experience</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Zap className="text-primary-400" size={20} />
                        <span className="text-sm font-semibold text-primary-400">Powered by Azure</span>
                    </div>
                </div>

                {/* Search */}
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search mini apps..."
                        className="input pl-10"
                    />
                </div>
            </header>

            <div className="px-4 py-4 space-y-6">
                {/* Featured Apps */}
                <div>
                    <div className="flex items-center justify-between mb-3">
                        <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                            <Star className="text-yellow-400" size={20} />
                            Featured Apps
                        </h2>
                    </div>
                    <div className="flex gap-3 overflow-x-auto pb-2 custom-scrollbar">
                        {featuredApps.map((app, index) => {
                            const Icon = app.icon;
                            return (
                                <motion.div
                                    key={app.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="card min-w-[280px] bg-gradient-to-br from-white/5 to-white/10 hover:from-white/10 hover:to-white/15 transition-all cursor-pointer"
                                >
                                    <div className="flex items-start gap-3 mb-3">
                                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${app.gradient} flex items-center justify-center shadow-xl flex-shrink-0`}>
                                            <Icon className="text-white" size={28} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-semibold text-white mb-1">{app.name}</h3>
                                            <p className="text-sm text-gray-400 line-clamp-2">{app.description}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between text-xs text-gray-400">
                                        <span className="flex items-center gap-1">
                                            <Download size={14} />
                                            {app.users} users
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Star size={14} className="text-yellow-400 fill-yellow-400" />
                                            {app.rating}
                                        </span>
                                    </div>
                                    <button className="btn-primary w-full mt-3">
                                        Open App
                                    </button>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Categories */}
                <div>
                    <h2 className="text-lg font-semibold text-white mb-3">Categories</h2>
                    <div className="flex gap-2 overflow-x-auto pb-2 custom-scrollbar">
                        {categories.map((category) => {
                            const Icon = category.icon;
                            return (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-sm whitespace-nowrap transition-all ${selectedCategory === category.id
                                            ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg'
                                            : 'glass text-gray-300 hover:bg-white/10'
                                        }`}
                                >
                                    <Icon size={16} />
                                    {category.name}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* All Apps Grid */}
                <div>
                    <h2 className="text-lg font-semibold text-white mb-3">
                        {selectedCategory === 'all' ? 'All Apps' : categories.find(c => c.id === selectedCategory)?.name}
                    </h2>
                    <div className="grid grid-cols-2 gap-3">
                        {filteredApps.map((app, index) => {
                            const Icon = app.icon;
                            return (
                                <motion.div
                                    key={app.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="card hover:scale-[1.02] transition-transform cursor-pointer"
                                >
                                    <div className={`w-14 h-14 mx-auto mb-3 rounded-2xl bg-gradient-to-br ${app.gradient} flex items-center justify-center shadow-lg`}>
                                        <Icon className="text-white" size={28} />
                                    </div>
                                    <h3 className="font-semibold text-white text-center mb-1">{app.name}</h3>
                                    <p className="text-xs text-gray-400 text-center mb-3 line-clamp-2">{app.description}</p>
                                    <div className="flex items-center justify-center gap-3 text-xs text-gray-400 mb-3">
                                        <span className="flex items-center gap-1">
                                            <Star size={12} className="text-yellow-400 fill-yellow-400" />
                                            {app.rating}
                                        </span>
                                        <span>•</span>
                                        <span>{app.users}</span>
                                    </div>
                                    <button className="btn-secondary w-full text-sm py-2">
                                        Open
                                    </button>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Developer Info */}
                <div className="card bg-gradient-to-br from-primary-500/10 to-accent-500/10 border-primary-500/30">
                    <div className="flex gap-3">
                        <Sparkles className="text-primary-400 flex-shrink-0" size={24} />
                        <div>
                            <h3 className="font-semibold text-white mb-1">Build Your Own Mini App</h3>
                            <p className="text-sm text-gray-300 mb-3">
                                Join our developer program and create mini apps for millions of Vchat users.
                            </p>
                            <button className="btn-primary">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiniApps;
