import React, { useState } from 'react';
import { Train, Bus, Plane, Search, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Travel = () => {
    const [mode, setMode] = useState('train');

    return (
        <div className="min-h-screen bg-gray-950 pb-24 text-white">
            {/* Header with Mode Switcher */}
            <div className="bg-gradient-to-br from-blue-900 via-gray-900 to-gray-900 p-6 pb-6 rounded-b-3xl border-b border-white/5">
                <h1 className="text-2xl font-bold mb-6">Vchat Travel 🚆</h1>

                <div className="flex bg-black/40 p-1 rounded-xl backdrop-blur-md border border-white/5">
                    {[
                        { id: 'train', label: 'Trains', icon: Train },
                        { id: 'bus', label: 'Bus', icon: Bus },
                        { id: 'flight', label: 'Flights', icon: Plane },
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setMode(item.id)}
                            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all ${mode === item.id
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'text-gray-400 hover:text-gray-200'
                                }`}
                        >
                            <item.icon size={16} />
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Search Card */}
            <div className="px-4 -mt-6">
                <div className="glass-dark p-6 rounded-2xl border border-white/10 shadow-xl">
                    <div className="space-y-4">
                        {/* From */}
                        <div className="relative">
                            <label className="text-xs text-gray-500 font-semibold uppercase ml-1">From</label>
                            <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5 mt-1">
                                <MapPin className="text-blue-500" size={20} />
                                <div className="flex-1">
                                    <input type="text" defaultValue="New Delhi" className="w-full bg-transparent text-lg font-bold focus:outline-none" />
                                    <p className="text-xs text-gray-400">DEL, All Stations</p>
                                </div>
                            </div>
                        </div>

                        {/* To */}
                        <div className="relative">
                            <label className="text-xs text-gray-500 font-semibold uppercase ml-1">To</label>
                            <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5 mt-1">
                                <MapPin className="text-emerald-500" size={20} />
                                <div className="flex-1">
                                    <input type="text" defaultValue="Mumbai Central" className="w-full bg-transparent text-lg font-bold focus:outline-none" />
                                    <p className="text-xs text-gray-400">MMCT, Mumbai</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-1">
                                <label className="text-xs text-gray-500 font-semibold uppercase ml-1">Date</label>
                                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5 mt-1">
                                    <Calendar className="text-orange-500" size={20} />
                                    <div>
                                        <p className="font-bold">Tomorrow</p>
                                        <p className="text-xs text-gray-400">Wed, 17 Jan</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 py-3.5 rounded-xl font-bold text-lg shadow-lg hover:shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 mt-2">
                            <Search size={20} />
                            Search {mode === 'train' ? 'Trains' : mode === 'bus' ? 'Buses' : 'Flights'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Quick Actions / Recent */}
            <div className="px-4 py-8">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="font-bold text-lg">Services</h2>
                </div>

                <div className="grid grid-cols-4 gap-3">
                    {[
                        { label: 'PNR Status', icon: '🎫', color: 'bg-yellow-500/20 text-yellow-500' },
                        { label: 'Live Status', icon: '📍', color: 'bg-green-500/20 text-green-500' },
                        { label: 'Seat Map', icon: '💺', color: 'bg-purple-500/20 text-purple-500' },
                        { label: 'Refunds', icon: '💰', color: 'bg-red-500/20 text-red-500' },
                    ].map((action, i) => (
                        <div key={i} className="flex flex-col items-center gap-2">
                            <div className={`w-14 h-14 rounded-2xl ${action.color} flex items-center justify-center text-xl backdrop-blur-sm border border-white/5`}>
                                {action.icon}
                            </div>
                            <span className="text-[10px] uppercase font-bold tracking-wide text-gray-400 text-center">{action.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Recent Searches */}
            <div className="px-4">
                <h2 className="font-bold text-lg mb-4">Recent Searches</h2>
                <div className="space-y-3">
                    {[1, 2].map((i) => (
                        <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center">
                                    <Train size={20} className="text-blue-400" />
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">Bangalore → Mysore</p>
                                    <p className="text-xs text-gray-400">Fri, 19 Jan • Shatabdi Exp</p>
                                </div>
                            </div>
                            <ChevronRight size={16} className="text-gray-600" />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

// Quick helper
const ChevronRight = ({ size, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6" /></svg>
)

export default Travel;
