import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Search,
    Bell,
    Heart,
    MessageCircle,
    Share2,
    Bookmark,
    Play,
    MoreVertical,
    TrendingUp,
    Sparkles,
    Wallet,
    Stethoscope,
    GraduationCap,
    Gamepad2,
    ChevronRight,
    Film,
    Volume2,
    VolumeX,
    Repeat2,
    Send,
    UserPlus,
    Music,
    Eye,
    Clock,
    Zap,
    Phone,
    AtSign,
    Plus,
    Tv
} from 'lucide-react';

const Home = () => {
    const [activeTab, setActiveTab] = useState('foryou');
    const [liked, setLiked] = useState({});
    const [bookmarked, setBookmarked] = useState({});
    const [following, setFollowing] = useState({});
    const [mutedVideos, setMutedVideos] = useState({});
    const navigate = useNavigate();

    const tabs = [
        { id: 'foryou', label: 'For You', icon: Sparkles },
        { id: 'following', label: 'Following', icon: UserPlus },
        { id: 'trending', label: 'Trending', icon: TrendingUp },
    ];

    // Stories - Color coded by type
    const stories = [
        {
            id: 'your-story',
            type: 'add',
            user: {
                name: 'Your Story',
                avatar: '👤',
            }
        },
        // Phone Contacts (Green ring)
        {
            id: 1,
            type: 'contact',
            user: {
                name: 'Mom',
                avatar: '👩',
            },
            hasNew: true,
            timestamp: '2h ago'
        },
        {
            id: 2,
            type: 'contact',
            user: {
                name: 'Amit',
                avatar: '👨‍💼',
            },
            hasNew: true,
            timestamp: '5h ago'
        },
        {
            id: 3,
            type: 'contact',
            user: {
                name: 'Priya',
                avatar: '👩‍🎨',
            },
            hasNew: false,
            timestamp: '1d ago'
        },
        // Social Connections (Rainbow ring)
        {
            id: 4,
            type: 'social',
            user: {
                name: 'TechGuru',
                avatar: '💻',
                verified: true
            },
            hasNew: true,
            timestamp: '1h ago'
        },
        {
            id: 5,
            type: 'social',
            user: {
                name: 'FoodieLife',
                avatar: '🍕',
                verified: true
            },
            hasNew: true,
            timestamp: '3h ago'
        },
        {
            id: 6,
            type: 'social',
            user: {
                name: 'TravelVlogs',
                avatar: '✈️',
            },
            hasNew: true,
            timestamp: '4h ago'
        },
    ];

    // Mixed content feed - Instagram + Twitter + TikTok + YouTube style
    const posts = [
        // TikTok-style Reel
        {
            id: 1,
            type: 'reel',
            author: {
                name: 'Priya Sharma',
                username: '@priya_dance',
                avatar: '💃',
                verified: true,
                context: 'Creator'
            },
            content: {
                text: 'Bharatanatyam meets modern beats! 🎵✨ #IndianDance #Fusion',
                video: {
                    thumbnail: '🎭',
                    duration: '0:15',
                    gradient: 'from-pink-500 via-purple-500 to-indigo-500'
                },
                music: {
                    name: 'Original Audio',
                    artist: 'Priya Sharma'
                }
            },
            stats: { likes: 234500, comments: 1234, shares: 5678, views: '2.3M' },
            timestamp: '2h ago',
            hashtags: ['#IndianDance', '#Fusion', '#Trending']
        },
        // Instagram-style Photo
        {
            id: 2,
            type: 'photo',
            author: {
                name: 'Rahul Kumar',
                username: '@rahul_travel',
                avatar: '📸',
                verified: false,
                context: 'Friend'
            },
            content: {
                text: 'Sunset at Marina Beach, Chennai 🌅 Perfect evening vibes!',
                images: [
                    { emoji: '🌅', gradient: 'from-orange-500 via-pink-500 to-purple-500' }
                ],
                location: 'Marina Beach, Chennai'
            },
            stats: { likes: 1234, comments: 89, shares: 45 },
            timestamp: '3h ago'
        },
        // Twitter/X-style Text Post
        {
            id: 3,
            type: 'text',
            author: {
                name: 'Tech News India',
                username: '@technews_in',
                avatar: '📱',
                verified: true,
                context: 'Following'
            },
            content: {
                text: '🚀 BREAKING: India launches new digital identity system powered by AI.\n\nKey features:\n• Instant verification\n• Multi-language support\n• Privacy-first design\n• Government integration\n\nThis will revolutionize how 1.4B citizens interact with services. Thoughts? 🤔',
                link: {
                    url: 'technews.in/article/123',
                    title: 'India\'s AI-Powered Digital Identity',
                    description: 'Revolutionary system to transform citizen services',
                    image: '🆔'
                }
            },
            stats: { likes: 5670, comments: 234, shares: 890, retweets: 1200 },
            timestamp: '4h ago'
        },
        // YouTube-style Long Video
        {
            id: 4,
            type: 'youtube',
            author: {
                name: 'Chef Ravi',
                username: '@ravi_cooks',
                avatar: '👨‍🍳',
                verified: true,
                context: 'Subscribed'
            },
            content: {
                text: 'Complete Biryani Masterclass | Restaurant Style at Home 🍛',
                video: {
                    thumbnail: '🍛',
                    duration: '15:30',
                    gradient: 'from-orange-500 via-red-500 to-pink-500'
                },
                category: 'Cooking'
            },
            stats: { likes: 12300, comments: 456, views: '156K', subscribers: '2.3M' },
            timestamp: '5h ago'
        },
        // Instagram-style Photo Carousel
        {
            id: 5,
            type: 'carousel',
            author: {
                name: 'Fashion Trends',
                username: '@fashion_india',
                avatar: '👗',
                verified: true,
                context: 'Following'
            },
            content: {
                text: 'Summer Collection 2024 ☀️ Swipe to see all looks →',
                images: [
                    { emoji: '👗', gradient: 'from-pink-500 to-rose-500' },
                    { emoji: '👔', gradient: 'from-blue-500 to-cyan-500' },
                    { emoji: '👠', gradient: 'from-purple-500 to-pink-500' }
                ]
            },
            stats: { likes: 3456, comments: 178, shares: 234 },
            timestamp: '6h ago'
        },
        // TikTok-style Reel
        {
            id: 6,
            type: 'reel',
            author: {
                name: 'Fitness Freak',
                username: '@fit_life',
                avatar: '💪',
                verified: false,
                context: 'Suggested'
            },
            content: {
                text: '5-min morning workout! No equipment needed 🔥 #FitnessMotivation',
                video: {
                    thumbnail: '🏋️',
                    duration: '0:20',
                    gradient: 'from-green-500 via-emerald-500 to-teal-500'
                },
                music: {
                    name: 'Workout Mix',
                    artist: 'Gym Beats'
                }
            },
            stats: { likes: 92000, comments: 456, shares: 1234, views: '890K' },
            timestamp: '7h ago',
            hashtags: ['#FitnessMotivation', '#HomeWorkout']
        },
        // Twitter/X Poll
        {
            id: 7,
            type: 'poll',
            author: {
                name: 'Vchat Official',
                username: '@vchat',
                avatar: '💬',
                verified: true,
                context: 'Official'
            },
            content: {
                text: 'Which feature do you use most in Vchat? 🤔',
                poll: {
                    question: 'Most used feature?',
                    options: [
                        { text: 'Chat & Groups', votes: 45, percentage: 45 },
                        { text: 'Reels & Social', votes: 30, percentage: 30 },
                        { text: 'Wallet & Payments', votes: 15, percentage: 15 },
                        { text: 'Gov Services', votes: 10, percentage: 10 }
                    ],
                    totalVotes: 12340,
                    endsIn: '2 days left'
                }
            },
            stats: { likes: 890, comments: 123, shares: 45 },
            timestamp: '8h ago'
        }
    ];

    const formatNumber = (num) => {
        if (typeof num === 'string') return num;
        if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
        if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
        return num;
    };

    const handleLike = (postId) => {
        setLiked(prev => ({ ...prev, [postId]: !prev[postId] }));
    };

    const handleBookmark = (postId) => {
        setBookmarked(prev => ({ ...prev, [postId]: !prev[postId] }));
    };

    const handleFollow = (username) => {
        setFollowing(prev => ({ ...prev, [username]: !prev[username] }));
    };

    const toggleMute = (postId) => {
        setMutedVideos(prev => ({ ...prev, [postId]: !prev[postId] }));
    };

    const renderPost = (post, index) => {
        switch (post.type) {
            case 'reel':
                return <ReelPost post={post} index={index} />;
            case 'photo':
                return <PhotoPost post={post} index={index} />;
            case 'carousel':
                return <CarouselPost post={post} index={index} />;
            case 'text':
                return <TextPost post={post} index={index} />;
            case 'youtube':
                return <YouTubePost post={post} index={index} />;
            case 'poll':
                return <PollPost post={post} index={index} />;
            default:
                return null;
        }
    };

    // Reel Post Component (TikTok-style)
    const ReelPost = ({ post, index }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card mb-4"
        >
            {/* Header */}
            <PostHeader post={post} />

            {/* Caption */}
            <p className="text-gray-200 mb-3 px-4">{post.content.text}</p>

            {/* Video */}
            <div className="relative w-full aspect-[9/16] max-h-[600px] rounded-2xl overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${post.content.video.gradient} flex items-center justify-center`}>
                    <div className="text-8xl animate-pulse">{post.content.video.thumbnail}</div>

                    {/* Play Button Overlay */}
                    <button className="absolute inset-0 flex items-center justify-center group">
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Play className="text-white ml-1" size={40} fill="white" />
                        </div>
                    </button>

                    {/* Duration */}
                    <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-white text-sm font-semibold">{post.content.video.duration}</span>
                    </div>

                    {/* Views */}
                    <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                        <Eye size={14} className="text-white" />
                        <span className="text-white text-sm font-semibold">{post.stats.views}</span>
                    </div>

                    {/* Mute Button */}
                    <button
                        onClick={() => toggleMute(post.id)}
                        className="absolute top-4 left-4 w-10 h-10 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
                    >
                        {mutedVideos[post.id] ? (
                            <VolumeX size={20} className="text-white" />
                        ) : (
                            <Volume2 size={20} className="text-white" />
                        )}
                    </button>

                    {/* Music Info */}
                    <div className="absolute bottom-4 left-4 right-20 bg-black/70 backdrop-blur-sm rounded-full px-3 py-2 flex items-center gap-2">
                        <Music size={14} className="text-white flex-shrink-0" />
                        <div className="flex-1 overflow-hidden">
                            <p className="text-white text-xs truncate">
                                {post.content.music.name} • {post.content.music.artist}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hashtags */}
            {post.hashtags && (
                <div className="flex flex-wrap gap-2 mt-3 px-4">
                    {post.hashtags.map((tag, i) => (
                        <span key={i} className="text-primary-400 text-sm font-medium hover:underline cursor-pointer">
                            {tag}
                        </span>
                    ))}
                </div>
            )}

            {/* Actions */}
            <PostActions post={post} />
        </motion.div>
    );

    // Photo Post Component (Instagram-style)
    const PhotoPost = ({ post, index }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card mb-4"
        >
            <PostHeader post={post} />

            {/* Photo */}
            <div className="w-full aspect-square rounded-2xl overflow-hidden mb-3">
                <div className={`w-full h-full bg-gradient-to-br ${post.content.images[0].gradient} flex items-center justify-center`}>
                    <div className="text-9xl">{post.content.images[0].emoji}</div>
                </div>
            </div>

            {/* Actions */}
            <PostActions post={post} />

            {/* Caption */}
            <div className="px-4 mt-3">
                <p className="text-gray-200">
                    <span className="font-semibold text-white">{post.author.username}</span> {post.content.text}
                </p>
                {post.content.location && (
                    <p className="text-sm text-gray-400 mt-1">📍 {post.content.location}</p>
                )}
            </div>
        </motion.div>
    );

    // Carousel Post Component (Instagram-style)
    const CarouselPost = ({ post, index }) => {
        const [currentSlide, setCurrentSlide] = useState(0);

        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card mb-4"
            >
                <PostHeader post={post} />

                {/* Carousel */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-3">
                    <div className={`w-full h-full bg-gradient-to-br ${post.content.images[currentSlide].gradient} flex items-center justify-center`}>
                        <div className="text-9xl">{post.content.images[currentSlide].emoji}</div>
                    </div>

                    {/* Carousel Indicators */}
                    <div className="absolute top-4 left-0 right-0 flex justify-center gap-1">
                        {post.content.images.map((_, i) => (
                            <div
                                key={i}
                                className={`h-1 rounded-full transition-all ${i === currentSlide ? 'w-8 bg-white' : 'w-1 bg-white/50'
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    {currentSlide > 0 && (
                        <button
                            onClick={() => setCurrentSlide(currentSlide - 1)}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                        >
                            ←
                        </button>
                    )}
                    {currentSlide < post.content.images.length - 1 && (
                        <button
                            onClick={() => setCurrentSlide(currentSlide + 1)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                        >
                            →
                        </button>
                    )}
                </div>

                <PostActions post={post} />

                <div className="px-4 mt-3">
                    <p className="text-gray-200">
                        <span className="font-semibold text-white">{post.author.username}</span> {post.content.text}
                    </p>
                </div>
            </motion.div>
        );
    };

    // Text Post Component (Twitter/X-style)
    const TextPost = ({ post, index }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card mb-4"
        >
            <PostHeader post={post} />

            {/* Text Content */}
            <div className="px-4 mb-3">
                <p className="text-gray-200 whitespace-pre-line text-[15px] leading-relaxed">{post.content.text}</p>
            </div>

            {/* Link Preview */}
            {post.content.link && (
                <div className="mx-4 mb-3 glass border border-primary-500/30 rounded-xl overflow-hidden hover:bg-white/10 transition-colors cursor-pointer">
                    <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                        <div className="text-6xl">{post.content.link.image}</div>
                    </div>
                    <div className="p-3">
                        <p className="text-sm text-gray-400 mb-1">{post.content.link.url}</p>
                        <h4 className="text-white font-semibold mb-1">{post.content.link.title}</h4>
                        <p className="text-sm text-gray-400">{post.content.link.description}</p>
                    </div>
                </div>
            )}

            {/* Twitter-style Actions */}
            <div className="flex items-center justify-between px-4 pt-3 border-t border-white/10">
                <button className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors group">
                    <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-semibold">{formatNumber(post.stats.comments)}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors group">
                    <Repeat2 size={18} className="group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-semibold">{formatNumber(post.stats.retweets)}</span>
                </button>
                <button
                    onClick={() => handleLike(post.id)}
                    className={`flex items-center gap-2 transition-colors group ${liked[post.id] ? 'text-red-500' : 'text-gray-400 hover:text-red-400'
                        }`}
                >
                    <Heart
                        size={18}
                        className="group-hover:scale-110 transition-transform"
                        fill={liked[post.id] ? 'currentColor' : 'none'}
                    />
                    <span className="text-sm font-semibold">
                        {formatNumber(post.stats.likes + (liked[post.id] ? 1 : 0))}
                    </span>
                </button>
                <button className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors group">
                    <Share2 size={18} className="group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-semibold">{formatNumber(post.stats.shares)}</span>
                </button>
                <button
                    onClick={() => handleBookmark(post.id)}
                    className={`transition-colors ${bookmarked[post.id] ? 'text-yellow-400' : 'text-gray-400 hover:text-yellow-400'
                        }`}
                >
                    <Bookmark size={18} fill={bookmarked[post.id] ? 'currentColor' : 'none'} />
                </button>
            </div>
        </motion.div>
    );

    // YouTube Post Component
    const YouTubePost = ({ post, index }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card mb-4"
        >
            <PostHeader post={post} />

            {/* Video Thumbnail */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-3">
                <div className={`absolute inset-0 bg-gradient-to-br ${post.content.video.gradient} flex items-center justify-center`}>
                    <div className="text-9xl">{post.content.video.thumbnail}</div>

                    <button className="absolute inset-0 flex items-center justify-center group">
                        <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                            <Play className="text-white ml-1" size={40} fill="white" />
                        </div>
                    </button>

                    {/* Duration */}
                    <div className="absolute bottom-4 right-4 bg-black/90 px-2 py-1 rounded">
                        <span className="text-white text-sm font-semibold">{post.content.video.duration}</span>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-red-600 px-3 py-1 rounded-full">
                        <span className="text-white text-xs font-bold">{post.content.category}</span>
                    </div>
                </div>
            </div>

            {/* Title */}
            <div className="px-4 mb-3">
                <h3 className="text-white font-semibold text-base leading-snug">{post.content.text}</h3>
                <div className="flex items-center gap-2 mt-2 text-sm text-gray-400">
                    <span>{post.stats.views} views</span>
                    <span>•</span>
                    <span>{post.timestamp}</span>
                </div>
            </div>

            <PostActions post={post} showSubscribe />
        </motion.div>
    );

    // Poll Post Component (Twitter/X-style)
    const PollPost = ({ post, index }) => {
        const [voted, setVoted] = useState(null);

        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card mb-4"
            >
                <PostHeader post={post} />

                <div className="px-4 mb-3">
                    <p className="text-gray-200 mb-4">{post.content.text}</p>

                    {/* Poll Options */}
                    <div className="space-y-2 mb-3">
                        {post.content.poll.options.map((option, i) => (
                            <button
                                key={i}
                                onClick={() => setVoted(i)}
                                className={`w-full relative overflow-hidden rounded-lg border transition-all ${voted === i
                                    ? 'border-primary-500 bg-primary-500/20'
                                    : 'border-white/20 hover:border-white/40 bg-white/5'
                                    }`}
                            >
                                <div
                                    className="absolute left-0 top-0 bottom-0 bg-primary-500/30 transition-all"
                                    style={{ width: voted !== null ? `${option.percentage}%` : '0%' }}
                                />
                                <div className="relative px-4 py-3 flex items-center justify-between">
                                    <span className="text-white font-medium">{option.text}</span>
                                    {voted !== null && (
                                        <span className="text-white font-bold">{option.percentage}%</span>
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Poll Info */}
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                        <span>{formatNumber(post.content.poll.totalVotes)} votes</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                            <Clock size={14} />
                            {post.content.poll.endsIn}
                        </span>
                    </div>
                </div>

                <PostActions post={post} hideLike={voted !== null} />
            </motion.div>
        );
    };

    // Shared Post Header Component
    const PostHeader = ({ post }) => (
        <div className="flex items-start justify-between mb-3 px-4 pt-4">
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-2xl border-2 border-white/20">
                    {post.author.avatar}
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-white">{post.author.name}</h3>
                        {post.author.verified && (
                            <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs">✓</span>
                            </div>
                        )}
                        <span className={`badge ${post.author.context === 'Official' ? 'badge-info' :
                            post.author.context === 'Friend' ? 'badge-success' :
                                'badge-warning'
                            } text-xs`}>
                            {post.author.context}
                        </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                        <span>{post.author.username}</span>
                        <span>•</span>
                        <span>{post.timestamp}</span>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-2">
                {!following[post.author.username] && post.author.context !== 'Friend' && (
                    <button
                        onClick={() => handleFollow(post.author.username)}
                        className="px-4 py-1.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full font-semibold text-white text-sm hover:shadow-lg transition-all"
                    >
                        Follow
                    </button>
                )}
                <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                    <MoreVertical size={18} className="text-gray-400" />
                </button>
            </div>
        </div>
    );

    // Shared Post Actions Component
    const PostActions = ({ post, showSubscribe, hideLike }) => (
        <div className="flex items-center justify-between px-4 pt-3 border-t border-white/10">
            {!hideLike && (
                <button
                    onClick={() => handleLike(post.id)}
                    className={`flex items-center gap-2 transition-colors group ${liked[post.id] ? 'text-red-500' : 'text-gray-400 hover:text-red-400'
                        }`}
                >
                    <Heart
                        size={20}
                        className="group-hover:scale-110 transition-transform"
                        fill={liked[post.id] ? 'currentColor' : 'none'}
                    />
                    <span className="text-sm font-semibold">
                        {formatNumber(post.stats.likes + (liked[post.id] ? 1 : 0))}
                    </span>
                </button>
            )}
            {hideLike && <div />}

            <button className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors group">
                <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm font-semibold">{formatNumber(post.stats.comments)}</span>
            </button>

            <button className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors group">
                <Share2 size={20} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm font-semibold">{formatNumber(post.stats.shares)}</span>
            </button>

            <button
                onClick={() => handleBookmark(post.id)}
                className={`transition-colors ${bookmarked[post.id] ? 'text-yellow-400' : 'text-gray-400 hover:text-yellow-400'
                    }`}
            >
                <Bookmark size={20} fill={bookmarked[post.id] ? 'currentColor' : 'none'} />
            </button>
        </div>
    );

    return (
        <div className="min-h-screen">
            {/* Header */}
            <header className="sticky top-0 glass-dark border-b border-white/10 z-40 px-4 py-3">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                            <MessageCircle className="text-white" size={22} />
                        </div>
                        <h1 className="text-2xl font-bold text-gradient">Vchat</h1>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="relative p-2 hover:bg-white/5 rounded-xl transition-colors">
                            <Bell size={22} className="text-gray-300" />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>
                        <button className="p-2 hover:bg-white/5 rounded-xl transition-colors">
                            <Search size={22} className="text-gray-300" />
                        </button>
                    </div>
                </div>

                {/* Feature Switcher (Feed/Live/Pulse) */}
                <div className="flex bg-white/5 p-1 rounded-xl mb-4 relative overflow-hidden">
                    {/* Active Indicator (Mock visual, real nav is simpler) */}
                    <button
                        onClick={() => { }}
                        className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-white/10 text-white font-semibold shadow-sm"
                    >
                        <TrendingUp size={16} /> Feed
                    </button>
                    <button
                        onClick={() => navigate('/live')}
                        className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-gray-400 hover:text-white"
                    >
                        <Tv size={16} className="text-red-500" /> Live
                    </button>
                    <button
                        onClick={() => navigate('/pulse')}
                        className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-gray-400 hover:text-white"
                    >
                        <Zap size={16} className="text-yellow-400" /> Pulse
                    </button>
                </div>

                {/* Feed Filter Tabs */}
                <div className="flex gap-2">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition-all relative ${activeTab === tab.id
                                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white'
                                    : 'text-gray-400 hover:bg-white/5'
                                    }`}
                            >
                                <Icon size={16} />
                                {tab.label}
                            </button>
                        );
                    })}
                </div>
            </header>

            {/* Stories Row - Color Coded */}
            <div className="px-4 pt-4 pb-2">
                <div className="flex gap-4 overflow-x-auto custom-scrollbar pb-2">
                    {stories.map((story) => (
                        <motion.button
                            key={story.id}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex-shrink-0 flex flex-col items-center gap-2"
                        >
                            {/* Story Circle with Color-Coded Ring */}
                            <div className="relative">
                                {/* Colored Ring Based on Type */}
                                {story.type === 'add' ? (
                                    // Your Story - Dashed border
                                    <div className="w-16 h-16 rounded-full border-2 border-dashed border-gray-500 flex items-center justify-center bg-white/5">
                                        <Plus size={24} className="text-gray-400" />
                                    </div>
                                ) : (
                                    <div className={`p-0.5 rounded-full ${story.type === 'contact'
                                        ? 'bg-gradient-to-tr from-green-500 to-emerald-400' // Green for contacts
                                        : 'bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-500' // Rainbow for social
                                        } ${!story.hasNew && 'opacity-40'}`}>
                                        <div className="w-16 h-16 rounded-full bg-gray-900 p-0.5">
                                            <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-2xl">
                                                {story.user.avatar}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Type Indicator Badge */}
                                {story.type !== 'add' && (
                                    <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center ${story.type === 'contact'
                                        ? 'bg-green-500' // Green badge for contacts
                                        : 'bg-gradient-to-r from-purple-500 to-pink-500' // Gradient for social
                                        }`}>
                                        {story.type === 'contact' ? (
                                            <Phone size={10} className="text-white" />
                                        ) : (
                                            <AtSign size={10} className="text-white" />
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Name */}
                            <span className="text-xs text-gray-300 max-w-[64px] truncate">
                                {story.user.name}
                            </span>
                        </motion.button>
                    ))}
                </div>

                {/* Stories Legend */}
                <div className="flex items-center justify-center gap-4 mt-2 text-xs text-gray-500">
                    <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-400"></div>
                        <Phone size={10} />
                        <span>Contacts</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500"></div>
                        <AtSign size={10} />
                        <span>Social</span>
                    </div>
                </div>
            </div>



            {/* Unified Feed */}
            <div className="px-4 py-4">
                <AnimatePresence mode='popLayout'>
                    {posts
                        .filter(post => {
                            if (activeTab === 'foryou') return true;
                            if (activeTab === 'following') {
                                return ['Following', 'Friend', 'Subscribed'].includes(post.author.context);
                            }
                            if (activeTab === 'trending') {
                                const isTrendingHash = post.hashtags?.includes('#Trending');
                                const isHighViews = typeof post.stats.views === 'string' && (post.stats.views.includes('M') || post.stats.views.includes('K'));
                                return isTrendingHash || isHighViews || post.type === 'poll';
                            }
                            return true;
                        })
                        .map((post, index) => renderPost(post, index))}
                </AnimatePresence>
                {/* Empty State for Filters */}
                {posts.filter(p => {
                    if (activeTab === 'following') return ['Following', 'Friend', 'Subscribed'].includes(p.author.context);
                    if (activeTab === 'trending') return p.hashtags?.includes('#Trending') || (typeof p.stats.views === 'string' && (p.stats.views.includes('M') || p.stats.views.includes('K'))) || p.type === 'poll';
                    return true;
                }).length === 0 && (
                        <div className="text-center py-10 text-gray-500">
                            <p>No posts found for this tab.</p>
                        </div>
                    )}
            </div>

            {/* Create Post FAB */}
            <motion.button
                className="fixed bottom-24 right-6 w-14 h-14 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full shadow-2xl flex items-center justify-center text-white z-40"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <Zap size={24} fill="white" />
            </motion.button>
        </div>
    );
};

export default Home;
