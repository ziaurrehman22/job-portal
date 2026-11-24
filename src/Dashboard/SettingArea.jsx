import React, { useState } from 'react';

function SettingArea() {
    const [settings, setSettings] = useState({
        fullName: 'Muhammad Ali',
        email: 'ali@example.com',
        jobRole: 'Frontend React Developer',
        currency: 'PKR',
        emailNotifications: true
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setSettings((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSave = (e) => {
        e.preventDefault();
        alert('Settings successfully save ho gayi hain!');
    };

    return (
        <div className="setting-container">
            <h2 className="setting-title">Account Settings</h2>

            <form onSubmit={handleSave} className="setting-form-wrapper">
                <div className="setting-section">
                    <h3>Personal Information</h3>
                    <div className="setting-row">
                        <div className="setting-group">
                            <label>Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                value={settings.fullName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="setting-group">
                            <label>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={settings.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="setting-group">
                        <label>Target Job Role</label>
                        <input
                            type="text"
                            name="jobRole"
                            value={settings.jobRole}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="setting-section">
                    <h3>Preferences & Notifications</h3>
                    <div className="setting-row">
                        <div className="setting-group">
                            <label>Preferred Currency</label>
                            <select
                                name="currency"
                                value={settings.currency}
                                onChange={handleChange}
                            >
                                <option value="PKR">PKR (Pakistani Rupee)</option>
                                <option value="USD">USD ($)</option>
                                <option value="EUR">EUR (€)</option>
                            </select>
                        </div>
                    </div>

                    <div className="setting-toggle-group">
                        <label className="toggle-label">
                            <input
                                type="checkbox"
                                name="emailNotifications"
                                checked={settings.emailNotifications}
                                onChange={handleChange}
                            />
                            <span>Enable Email Notifications for Interviews</span>
                        </label>
                    </div>
                </div>

                <div className="setting-actions">
                    <button type="submit" className="save-btn">
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SettingArea;