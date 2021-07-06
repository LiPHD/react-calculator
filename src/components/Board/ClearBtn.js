import './Board.css';

const ClearBtn = (props) => {
    const style = { background: '#ac3939'};

    return (
        <button
            id={props.id}
            value={props.value}
            className="grid-item-clear"
            style={style}
            onClick={props.onClick}
        >
            {props.value}
        </button>
    )
}

export default ClearBtn;