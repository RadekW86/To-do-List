import "./style.css";

const Buttons = (props) => (
    props.taskTable.length > 0 && (
        <div className="section__button">
            <button
                className="section__button"
            >
                {props.hideDone ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                className="section__button"
                disabled={
                    props.taskTable.every(({ done }) => done)
                }
            >
                Ukończ wszystkie
            </button>
        </div>
    )

);


export default Buttons;
