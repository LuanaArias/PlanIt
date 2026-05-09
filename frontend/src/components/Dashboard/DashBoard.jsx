import "./Dashboard.css";

import { StatsCard } from "../StatsCards/StatsCards";
import { TasksBarChart } from "../Charts/TasksBarChart";
import { TasksIcon } from "./ui/TasksIcon";
import { CompletedIcon } from "./ui/CompletedIcon";
import { PendingIcon } from "./ui/PendingIcon";
import { ProductivityIcon } from "./ui/ProductivityIcon";

export function Dashboard({ tasks }) {

    const completed =
        tasks.filter(t => t.completed);

    const pending =
        tasks.filter(t => !t.completed);

    const percentage =
        tasks.length > 0
            ? Math.round(
                (completed.length / tasks.length) * 100
            )
            : 0;

    return (

        <section className="dashboard">

            <div className="stats-grid">

                <StatsCard
                    title="Total tareas"
                    value={tasks.length}
                    icon= {<TasksIcon />}
                />

                <StatsCard
                    title="Completadas"
                    value={completed.length}
                    icon= {<CompletedIcon />}
                />

                <StatsCard
                    title="Pendientes"
                    value={pending.length}
                    icon= {<PendingIcon />}
                />

                <StatsCard
                    title="Progreso"
                    value={`${percentage}%`}
                    icon= {<ProductivityIcon />}
                />

            </div>

            <div className="charts-container">

                <TasksBarChart tasks={tasks} />

            </div>

        </section>
    );
}