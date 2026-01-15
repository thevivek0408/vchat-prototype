import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Stethoscope,
    Calendar,
    Pill,
    FileText,
    Heart,
    Activity,
    Clock,
    MapPin,
    Phone,
    Video,
    AlertCircle,
    CheckCircle,
    TrendingUp,
    Thermometer,
    Droplets,
    Moon,
    Footprints,
    ChevronRight,
    Plus,
    Search
} from 'lucide-react';

const Healthcare = () => {
    const [selectedTab, setSelectedTab] = useState('overview');

    const upcomingAppointments = [
        {
            id: 1,
            doctor: 'Dr. Rajesh Kumar',
            specialty: 'Cardiologist',
            date: 'Jan 18, 2024',
            time: '10:30 AM',
            type: 'In-Person',
            hospital: 'Apollo Hospital, Jubilee Hills',
            avatar: '👨‍⚕️'
        },
        {
            id: 2,
            doctor: 'Dr. Priya Sharma',
            specialty: 'General Physician',
            date: 'Jan 20, 2024',
            time: '3:00 PM',
            type: 'Video Call',
            hospital: 'Online Consultation',
            avatar: '👩‍⚕️'
        },
    ];

    const healthMetrics = [
        { id: 1, name: 'Heart Rate', value: '72', unit: 'bpm', icon: Heart, color: 'from-red-500 to-pink-500', status: 'normal' },
        { id: 2, name: 'Blood Pressure', value: '120/80', unit: 'mmHg', icon: Activity, color: 'from-blue-500 to-cyan-500', status: 'normal' },
        { id: 3, name: 'Temperature', value: '98.6', unit: '°F', icon: Thermometer, color: 'from-orange-500 to-red-500', status: 'normal' },
        { id: 4, name: 'Hydration', value: '6/8', unit: 'glasses', icon: Droplets, color: 'from-cyan-500 to-blue-500', status: 'good' },
        { id: 5, name: 'Sleep', value: '7.5', unit: 'hours', icon: Moon, color: 'from-indigo-500 to-purple-500', status: 'good' },
        { id: 6, name: 'Steps', value: '8,234', unit: 'steps', icon: Footprints, color: 'from-green-500 to-emerald-500', status: 'good' },
    ];

    const medications = [
        {
            id: 1,
            name: 'Aspirin',
            dosage: '75mg',
            frequency: 'Once daily',
            time: '9:00 AM',
            remaining: 15,
            total: 30
        },
        {
            id: 2,
            name: 'Vitamin D3',
            dosage: '1000 IU',
            frequency: 'Once daily',
            time: '9:00 AM',
            remaining: 22,
            total: 30
        },
    ];

    const nearbyDoctors = [
        {
            id: 1,
            name: 'Dr. Amit Patel',
            specialty: 'Dentist',
            rating: 4.8,
            experience: '15 years',
            distance: '1.2 km',
            available: 'Today',
            avatar: '🦷'
        },
        {
            id: 2,
            name: 'Dr. Sneha Reddy',
            specialty: 'Dermatologist',
            rating: 4.9,
            experience: '12 years',
            distance: '2.5 km',
            available: 'Tomorrow',
            avatar: '👩‍⚕️'
        },
        {
            id: 3,
            name: 'Dr. Vikram Singh',
            specialty: 'Orthopedic',
            rating: 4.7,
            experience: '18 years',
            distance: '3.1 km',
            available: 'Today',
            avatar: '🦴'
        },
    ];

    const healthRecords = [
        {
            id: 1,
            type: 'Blood Test',
            date: 'Jan 10, 2024',
            hospital: 'Apollo Diagnostics',
            status: 'completed'
        },
        {
            id: 2,
            type: 'X-Ray Report',
            date: 'Dec 28, 2023',
            hospital: 'Care Hospital',
            status: 'completed'
        },
    ];

    return (
        <div className="min-h-screen pb-20">
            {/* Header */}
            <header className="sticky top-0 glass-dark border-b border-white/10 z-40 px-4 py-4">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h1 className="text-2xl font-bold text-white">Healthcare</h1>
                        <p className="text-sm text-gray-400">Your health, simplified</p>
                    </div>
                    <button className="p-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl hover:shadow-lg transition-all">
                        <Plus size={22} className="text-white" />
                    </button>
                </div>

                {/* Search */}
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search doctors, hospitals, medicines..."
                        className="input pl-10"
                    />
                </div>
            </header>

            <div className="px-4 py-4 space-y-6">
                {/* Quick Actions */}
                <div className="grid grid-cols-4 gap-3">
                    {[
                        { name: 'Book', icon: Calendar, gradient: 'from-blue-500 to-cyan-500' },
                        { name: 'Records', icon: FileText, gradient: 'from-purple-500 to-pink-500' },
                        { name: 'Medicine', icon: Pill, gradient: 'from-green-500 to-emerald-500' },
                        { name: 'Emergency', icon: AlertCircle, gradient: 'from-red-500 to-orange-500' },
                    ].map((action, index) => {
                        const Icon = action.icon;
                        return (
                            <motion.button
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex flex-col items-center gap-2"
                            >
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${action.gradient} flex items-center justify-center shadow-lg`}>
                                    <Icon className="text-white" size={24} />
                                </div>
                                <span className="text-xs text-gray-300">{action.name}</span>
                            </motion.button>
                        );
                    })}
                </div>

                {/* Health Metrics */}
                <div>
                    <h2 className="text-lg font-semibold text-white mb-3">Today's Health Metrics</h2>
                    <div className="grid grid-cols-2 gap-3">
                        {healthMetrics.map((metric, index) => {
                            const Icon = metric.icon;
                            return (
                                <motion.div
                                    key={metric.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="card"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center`}>
                                            <Icon className="text-white" size={20} />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-xs text-gray-400">{metric.name}</p>
                                            <p className="text-lg font-bold text-white">{metric.value}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-gray-400">{metric.unit}</span>
                                        <span className={`badge ${metric.status === 'normal' || metric.status === 'good' ? 'badge-success' : 'badge-warning'}`}>
                                            {metric.status}
                                        </span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Upcoming Appointments */}
                <div>
                    <div className="flex items-center justify-between mb-3">
                        <h2 className="text-lg font-semibold text-white">Upcoming Appointments</h2>
                        <button className="text-sm text-primary-400 hover:text-primary-300">View All</button>
                    </div>
                    <div className="space-y-3">
                        {upcomingAppointments.map((appointment, index) => (
                            <motion.div
                                key={appointment.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="card hover:bg-white/5 transition-colors cursor-pointer"
                            >
                                <div className="flex items-start gap-3 mb-3">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-2xl">
                                        {appointment.avatar}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-white">{appointment.doctor}</h3>
                                        <p className="text-sm text-gray-400">{appointment.specialty}</p>
                                    </div>
                                    <span className={`badge ${appointment.type === 'Video Call' ? 'badge-info' : 'badge-success'}`}>
                                        {appointment.type}
                                    </span>
                                </div>
                                <div className="grid grid-cols-2 gap-2 text-sm">
                                    <div className="flex items-center gap-2 text-gray-300">
                                        <Calendar size={16} className="text-gray-400" />
                                        {appointment.date}
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-300">
                                        <Clock size={16} className="text-gray-400" />
                                        {appointment.time}
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-400 mt-2">
                                    <MapPin size={16} />
                                    {appointment.hospital}
                                </div>
                                <div className="flex gap-2 mt-3">
                                    <button className="btn-secondary flex-1 text-sm py-2">
                                        Reschedule
                                    </button>
                                    <button className="btn-primary flex-1 text-sm py-2">
                                        {appointment.type === 'Video Call' ? 'Join Call' : 'Get Directions'}
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Medications */}
                <div>
                    <div className="flex items-center justify-between mb-3">
                        <h2 className="text-lg font-semibold text-white">Active Medications</h2>
                        <button className="text-sm text-primary-400 hover:text-primary-300">Add New</button>
                    </div>
                    <div className="space-y-3">
                        {medications.map((med, index) => (
                            <motion.div
                                key={med.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="card"
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <h3 className="font-semibold text-white">{med.name}</h3>
                                        <p className="text-sm text-gray-400">{med.dosage} • {med.frequency}</p>
                                        <p className="text-xs text-gray-500 mt-1">Next dose at {med.time}</p>
                                    </div>
                                    <Pill className="text-primary-400" size={24} />
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-gray-400">{med.remaining} pills remaining</span>
                                    <div className="w-24 bg-white/10 rounded-full h-1.5">
                                        <div
                                            className="h-1.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500"
                                            style={{ width: `${(med.remaining / med.total) * 100}%` }}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Nearby Doctors */}
                <div>
                    <h2 className="text-lg font-semibold text-white mb-3">Nearby Doctors</h2>
                    <div className="space-y-3">
                        {nearbyDoctors.map((doctor, index) => (
                            <motion.div
                                key={doctor.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="card hover:bg-white/5 transition-colors cursor-pointer"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl">
                                        {doctor.avatar}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-white">{doctor.name}</h3>
                                        <p className="text-sm text-gray-400">{doctor.specialty} • {doctor.experience}</p>
                                        <div className="flex items-center gap-3 mt-1 text-xs text-gray-400">
                                            <span className="flex items-center gap-1">
                                                ⭐ {doctor.rating}
                                            </span>
                                            <span>•</span>
                                            <span className="flex items-center gap-1">
                                                <MapPin size={12} />
                                                {doctor.distance}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className="badge badge-success text-xs">{doctor.available}</span>
                                        <ChevronRight className="text-gray-400 ml-auto mt-2" size={20} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Health Records */}
                <div>
                    <div className="flex items-center justify-between mb-3">
                        <h2 className="text-lg font-semibold text-white">Health Records</h2>
                        <button className="text-sm text-primary-400 hover:text-primary-300">View All</button>
                    </div>
                    <div className="space-y-2">
                        {healthRecords.map((record, index) => (
                            <motion.div
                                key={record.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="card hover:bg-white/5 transition-colors cursor-pointer"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                                            <FileText className="text-white" size={20} />
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-white">{record.type}</h3>
                                            <p className="text-sm text-gray-400">{record.hospital} • {record.date}</p>
                                        </div>
                                    </div>
                                    <ChevronRight className="text-gray-400" size={20} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Emergency Contact */}
                <div className="card bg-gradient-to-br from-red-500/10 to-orange-500/10 border-red-500/30">
                    <div className="flex gap-3">
                        <AlertCircle className="text-red-400 flex-shrink-0" size={24} />
                        <div className="flex-1">
                            <h3 className="font-semibold text-white mb-1">Emergency Services</h3>
                            <p className="text-sm text-gray-300 mb-3">
                                24/7 emergency medical assistance available
                            </p>
                            <button className="btn-primary bg-gradient-to-r from-red-500 to-orange-500">
                                <Phone size={16} className="mr-2" />
                                Call Emergency: 108
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Healthcare;
