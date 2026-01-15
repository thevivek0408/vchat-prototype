import React, { useState } from 'react';
import { Search, MapPin, Briefcase, DollarSign, Clock, Filter, Bookmark, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const JobFinder = () => {
    const [filter, setFilter] = useState('All');

    const categories = [
        { name: 'All', icon: '' },
        { name: 'Tech', icon: '💻' },
        { name: 'Design', icon: '🎨' },
        { name: 'Delivery', icon: '🛵' },
        { name: 'Retail', icon: '🛍️' },
    ];

    const jobs = [
        {
            id: 1,
            title: "Senior React Developer",
            company: "TechNova Systems",
            location: "Bangalore (Hybrid)",
            salary: "₹18L - ₹24L",
            type: "Full-time",
            posted: "2h ago",
            logo: "T",
            color: "from-blue-500 to-cyan-500"
        },
        {
            id: 2,
            title: "Delivery Partner",
            company: "QuickEat",
            location: "Mumbai, Andheri",
            salary: "₹25k - ₹35k",
            type: "Contract",
            posted: "4h ago",
            logo: "Q",
            color: "from-orange-500 to-red-500"
        },
        {
            id: 3,
            title: "UX/UI Designer",
            company: "Creative Studio",
            location: "Remote",
            salary: "₹12L - ₹18L",
            type: "Full-time",
            posted: "1d ago",
            logo: "C",
            color: "from-purple-500 to-pink-500"
        },
        {
            id: 4,
            title: "Store Manager",
            company: "Reliance Trends",
            location: "Delhi, CP",
            salary: "₹30k - ₹45k",
            type: "On-site",
            posted: "1d ago",
            logo: "R",
            color: "from-green-500 to-emerald-500"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-950 pb-24 text-white">
            {/* Header */}
            <div className="bg-gradient-to-br from-indigo-900 via-gray-900 to-gray-900 p-6 pb-8 rounded-b-3xl border-b border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                <h1 className="text-2xl font-bold mb-1">Vchat Jobs 💼</h1>
                <p className="text-gray-400 text-sm mb-6">Find your dream career or next gig.</p>

                {/* Search Bar */}
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search jobs, skills, companies..."
                        className="w-full bg-white/10 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-500"
                    />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-indigo-600 rounded-lg">
                        <Filter size={14} />
                    </button>
                </div>
            </div>

            {/* Categories */}
            <div className="px-4 py-6">
                <h2 className="text-lg font-bold mb-3">Categories</h2>
                <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                    {categories.map((cat) => (
                        <button
                            key={cat.name}
                            onClick={() => setFilter(cat.name)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm whitespace-nowrap border transition-all ${filter === cat.name
                                    ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-500/20'
                                    : 'bg-white/5 border-white/5 text-gray-400 hover:bg-white/10'
                                }`}
                        >
                            <span>{cat.icon}</span>
                            {cat.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Job List */}
            <div className="px-4 space-y-4">
                <h2 className="text-lg font-bold flex justify-between items-center">
                    Recommended for you
                    <a href="#" className="text-xs text-indigo-400 font-normal">View all</a>
                </h2>

                {jobs.map((job) => (
                    <motion.div
                        key={job.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="glass-dark p-4 rounded-2xl border border-white/5 relative overflow-hidden"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex gap-4">
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${job.color} flex items-center justify-center text-xl font-bold shadow-lg`}>
                                    {job.logo}
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg leading-tight">{job.title}</h3>
                                    <p className="text-gray-400 text-sm">{job.company}</p>
                                </div>
                            </div>
                            <button className="text-gray-500 hover:text-indigo-400 transition-colors">
                                <Bookmark size={20} />
                            </button>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-2.5 py-1 rounded-lg bg-white/5 text-xs text-gray-300 flex items-center gap-1">
                                <MapPin size={10} /> {job.location}
                            </span>
                            <span className="px-2.5 py-1 rounded-lg bg-white/5 text-xs text-gray-300 flex items-center gap-1">
                                <Briefcase size={10} /> {job.type}
                            </span>
                            <span className="px-2.5 py-1 rounded-lg bg-green-500/10 text-green-400 text-xs flex items-center gap-1 border border-green-500/20">
                                <DollarSign size={10} /> {job.salary}
                            </span>
                        </div>

                        <div className="flex items-center justify-between mt-2 pt-3 border-t border-white/5">
                            <span className="text-xs text-gray-500 flex items-center gap-1">
                                <Clock size={10} /> Posted {job.posted}
                            </span>
                            <button className="flex items-center gap-1 text-sm font-semibold text-indigo-400 hover:text-indigo-300">
                                Apply Now <ChevronRight size={14} />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Promo Banner */}
            <div className="m-4 p-5 rounded-2xl bg-gradient-to-r from-purple-900 to-indigo-900 border border-white/10 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                <h3 className="font-bold text-lg mb-1 relative z-10">Upload Your Resume 📄</h3>
                <p className="text-sm text-indigo-200 mb-3 relative z-10 max-w-[80%]">Get matched with top recruiters instantly.</p>
                <button className="bg-white text-indigo-900 px-4 py-2 rounded-lg text-sm font-bold shadow-lg hover:shadow-xl transition-shadow relative z-10">
                    Upload Now
                </button>
            </div>
        </div>
    );
};

export default JobFinder;
