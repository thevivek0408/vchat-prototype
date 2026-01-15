import { motion } from 'framer-motion';
import { Sprout, Flower2, Leaf } from 'lucide-react';

const StreakHabitat = ({ streak = 0, className = "" }) => {
    // Determine growth stage based on streak days
    const getStage = (days) => {
        if (days < 7) return 'sprout';
        if (days < 30) return 'growing';
        return 'blooming';
    };

    const stage = getStage(streak);

    return (
        <div className={`relative flex items-center justify-center group ${className}`} title={`${streak} Day Streak!`}>
            {/* Hover Tooltip (Bubble) */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/80 px-2 py-1 rounded text-[10px] text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                {streak} Day Streak
            </div>

            <motion.div
                key={`streak-${stage}`}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                className="relative z-10 cursor-pointer"
            >
                {stage === 'sprout' && (
                    <div className="relative">
                        <Sprout size={24} className="text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]" />
                    </div>
                )}

                {stage === 'growing' && (
                    <div className="relative">
                        <Leaf size={24} className="text-emerald-400" />
                        <motion.div
                            animate={{ rotate: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-1 -top-1"
                        >
                            <Leaf size={12} className="text-green-300" />
                        </motion.div>
                    </div>
                )}

                {stage === 'blooming' && (
                    <div className="relative">
                        <Flower2 size={28} className="text-pink-500 drop-shadow-[0_0_12px_rgba(236,72,153,0.6)]" />
                        <motion.div
                            className="absolute inset-0 bg-pink-500/30 blur-md rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default StreakHabitat;
