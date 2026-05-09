import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts";

export function TasksBarChart({ tasks }) {
    const grouped = {};
    tasks.forEach(task => {
        if(task.completedAt){
            const date =
                new Date(task.completedAt)
                    .toLocaleDateString();
            grouped[date] =
                (grouped[date] || 0) + 1;
        }
    });

    const data = Object.entries(grouped).map(
        ([date, total]) => ({
            date,
            total
        })
    );

    return (

        <div className="chart-card">
            <h2>
                Tareas completadas
            </h2>
            {data.length > 0 ? (
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}>
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="total" />
                    </BarChart>
                </ResponsiveContainer>
            ) : (
                <p>No hay tareas completadas todavía</p>
            )}
        </div>
    );
}