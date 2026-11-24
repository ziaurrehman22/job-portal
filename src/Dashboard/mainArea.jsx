import { Link } from 'react-router'


function MainArea() {
    const statsData = [
        { id: 1, title: 'Total Applications', value: '12' },
        { id: 2, title: 'Interviews Scheduled', value: '12' },
        { id: 3, title: 'Offers Received', value: '4' },
        { id: 4, title: 'Rejected', value: '28' }
    ];

    const recentJobs = [
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
                <div id="content-section-header">
                    <h2>Recent Applications</h2>
                    <Link to='/AddJob'><button>Add new Job</button></Link>
                </div>
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