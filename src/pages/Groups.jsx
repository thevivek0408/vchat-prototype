import { useState } from 'react';
import { motion } from 'framer-motion';
import DiscordServer from '../components/DiscordServer';
import {
    Plus,
    Users,
    ShoppingCart,
    Calendar,
    DollarSign,
    MapPin,
    CheckSquare,
    Briefcase,
    GraduationCap,
    Home as HomeIcon,
    ChevronRight,
    Gamepad2
} from 'lucide-react';

const Groups = () => {
    const [selectedGroup, setSelectedGroup] = useState(null);

    const groups = [
        {
            id: 5,
            name: 'Gaming HUB',
            type: 'Community',
            members: 8420,
            avatar: '🎮',
            gradient: 'from-indigo-500 to-purple-600',
            features: ['Server', 'Voice', 'Streaming', 'LFG'],
            lastActivity: 'Now'
        },
        {
            id: 1,
            name: 'Family',
            type: 'Family',
            members: 5,
            avatar: '👨‍👩‍👧‍👦',
            gradient: 'from-green-500 to-emerald-500',
            features: ['Grocery List', 'Calendar', 'Expenses', 'Location'],
            lastActivity: '2 min ago'
        },
        {
            id: 2,
            name: 'Project Alpha Team',
            type: 'Work',
            members: 8,
            avatar: '💼',
            gradient: 'from-blue-500 to-cyan-500',
            features: ['Task Board', 'Meetings', 'Documents', 'Time Tracker'],
            lastActivity: '15 min ago'
        },
        {
            id: 4,
            name: 'Sunrise Apartments',
            type: 'Community',
            members: 120,
            avatar: '🏘️',
            gradient: 'from-orange-500 to-red-500',
            features: ['Notices', 'Maintenance', 'Events', 'Complaints'],
            lastActivity: '3 hours ago'
        },
    ];

    const familyGroupData = {
        groceryList: [
            { id: 1, item: 'Milk', addedBy: 'Mom', checked: false },
            { id: 2, item: 'Bread', addedBy: 'Dad', checked: true },
            { id: 3, item: 'Eggs', addedBy: 'You', checked: false },
            { id: 4, item: 'Rice', addedBy: 'Mom', checked: false },
        ],
        expenses: [
            { id: 1, description: 'Groceries', amount: 2500, paidBy: 'Dad', date: 'Today' },
            { id: 2, description: 'Electricity Bill', amount: 1340, paidBy: 'You', date: 'Yesterday' },
            { id: 3, description: 'Internet', amount: 999, paidBy: 'Mom', date: '2 days ago' },
        ],
        events: [
            { id: 1, title: 'Sister\'s Exam', date: 'Tomorrow', time: '9:00 AM' },
            { id: 2, title: 'Dad\'s Birthday', date: 'Jan 20', time: 'All day' },
        ]
    };

    const workGroupData = {
        tasks: [
            { id: 1, title: 'Design mockups', assignee: 'Priya', status: 'In Progress' },
            { id: 2, title: 'API integration', assignee: 'You', status: 'To Do' },
            { id: 3, title: 'Testing', assignee: 'Amit', status: 'Done' },
        ],
        meetings: [
            { id: 1, title: 'Daily Standup', time: 'Today, 10:00 AM' },
            { id: 2, title: 'Client Review', time: 'Tomorrow, 3:00 PM' },
        ]
    };

    const getFeatureIcon = (feature) => {
        const icons = {
            'Grocery List': ShoppingCart,
            'Calendar': Calendar,
            'Expenses': DollarSign,
            'Location': MapPin,
            'Task Board': CheckSquare,
            'Meetings': Calendar,
            'Documents': Briefcase,
            'Assignments': GraduationCap,
            'Notices': HomeIcon,
            'Server': Gamepad2,
            'Voice': Users,
            'Streaming': Users,
            'LFG': Plus,
        };
        return icons[feature] || CheckSquare;
    };

    if (selectedGroup) {
        if (selectedGroup.type === 'Community') {
            return (
                <div className="fixed inset-0 z-50 bg-[#313338]">
                    <DiscordServer group={selectedGroup} onBack={() => setSelectedGroup(null)} />
                </div>
            );
        }

        const isFamily = selectedGroup.type === 'Family';
        const isWork = selectedGroup.type === 'Work';

        return (
            <div className="min-h-screen">
                {/* Group Header */}
                <header className="glass-dark border-b border-white/10 px-4 py-4 sticky top-0 z-40">
                    <button
                        onClick={() => setSelectedGroup(null)}
                        className="text-gray-400 hover:text-white mb-3"
                    >
                        ← Back
                    </button>
                    <div className="flex items-center gap-3 mb-3">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedGroup.gradient} flex items-center justify-center text-3xl shadow-xl`}>
                            {selectedGroup.avatar}
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-white">{selectedGroup.name}</h1>
                            <p className="text-gray-400">{selectedGroup.members} members · {selectedGroup.type}</p>
                        </div>
                    </div>

                    {/* Feature Pills */}
                    <div className="flex gap-2 overflow-x-auto custom-scrollbar pb-2">
                        {selectedGroup.features.map((feature) => {
                            const Icon = getFeatureIcon(feature);
                            return (
                                <div key={feature} className="glass px-3 py-2 rounded-xl flex items-center gap-2 whitespace-nowrap">
                                    <Icon size={16} className="text-primary-400" />
                                    <span className="text-sm text-gray-300">{feature}</span>
                                </div>
                            );
                        })}
                    </div>
                </header>

                {/* Group Content */}
                <div className="px-4 py-4 space-y-4">
                    {isFamily && (
                        <>
                            {/* Grocery List */}
                            <div className="card">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        <ShoppingCart className="text-green-400" size={20} />
                                        <h3 className="font-semibold text-white">Grocery List</h3>
                                    </div>
                                    <button className="text-primary-400 text-sm font-semibold">+ Add</button>
                                </div>
                                <div className="space-y-2">
                                    {familyGroupData.groceryList.map((item) => (
                                        <div key={item.id} className="flex items-center gap-3 p-2 glass rounded-lg">
                                            <input
                                                type="checkbox"
                                                checked={item.checked}
                                                className="w-5 h-5 rounded accent-primary-500"
                                                readOnly
                                            />
                                            <span className={`flex-1 ${item.checked ? 'line-through text-gray-500' : 'text-gray-200'}`}>
                                                {item.item}
                                            </span>
                                            <span className="text-xs text-gray-400">{item.addedBy}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Expenses */}
                            <div className="card">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        <DollarSign className="text-yellow-400" size={20} />
                                        <h3 className="font-semibold text-white">Recent Expenses</h3>
                                    </div>
                                    <button className="text-primary-400 text-sm font-semibold">View All</button>
                                </div>
                                <div className="space-y-3">
                                    {familyGroupData.expenses.map((expense) => (
                                        <div key={expense.id} className="flex items-center justify-between p-3 glass rounded-lg">
                                            <div>
                                                <p className="text-gray-200 font-medium">{expense.description}</p>
                                                <p className="text-xs text-gray-400">{expense.paidBy} · {expense.date}</p>
                                            </div>
                                            <p className="text-lg font-bold text-green-400">₹{expense.amount}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-4 pt-4 border-t border-white/10">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-400">Total this month</span>
                                        <span className="text-xl font-bold text-white">₹4,839</span>
                                    </div>
                                </div>
                            </div>

                            {/* Calendar Events */}
                            <div className="card">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="text-blue-400" size={20} />
                                        <h3 className="font-semibold text-white">Upcoming Events</h3>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    {familyGroupData.events.map((event) => (
                                        <div key={event.id} className="p-3 glass rounded-lg">
                                            <p className="text-gray-200 font-medium">{event.title}</p>
                                            <p className="text-sm text-gray-400">{event.date} at {event.time}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}

                    {isWork && (
                        <>
                            {/* Task Board */}
                            <div className="card">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        <CheckSquare className="text-blue-400" size={20} />
                                        <h3 className="font-semibold text-white">Task Board</h3>
                                    </div>
                                    <button className="text-primary-400 text-sm font-semibold">+ New Task</button>
                                </div>
                                <div className="space-y-2">
                                    {workGroupData.tasks.map((task) => (
                                        <div key={task.id} className="p-3 glass rounded-lg">
                                            <div className="flex items-center justify-between mb-2">
                                                <p className="text-gray-200 font-medium">{task.title}</p>
                                                <span className={`badge ${task.status === 'Done' ? 'badge-success' :
                                                    task.status === 'In Progress' ? 'badge-warning' :
                                                        'badge-error'
                                                    }`}>
                                                    {task.status}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-400">Assigned to: {task.assignee}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Meetings */}
                            <div className="card">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="text-purple-400" size={20} />
                                        <h3 className="font-semibold text-white">Upcoming Meetings</h3>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    {workGroupData.meetings.map((meeting) => (
                                        <div key={meeting.id} className="p-3 glass rounded-lg flex items-center justify-between">
                                            <div>
                                                <p className="text-gray-200 font-medium">{meeting.title}</p>
                                                <p className="text-sm text-gray-400">{meeting.time}</p>
                                            </div>
                                            <button className="btn-secondary py-2 px-4 text-sm">Join</button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            {/* Header */}
            <header className="sticky top-0 glass-dark border-b border-white/10 z-40 px-4 py-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-white">Smart Groups</h1>
                    <button className="p-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl hover:shadow-lg transition-all">
                        <Plus size={22} className="text-white" />
                    </button>
                </div>
                <p className="text-gray-400 text-sm mt-1">Groups with context-aware features</p>
            </header>

            {/* Groups List */}
            <div className="px-4 py-4 space-y-3">
                {groups.map((group, index) => (
                    <motion.button
                        key={group.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => setSelectedGroup(group)}
                        className="w-full card hover:scale-[1.02] transition-transform"
                    >
                        <div className="flex items-center gap-4">
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${group.gradient} flex items-center justify-center text-3xl shadow-xl`}>
                                {group.avatar}
                            </div>
                            <div className="flex-1 text-left">
                                <h3 className="font-semibold text-white text-lg mb-1">{group.name}</h3>
                                <p className="text-sm text-gray-400 mb-2">{group.members} members · {group.type}</p>
                                <div className="flex gap-2 flex-wrap">
                                    {group.features.slice(0, 3).map((feature) => {
                                        const Icon = getFeatureIcon(feature);
                                        return (
                                            <div key={feature} className="flex items-center gap-1 text-xs text-gray-400">
                                                <Icon size={12} />
                                                <span>{feature}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <ChevronRight className="text-gray-400" size={20} />
                        </div>
                    </motion.button>
                ))}
            </div>

            {/* Info Card */}
            <div className="px-4 py-4">
                <div className="card bg-gradient-to-br from-primary-500/10 to-accent-500/10 border-primary-500/30">
                    <h3 className="font-semibold text-white mb-2">💡 Smart Groups</h3>
                    <p className="text-sm text-gray-300">
                        Each group type automatically gets relevant features. Family groups have grocery lists,
                        work groups have task boards, and more!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Groups;
