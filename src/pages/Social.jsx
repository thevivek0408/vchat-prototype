import { motion } from 'framer-motion';
import { Search, TrendingUp, Hash, Play } from 'lucide-react';

const Social = () => {
    const trending = [
        { tag: 'TechIndia', posts: '12.5K', gradient: 'from-blue-500 to-cyan-500' },
        { tag: 'IndianFood', posts: '8.2K', gradient: 'from-orange-500 to-red-500' },
        { tag: 'Fitness', posts: '6.7K', gradient: 'from-green-500 to-emerald-500' },
        { tag: 'Travel', posts: '5.3K', gradient: 'from-purple-500 to-pink-500' },
    ];

    const creators = [
        { name: 'Tech Guru', username: '@techguru', followers: '125K', avatar: '👨‍💻', verified: true },
        { name: 'Cooking Amma', username: '@amma_cooks', followers: '89K', avatar: '👵', verified: true },
        { name: 'Fitness Pro', username: '@fitnesspro', followers: '67K', avatar: '🏋️', verified: false },
    ];

    return (
        <div className="min-h-screen">
            {/* Header */}
            <header className="sticky top-0 glass-dark border-b border-white/10 z-40 px-4 py-4">
                <h1 className="text-2xl font-bold text-white mb-4">Discover</h1>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search creators, topics..."
                        className="input pl-10"
                    />
                </div>
            </header>

            <div className="px-4 py-4 space-y-6">
                {/* Trending Topics */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <TrendingUp className="text-primary-400" size={20} />
                        <h2 className="text-lg font-semibold text-white">Trending Now</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        {trending.map((topic, index) => (
                            <motion.button
                                key={topic.tag}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="card hover:scale-105 transition-transform"
                            >
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${topic.gradient} flex items-center justify-center mb-3`}>
                                    <Hash className="text-white" size={24} />
                                </div>
                                <h3 className="font-semibold text-white">#{topic.tag}</h3>
                                <p className="text-sm text-gray-400">{topic.posts} posts</p>
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Featured Creators */}
                <div>
                    <h2 className="text-lg font-semibold text-white mb-4">Featured Creators</h2>
                    <div className="space-y-3">
                        {creators.map((creator, index) => (
                            <motion.div
                                key={creator.username}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="card"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-2xl">
                                            {creator.avatar}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <h3 className="font-semibold text-white">{creator.name}</h3>
                                                {creator.verified && <span className="text-blue-400">✓</span>}
                                            </div>
                                            <p className="text-sm text-gray-400">{creator.username}</p>
                                            <p className="text-xs text-gray-500">{creator.followers} followers</p>
                                        </div>
                                    </div>
                                    <button className="btn-primary py-2 px-6">Follow</button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Content Categories */}
                <div>
                    <h2 className="text-lg font-semibold text-white mb-4">Browse Categories</h2>
                    <div className="grid grid-cols-3 gap-3">
                        {['Tech', 'Food', 'Fitness', 'Travel', 'Music', 'Gaming'].map((category) => (
                            <button
                                key={category}
                                className="glass hover:bg-white/10 rounded-xl p-4 text-center transition-all"
                            >
                                <p className="text-white font-semibold">{category}</p>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Info Card */}
                <div className="card bg-gradient-to-br from-primary-500/10 to-accent-500/10 border-primary-500/30">
                    <div className="flex items-start gap-3">
                        <Play className="text-primary-400 flex-shrink-0" size={24} />
                        <div>
                            <h3 className="font-semibold text-white mb-1">Become a Creator</h3>
                            <p className="text-sm text-gray-300 mb-3">
                                Share your content and earn 70% revenue share - better than YouTube!
                            </p>
                            <button className="btn-primary py-2 px-4 text-sm">Start Creating</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Social;
