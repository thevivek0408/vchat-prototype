import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    GraduationCap,
    BookOpen,
    Video,
    Users,
    Award,
    Calendar,
    Clock,
    TrendingUp,
    Target,
    CheckCircle,
    PlayCircle,
    FileText,
    MessageSquare,
    Star,
    ChevronRight,
    Search,
    Plus
} from 'lucide-react';

const Education = () => {
    const [selectedTab, setSelectedTab] = useState('courses');

    const enrolledCourses = [
        {
            id: 1,
            title: 'Web Development Bootcamp',
            instructor: 'Rahul Sharma',
            progress: 65,
            totalLessons: 45,
            completedLessons: 29,
            nextLesson: 'React Hooks Deep Dive',
            duration: '12 weeks',
            thumbnail: '💻',
            gradient: 'from-blue-500 to-cyan-500'
        },
        {
            id: 2,
            title: 'Data Science with Python',
            instructor: 'Dr. Priya Reddy',
            progress: 40,
            totalLessons: 60,
            completedLessons: 24,
            nextLesson: 'Machine Learning Basics',
            duration: '16 weeks',
            thumbnail: '📊',
            gradient: 'from-purple-500 to-pink-500'
        },
    ];

    const studyGroups = [
        {
            id: 1,
            name: 'MERN Stack Developers',
            members: 234,
            activity: 'Active now',
            subject: 'Web Development',
            avatar: '👥',
            gradient: 'from-green-500 to-emerald-500'
        },
        {
            id: 2,
            name: 'Python Learners Hub',
            members: 567,
            activity: '5 mins ago',
            subject: 'Programming',
            avatar: '🐍',
            gradient: 'from-yellow-500 to-orange-500'
        },
        {
            id: 3,
            name: 'JEE 2024 Preparation',
            members: 1234,
            activity: '10 mins ago',
            subject: 'Competitive Exams',
            avatar: '📚',
            gradient: 'from-red-500 to-pink-500'
        },
    ];

    const assignments = [
        {
            id: 1,
            title: 'Build a React Todo App',
            course: 'Web Development Bootcamp',
            dueDate: 'Jan 20, 2024',
            status: 'pending',
            points: 100
        },
        {
            id: 2,
            title: 'Data Analysis Project',
            course: 'Data Science with Python',
            dueDate: 'Jan 22, 2024',
            status: 'pending',
            points: 150
        },
        {
            id: 3,
            title: 'JavaScript Quiz',
            course: 'Web Development Bootcamp',
            dueDate: 'Jan 15, 2024',
            status: 'completed',
            points: 50,
            score: 48
        },
    ];

    const liveClasses = [
        {
            id: 1,
            title: 'Advanced React Patterns',
            instructor: 'Rahul Sharma',
            time: 'Today, 6:00 PM',
            duration: '2 hours',
            attendees: 156,
            thumbnail: '⚛️'
        },
        {
            id: 2,
            title: 'Machine Learning Workshop',
            instructor: 'Dr. Priya Reddy',
            time: 'Tomorrow, 4:00 PM',
            duration: '3 hours',
            attendees: 203,
            thumbnail: '🤖'
        },
    ];

    const achievements = [
        { id: 1, name: 'Fast Learner', icon: '⚡', earned: true },
        { id: 2, name: 'Assignment Master', icon: '📝', earned: true },
        { id: 3, name: 'Perfect Attendance', icon: '🎯', earned: false },
        { id: 4, name: 'Top Performer', icon: '🏆', earned: true },
    ];

    return (
        <div className="min-h-screen pb-20">
            {/* Header */}
            <header className="sticky top-0 glass-dark border-b border-white/10 z-40 px-4 py-4">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h1 className="text-2xl font-bold text-white">Education Hub</h1>
                        <p className="text-sm text-gray-400">Learn, collaborate, succeed</p>
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
                        placeholder="Search courses, groups, topics..."
                        className="input pl-10"
                    />
                </div>
            </header>

            <div className="px-4 py-4 space-y-6">
                {/* Stats Overview */}
                <div className="grid grid-cols-3 gap-3">
                    {[
                        { label: 'Courses', value: '2', icon: BookOpen, gradient: 'from-blue-500 to-cyan-500' },
                        { label: 'Certificates', value: '5', icon: Award, gradient: 'from-yellow-500 to-orange-500' },
                        { label: 'Study Hours', value: '127', icon: Clock, gradient: 'from-purple-500 to-pink-500' },
                    ].map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="card text-center"
                            >
                                <div className={`w-10 h-10 mx-auto mb-2 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center`}>
                                    <Icon className="text-white" size={20} />
                                </div>
                                <p className="text-2xl font-bold text-white">{stat.value}</p>
                                <p className="text-xs text-gray-400">{stat.label}</p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Tabs */}
                <div className="flex gap-2 border-b border-white/10">
                    {['courses', 'groups', 'assignments'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setSelectedTab(tab)}
                            className={`px-4 py-2 text-sm font-medium capitalize transition-colors relative ${selectedTab === tab ? 'text-white' : 'text-gray-400 hover:text-gray-300'
                                }`}
                        >
                            {tab}
                            {selectedTab === tab && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500"
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                {selectedTab === 'courses' && (
                    <div className="space-y-6">
                        {/* Enrolled Courses */}
                        <div>
                            <h2 className="text-lg font-semibold text-white mb-3">My Courses</h2>
                            <div className="space-y-3">
                                {enrolledCourses.map((course, index) => (
                                    <motion.div
                                        key={course.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="card hover:bg-white/5 transition-colors cursor-pointer"
                                    >
                                        <div className="flex items-start gap-3 mb-3">
                                            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${course.gradient} flex items-center justify-center text-3xl flex-shrink-0`}>
                                                {course.thumbnail}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-white mb-1">{course.title}</h3>
                                                <p className="text-sm text-gray-400">by {course.instructor}</p>
                                                <p className="text-xs text-gray-500 mt-1">{course.duration} • {course.completedLessons}/{course.totalLessons} lessons</p>
                                            </div>
                                        </div>
                                        <div className="mb-2">
                                            <div className="flex items-center justify-between text-sm mb-1">
                                                <span className="text-gray-400">Progress</span>
                                                <span className="text-white font-semibold">{course.progress}%</span>
                                            </div>
                                            <div className="w-full bg-white/10 rounded-full h-2">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${course.progress}%` }}
                                                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                                                    className={`h-2 rounded-full bg-gradient-to-r ${course.gradient}`}
                                                />
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between pt-2 border-t border-white/10">
                                            <span className="text-sm text-gray-400">Next: {course.nextLesson}</span>
                                            <button className="btn-primary text-sm py-1.5 px-4">
                                                <PlayCircle size={16} className="mr-1" />
                                                Continue
                                            </button>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Live Classes */}
                        <div>
                            <h2 className="text-lg font-semibold text-white mb-3">Upcoming Live Classes</h2>
                            <div className="space-y-3">
                                {liveClasses.map((liveClass, index) => (
                                    <motion.div
                                        key={liveClass.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="card bg-gradient-to-br from-red-500/10 to-orange-500/10 border-red-500/30"
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-2xl">
                                                {liveClass.thumbnail}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-white">{liveClass.title}</h3>
                                                <p className="text-sm text-gray-400">{liveClass.instructor}</p>
                                            </div>
                                            <span className="badge badge-error">LIVE</span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-2 text-sm text-gray-300 mb-3">
                                            <div className="flex items-center gap-2">
                                                <Clock size={16} className="text-gray-400" />
                                                {liveClass.time}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Users size={16} className="text-gray-400" />
                                                {liveClass.attendees} attending
                                            </div>
                                        </div>
                                        <button className="btn-primary w-full">
                                            <Video size={16} className="mr-2" />
                                            Join Class
                                        </button>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {selectedTab === 'groups' && (
                    <div className="space-y-3">
                        {studyGroups.map((group, index) => (
                            <motion.div
                                key={group.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="card hover:bg-white/5 transition-colors cursor-pointer"
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${group.gradient} flex items-center justify-center text-2xl`}>
                                        {group.avatar}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-white">{group.name}</h3>
                                        <p className="text-sm text-gray-400">{group.subject}</p>
                                        <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
                                            <span>{group.members.toLocaleString()} members</span>
                                            <span>•</span>
                                            <span className="text-green-400">{group.activity}</span>
                                        </div>
                                    </div>
                                    <ChevronRight className="text-gray-400" size={20} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

                {selectedTab === 'assignments' && (
                    <div className="space-y-3">
                        {assignments.map((assignment, index) => (
                            <motion.div
                                key={assignment.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className={`card ${assignment.status === 'completed'
                                        ? 'bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/30'
                                        : ''
                                    }`}
                            >
                                <div className="flex items-start justify-between mb-2">
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-white">{assignment.title}</h3>
                                        <p className="text-sm text-gray-400">{assignment.course}</p>
                                    </div>
                                    {assignment.status === 'completed' ? (
                                        <CheckCircle className="text-green-400" size={24} />
                                    ) : (
                                        <span className="badge badge-warning">Pending</span>
                                    )}
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-400">Due: {assignment.dueDate}</span>
                                    <span className="text-primary-400 font-semibold">{assignment.points} points</span>
                                </div>
                                {assignment.status === 'completed' && assignment.score && (
                                    <div className="mt-2 pt-2 border-t border-white/10">
                                        <span className="text-sm text-green-400">
                                            Score: {assignment.score}/{assignment.points}
                                        </span>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                )}

                {/* Achievements */}
                <div>
                    <h2 className="text-lg font-semibold text-white mb-3">Achievements</h2>
                    <div className="grid grid-cols-4 gap-3">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={achievement.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                                className={`card text-center ${achievement.earned ? 'bg-gradient-to-br from-yellow-500/20 to-orange-500/20' : 'opacity-50'
                                    }`}
                            >
                                <div className="text-3xl mb-1">{achievement.icon}</div>
                                <p className="text-xs text-gray-300">{achievement.name}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
