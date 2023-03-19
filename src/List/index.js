import "./style.css";

const List = (props) => (
    <ul className="list">
        {props.taskTable.map(task =>
            <li
                key={task.id}
                className={`list__item ${(task.done && props.hideDone) ? "list__item--hidden" : ""}`}
            >
                <button className="list__button list__button--doneBox">
                    {task.done ? "✔️" : ""}
                </button>
                <div className={`list__content${task.done ? " list__content--done" : ""}`}>
                    {task.content}
                </div>
                <button class="list__button list__button--remove">
                    🗑️
                </button>
            </li>)}
    </ul>
);

export default List;