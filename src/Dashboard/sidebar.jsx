import React from 'react'
import { Link } from 'react-router'

const sidebar = () => {
    return (
        <div id='sidebar-container'>
            <Link to='/dashboard' id='sidebar-logo'>

                <div id="sidebar-top">
                    <i>👜</i>
                    <h1>Job Tracker</h1>
                </div>
            </Link>


            <div id="sidebar-center">
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/AddJob'>Add Job</Link>
                <Link to='/MyApplication'>My Application</Link>
                <Link to='/Statistics'>Statistics</Link>
                <Link to='/Settings'>Setting</Link>
            </div>

            <div id="sidebar-bottom">
                <h2>Dream Big</h2>
                <h3>Apply Smart</h3>
            </div>
        </div >
    )
}

export default sidebar