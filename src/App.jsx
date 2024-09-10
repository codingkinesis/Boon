import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import { Home } from './pages/Home';
import { User } from './pages/User';
import { Game } from './pages/Game'
//import { AppFooter } from './cmps/AppFooter.jsx';
//import { UserMsg } from './cmps/UserMsg';
//import { Settings } from './pages/Settings.jsx';

export function App() {
    return (
        <Router>
            <section className='main-app'>
                <main className='container'>
                    <Routes>
                        <Route path="/" element={<Navigate to="/boon/home" replace />} />
                        <Route path="/boon/home" element={<Home />} />
                        <Route path="/boon/user" element={<User />} />
                        <Route path="/boon/game" element={<Game />} />
                        {/* <Route path="/boon/settings" element={<Settings />} /> */}
                    </Routes>
                </main>
                {/* <UserMsg /> */}
                {/* <AppFooter /> */}
            </section>
        </Router>
    );
}