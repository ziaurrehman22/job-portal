import React from 'react'

const sidebar = () => {
    return (
        <div id='sidebar-container'>
            <div id="sidebar-top">
                <i>👜</i>
                <h1>Job Tracker</h1>
            </div>

            <div id="sidebar-center">
                <a href=""><h3>Dashboard</h3></a>
                <a href=""><h3>Add Job</h3></a>
                <a href="#jobs-box"><h3>My Applications</h3></a>
                <a href=""><h3>Statistics</h3></a>
                <a href=""><h3>Setting</h3></a>
            </div>

            <div id="sidebar-bottom">
                <h2>Dream Big</h2>
                <h3>Apply Smart</h3>
            </div>
        </div>
    )
}

export default sidebar