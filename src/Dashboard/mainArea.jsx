import React from 'react';


function MainArea() {
    const statsData = [
        { id: 1, title: 'Total Applications', value: '12' },
        { id: 2, title: 'Interviews Scheduled', value: '12' },
        { id: 3, title: 'Offers Received', value: '4' },
        { id: 4, title: 'Rejected', value: '28' }
    ];

    const recentJobs = [
        {
            id: 1,
            company: 'TechCorp',
            role: 'Frontend Developer',
            status: 'Interview',
            statusClass: 'pending',
            date: '24 Nov 2026'
        },
        {
            id: 2,
            company: 'InnoSoft',
            role: 'React Developer',
            status: 'Offer',
            statusClass: 'success',
            date: '20 Nov 2026'
        },
        {
            id: 3,
            company: 'DataCloud',
            role: 'UI/UX Engineer',
            status: 'Rejected',
            statusClass: 'danger',
            date: '15 Nov 2026'
        },
        {
            id: 4,
            company: 'CloudScale',
            role: 'Backend Engineer',
            status: 'Pending',
            statusClass: 'pending',
            date: '22 Nov 2026'
        },
        {
            id: 5,
            company: 'PixelCraft',
            role: 'UI Designer',
            status: 'Interview',
            statusClass: 'pending',
            date: '18 Nov 2026'
        },
        {
            id: 6,
            company: 'AlphaSoft',
            role: 'Software Engineer',
            status: 'Offer',
            statusClass: 'success',
            date: '12 Nov 2026'
        },
        {
            id: 7,
            company: 'ByteWorks',
            role: 'JavaScript Developer',
            status: 'Rejected',
            statusClass: 'danger',
            date: '10 Nov 2026'
        },
        {
            id: 8,
            company: 'CyberNova',
            role: 'React Native Developer',
            status: 'Pending',
            statusClass: 'pending',
            date: '08 Nov 2026'
        },
        {
            id: 9,
            company: 'NextGen AI',
            role: 'Full Stack Engineer',
            status: 'Interview',
            statusClass: 'pending',
            date: '05 Nov 2026'
        },
        {
            id: 10,
            company: 'Apex Solutions',
            role: 'Web Developer',
            status: 'Offer',
            statusClass: 'success',
            date: '01 Nov 2026'
        }
    ];

    return (
        <main className="main-content-area">
            <div className="stats-container">
                {statsData.map((stat) => (
                    <div className="stat-card" key={stat.id}>
                        <h3>{stat.title}</h3>
                        <p>{stat.value}</p>
                    </div>
                ))}
            </div>

            <div className="content-section">
                <h2>Recent Applications</h2>
                <div className="table-wrapper">
                    <table className="jobs-table">
                        <thead>
                            <tr>
                                <th>Company</th>
                                <th>Role</th>
                                <th>Status</th>
                                <th>Date Applied</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentJobs.map((job) => (
                                <tr key={job.id}>
                                    <td>{job.company}</td>
                                    <td>{job.role}</td>
                                    <td>
                                        <span className={`badge ${job.statusClass}`}>
                                            {job.status}
                                        </span>
                                    </td>
                                    <td>{job.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}

export default MainArea;