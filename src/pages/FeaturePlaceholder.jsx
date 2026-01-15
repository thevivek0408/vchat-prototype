import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Construction } from 'lucide-react';
import { motion } from 'framer-motion';

const FeaturePlaceholder = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // specific title based on route logic or just generic
    const getTitle = () => {
        const path = location.pathname.replace('/', '');
        return path.charAt(0).toUpperCase() + path.slice(1);
    };

    const title = getTitle();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
            <header className="fixed top-0 left-0 right-0 p-4">
                <button
                    onClick={() => navigate(-1)}
                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                >
                    <ArrowLeft size={24} className="text-white" />
                </button>
            </header>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card max-w-sm w-full flex flex-col items-center p-8"
            >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center mb-6">
                    <Construction size={40} className="text-primary-400" />
                </div>

                <h1 className="text-2xl font-bold text-white mb-2">{title} Feature</h1>
                <p className="text-gray-400 mb-6">
                    We're working hard to bring you the {title} experience. check back soon!
                </p>

                <button
                    onClick={() => navigate('/')}
                    className="btn-primary w-full"
                >
                    Back to Home
                </button>
            </motion.div>
        </div>
    );
};

export default FeaturePlaceholder;
