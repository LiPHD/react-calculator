import ClearBtn from "./ClearBtn";
import OperatorBtn from "./OperatorBtn";
import NumbersBtn from "./NumbersBtn";
import EqualsBtn from "./EqualsBtn";

const Board = (props) => {
    return (
        <div className='buttons-container'>
            {ClearBtn({ id: 'clear', value: 'AC', onClick:props.clears })}
            {OperatorBtn({ id: 'divide', value: '/', onClick:props.operations })}
            {OperatorBtn({ id: 'multiply', value: '*', onClick:props.operations })}
            {NumbersBtn({ id: 'seven', value: '7', onClick:props.numbers })}
            {NumbersBtn({ id: 'eight', value: '8', onClick:props.numbers })}
            {NumbersBtn({ id: 'nine', value: '9', onClick:props.numbers })}
            {OperatorBtn({ id: 'substract', value: '-', onClick:props.operations })}
            {NumbersBtn({ id: 'four', value: '4', onClick:props.numbers })}
            {NumbersBtn({ id: 'five', value: '5', onClick:props.numbers })}
            {NumbersBtn({ id: 'six', value: '6', onClick:props.numbers })}
            {OperatorBtn({ id: 'add', value: '+', onClick:props.operations })}
            {NumbersBtn({ id: 'one', value: '1', onClick:props.numbers })}
            {NumbersBtn({ id: 'two', value: '2', onClick:props.numbers })}
            {NumbersBtn({ id: 'three', value: '3', onClick:props.numbers })}
            {NumbersBtn({ id: 'zero', value: '0', onClick:props.numbers })}
            {NumbersBtn({ id: 'decimal', value: '.', onClick:props.decimal })}
            {EqualsBtn({ id: 'equals', value: '=', onClick:props.result })}
        </div>
    );
}

export default Board;