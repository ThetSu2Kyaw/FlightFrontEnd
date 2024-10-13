import React from 'react'
import { Outlet } from 'react-router-dom'
import '../../assets/scss/Layout.scss';
import Navbar from '../../components/Navbar';

export default function Layout() {
    return (
        <div>
            <div className="wrap">
                <Navbar />
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}
