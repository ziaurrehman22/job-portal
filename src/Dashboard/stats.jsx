
function Stats() {
    const metrics = [
        { title: 'Total Applications', count: '124', change: '+12% this month', type: 'neutral' },
        { title: 'Interview Conversion', count: '24%', change: '+4.5% vs last month', type: 'positive' },
        { title: 'Offer Rate', count: '8.2%', change: '+1.2% improvement', type: 'positive' },
        { title: 'Active Rejections', count: '28', change: '-3% from last week', type: 'negative' }
    ];

    const monthlyBreakdown = [
        { month: 'August', applied: 18, interviews: 2, offers: 0 },
        { month: 'September', applied: 32, interviews: 4, offers: 1 },
        { month: 'October', applied: 45, interviews: 5, offers: 2 },
        { month: 'November', applied: 29, interviews: 3, offers: 1 }
    ];

    return (
        <div className="statistics-container">
            <h2 className="statistics-title">Application Analytics & Insights</h2>

            <div className="stats-grid">
                {metrics.map((item, index) => (
                    <div className="metric-card" key={index}>
                        <h3>{item.title}</h3>
                        <p className="metric-value">{item.count}</p>
                        <span className={`metric-trend ${item.type}`}>{item.change}</span>
                    </div>
                ))}
            </div>

            <div className="analytics-section">
                <h3>Monthly Performance Overview</h3>
                <div className="table-wrapper">
                    <table className="stats-table">
                        <thead>
                            <tr>
                                <th>Month</th>
                                <th>Applications Sent</th>
                                <th>Interviews Secured</th>
                                <th>Offers Received</th>
                            </tr>
                        </thead>
                        <tbody>
                            {monthlyBreakdown.map((row, index) => (
                                <tr key={index}>
                                    <td>{row.month}</td>
                                    <td>{row.applied}</td>
                                    <td>{row.interviews}</td>
                                    <td>{row.offers}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Stats;