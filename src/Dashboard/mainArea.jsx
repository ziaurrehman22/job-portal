import React, { useState } from 'react';

function MainArea() {
    const [jobs, setJobs] = useState([
        {
            id: 1,
            logo: 'G',
            logoColor: '#4285F4',
            company: 'Google',
            role: 'Frontend Developer',
            location: 'Mountain View, CA',
            date: 'Nov 15, 2026',
            status: 'Applied',
        },
        {
            id: 2,
            logo: 'M',
            logoColor: '#f25022',
            company: 'Microsoft',
            role: 'React Developer',
            location: 'Redmond, USA',
            date: 'Nov 10, 2026',
            status: 'Interview',
        },
        {
            id: 3,
            logo: '∞',
            logoColor: '#0668E1',
            company: 'Meta',
            role: 'Software Engineer',
            location: 'Menlo Park, USA',
            date: 'Nov 05, 2026',
            status: 'Rejected',
        },
        {
            id: 4,
            logo: '',
            logoColor: '#000000',
            company: 'Apple',
            role: 'Web Developer',
            location: 'Cupertino, USA',
            date: 'Oct 28, 2026',
            status: 'Applied',
        },
        {
            id: 5,
            logo: 'a',
            logoColor: '#FF9900',
            company: 'Amazon',
            role: 'Frontend Intern',
            location: 'Seattle, USA',
            date: 'Oct 20, 2026',
            status: 'Applied',
        },
    ]);

    // 2. Search aur Filter ke liye states
    const [searchText, setSearchText] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('All');

    // 3. Stats calculate karna
    const totalJobs = jobs.length;
    const appliedJobs = jobs.filter((job) => job.status === 'Applied').length;
    const interviewJobs = jobs.filter((job) => job.status === 'Interview').length;
    const rejectedJobs = jobs.filter((job) => job.status === 'Rejected').length;

    // 4. Delete button ka function
    function deleteJob(id) {
        const updatedJobs = jobs.filter((job) => job.id !== id);
        setJobs(updatedJobs);
    }

    // 5. Search aur Status ke mutabiq list filter karna
    const filteredJobs = jobs.filter((job) => {
        const matchCompany = job.company.toLowerCase().includes(searchText.toLowerCase());
        const matchStatus = selectedStatus === 'All' || job.status === selectedStatus;
        return matchCompany && matchStatus;
    });

    return (
        <div className="main-area">

            {/* --- Top 4 Summary Cards --- */}
            <div className="stats-container">
                <div className="stat-card">
                    <div className="stat-icon blue-bg">💼</div>
                    <div>
                        <h3>{totalJobs}</h3>
                        <p>Total Applications</p>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon green-bg">📨</div>
                    <div>
                        <h3>{appliedJobs}</h3>
                        <p>Applied Jobs</p>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon yellow-bg">📅</div>
                    <div>
                        <h3>{interviewJobs}</h3>
                        <p>Interview Scheduled</p>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon red-bg">❌</div>
                    <div>
                        <h3>{rejectedJobs}</h3>
                        <p>Rejected Applications</p>
                    </div>
                </div>
            </div>

            {/* --- My Job Applications Box --- */}
            <div className="jobs-box">
                <div className="jobs-header">
                    <h2>💼 My Job Applications</h2>
                    <button className="add-btn" onClick={() => alert('Add New Job Clicked!')}>
                        + Add New Job
                    </button>
                </div>

                {/* Search & Filter */}
                <div className="filter-row">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="🔍 Search by company..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />

                    <select
                        className="filter-select"
                        value={selectedStatus}
                        onChange={(e) => setSelectedStatus(e.target.value)}
                    >
                        <option value="All">All Status</option>
                        <option value="Applied">Applied</option>
                        <option value="Interview">Interview</option>
                        <option value="Rejected">Rejected</option>
                    </select>
                </div>

                {/* Jobs List */}
                <div className="job-list">
                    {filteredJobs.map((job) => (
                        <div key={job.id} className="job-item">

                            {/* Company Details */}
                            <div className="company-info">
                                <div className="company-logo" style={{ color: job.logoColor }}>
                                    {job.logo}
                                </div>
                                <div>
                                    <h4>{job.company}</h4>
                                    <p>💼 {job.role}</p>
                                    <p>📍 {job.location}</p>
                                </div>
                            </div>

                            {/* Date */}
                            <div className="job-date">📅 {job.date}</div>

                            {/* Status Badge */}
                            <div>
                                <span className={`badge badge-${job.status}`}>
                                    ● {job.status}
                                </span>
                            </div>

                            {/* Edit & Delete Buttons */}
                            <div className="action-buttons">
                                <button
                                    className="edit-btn"
                                    onClick={() => alert('Editing ' + job.company)}
                                >
                                    ✏️ Edit
                                </button>
                                <button
                                    className="delete-btn"
                                    onClick={() => deleteJob(job.id)}
                                >
                                    🗑️ Delete
                                </button>
                            </div>

                        </div>
                    ))}

                    {/* Agar koi job match na ho */}
                    {filteredJobs.length === 0 && (
                        <p style={{ textAlign: 'center', color: '#888' }}>No jobs found.</p>
                    )}
                </div>
            </div>

        </div>
    );
}

export default MainArea;