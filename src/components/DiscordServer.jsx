import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Hash,
    Volume2,
    Mic,
    MicOff,
    Headphones,
    Settings,
    Plus,
    ChevronDown,
    Search,
    Bell,
    Users,
    MessageSquare,
    Gift,
    Sticker,
    Smile,
    Image as ImageIcon,
    Video,
    Pin,
    Monitor,
    Rocket
} from 'lucide-react';
import GameLobby from './GameLobby';

const DiscordServer = ({ group, onBack }) => {
    const [selectedChannel, setSelectedChannel] = useState({ id: 'gen', name: 'general', type: 'text' });
    const [showMembers, setShowMembers] = useState(true);
    const [isMuted, setIsMuted] = useState(false);
    const [isDeafened, setIsDeafened] = useState(false);
    const [showGameLobby, setShowGameLobby] = useState(false);
    const [messageInput, setMessageInput] = useState('');

    const channels = [
        {
            category: 'Information',
            items: [
                { id: 'ann', name: 'announcements', type: 'text' },
                { id: 'rul', name: 'rules', type: 'text' },
                { id: 'res', name: 'resources', type: 'text' }
            ]
        },
        {
            category: 'Text Channels',
            items: [
                { id: 'gen', name: 'general', type: 'text' },
                { id: 'dev', name: 'development', type: 'text' },
                { id: 'des', name: 'design', type: 'text' },
                { id: 'mem', name: 'memes', type: 'text' }
            ]
        },
        {
            category: 'Voice Channels',
            items: [
                { id: 'lob', name: 'Lobby', type: 'voice', users: [] },
                {
                    id: 'gam', name: 'Gaming Lounge', type: 'voice', users: [
                        { id: 1, name: 'Alex', avatar: '🎮', mute: false },
                        { id: 2, name: 'Sam', avatar: '🕹️', mute: true }
                    ]
                },
                { id: 'mus', name: 'Music Station', type: 'voice', users: [] }
            ]
        }
    ];

    const messages = [
        { id: 1, user: 'Alex', avatar: '🎮', role: 'Admin', color: 'text-yellow-400', content: 'Welcome to the new server layout! 🚀', time: 'Today at 10:00 AM' },
        { id: 2, user: 'Sarah', avatar: '🎨', role: 'Designer', color: 'text-pink-400', content: 'The glassmorphism looks amazing! great job on the UI.', time: 'Today at 10:05 AM' },
        { id: 3, user: 'Mike', avatar: '💻', role: 'Developer', color: 'text-blue-400', content: 'deployed the latest build. check #announcements for changelog.', time: 'Today at 10:15 AM' },
        { id: 4, user: 'Bot', avatar: '🤖', role: 'Bot', color: 'text-purple-400', content: '🎵 Now playing: "Midnight City" by M83', isBot: true, time: 'Today at 10:16 AM' },
        { id: 5, user: 'You', avatar: '🕶️', role: 'Member', color: 'text-white', content: 'Finally! I can share my new designs here. @Sarah check this out.', time: 'Today at 10:20 AM' },
    ];

    const members = [
        {
            category: 'Online — 4', users: [
                { id: 1, name: 'Alex', avatar: '🎮', status: 'Playing Minecraft', color: 'text-yellow-400' },
                { id: 2, name: 'Sarah', avatar: '🎨', status: 'Designing...', color: 'text-pink-400' },
                { id: 3, name: 'Mike', avatar: '💻', status: 'Visual Studio Code', color: 'text-blue-400' },
                { id: 4, name: 'Bot', avatar: '🤖', status: 'Beep Boop', isBot: true, color: 'text-purple-400' },
            ]
        },
        {
            category: 'Offline — 12', users: [
                { id: 5, name: 'John', avatar: '🎸', color: 'text-gray-400' },
                { id: 6, name: 'Emma', avatar: '📚', color: 'text-gray-400' },
            ]
        }
    ];

    return (
        <div className="flex h-screen bg-[#313338] text-gray-100 font-sans overflow-hidden">
            {/* Channels Sidebar */}
            <div className="w-64 bg-[#2b2d31] flex flex-col flex-shrink-0">
                {/* Server Header */}
                <div className="h-12 px-4 shadow-sm flex items-center justify-between hover:bg-[#35373c] cursor-pointer transition-colors border-b border-[#1f2023]">
                    <h1 className="font-bold truncate text-white">{group.name}</h1>
                    <ChevronDown size={20} />
                </div>

                {/* Channels List */}
                <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-4">
                    {channels.map((category) => (
                        <div key={category.category}>
                            <div className="flex items-center justify-between px-1 mb-1 text-xs font-bold text-gray-400 hover:text-gray-300 uppercase tracking-wide cursor-pointer">
                                <div className="flex items-center gap-0.5">
                                    <ChevronDown size={12} />
                                    <span>{category.category}</span>
                                </div>
                                <Plus size={14} className="cursor-pointer" />
                            </div>
                            <div className="space-y-[2px]">
                                {category.items.map((channel) => (
                                    <div
                                        key={channel.id}
                                        onClick={() => setSelectedChannel(channel)}
                                        className={`group px-2 py-1.5 rounded-md flex items-center gap-2 cursor-pointer transition-all
                                            ${selectedChannel.id === channel.id
                                                ? 'bg-[#404249] text-white'
                                                : 'text-gray-400 hover:bg-[#35373c] hover:text-gray-200'
                                            }`}
                                    >
                                        {channel.type === 'text' ? (
                                            <Hash size={20} className="text-gray-500" />
                                        ) : (
                                            <Volume2 size={20} className="text-gray-500" />
                                        )}
                                        <span className={`truncate ${selectedChannel.id === channel.id ? 'font-medium' : ''}`}>
                                            {channel.name}
                                        </span>

                                        {channel.type === 'voice' && channel.users.length > 0 && (
                                            <div className="ml-auto flex -space-x-2">
                                                {channel.users.map(u => (
                                                    <div key={u.id} className="w-5 h-5 rounded-full bg-gray-600 border border-[#2b2d31] flex items-center justify-center text-[10px]">
                                                        {u.avatar}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* User User Bar */}
                <div className="bg-[#232428] p-2 flex items-center gap-2">
                    <div className="relative group cursor-pointer">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-sm">
                            🕶️
                        </div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#232428]"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-white truncate">You</div>
                        <div className="text-xs text-gray-400 truncate">#1234</div>
                    </div>
                    <div className="flex items-center">
                        <button onClick={() => setIsMuted(!isMuted)} className="p-1.5 hover:bg-white/10 rounded-md text-gray-200">
                            {isMuted ? <MicOff size={18} className="text-red-500" /> : <Mic size={18} />}
                        </button>
                        <button onClick={() => setIsDeafened(!isDeafened)} className="p-1.5 hover:bg-white/10 rounded-md text-gray-200">
                            {isDeafened ? <Headphones size={18} className="text-red-500" /> : <Headphones size={18} />}
                        </button>
                        <button onClick={() => setShowGameLobby(true)} className="p-1.5 hover:bg-white/10 rounded-md text-gray-200 hover:text-green-400">
                            <Rocket size={18} />
                        </button>
                        <button className="p-1.5 hover:bg-white/10 rounded-md text-gray-200">
                            <Settings size={18} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col bg-[#313338] min-w-0">
                {/* Channel Header */}
                <div className="h-12 px-4 flex items-center justify-between border-b border-[#26272d] shadow-sm flex-shrink-0">
                    <div className="flex items-center gap-2 overflow-hidden">
                        <Hash size={24} className="text-gray-400 flex-shrink-0" />
                        <h3 className="font-bold text-white truncate">{selectedChannel.name}</h3>
                        {selectedChannel.description && (
                            <>
                                <span className="text-gray-500 hidden sm:inline">|</span>
                                <span className="text-sm text-gray-400 truncate hidden sm:inline">{selectedChannel.description}</span>
                            </>
                        )}
                    </div>
                    <div className="flex items-center gap-4 text-gray-300">
                        <div className="flex items-center gap-4 mr-2">
                            <Phone size={22} className="hover:text-gray-100 cursor-pointer hidden md:block" />
                            <Video size={22} className="hover:text-gray-100 cursor-pointer hidden md:block" />
                            <Pin size={22} className="hover:text-gray-100 cursor-pointer hidden md:block" />
                            <Users
                                size={22}
                                className={`hover:text-gray-100 cursor-pointer ${showMembers ? 'text-white' : ''}`}
                                onClick={() => setShowMembers(!showMembers)}
                            />
                        </div>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search"
                                className="bg-[#1e1f22] text-sm px-2 py-1 rounded w-36 transition-all focus:w-56 outline-none text-white placeholder-gray-400"
                            />
                            <Search size={16} className="absolute right-2 top-1.5 text-gray-400" />
                        </div>
                        <Bell size={22} className="hover:text-gray-100 cursor-pointer" />
                        <button onClick={onBack} className="md:hidden text-gray-400 hover:text-white">Back</button>
                    </div>
                </div>

                {/* Messages Feed */}
                <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-6">
                    {/* Channel Welcome */}
                    <div className="mt-4 mb-8">
                        <div className="w-16 h-16 rounded-full bg-[#41434a] flex items-center justify-center mb-4">
                            <Hash size={40} className="text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-2">Welcome to #{selectedChannel.name}!</h2>
                        <p className="text-gray-400">This is the start of the #{selectedChannel.name} channel.</p>
                    </div>

                    {messages.map((msg) => (
                        <div key={msg.id} className="flex gap-4 group hover:bg-[#2e3035] -mx-4 px-4 py-1">
                            <div className="w-10 h-10 rounded-full flex-shrink-0 bg-gray-700 flex items-center justify-center text-xl mt-1 cursor-pointer hover:opacity-80 transition-opacity">
                                {msg.avatar}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className={`font-medium hover:underline cursor-pointer ${msg.color}`}>{msg.user}</span>
                                    {msg.isBot && <span className="bg-[#5865f2] text-[10px] px-1.5 py-0.5 rounded text-white font-bold uppercase">Bot</span>}
                                    <span className="text-xs text-gray-400">{msg.time}</span>
                                </div>
                                <p className={`text-gray-300 whitespace-pre-wrap leading-relaxed ${msg.isBot ? 'font-mono text-sm bg-[#2b2d31] p-2 rounded-lg inline-block border-l-4 border-[#5865f2]' : ''}`}>
                                    {msg.content}
                                </p>
                            </div>

                            {/* Hover Actions (Mock) */}
                            <div className="hidden group-hover:flex items-center gap-2 bg-[#313338] shadow-md border border-[#26272d] rounded-md px-2 py-1 absolute right-8 -mt-4">
                                <Smile size={20} className="text-gray-400 hover:text-yellow-400 cursor-pointer" />
                                <MessageSquare size={20} className="text-gray-400 hover:text-white cursor-pointer" />
                                <MoreVertical size={20} className="text-gray-400 hover:text-white cursor-pointer" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Message Input */}
                <div className="p-4 pt-0">
                    <div className="bg-[#383a40] rounded-lg px-4 py-2.5 flex items-center gap-3">
                        <button className="text-gray-400 hover:text-white bg-[#41434a] rounded-full p-1">
                            <Plus size={16} />
                        </button>
                        <input
                            type="text"
                            value={messageInput}
                            onChange={(e) => setMessageInput(e.target.value)}
                            placeholder={`Message #${selectedChannel.name}`}
                            className="bg-transparent flex-1 outline-none text-white placeholder-gray-500"
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && messageInput) {
                                    // Hacky mock send
                                    setMessageInput('');
                                }
                            }}
                        />
                        <div className="flex items-center gap-3 text-gray-400">
                            <Gift size={22} className="hover:text-white cursor-pointer" />
                            <Sticker size={22} className="hover:text-white cursor-pointer" />
                            <SmileyButton className="hover:text-yellow-400 cursor-pointer" />
                        </div>
                    </div>
                    {/* Typing Indicator */}
                    <div className="h-6 mt-1 flex items-center gap-1">
                        <span className="jumping-dots text-xs font-bold text-gray-400">Alexa is typing...</span>
                    </div>
                </div>
            </div>

            {/* Members Sidebar (Right) */}
            <AnimatePresence>
                {showMembers && (
                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 240, opacity: 1 }}
                        exit={{ width: 0, opacity: 0 }}
                        className="bg-[#2b2d31] flex-shrink-0 overflow-y-auto custom-scrollbar hidden lg:block"
                    >
                        <div className="p-3">
                            {members.map((section) => (
                                <div key={section.category} className="mb-6">
                                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2 px-2 hover:text-gray-300 cursor-pointer">
                                        {section.category}
                                    </h3>
                                    <div className="space-y-1">
                                        {section.users.map((user) => (
                                            <div key={user.id} className="flex items-center gap-3 px-2 py-1.5 rounded hover:bg-[#35373c] cursor-pointer group opacity-90 hover:opacity-100">
                                                <div className="relative">
                                                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-sm">
                                                        {user.avatar}
                                                    </div>
                                                    <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[#2b2d31] ${section.category.includes('Online') ? 'bg-green-500' : 'bg-gray-500'
                                                        }`}></div>
                                                </div>
                                                <div className="min-w-0">
                                                    <div className={`font-medium text-sm ${user.color || 'text-gray-300'}`}>
                                                        {user.name}
                                                        {user.isBot && <span className="ml-1 bg-[#5865f2] text-[10px] px-1 py-px rounded text-white text-center align-middle">BOT</span>}
                                                    </div>
                                                    {user.status && (
                                                        <div className="text-xs text-gray-400 truncate">{user.status}</div>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Game Lobby Overlay */}
            <AnimatePresence>
                {showGameLobby && <GameLobby onClose={() => setShowGameLobby(false)} />}
            </AnimatePresence>
        </div>
    );
};

// Helper for the smiley face since lucide 'Smile' is sometimes different styles
const SmileyButton = ({ className }) => (
    <div className={className}>
        <Smile size={22} />
    </div>
);

// Helper for more dots
const MoreVertical = ({ size, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <circle cx="12" cy="12" r="1" />
        <circle cx="12" cy="5" r="1" />
        <circle cx="12" cy="19" r="1" />
    </svg>
);

export default DiscordServer;
