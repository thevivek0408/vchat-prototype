import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    MessageCircle,
    Building2,
    Users,
    Sparkles,
    ArrowRight,
    Zap,
    Shield,
    Globe,
    Award,
    Link as LinkIcon
} from 'lucide-react';

const Onboarding = ({ onComplete }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            icon: MessageCircle,
            gradient: 'from-blue-500 to-cyan-500',
            title: 'Welcome to Vchat',
            subtitle: 'One App. Your Complete Digital Life.',
            description: 'Replace 15+ apps with one intelligent super-app built for India.',
            features: ['Messaging', 'Social Media', 'Payments', 'Government Services'],
            emoji: '🚀'
        },
        {
            icon: Users,
            gradient: 'from-purple-500 to-pink-500',
            title: 'Multi-Context Connections',
            subtitle: 'One Person, Multiple Relationships',
            description: 'Connect with the same person as a colleague, neighbor, and friend - each with different features.',
            features: ['Work Context', 'Personal Context', 'Community Context', 'Smart Privacy'],
            emoji: '🤝'
        },
        {
            icon: LinkIcon,
            gradient: 'from-yellow-500 to-orange-500',
            title: 'Blockchain Verified',
            subtitle: 'True Ownership of Your Digital Identity',
            description: 'Your certificates, achievements, and data are stored on blockchain - tamper-proof and yours forever.',
            features: ['NFT Achievements', 'Verified Certificates', 'Transparent Transactions', 'Decentralized Storage'],
            emoji: '🔗'
        },
        {
            icon: Building2,
            gradient: 'from-green-500 to-emerald-500',
            title: 'Government Services',
            subtitle: 'All Citizen Services in One Place',
            description: 'Pay bills, apply for certificates, track applications - all integrated seamlessly.',
            features: ['Electricity Bills', 'Certificates', 'Ration Card', 'Driving License'],
            emoji: '🏛️'
        },
        {
            icon: Sparkles,
            gradient: 'from-orange-500 to-red-500',
            title: 'AI-Powered Intelligence',
            subtitle: 'Your Personal Digital Twin',
            description: 'AI that understands your life, predicts your needs, and helps you get things done.',
            features: ['Smart Suggestions', 'Bill Reminders', 'Expense Tracking', 'Multilingual'],
            emoji: '🤖'
        }
    ];

    const currentSlideData = slides[currentSlide];
    const Icon = currentSlideData.icon;

    const handleNext = () => {
        if (currentSlide < slides.length - 1) {
            setCurrentSlide(currentSlide + 1);
        } else {
            onComplete();
        }
    };

    const handleSkip = () => {
        onComplete();
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#0f1115] via-[#1a1d24] to-[#0f1115] flex flex-col items-center justify-center p-6 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            opacity: [0.2, 0.8, 0.2],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            {/* Skip Button */}
            <button
                onClick={handleSkip}
                className="absolute top-6 right-6 text-sm text-gray-400 hover:text-white transition-colors z-50"
            >
                Skip
            </button>

            {/* Content */}
            <div className="w-full max-w-md relative z-10">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.4 }}
                        className="text-center"
                    >
                        {/* Icon with Gradient Background */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                            className="relative mx-auto mb-8"
                        >
                            {/* Glow Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${currentSlideData.gradient} blur-3xl opacity-30 rounded-full scale-150`}></div>

                            {/* Icon Container */}
                            <div className={`relative w-32 h-32 rounded-3xl bg-gradient-to-br ${currentSlideData.gradient} flex items-center justify-center shadow-2xl`}>
                                <motion.div
                                    animate={{ rotate: [0, 5, -5, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <span className="text-6xl">{currentSlideData.emoji}</span>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-3xl font-bold text-white mb-2"
                        >
                            {currentSlideData.title}
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className={`text-lg font-semibold bg-gradient-to-r ${currentSlideData.gradient} bg-clip-text text-transparent mb-4`}
                        >
                            {currentSlideData.subtitle}
                        </motion.p>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-gray-400 text-sm leading-relaxed mb-8 px-4"
                        >
                            {currentSlideData.description}
                        </motion.p>

                        {/* Features */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="grid grid-cols-2 gap-3 mb-12"
                        >
                            {currentSlideData.features.map((feature, index) => (
                                <motion.div
                                    key={feature}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.7 + index * 0.1 }}
                                    className="glass rounded-xl p-3 border border-white/10"
                                >
                                    <p className="text-xs font-medium text-white">{feature}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </AnimatePresence>

                {/* Progress Dots */}
                <div className="flex justify-center gap-2 mb-8">
                    {slides.map((_, index) => (
                        <motion.div
                            key={index}
                            className={`h-2 rounded-full transition-all ${index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/30'
                                }`}
                            animate={{
                                scale: index === currentSlide ? 1.2 : 1,
                            }}
                        />
                    ))}
                </div>

                {/* Next Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleNext}
                    className={`w-full py-4 rounded-2xl bg-gradient-to-r ${currentSlideData.gradient} text-white font-bold text-lg shadow-lg flex items-center justify-center gap-2`}
                >
                    {currentSlide === slides.length - 1 ? "Get Started" : "Next"}
                    <ArrowRight size={20} />
                </motion.button>
            </div>
        </div>
    );
};

export default Onboarding;
