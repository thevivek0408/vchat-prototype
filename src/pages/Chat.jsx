import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import StreakHabitat from '../components/StreakHabitat'; // Added Import
import {
    Search,
    Plus,
    Video,
    Phone,
    MoreVertical,
    Send,
    Smile,
    Paperclip,
    Mic,
    MicOff,
    Languages,
    Volume2,
    VolumeX,
    Copy,
    Check,
    Globe,
    Sparkles,
    ChevronDown,
    X,
    PlayCircle,
    PauseCircle,
    Download,
    Users,
    Calendar,
    ShoppingCart,
    DollarSign,
    CheckSquare,
    FileText,
    ChevronUp,
    Receipt,

    Sprout,
    Zap,
    Infinity,
    Flower2
} from 'lucide-react';

const Chat = () => {
    const navigate = useNavigate();
    const [selectedChat, setSelectedChat] = useState(null);
    const [message, setMessage] = useState('');
    const [isRecording, setIsRecording] = useState(false);
    const [recordingTime, setRecordingTime] = useState(0);
    const [showTranslationSettings, setShowTranslationSettings] = useState(false);
    const [translationEnabled, setTranslationEnabled] = useState({});
    const [selectedLanguage, setSelectedLanguage] = useState({});
    const [copiedMessage, setCopiedMessage] = useState(null);
    const [playingVoice, setPlayingVoice] = useState(null);
    const [translatedMessages, setTranslatedMessages] = useState({}); // Track which messages are translated
    const [translatingMessage, setTranslatingMessage] = useState(null); // Show loading state
    const [chatFilter, setChatFilter] = useState('all'); // 'all', 'personal', 'groups', 'synergy'
    const [showSmartFeatures, setShowSmartFeatures] = useState(false); // Smart features panel
    const [messages, setMessages] = useState([]); // Chat messages state
    const recordingInterval = useRef(null);

    // Load mock messages when chat is selected
    useEffect(() => {
        if (selectedChat) {
            setMessages([
                {
                    id: 1,
                    sender: 'them',
                    text: 'Hey! How are you doing?',
                    originalText: 'Hey! How are you doing?',
                    originalLang: 'en',
                    translatedText: 'नमस्ते! आप कैसे हैं?',
                    time: '10:25 AM',
                    hasVoice: false
                },
                {
                    id: 2,
                    sender: 'me',
                    text: 'I\'m good! Just working on the Vchat prototype.',
                    originalText: 'I\'m good! Just working on the Vchat prototype.',
                    originalLang: 'en',
                    time: '10:26 AM',
                    hasVoice: false
                },
                {
                    id: 3,
                    sender: 'them',
                    text: selectedChat.lastMessage,
                    originalText: selectedChat.lastMessage,
                    originalLang: selectedChat.language || 'en',
                    translatedText: selectedChat.language === 'hi' ? 'Society meeting at 7 PM today' : null,
                    time: selectedChat.time,
                    hasVoice: false
                },
                {
                    id: 4,
                    sender: 'them',
                    text: '',
                    originalText: 'This is a voice message about the project timeline',
                    originalLang: 'en',
                    translatedText: 'यह प्रोजेक्ट टाइमलाइन के बारे में एक वॉयस मैसेज है',
                    time: '10:28 AM',
                    hasVoice: true,
                    voiceDuration: '0:15',
                    transcription: 'This is a voice message about the project timeline'
                },
                {
                    id: 5,
                    sender: 'me',
                    text: '',
                    originalText: 'Got it! I\'ll review it by tomorrow',
                    originalLang: 'en',
                    time: '10:29 AM',
                    hasVoice: true,
                    voiceDuration: '0:08',
                    transcription: 'Got it! I\'ll review it by tomorrow'
                }
            ]);
        }
    }, [selectedChat]);

    const handleSplitBill = () => {
        const newMessage = {
            id: messages.length + 1,
            text: 'Split Bill Request',
            sender: 'me',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            type: 'split_bill',
            amount: 1250,
            title: 'Dinner at Paradise',
            status: 'unpaid'
        };
        setMessages([...messages, newMessage]);
        setMessage('');
        setShowSmartFeatures(false);
    };

    const languages = [
        { code: 'en', name: 'English', flag: '🇬🇧' },
        { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
        { code: 'te', name: 'Telugu', flag: '🇮🇳' },
        { code: 'ta', name: 'Tamil', flag: '🇮🇳' },
        { code: 'es', name: 'Spanish', flag: '🇪🇸' },
        { code: 'fr', name: 'French', flag: '🇫🇷' },
        { code: 'de', name: 'German', flag: '🇩🇪' },
        { code: 'ja', name: 'Japanese', flag: '🇯🇵' },
        { code: 'zh', name: 'Chinese', flag: '🇨🇳' },
        { code: 'ar', name: 'Arabic', flag: '🇸🇦' },
    ];

    const chats = [
        {
            id: 1,
            name: 'Amit Patel',
            username: '@amit_tech',
            avatar: '👨‍💼',
            lastMessage: 'Can you review the project proposal?',
            time: '10:30 AM',
            unread: 2,
            context: 'Work',
            online: true,
            isGroup: false,
            language: 'en',
            connectionTier: 'synergy', // Work + Chat
            connectionScore: 85
        },
        {
            id: 2,
            name: 'Family Group',
            username: '5 members',
            avatar: '👨‍👩‍👧‍👦',
            lastMessage: 'Mom: Don\'t forget to buy milk',
            time: '9:15 AM',
            unread: 0,
            context: 'Family',
            online: false,
            isGroup: true,
            language: 'hi',
            connectionTier: 'infinity', // Lifetime connection
            connectionScore: 99
        },
        {
            id: 3,
            name: 'Priya Sharma',
            username: '@priya_design',
            avatar: '👩‍🎨',
            lastMessage: 'The new designs look amazing! 🎨',
            time: 'Yesterday',
            unread: 0,
            context: 'Work',
            online: true,
            isGroup: false,
            language: 'en',
            connectionTier: 'seed', // New connection
            connectionScore: 15
        },
        {
            id: 4,
            name: 'राजेश कुमार',
            username: '@rajesh_neighbor',
            avatar: '👨',
            lastMessage: 'सोसाइटी मीटिंग आज शाम 7 बजे',
            time: 'Yesterday',
            unread: 1,
            context: 'Community',
            online: false,
            isGroup: false,
            language: 'hi',
            connectionTier: 'bloom', // Consistent chatter
            connectionScore: 45
        },
        {
            id: 5,
            name: 'Work Team',
            username: '12 members',
            avatar: '💼',
            lastMessage: 'Sarah: Meeting at 3 PM today',
            time: '2 days ago',
            unread: 5,
            context: 'Work',
            online: false,
            isGroup: true,
            language: 'en',
            connectionTier: 'bloom',
            connectionScore: 50
        },
        {
            id: 6,
            name: 'College Friends',
            username: '8 members',
            avatar: '🎓',
            lastMessage: 'Rahul: Who\'s up for reunion?',
            time: '3 days ago',
            unread: 0,
            context: 'Personal',
            online: false,
            isGroup: true,
            language: 'en',
            connectionTier: 'infinity',
            connectionScore: 95
        },
        {
            id: 7,
            name: 'Building Society',
            username: '45 members',
            avatar: '🏢',
            lastMessage: 'Admin: Maintenance due on 20th',
            time: '1 week ago',
            unread: 0,
            context: 'Community',
            online: false,
            isGroup: true,
            language: 'hi',
            connectionTier: 'seed',
            connectionScore: 10
        },
    ];

    // Filter chats based on selected tab
    const filteredChats = chats.filter(chat => {
        if (chatFilter === 'all') return true;
        if (chatFilter === 'personal') return !chat.isGroup;
        if (chatFilter === 'groups') return chat.isGroup;
        if (chatFilter === 'synergy') return ['synergy', 'infinity'].includes(chat.connectionTier);
        return true;
    });

    const getConnectionConfig = (tier) => {
        switch (tier) {
            case 'seed': return { icon: Sprout, color: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/20' };
            case 'bloom': return { icon: Flower2, color: 'text-pink-400', bg: 'bg-pink-500/10', border: 'border-pink-500/20' };
            case 'synergy': return { icon: Zap, color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20' };
            case 'infinity': return { icon: Infinity, color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' };
            default: return null;
        }
    };



    const getContextColor = (context) => {
        const colors = {
            'Work': 'from-blue-500 to-cyan-500',
            'Family': 'from-green-500 to-emerald-500',
            'Community': 'from-purple-500 to-pink-500',
            'Personal': 'from-orange-500 to-red-500'
        };
        return colors[context] || 'from-gray-500 to-gray-600';
    };

    const handleSendMessage = () => {
        if (message.trim()) {
            // Handle send message
            setMessage('');
        }
    };

    const startRecording = () => {
        setIsRecording(true);
        setRecordingTime(0);
        recordingInterval.current = setInterval(() => {
            setRecordingTime(prev => prev + 1);
        }, 1000);
    };

    const stopRecording = () => {
        setIsRecording(false);
        if (recordingInterval.current) {
            clearInterval(recordingInterval.current);
        }
        // Handle send voice message
        setRecordingTime(0);
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const toggleTranslation = (chatId) => {
        setTranslationEnabled(prev => ({
            ...prev,
            [chatId]: !prev[chatId]
        }));
    };

    const copyMessage = (messageId, text) => {
        navigator.clipboard.writeText(text);
        setCopiedMessage(messageId);
        setTimeout(() => setCopiedMessage(null), 2000);
    };

    const toggleVoicePlay = (messageId) => {
        setPlayingVoice(playingVoice === messageId ? null : messageId);
    };

    // WeChat-style message translation
    const translateMessage = async (messageId, text, sourceLang) => {
        setTranslatingMessage(messageId);

        // Simulate API call to Azure Translator
        setTimeout(() => {
            const targetLang = selectedLanguage[selectedChat.id] || 'en';

            // Mock translations for demo
            const translations = {
                'Can you review the project proposal?': {
                    hi: 'क्या आप परियोजना प्रस्ताव की समीक्षा कर सकते हैं?',
                    te: 'మీరు ప్రాజెక్ట్ ప్రతిపాదనను సమీక్షించగలరా?',
                    es: '¿Puedes revisar la propuesta del proyecto?',
                    zh: '你能审查项目提案吗？'
                },
                'सोसाइटी मीटिंग आज शाम 7 बजे': {
                    en: 'Society meeting today at 7 PM',
                    hi: 'सोसाइटी मीटिंग आज शाम 7 बजे',
                    te: 'సొసైటీ సమావేశం ఈరోజు సాయంత్రం 7 గంటలకు'
                },
                'This is a voice message about the project timeline': {
                    hi: 'यह परियोजना समयरेखा के बारे में एक वॉयस संदेश है',
                    te: 'ఇది ప్రాజెక్ట్ టైమ్‌లైన్ గురించి వాయిస్ మెసేజ్',
                    zh: '这是关于项目时间表的语音消息'
                }
            };

            const translatedText = translations[text]?.[targetLang] || `[Translated to ${targetLang}] ${text}`;

            setTranslatedMessages(prev => ({
                ...prev,
                [messageId]: {
                    text: translatedText,
                    targetLang,
                    sourceLang
                }
            }));
            setTranslatingMessage(null);
        }, 800); // Simulate network delay
    };

    const hideTranslation = (messageId) => {
        setTranslatedMessages(prev => {
            const newState = { ...prev };
            delete newState[messageId];
            return newState;
        });
    };

    const detectLanguage = (text) => {
        // Simple language detection based on character sets
        if (/[\u0900-\u097F]/.test(text)) return 'hi'; // Hindi
        if (/[\u0C00-\u0C7F]/.test(text)) return 'te'; // Telugu
        if (/[\u0B80-\u0BFF]/.test(text)) return 'ta'; // Tamil
        if (/[\u4E00-\u9FFF]/.test(text)) return 'zh'; // Chinese
        if (/[\u0600-\u06FF]/.test(text)) return 'ar'; // Arabic
        return 'en'; // Default to English
    };

    if (selectedChat) {
        const chatTranslationEnabled = translationEnabled[selectedChat.id];
        const chatLanguage = selectedLanguage[selectedChat.id] || 'hi';

        return (
            <div className="min-h-screen flex flex-col">
                {/* Chat Header */}
                <header className="glass-dark border-b border-white/10 px-4 py-3 sticky top-0 z-40">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setSelectedChat(null)}
                                className="text-gray-400 hover:text-white"
                            >
                                ←
                            </button>
                            <div className="relative">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-xl">
                                    {selectedChat.avatar}
                                </div>
                                {selectedChat.online && (
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-gray-900 rounded-full"></div>
                                )}
                            </div>
                            <div>
                                <div className="flex items-center">
                                    <h2 className="font-semibold text-white">{selectedChat.name}</h2>
                                    {/* Streak Habitat Display */}
                                    {!selectedChat.isGroup && selectedChat.streak > 0 && (
                                        <StreakHabitat streak={selectedChat.streak} className="ml-1" />
                                    )}
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r ${getContextColor(selectedChat.context)} text-white`}>
                                        {selectedChat.context}
                                    </span>
                                    {selectedChat.online && (
                                        <span className="text-xs text-green-400">Online</span>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            {/* Smart Features Toggle (Groups Only) */}
                            {selectedChat.isGroup && (
                                <button
                                    onClick={() => setShowSmartFeatures(!showSmartFeatures)}
                                    className={`p-2 rounded-lg transition-all ${showSmartFeatures
                                        ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg'
                                        : 'hover:bg-white/5 text-gray-300'
                                        }`}
                                    title="Smart Group Features"
                                >
                                    <Sparkles size={20} />
                                </button>
                            )}

                            {/* Translation Toggle */}
                            <button
                                onClick={() => toggleTranslation(selectedChat.id)}
                                className={`p-2 rounded-lg transition-all ${chatTranslationEnabled
                                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg'
                                    : 'hover:bg-white/5 text-gray-300'
                                    }`}
                                title="Toggle Translation"
                            >
                                <Languages size={20} />
                            </button>
                            <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                                <Video size={20} className="text-gray-300" />
                            </button>
                            <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                                <Phone size={20} className="text-gray-300" />
                            </button>
                            <button
                                onClick={() => setShowTranslationSettings(!showTranslationSettings)}
                                className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                            >
                                <MoreVertical size={20} className="text-gray-300" />
                            </button>
                        </div>
                    </div>

                    {/* Smart Features Panel (Groups Only) */}
                    <AnimatePresence>
                        {showSmartFeatures && selectedChat.isGroup && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden bg-black/40 backdrop-blur-md border-b border-white/10"
                            >
                                <div className="p-4 grid grid-cols-4 gap-3">
                                    <button
                                        onClick={() => navigate('/groups')}
                                        className="flex flex-col items-center gap-2 group"
                                    >
                                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                                            <Calendar className="text-white" size={24} />
                                        </div>
                                        <span className="text-xs text-gray-300 font-medium">Calendar</span>
                                    </button>

                                    <button
                                        onClick={handleSplitBill}
                                        className="flex flex-col items-center gap-2 group"
                                    >
                                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                                            <Receipt className="text-white" size={24} />
                                        </div>
                                        <span className="text-xs text-gray-300 font-medium">Split Bill</span>
                                    </button>

                                    <button
                                        onClick={() => navigate('/groups')}
                                        className="flex flex-col items-center gap-2 group"
                                    >
                                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                                            <CheckSquare className="text-white" size={24} />
                                        </div>
                                        <span className="text-xs text-gray-300 font-medium">Tasks</span>
                                    </button>

                                    <button
                                        onClick={() => navigate('/groups')}
                                        className="flex flex-col items-center gap-2 group"
                                    >
                                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                                            <FileText className="text-white" size={24} />
                                        </div>
                                        <span className="text-xs text-gray-300 font-medium">Files</span>
                                    </button>
                                </div>
                                <div className="px-4 pb-3">
                                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-primary-500/20 p-2 rounded-lg">
                                                <Sparkles size={16} className="text-primary-400" />
                                            </div>
                                            <div className="text-sm">
                                                <p className="text-white font-medium">Smart Summary</p>
                                                <p className="text-gray-400 text-xs">Last meeting: Sunday 8 PM</p>
                                            </div>
                                        </div>
                                        <span className="text-xs text-primary-400 font-semibold cursor-pointer">View</span>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Translation Settings Panel */}
                    <AnimatePresence>
                        {showTranslationSettings && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="mt-3 overflow-hidden"
                            >
                                <div className="glass rounded-xl p-3">
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-2">
                                            <Sparkles className="text-primary-400" size={18} />
                                            <h3 className="text-white font-semibold text-sm">AI Translation Settings</h3>
                                        </div>
                                        <button
                                            onClick={() => setShowTranslationSettings(false)}
                                            className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                                        >
                                            <X size={16} className="text-gray-400" />
                                        </button>
                                    </div>
                                    <p className="text-xs text-gray-400 mb-3">
                                        Translate messages to your preferred language
                                    </p>
                                    <div className="grid grid-cols-3 gap-2">
                                        {languages.slice(0, 6).map((lang) => (
                                            <button
                                                key={lang.code}
                                                onClick={() => setSelectedLanguage(prev => ({
                                                    ...prev,
                                                    [selectedChat.id]: lang.code
                                                }))}
                                                className={`p-2 rounded-lg text-xs font-medium transition-all ${chatLanguage === lang.code
                                                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white'
                                                    : 'glass text-gray-300 hover:bg-white/10'
                                                    }`}
                                            >
                                                <div className="text-lg mb-1">{lang.flag}</div>
                                                {lang.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Translation Active Banner */}
                    {chatTranslationEnabled && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-3 glass border border-primary-500/30 rounded-xl p-2 flex items-center gap-2"
                        >
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center">
                                <Languages size={14} className="text-white" />
                            </div>
                            <div className="flex-1">
                                <p className="text-xs text-white font-medium">
                                    Translation Active
                                </p>
                                <p className="text-xs text-gray-400">
                                    Translating to {languages.find(l => l.code === chatLanguage)?.name}
                                </p>
                            </div>
                            <button
                                onClick={() => toggleTranslation(selectedChat.id)}
                                className="text-xs text-primary-400 hover:text-primary-300"
                            >
                                Disable
                            </button>
                        </motion.div>
                    )}
                </header>

                {/* Messages */}
                <div className="flex-1 px-4 py-4 space-y-4 overflow-y-auto custom-scrollbar">
                    {messages.map((msg) => (
                        <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div className={`max-w-[75%] ${msg.sender === 'me'
                                ? 'bg-gradient-to-r from-primary-500 to-accent-500'
                                : 'glass'
                                } rounded-2xl px-4 py-2 relative group`}>
                                {/* Message Content Type Handling */}
                                {msg.type === 'split_bill' ? (
                                    <div className="min-w-[200px] text-white">
                                        <div className="flex items-center justify-between mb-2 pb-2 border-b border-white/20">
                                            <h3 className="font-semibold text-sm">{msg.title}</h3>
                                            <span className="bg-white/20 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                                                {msg.status}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                                <Receipt size={20} />
                                            </div>
                                            <div>
                                                <p className="text-xs opacity-80">Total Due</p>
                                                <p className="text-xl font-bold">₹{msg.amount}</p>
                                            </div>
                                        </div>
                                        <button className="w-full py-2 bg-white text-primary-600 rounded-xl font-bold text-sm shadow hover:bg-gray-100 transition-colors">
                                            Pay My Share
                                        </button>
                                    </div>
                                ) : msg.hasVoice ? (
                                    <div className="space-y-2">
                                        {/* Voice Player */}
                                        <div className="flex items-center gap-3">
                                            <button
                                                onClick={() => toggleVoicePlay(msg.id)}
                                                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${msg.sender === 'me'
                                                    ? 'bg-white/20 hover:bg-white/30'
                                                    : 'bg-primary-500/20 hover:bg-primary-500/30'
                                                    }`}
                                            >
                                                {playingVoice === msg.id ? (
                                                    <PauseCircle size={20} className="text-white" />
                                                ) : (
                                                    <PlayCircle size={20} className="text-white" />
                                                )}
                                            </button>

                                            {/* Waveform Visualization */}
                                            <div className="flex-1 flex items-center gap-1 h-8">
                                                {[...Array(20)].map((_, i) => (
                                                    <div
                                                        key={i}
                                                        className={`w-1 rounded-full transition-all ${playingVoice === msg.id && i < 10
                                                            ? 'bg-white h-6'
                                                            : 'bg-white/40 h-3'
                                                            }`}
                                                        style={{
                                                            height: playingVoice === msg.id
                                                                ? `${Math.random() * 24 + 8}px`
                                                                : `${Math.random() * 12 + 8}px`
                                                        }}
                                                    />
                                                ))}
                                            </div>

                                            <span className="text-xs text-white/80 font-medium">
                                                {msg.voiceDuration}
                                            </span>
                                        </div>

                                        {/* Voice Transcription */}
                                        {msg.transcription && (
                                            <div className={`pt-2 border-t ${msg.sender === 'me'
                                                ? 'border-white/20'
                                                : 'border-white/10'
                                                }`}>
                                                <div className="flex items-start gap-2 mb-1">
                                                    <Mic size={12} className="text-white/60 mt-0.5 flex-shrink-0" />
                                                    <p className="text-xs text-white/80 italic">
                                                        "{msg.transcription}"
                                                    </p>
                                                </div>

                                                {/* Translation of Voice */}
                                                {chatTranslationEnabled && msg.translatedText && msg.sender === 'them' && (
                                                    <div className="mt-2 pt-2 border-t border-white/10">
                                                        <div className="flex items-start gap-2">
                                                            <Languages size={12} className="text-primary-400 mt-0.5 flex-shrink-0" />
                                                            <p className="text-xs text-primary-300">
                                                                {msg.translatedText}
                                                            </p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    /* Text Message */
                                    <div>
                                        <p className="text-white">{msg.text}</p>

                                        {/* WeChat-Style On-Demand Translation */}
                                        {msg.sender === 'them' && (
                                            <div className="mt-2">
                                                {!translatedMessages[msg.id] ? (
                                                    /* Translate Button */
                                                    <button
                                                        onClick={() => translateMessage(msg.id, msg.text, detectLanguage(msg.text))}
                                                        disabled={translatingMessage === msg.id}
                                                        className="flex items-center gap-1.5 text-xs text-primary-400 hover:text-primary-300 transition-colors disabled:opacity-50"
                                                    >
                                                        {translatingMessage === msg.id ? (
                                                            <>
                                                                <div className="w-3 h-3 border-2 border-primary-400 border-t-transparent rounded-full animate-spin" />
                                                                <span>Translating...</span>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <Languages size={14} />
                                                                <span>Translate</span>
                                                            </>
                                                        )}
                                                    </button>
                                                ) : (
                                                    /* Translation Display */
                                                    <div className="mt-2 pt-2 border-t border-white/10">
                                                        <div className="flex items-start justify-between gap-2 mb-1">
                                                            <div className="flex items-start gap-2 flex-1">
                                                                <Languages size={14} className="text-primary-400 flex-shrink-0 mt-0.5" />
                                                                <div className="flex-1">
                                                                    <p className="text-sm text-primary-300">
                                                                        {translatedMessages[msg.id].text}
                                                                    </p>
                                                                    <p className="text-xs text-gray-500 mt-1">
                                                                        {languages.find(l => l.code === translatedMessages[msg.id].sourceLang)?.name} → {languages.find(l => l.code === translatedMessages[msg.id].targetLang)?.name}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <button
                                                                onClick={() => hideTranslation(msg.id)}
                                                                className="p-1 hover:bg-white/10 rounded transition-colors flex-shrink-0"
                                                                title="Hide translation"
                                                            >
                                                                <X size={12} className="text-gray-400" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        {/* Auto Translation (when enabled globally) */}
                                        {chatTranslationEnabled && msg.translatedText && msg.sender === 'them' && !translatedMessages[msg.id] && (
                                            <div className="mt-2 pt-2 border-t border-white/10">
                                                <div className="flex items-start gap-2">
                                                    <Sparkles size={14} className="text-accent-400 flex-shrink-0 mt-0.5" />
                                                    <div>
                                                        <p className="text-sm text-accent-300">
                                                            {msg.translatedText}
                                                        </p>
                                                        <p className="text-xs text-gray-500 mt-1">
                                                            Auto-translated
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Message Actions */}
                                <div className="flex items-center justify-between mt-2">
                                    <p className="text-xs text-white/70">{msg.time}</p>

                                    {/* Quick Actions */}
                                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button
                                            onClick={() => copyMessage(msg.id, msg.transcription || msg.text)}
                                            className="p-1 hover:bg-white/10 rounded transition-colors"
                                            title="Copy"
                                        >
                                            {copiedMessage === msg.id ? (
                                                <Check size={14} className="text-green-400" />
                                            ) : (
                                                <Copy size={14} className="text-white/60" />
                                            )}
                                        </button>
                                        {msg.hasVoice && (
                                            <button
                                                className="p-1 hover:bg-white/10 rounded transition-colors"
                                                title="Download"
                                            >
                                                <Download size={14} className="text-white/60" />
                                            </button>
                                        )}
                                        {msg.translatedText && (
                                            <button
                                                className="p-1 hover:bg-white/10 rounded transition-colors"
                                                title="Play Translation"
                                            >
                                                <Volume2 size={14} className="text-white/60" />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Message Input */}
                <div className="glass-dark border-t border-white/10 px-4 py-3">
                    {/* Recording Indicator */}
                    <AnimatePresence>
                        {isRecording && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="mb-3 glass border border-red-500/30 rounded-xl p-3"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                                        <span className="text-sm text-white font-medium">Recording...</span>
                                    </div>
                                    <div className="flex-1 flex items-center gap-1">
                                        {[...Array(15)].map((_, i) => (
                                            <div
                                                key={i}
                                                className="w-1 bg-red-500 rounded-full animate-pulse"
                                                style={{
                                                    height: `${Math.random() * 20 + 10}px`,
                                                    animationDelay: `${i * 0.1}s`
                                                }}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-sm text-white font-mono">
                                        {formatTime(recordingTime)}
                                    </span>
                                </div>
                                <div className="mt-2 flex items-center gap-2 text-xs text-gray-400">
                                    <Sparkles size={12} className="text-primary-400" />
                                    <span>AI will transcribe and translate your voice automatically</span>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                            <Smile size={22} className="text-gray-400" />
                        </button>
                        <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                            <Paperclip size={22} className="text-gray-400" />
                        </button>

                        {!isRecording ? (
                            <>
                                <input
                                    type="text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                    placeholder="Type a message..."
                                    className="flex-1 input"
                                />
                                <button
                                    onMouseDown={startRecording}
                                    className="p-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl hover:shadow-lg transition-all"
                                    title="Hold to record voice"
                                >
                                    <Mic size={20} className="text-white" />
                                </button>
                                <button
                                    onClick={handleSendMessage}
                                    className="p-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl hover:shadow-lg transition-all"
                                >
                                    <Send size={20} className="text-white" />
                                </button>
                            </>
                        ) : (
                            <>
                                <div className="flex-1 text-center">
                                    <p className="text-sm text-gray-400">Release to send, swipe left to cancel</p>
                                </div>
                                <button
                                    onClick={stopRecording}
                                    className="p-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl hover:shadow-lg transition-all"
                                >
                                    <Send size={20} className="text-white" />
                                </button>
                            </>
                        )}
                    </div>

                    {/* AI Features Info */}
                    {!isRecording && (
                        <div className="mt-2 flex items-center justify-center gap-4 text-xs text-gray-500">
                            <div className="flex items-center gap-1">
                                <Mic size={12} />
                                <span>Voice Transcription</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Languages size={12} />
                                <span>Auto Translation</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Sparkles size={12} />
                                <span>Powered by Azure AI</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            {/* Header */}
            <header className="sticky top-0 glass-dark border-b border-white/10 z-40 px-4 py-4">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-2xl font-bold text-white">Chats</h1>
                    <button className="p-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl hover:shadow-lg transition-all">
                        <Plus size={22} className="text-white" />
                    </button>
                </div>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search chats..."
                        className="input pl-10"
                    />
                </div>

                {/* AI Features Banner */}
                <div className="mt-3 glass border border-primary-500/30 rounded-xl p-3">
                    <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                            <Sparkles className="text-white" size={20} />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-white font-semibold text-sm mb-1">
                                AI-Powered Communication
                            </h3>
                            <p className="text-xs text-gray-400 mb-2">
                                Break language barriers with real-time translation and voice transcription
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="badge badge-info text-xs">
                                    <Languages size={10} className="mr-1" />
                                    10+ Languages
                                </span>
                                <span className="badge badge-success text-xs">
                                    <Mic size={10} className="mr-1" />
                                    Voice to Text
                                </span>
                                <span className="badge badge-warning text-xs">
                                    <Globe size={10} className="mr-1" />
                                    Auto-Detect
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Chat Filter Tabs - WhatsApp Style */}
                <div className="mt-4 flex gap-2">
                    <button
                        onClick={() => setChatFilter('all')}
                        className={`flex-1 py-2 px-4 rounded-xl font-semibold text-sm transition-all ${chatFilter === 'all'
                            ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg'
                            : 'glass text-gray-400 hover:text-white'
                            }`}
                    >
                        All ({chats.length})
                    </button>
                    <button
                        onClick={() => setChatFilter('personal')}
                        className={`flex-1 py-2 px-4 rounded-xl font-semibold text-sm transition-all ${chatFilter === 'personal'
                            ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg'
                            : 'glass text-gray-400 hover:text-white'
                            }`}
                    >
                        Personal ({chats.filter(c => !c.isGroup).length})
                    </button>
                    <button
                        onClick={() => setChatFilter('groups')}
                        className={`flex-1 py-2 px-4 rounded-xl font-semibold text-sm transition-all ${chatFilter === 'groups'
                            ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg'
                            : 'glass text-gray-400 hover:text-white'
                            }`}
                    >
                        Groups ({chats.filter(c => c.isGroup).length})
                    </button>
                    <button
                        onClick={() => setChatFilter('synergy')}
                        className={`flex-1 py-2 px-4 rounded-xl font-semibold text-sm transition-all ${chatFilter === 'synergy'
                            ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg'
                            : 'glass text-gray-400 hover:text-white'
                            }`}
                    >
                        ⚡ Synergy
                    </button>
                </div>

                {/* Manage Groups Link - Access Full Features */}
                {chatFilter === 'groups' && (
                    <div className="mt-3 glass border border-primary-500/30 rounded-xl p-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                                    <Users size={20} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-sm">Smart Group Features</h3>
                                    <p className="text-xs text-gray-400">Calendar, Tasks, Expenses & More</p>
                                </div>
                            </div>
                            <button
                                onClick={() => navigate('/groups')}
                                className="px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl text-white text-sm font-semibold hover:shadow-lg transition-all"
                            >
                                Manage →
                            </button>
                        </div>
                    </div>
                )}
            </header>

            {/* Chat List */}
            <div className="px-4 py-2">
                {filteredChats.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-gray-400">No {chatFilter === 'all' ? 'chats' : chatFilter} found</p>
                    </div>
                ) : (
                    filteredChats.map((chat, index) => (
                        <motion.button
                            key={chat.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setSelectedChat(chat)}
                            className="w-full glass hover:bg-white/10 rounded-2xl p-4 mb-2 transition-all"
                        >
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-2xl">
                                        {chat.avatar}
                                    </div>
                                    {chat.online && (
                                        <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-gray-900 rounded-full"></div>
                                    )}
                                    {/* Language Indicator */}
                                    {chat.language && chat.language !== 'en' && (
                                        <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center border-2 border-gray-900">
                                            <Languages size={10} className="text-white" />
                                        </div>
                                    )}
                                </div>
                                <div className="flex-1 text-left">
                                    <div className="flex items-center justify-between mb-1">
                                        <div className="flex items-center gap-2">
                                            <h3 className="font-semibold text-white">{chat.name}</h3>
                                            <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r ${getContextColor(chat.context)} text-white`}>
                                                {chat.context}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            {(() => {
                                                const config = getConnectionConfig(chat.connectionTier);
                                                if (config) {
                                                    const Icon = config.icon;
                                                    return (
                                                        <div
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                if (chat.connectionTier === 'synergy' || chat.connectionTier === 'infinity') {
                                                                    navigate(`/synergy/${chat.id}`);
                                                                }
                                                            }}
                                                            className={`flex items-center gap-1 px-1.5 py-0.5 rounded-full border ${config.bg} ${config.border} cursor-pointer hover:scale-110 transition-transform`}
                                                        >
                                                            <Icon size={10} className={config.color} fill="currentColor" />
                                                            {/* <span className={`text-[10px] font-bold ${config.color}`}>{chat.connectionScore}</span> */}
                                                        </div>
                                                    );
                                                }
                                                return null;
                                            })()}
                                            <span className="text-xs text-gray-400">{chat.time}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm text-gray-400 truncate">{chat.lastMessage}</p>
                                        {chat.unread > 0 && (
                                            <span className="ml-2 w-6 h-6 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                                                {chat.unread}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.button>
                    ))
                )}
            </div >
        </div >
    );
};

export default Chat;
