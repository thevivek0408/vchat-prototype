import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Heart,
    MessageCircle,
    Share2,
    Bookmark,
    MoreHorizontal,
    Volume2,
    VolumeX,
    Play,
    Pause,
    Music,
    Search,
    Camera,
    UserPlus,
    ChevronLeft,
    Send,
    Smile,
    Gift
} from 'lucide-react';

const Reels = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);
    const [liked, setLiked] = useState({});
    const [bookmarked, setBookmarked] = useState({});
    const [following, setFollowing] = useState({});
    const [showComments, setShowComments] = useState(false);
    const [comment, setComment] = useState('');
    const containerRef = useRef(null);
    const touchStartY = useRef(0);

    const reels = [
        {
            id: 1,
            author: {
                name: 'Priya Sharma',
                username: '@priya_dance',
                avatar: '💃',
                verified: true
            },
            video: {
                thumbnail: '🎭',
                duration: '0:15',
                views: '2.3M',
                gradient: 'from-pink-500 via-purple-500 to-indigo-500'
            },
            caption: 'Bharatanatyam meets modern beats! 🎵✨ #IndianDance #Fusion',
            music: {
                name: 'Original Audio',
                artist: 'Priya Sharma'
            },
            stats: {
                likes: 234500,
                comments: 1234,
                shares: 5678,
                bookmarks: 890
            },
            hashtags: ['#IndianDance', '#Fusion', '#Trending']
        },
        {
            id: 2,
            author: {
                name: 'Chef Ravi',
                username: '@ravi_cooks',
                avatar: '👨‍🍳',
                verified: true
            },
            video: {
                thumbnail: '🍛',
                duration: '0:30',
                views: '5.1M',
                gradient: 'from-orange-500 via-red-500 to-pink-500'
            },
            caption: '60-second Butter Chicken recipe! 🔥 Tag someone who needs this! #QuickRecipes',
            music: {
                name: 'Cooking Vibes',
                artist: 'Kitchen Beats'
            },
            stats: {
                likes: 512000,
                comments: 2345,
                shares: 12340,
                bookmarks: 4567
            },
            hashtags: ['#QuickRecipes', '#IndianFood', '#Viral']
        },
        {
            id: 3,
            author: {
                name: 'Tech Guru',
                username: '@tech_tips',
                avatar: '🤓',
                verified: true
            },
            video: {
                thumbnail: '📱',
                duration: '0:45',
                views: '1.8M',
                gradient: 'from-blue-500 via-cyan-500 to-teal-500'
            },
            caption: 'Hidden Android features you NEED to know! 🚀 Part 3/5 #TechTips',
            music: {
                name: 'Tech House',
                artist: 'Digital Sounds'
            },
            stats: {
                likes: 189000,
                comments: 876,
                shares: 3456,
                bookmarks: 2345
            },
            hashtags: ['#TechTips', '#Android', '#LifeHacks']
        },
        {
            id: 4,
            author: {
                name: 'Fitness Freak',
                username: '@fit_life',
                avatar: '💪',
                verified: false
            },
            video: {
                thumbnail: '🏋️',
                duration: '0:20',
                views: '890K',
                gradient: 'from-green-500 via-emerald-500 to-teal-500'
            },
            caption: '5-min morning workout routine! No equipment needed 🔥 #FitnessMotivation',
            music: {
                name: 'Workout Mix',
                artist: 'Gym Beats'
            },
            stats: {
                likes: 92000,
                comments: 456,
                shares: 1234,
                bookmarks: 890
            },
            hashtags: ['#FitnessMotivation', '#HomeWorkout', '#Health']
        },
        {
            id: 5,
            author: {
                name: 'Comedy Central',
                username: '@desi_comedy',
                avatar: '😂',
                verified: true
            },
            video: {
                thumbnail: '🎬',
                duration: '0:25',
                views: '3.5M',
                gradient: 'from-yellow-500 via-orange-500 to-red-500'
            },
            caption: 'When your mom calls you by your full name... 😅 #RelatableContent',
            music: {
                name: 'Comedy Sound',
                artist: 'Funny Moments'
            },
            stats: {
                likes: 387000,
                comments: 3456,
                shares: 8901,
                bookmarks: 1234
            },
            hashtags: ['#RelatableContent', '#Comedy', '#Viral']
        }
    ];

    const formatNumber = (num) => {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num;
    };

    const handleScroll = (direction) => {
        if (direction === 'up' && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else if (direction === 'down' && currentIndex < reels.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handleTouchStart = (e) => {
        touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
        const touchEndY = e.changedTouches[0].clientY;
        const diff = touchStartY.current - touchEndY;

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                handleScroll('down');
            } else {
                handleScroll('up');
            }
        }
    };

    const handleLike = (reelId) => {
        setLiked(prev => ({ ...prev, [reelId]: !prev[reelId] }));
    };

    const handleBookmark = (reelId) => {
        setBookmarked(prev => ({ ...prev, [reelId]: !prev[reelId] }));
    };

    const handleFollow = (username) => {
        setFollowing(prev => ({ ...prev, [username]: !prev[username] }));
    };

    const currentReel = reels[currentIndex];

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 bg-black overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {/* Top Bar */}
            <header className="absolute top-0 left-0 right-0 z-50 px-4 py-3 bg-gradient-to-b from-black/60 to-transparent">
                <div className="flex items-center justify-between">
                    <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                        <ChevronLeft className="text-white" size={24} />
                    </button>
                    <div className="flex items-center gap-4">
                        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                            <Search className="text-white" size={22} />
                        </button>
                        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                            <Camera className="text-white" size={22} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Video Container */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentReel.id}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                >
                    {/* Video Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${currentReel.video.gradient} flex items-center justify-center`}>
                        <div className="text-9xl animate-pulse">
                            {currentReel.video.thumbnail}
                        </div>

                        {/* Play/Pause Overlay */}
                        <button
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <AnimatePresence>
                                {!isPlaying && (
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0 }}
                                        className="w-20 h-20 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center"
                                    >
                                        <Play className="text-white ml-1" size={40} fill="white" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>

                        {/* View Count */}
                        <div className="absolute top-20 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                            <span className="text-white text-sm font-semibold">👁️ {currentReel.video.views}</span>
                        </div>
                    </div>

                    {/* Bottom Info Section */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 pb-24 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                        {/* Author Info */}
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-2xl border-2 border-white">
                                {currentReel.author.avatar}
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-2">
                                    <h3 className="font-bold text-white">{currentReel.author.name}</h3>
                                    {currentReel.author.verified && (
                                        <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                                            <span className="text-white text-xs">✓</span>
                                        </div>
                                    )}
                                </div>
                                <p className="text-sm text-gray-300">{currentReel.author.username}</p>
                            </div>
                            {!following[currentReel.author.username] && (
                                <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => handleFollow(currentReel.author.username)}
                                    className="px-6 py-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full font-semibold text-white text-sm flex items-center gap-2"
                                >
                                    <UserPlus size={16} />
                                    Follow
                                </motion.button>
                            )}
                        </div>

                        {/* Caption */}
                        <p className="text-white mb-2 line-clamp-2">{currentReel.caption}</p>

                        {/* Hashtags */}
                        <div className="flex flex-wrap gap-2 mb-3">
                            {currentReel.hashtags.map((tag, index) => (
                                <span key={index} className="text-primary-400 text-sm font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Music Info */}
                        <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-full px-3 py-2 w-fit">
                            <Music size={16} className="text-white" />
                            <span className="text-white text-sm">
                                {currentReel.music.name} • {currentReel.music.artist}
                            </span>
                        </div>
                    </div>

                    {/* Right Action Buttons */}
                    <div className="absolute right-4 bottom-32 flex flex-col gap-6">
                        {/* Like */}
                        <motion.button
                            whileTap={{ scale: 0.8 }}
                            onClick={() => handleLike(currentReel.id)}
                            className="flex flex-col items-center gap-1"
                        >
                            <div className={`w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-sm ${liked[currentReel.id] ? 'bg-red-500/30' : 'bg-black/30'
                                }`}>
                                <Heart
                                    size={28}
                                    className={liked[currentReel.id] ? 'text-red-500' : 'text-white'}
                                    fill={liked[currentReel.id] ? 'currentColor' : 'none'}
                                />
                            </div>
                            <span className="text-white text-xs font-semibold">
                                {formatNumber(currentReel.stats.likes + (liked[currentReel.id] ? 1 : 0))}
                            </span>
                        </motion.button>

                        {/* Comment */}
                        <motion.button
                            whileTap={{ scale: 0.8 }}
                            onClick={() => setShowComments(true)}
                            className="flex flex-col items-center gap-1"
                        >
                            <div className="w-14 h-14 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center">
                                <MessageCircle size={28} className="text-white" />
                            </div>
                            <span className="text-white text-xs font-semibold">
                                {formatNumber(currentReel.stats.comments)}
                            </span>
                        </motion.button>

                        {/* Share */}
                        <motion.button
                            whileTap={{ scale: 0.8 }}
                            className="flex flex-col items-center gap-1"
                        >
                            <div className="w-14 h-14 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center">
                                <Share2 size={28} className="text-white" />
                            </div>
                            <span className="text-white text-xs font-semibold">
                                {formatNumber(currentReel.stats.shares)}
                            </span>
                        </motion.button>

                        {/* Bookmark */}
                        <motion.button
                            whileTap={{ scale: 0.8 }}
                            onClick={() => handleBookmark(currentReel.id)}
                            className="flex flex-col items-center gap-1"
                        >
                            <div className={`w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-sm ${bookmarked[currentReel.id] ? 'bg-yellow-500/30' : 'bg-black/30'
                                }`}>
                                <Bookmark
                                    size={28}
                                    className={bookmarked[currentReel.id] ? 'text-yellow-400' : 'text-white'}
                                    fill={bookmarked[currentReel.id] ? 'currentColor' : 'none'}
                                />
                            </div>
                        </motion.button>

                        {/* More */}
                        <motion.button
                            whileTap={{ scale: 0.8 }}
                            className="flex flex-col items-center gap-1"
                        >
                            <div className="w-14 h-14 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center">
                                <MoreHorizontal size={28} className="text-white" />
                            </div>
                        </motion.button>

                        {/* Mute/Unmute */}
                        <motion.button
                            whileTap={{ scale: 0.8 }}
                            onClick={() => setIsMuted(!isMuted)}
                            className="flex flex-col items-center gap-1"
                        >
                            <div className="w-14 h-14 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center">
                                {isMuted ? (
                                    <VolumeX size={28} className="text-white" />
                                ) : (
                                    <Volume2 size={28} className="text-white" />
                                )}
                            </div>
                        </motion.button>
                    </div>

                    {/* Progress Indicator */}
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                        {reels.map((_, index) => (
                            <div
                                key={index}
                                className={`w-1 h-8 rounded-full transition-all ${index === currentIndex
                                        ? 'bg-white'
                                        : 'bg-white/30'
                                    }`}
                            />
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Comments Sheet */}
            <AnimatePresence>
                {showComments && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowComments(false)}
                            className="absolute inset-0 bg-black/50 backdrop-blur-sm z-50"
                        />

                        {/* Comments Panel */}
                        <motion.div
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            exit={{ y: '100%' }}
                            transition={{ type: 'spring', damping: 30 }}
                            className="absolute bottom-0 left-0 right-0 bg-gray-900 rounded-t-3xl z-50 max-h-[70vh] flex flex-col"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-4 border-b border-white/10">
                                <h3 className="text-white font-semibold text-lg">
                                    {formatNumber(currentReel.stats.comments)} Comments
                                </h3>
                                <button
                                    onClick={() => setShowComments(false)}
                                    className="p-2 hover:bg-white/5 rounded-full transition-colors"
                                >
                                    <span className="text-white text-xl">×</span>
                                </button>
                            </div>

                            {/* Comments List */}
                            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                                {[
                                    { user: 'Amit Kumar', avatar: '👨', comment: 'This is amazing! 🔥', likes: 234 },
                                    { user: 'Sneha Reddy', avatar: '👩', comment: 'Love this! Can you make more?', likes: 89 },
                                    { user: 'Raj Patel', avatar: '🧑', comment: 'Incredible work! 👏👏', likes: 156 },
                                ].map((item, index) => (
                                    <div key={index} className="flex gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-xl flex-shrink-0">
                                            {item.avatar}
                                        </div>
                                        <div className="flex-1">
                                            <div className="bg-white/5 rounded-2xl px-4 py-2">
                                                <p className="text-white font-semibold text-sm">{item.user}</p>
                                                <p className="text-gray-300 text-sm">{item.comment}</p>
                                            </div>
                                            <div className="flex items-center gap-4 mt-1 px-2">
                                                <button className="text-gray-400 text-xs hover:text-white">Reply</button>
                                                <button className="text-gray-400 text-xs flex items-center gap-1 hover:text-white">
                                                    <Heart size={12} />
                                                    {item.likes}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Comment Input */}
                            <div className="p-4 border-t border-white/10 bg-gray-900">
                                <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-xl">
                                        😊
                                    </div>
                                    <div className="flex-1 flex items-center gap-2 bg-white/5 rounded-full px-4 py-2">
                                        <input
                                            type="text"
                                            value={comment}
                                            onChange={(e) => setComment(e.target.value)}
                                            placeholder="Add a comment..."
                                            className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none text-sm"
                                        />
                                        <button className="text-gray-400 hover:text-white">
                                            <Smile size={20} />
                                        </button>
                                        <button className="text-gray-400 hover:text-white">
                                            <Gift size={20} />
                                        </button>
                                    </div>
                                    <button className="p-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full">
                                        <Send size={20} className="text-white" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Swipe Hint */}
            {currentIndex === 0 && (
                <motion.div
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 0, y: -20 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-36 left-1/2 -translate-x-1/2 text-white text-sm font-medium bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full"
                >
                    Swipe up for more ↑
                </motion.div>
            )}
        </div>
    );
};

export default Reels;
