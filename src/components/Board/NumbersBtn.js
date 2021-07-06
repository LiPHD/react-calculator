import './Board.css';

const NumbersBtn = (props) => {
    return (
        <button
            id={props.id}
            value={props.value}
            className={props.value==='0' && "grid-item-zero"}
            onClick={props.onClick}
        >
            {props.value}
        </button>
    )
}

export default NumbersBtn;