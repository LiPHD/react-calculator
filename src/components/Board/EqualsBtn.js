import './Board.css';

const EqualsBtn = (props) => {
    const style = { background: '#004466'};

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

export default EqualsBtn;