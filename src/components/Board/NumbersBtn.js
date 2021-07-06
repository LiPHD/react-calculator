import './Board.css';

const NumbersBtn = (props) => {
    return (
        <button
            id={props.id}
            value={props.value}
            onClick={props.onClick}
        >
            {props.value}
        </button>
    )
}

export default NumbersBtn;