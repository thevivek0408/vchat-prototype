import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

import Layout from './components/Layout';
import Onboarding from './pages/Onboarding';

// Lazy load feature pages
const Home = lazy(() => import('./pages/Home'));
const Social = lazy(() => import('./pages/Home')); // Alias for Home
const Chat = lazy(() => import('./pages/Chat'));
const Government = lazy(() => import('./pages/Government'));
const GovernmentServices = lazy(() => import('./pages/GovernmentServices'));
const Profile = lazy(() => import('./pages/Profile'));
const Groups = lazy(() => import('./pages/Groups'));

// Feature Pages
const JobFinder = lazy(() => import('./pages/JobFinder'));
const Travel = lazy(() => import('./pages/Travel'));
const Wallet = lazy(() => import('./pages/Wallet'));
const Healthcare = lazy(() => import('./pages/Healthcare'));
const Education = lazy(() => import('./pages/Education'));
const MiniApps = lazy(() => import('./pages/MiniApps'));
const Pulse = lazy(() => import('./pages/Pulse'));
const Live = lazy(() => import('./pages/AIAssistant')); // Changed to AIAssistant
const SynergySpace = lazy(() => import('./pages/SynergySpace'));
// const StreakShowcase = lazy(() => import('./pages/StreakShowcase')); // Commented out as it might be deleted

const PageLoader = () => (
    <div className="min-h-screen flex items-center justify-center bg-[#0f1115]">
        <Loader2 className="animate-spin text-primary-500" size={40} />
    </div>
);

const App = () => {
    return (
        <Router>
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Social />} />
                        <Route path="chat" element={<Chat />} />
                        <Route path="social" element={<Social />} />
                        <Route path="groups" element={<Groups />} />
                        <Route path="hub" element={<Government />} />
                        <Route path="government" element={<GovernmentServices />} /> {/* Dedicated Government Services */}
                        <Route path="ai" element={<Live />} /> {/* Placeholder for AI */}
                        <Route path="profile" element={<Profile />} />
                        <Route path="jobs" element={<JobFinder />} />
                        <Route path="travel" element={<Travel />} />
                        <Route path="wallet" element={<Wallet />} />
                        <Route path="healthcare" element={<Healthcare />} />
                        <Route path="education" element={<Education />} />
                        <Route path="miniapps" element={<MiniApps />} />
                        <Route path="pulse" element={<Pulse />} />
                        <Route path="live" element={<Live />} />
                        <Route path="synergy/:id" element={<SynergySpace />} />
                        {/* <Route path="streak-demo" element={<StreakShowcase />} /> */}
                    </Route>
                    <Route path="/onboarding" element={<Onboarding onComplete={() => window.location.href = '/'} />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </Suspense>
        </Router>
    );
};

export default App;
