import './Board.css';

const OperatorBtn = (props) => {
    const style = { background: '#666666'};

    return (
        <button
            id={props.id}
            value={props.value}
            style={style}
            onClick={props.onClick}
        >
            {props.value}
        </button>
    )
}

export default OperatorBtn;