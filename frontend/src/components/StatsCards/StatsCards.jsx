import "./StatsCards.css";

export function StatsCard({ title, value, icon }) {
    return (
        <div className="stats-card">
            <div className="stats-card-header">
                <span className="stats-icon">
                    {icon}
                </span>
                <h3>{title}</h3>
            </div>
            <p className="stats-value">
                {value}
            </p>
        </div>
    );
}