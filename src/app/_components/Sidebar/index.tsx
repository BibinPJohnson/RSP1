"use client";
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../_providers/Auth';
import { FaUser, FaClock, FaCalendarAlt, FaMoneyBill, FaAngleRight, FaCheck } from 'react-icons/fa';
import Link from 'next/link';
import "../../styles/dashboard.css";

const Sidebar: React.FC = () => {
    const [isCollapsedSidebar, setIsCollapsedSidebar] = useState<boolean>(true);
    const [activeTab, setActiveTab] = useState<string>('/');

    const toggleSidebarCollapseHandler = () => {
        setIsCollapsedSidebar((prev) => !prev);
    };

    const { user } = useAuth();
    console.log("user",user)

    useEffect(() => {
        if (window.location.pathname) {
            setActiveTab(window.location.pathname);
        }
    }, []);

    if (!user) {
        return null; // Don't render anything if user is not authenticated
    }

    const handleTabClick = (path: string) => {
        setActiveTab(path);
    };

    const isSupervisor = user.roles.includes('supervisor');

    return (
        <div className="rsp-dashboard-sidebar-menu" data-collapse={isCollapsedSidebar}>
            <button 
                className="rsp-dashboard-sidebar-collapseButton" 
                onClick={toggleSidebarCollapseHandler}>
                <FaAngleRight className={isCollapsedSidebar ? 'rotate-0' : 'rotate-180'} />
            </button>
            <div className="w-full h-screen bg-[#111827] text-white flex flex-col items-start py-4">
                <Link href="/" className={`rsp-dashboard-sidebar-link ${activeTab === '/' ? 'active' : ''}`} onClick={() => handleTabClick('/')}>
                    <FaUser className="icon" />
                    <span className="rsp-dashboard-sidebar-tabs">Employee</span>
                </Link>
                <Link href="/time_entry" className={`rsp-dashboard-sidebar-link ${activeTab === '/time_entry' ? 'active' : ''}`} onClick={() => handleTabClick('/time_entry')}>
                    <FaClock className="icon" />
                    <span className="rsp-dashboard-sidebar-tabs">Time Entry</span>
                </Link>
                <Link href="/calendar" className={`rsp-dashboard-sidebar-link ${activeTab === '/calendar' ? 'active' : ''}`} onClick={() => handleTabClick('/calendar')}>
                    <FaCalendarAlt className="icon" />
                    <span className="rsp-dashboard-sidebar-tabs">Calendar</span>
                </Link>
                <Link href="/expense" className={`rsp-dashboard-sidebar-link ${activeTab === '/expense' ? 'active' : ''}`} onClick={() => handleTabClick('/expense')}>
                    <FaMoneyBill className="icon" />
                    <span className="rsp-dashboard-sidebar-tabs">Expense</span>
                </Link>
                {isSupervisor && (
                    <Link href="/time_approval" className={`rsp-dashboard-sidebar-link ${activeTab === '/time_approval' ? 'active' : ''}`} onClick={() => handleTabClick('/time_approval')}>
                        <FaCheck className="icon" />
                        <span className="rsp-dashboard-sidebar-tabs">Time Approval</span>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Sidebar;
