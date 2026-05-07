import { DeleteButton } from '../ui/DeleteButton/DeleteButton';
import { UpdateButton } from '../ui/UpdateButton/UpdateButton';
import DOMPurify from "dompurify";
import './TaskItem.css'
export function TaskItem({ task, onDelete, onEdit, onToggle }) {
    return (
        <div className={`task-item ${task.completed ? 'completed' : ''}`}>
            
            <div className="task-item-header">
                <div className="task-status">
                    <input
                        type="checkbox"
                        checked={Boolean(task.completed)}
                        onChange={() => onToggle(task)}
                    />
                    <span>
                        {task.completed ? "Completada" : "Pendiente"}
                    </span>
                </div>

                <div className="task-actions">
                    <button onClick={() => onEdit(task)}>
                        <UpdateButton />  
                    </button>
                    <button onClick={() => onDelete(task.id)}>
                        <DeleteButton />  
                    </button>
                </div>
            </div>

            <h4 className="task-title">{task.title}</h4>

            {task.description && (
                <div
                    className="task-desc"
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(task.description, {
                            ADD_TAGS: ["iframe"],
                            ADD_ATTR: [
                                "allow",
                                "allowfullscreen",
                                "frameborder",
                                "scrolling",
                                "src",
                                "width",
                                "height"
                            ]
                        })
                    }}
                />
            )}

        </div>
    );
}