import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { MessageCircle, Globe, LayoutGrid, Sparkles, User } from 'lucide-react';
import { motion } from 'framer-motion';
import AITwin from './AITwin';

const Layout = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const navItems = [
        { path: '/chat', icon: MessageCircle, label: 'Chat' },
        { path: '/', icon: Globe, label: 'Social' },
        { path: '/hub', icon: LayoutGrid, label: 'Hub' },
        { path: '/ai', icon: Sparkles, label: 'AI' },
        { path: '/profile', icon: User, label: 'Profile' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 pb-20">
            {/* Main Content */}
            <main className="max-w-md mx-auto">
                <Outlet />
            </main>

            {/* Bottom Navigation */}
            <nav className="fixed bottom-0 left-0 right-0 glass-dark border-t border-white/10 z-50">
                <div className="max-w-md mx-auto px-4 py-3">
                    <div className="flex items-center justify-around">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = location.pathname === item.path;

                            return (
                                <button
                                    key={item.path}
                                    onClick={() => navigate(item.path)}
                                    className="nav-item relative"
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute -top-1 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                        />
                                    )}
                                    <Icon
                                        size={22}
                                        className={isActive ? 'text-primary-400' : 'text-gray-400'}
                                    />
                                    <span className={`text-xs ${isActive ? 'text-primary-400 font-semibold' : 'text-gray-400'}`}>
                                        {item.label}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </nav>
            <AITwin />
        </div>
    );
};

export default Layout;
