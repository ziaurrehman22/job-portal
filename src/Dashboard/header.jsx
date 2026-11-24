import React, { useState } from 'react';

const Header = () => {

    return (
            <header className="dashboard-header">
                <div className="header-left">
                    <h1 className="header-title">
                        Welcome! <span className="wave-emoji" role="img" aria-label="wave">👋</span>
                    </h1>
                    <p className="header-subtitle">
                        Track your job applications all in one place.
                    </p>
                </div>

                <div className="header-right">
                    <div className="account-select-container">
                        <label htmlFor="account-select" className="account-label">Account:</label>
                        <select className="account-dropdown">
                            <option value="personal">Personal Account</option>
                            <option value="logout">Log-out</option>
                        </select>
                    </div>
                </div>
            </header>
    );
};

export default Header;