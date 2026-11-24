import React, { useState } from 'react';


const AddJobForm = () => {
    const [formData, setFormData] = useState({
        jobTitle: '',
        companyName: '',
        location: '',
        jobType: 'Full-Time',
        workMode: 'On-Site',
        salaryMin: '',
        salaryMax: '',
        experience: '',
        skills: '',
        description: '',
        deadline: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formattedData = {
            ...formData,
            skills: formData.skills.split(',').map((skill) => skill.trim()).filter(Boolean),
        };

        console.log('Job Posted:', formattedData);
        alert('Job successfully post ho gayi hai!');
    };

    return (
        <div className="job-form-container">
            <h2 className="job-form-title">Post a New Job</h2>

            <form onSubmit={handleSubmit} className="job-form">
                <div className="form-row">
                    <div className="form-group">
                        <label>Job Title *</label>
                        <input
                            type="text"
                            name="jobTitle"
                            required
                            placeholder="e.g. Frontend React Developer"
                            value={formData.jobTitle}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Company Name *</label>
                        <input
                            type="text"
                            name="companyName"
                            required
                            placeholder="e.g. Tech Solutions Pvt Ltd"
                            value={formData.companyName}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="form-row three-cols">
                    <div className="form-group">
                        <label>Location *</label>
                        <input
                            type="text"
                            name="location"
                            required
                            placeholder="e.g. Karachi, Pakistan"
                            value={formData.location}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Job Type</label>
                        <select
                            name="jobType"
                            value={formData.jobType}
                            onChange={handleChange}
                        >
                            <option value="Full-Time">Full-Time</option>
                            <option value="Part-Time">Part-Time</option>
                            <option value="Contract">Contract</option>
                            <option value="Internship">Internship</option>
                            <option value="Freelance">Freelance</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Work Mode</label>
                        <select
                            name="workMode"
                            value={formData.workMode}
                            onChange={handleChange}
                        >
                            <option value="On-Site">On-Site</option>
                            <option value="Remote">Remote</option>
                            <option value="Hybrid">Hybrid</option>
                        </select>
                    </div>
                </div>

                <div className="form-row three-cols">
                    <div className="form-group">
                        <label>Min Salary (PKR)</label>
                        <input
                            type="number"
                            name="salaryMin"
                            placeholder="e.g. 80000"
                            value={formData.salaryMin}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Max Salary (PKR)</label>
                        <input
                            type="number"
                            name="salaryMax"
                            placeholder="e.g. 150000"
                            value={formData.salaryMax}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Experience Required</label>
                        <input
                            type="text"
                            name="experience"
                            placeholder="e.g. 2-3 Years"
                            value={formData.experience}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Required Skills (Comma separated)</label>
                        <input
                            type="text"
                            name="skills"
                            placeholder="e.g. React, JavaScript, Git"
                            value={formData.skills}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Application Deadline</label>
                        <input
                            type="date"
                            name="deadline"
                            value={formData.deadline}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label>Job Description & Responsibilities *</label>
                    <textarea
                        name="description"
                        rows="4"
                        required
                        placeholder="Job roles, responsibilities, aur requirements likhein..."
                        value={formData.description}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div className="form-submit">
                    <button type="submit" className="submit-btn">
                        Post Job
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddJobForm;