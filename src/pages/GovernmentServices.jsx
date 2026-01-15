import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FileText,
    CreditCard,
    Shield,
    CheckCircle,
    Clock,
    ChevronRight,
    Download,
    ExternalLink,
    Link as LinkIcon,
    Award
} from 'lucide-react';

const GovernmentServices = () => {
    const [selectedTab, setSelectedTab] = useState('certificates');

    const certificates = [
        {
            id: 1,
            name: 'Birth Certificate',
            status: 'Issued',
            issueDate: 'Dec 15, 2023',
            validUntil: 'Lifetime',
            icon: FileText,
            gradient: 'from-purple-500 to-pink-500',
            blockchainVerified: true,
            blockchainId: '0x8a4f...3c9e',
            documentId: 'BC-2023-001234'
        },
        {
            id: 2,
            name: 'Income Certificate',
            status: 'Issued',
            issueDate: 'Jan 5, 2024',
            validUntil: 'Jan 5, 2025',
            icon: FileText,
            gradient: 'from-indigo-500 to-blue-500',
            blockchainVerified: true,
            blockchainId: '0x2b7d...5f1a',
            documentId: 'IC-2024-005678'
        },
        {
            id: 3,
            name: 'Residence Certificate',
            status: 'Pending',
            appliedDate: 'Jan 12, 2024',
            icon: FileText,
            gradient: 'from-green-500 to-emerald-500',
            blockchainVerified: false,
            applicationId: 'RC-2024-009876'
        },
    ];

    const applications = [
        {
            id: 1,
            type: 'Driving License',
            applicationNo: 'DL2024001234',
            status: 'In Progress',
            appliedDate: 'Jan 8, 2024',
            progress: 75,
            nextStep: 'Driving Test Scheduled - Jan 20, 2024'
        },
        {
            id: 2,
            type: 'Passport',
            applicationNo: 'PP2024005678',
            status: 'Document Verification',
            appliedDate: 'Dec 28, 2023',
            progress: 40,
            nextStep: 'Police Verification Pending'
        },
    ];

    const rationCard = {
        cardNo: 'RC-TS-123456789',
        familyMembers: 4,
        cardType: 'White Card',
        entitlements: [
            { item: 'Rice', quantity: '12 kg', available: true },
            { item: 'Wheat', quantity: '8 kg', available: true },
            { item: 'Sugar', quantity: '4 kg', available: false },
        ],
        nearestShop: 'Fair Price Shop #42, Kukatpally',
        lastCollection: 'Dec 28, 2023'
    };

    return (
        <div className="min-h-screen pb-24">
            {/* Header */}
            <header className="glass-dark border-b border-white/10 px-4 py-6 sticky top-0 z-40">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-xl">
                        <span className="text-2xl">🏛️</span>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-white">Government Services</h1>
                        <p className="text-xs text-gray-400">Digital India Initiative</p>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex gap-2">
                    {['certificates', 'applications', 'ration'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setSelectedTab(tab)}
                            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${selectedTab === tab
                                    ? 'bg-white/10 text-white'
                                    : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>
            </header>

            <div className="px-4 py-6">
                {/* Certificates Tab */}
                {selectedTab === 'certificates' && (
                    <div className="space-y-4">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-bold text-white">My Certificates</h2>
                            <button className="text-sm text-primary-400 hover:text-primary-300">
                                Apply New +
                            </button>
                        </div>

                        {certificates.map((cert, index) => (
                            <motion.div
                                key={cert.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="card hover:bg-white/5 transition-colors cursor-pointer"
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.gradient} flex items-center justify-center flex-shrink-0`}>
                                        <cert.icon className="text-white" size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-start justify-between mb-2">
                                            <div>
                                                <h3 className="font-semibold text-white">{cert.name}</h3>
                                                <p className="text-xs text-gray-400">
                                                    {cert.documentId || cert.applicationId}
                                                </p>
                                            </div>
                                            <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${cert.status === 'Issued'
                                                    ? 'bg-green-500/20 text-green-400'
                                                    : 'bg-yellow-500/20 text-yellow-400'
                                                }`}>
                                                {cert.status}
                                            </span>
                                        </div>

                                        {cert.blockchainVerified && (
                                            <div className="flex items-center gap-2 mb-2 p-2 bg-purple-500/10 rounded-lg border border-purple-500/20">
                                                <LinkIcon size={12} className="text-purple-400" />
                                                <span className="text-xs text-purple-300 font-semibold">Blockchain Verified</span>
                                                <span className="text-xs text-gray-400">{cert.blockchainId}</span>
                                            </div>
                                        )}

                                        <div className="flex items-center gap-4 text-xs text-gray-400">
                                            <span>Issued: {cert.issueDate || cert.appliedDate}</span>
                                            {cert.validUntil && <span>Valid: {cert.validUntil}</span>}
                                        </div>

                                        {cert.status === 'Issued' && (
                                            <div className="flex gap-2 mt-3">
                                                <button className="flex items-center gap-1 px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-semibold transition-colors">
                                                    <Download size={12} />
                                                    Download
                                                </button>
                                                <button className="flex items-center gap-1 px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-semibold transition-colors">
                                                    <ExternalLink size={12} />
                                                    Verify
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

                {/* Applications Tab */}
                {selectedTab === 'applications' && (
                    <div className="space-y-4">
                        <h2 className="text-lg font-bold text-white mb-4">Active Applications</h2>

                        {applications.map((app, index) => (
                            <motion.div
                                key={app.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="card"
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <h3 className="font-semibold text-white">{app.type}</h3>
                                        <p className="text-xs text-gray-400">{app.applicationNo}</p>
                                    </div>
                                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-lg text-xs font-semibold">
                                        {app.status}
                                    </span>
                                </div>

                                <div className="mb-3">
                                    <div className="flex justify-between text-xs text-gray-400 mb-2">
                                        <span>Progress</span>
                                        <span>{app.progress}%</span>
                                    </div>
                                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${app.progress}%` }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                            className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                                        />
                                    </div>
                                </div>

                                <div className="p-2 bg-white/5 rounded-lg">
                                    <p className="text-xs text-gray-300">
                                        <span className="font-semibold">Next Step:</span> {app.nextStep}
                                    </p>
                                </div>

                                <p className="text-xs text-gray-500 mt-2">Applied: {app.appliedDate}</p>
                            </motion.div>
                        ))}
                    </div>
                )}

                {/* Ration Card Tab */}
                {selectedTab === 'ration' && (
                    <div className="space-y-4">
                        <h2 className="text-lg font-bold text-white mb-4">Ration Card</h2>

                        <div className="card">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <h3 className="font-semibold text-white">{rationCard.cardType}</h3>
                                    <p className="text-xs text-gray-400">{rationCard.cardNo}</p>
                                </div>
                                <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-lg text-xs font-semibold">
                                    Active
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3 mb-4">
                                <div className="p-3 bg-white/5 rounded-xl">
                                    <p className="text-xs text-gray-400">Family Members</p>
                                    <p className="text-xl font-bold text-white">{rationCard.familyMembers}</p>
                                </div>
                                <div className="p-3 bg-white/5 rounded-xl">
                                    <p className="text-xs text-gray-400">Last Collection</p>
                                    <p className="text-sm font-semibold text-white">{rationCard.lastCollection}</p>
                                </div>
                            </div>

                            <h4 className="text-sm font-semibold text-white mb-2">Monthly Entitlements</h4>
                            <div className="space-y-2">
                                {rationCard.entitlements.map((item, index) => (
                                    <div key={index} className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                                        <span className="text-sm text-gray-300">{item.item}</span>
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-semibold text-white">{item.quantity}</span>
                                            {item.available ? (
                                                <CheckCircle size={16} className="text-green-400" />
                                            ) : (
                                                <Clock size={16} className="text-yellow-400" />
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-4 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                                <p className="text-xs text-blue-300">
                                    <span className="font-semibold">Nearest Shop:</span> {rationCard.nearestShop}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GovernmentServices;
