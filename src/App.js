import './App.css';
import React, { useState } from 'react';
import * as math from 'mathjs';

import Author from './components/Author/Author';
import Board from './components/Board/Board';
import Result from './components/Result/Result';

const isOperator = /[*+\-/]/;
const endsWithOperator = /[*+\-/]$/;
const startsWithZero = /^0/;

function App() {
  const [curVal, setCurVal] = useState('0');
  const [prevVal, setPrevVal] = useState('0');
  const [maxPrevVal, setMaxPrevVal] = useState('0');
  const [operations, setOperations] = useState([]);
  const [isEvaluated, setIsEvaluated] = useState(false);

  const maxNumberWarning = () => {
    setPrevVal('MAX NUMBER LIMIT');
    setTimeout(() => {
      setCurVal(maxPrevVal);
      setPrevVal(maxPrevVal);
    }, 1000);
  }

  const handleClear = () => {
    setCurVal('0');
    setPrevVal('0');
    setMaxPrevVal('0');
    setOperations([]);
    setIsEvaluated(false);
  }

  const handleNumbers = e => {
    if (prevVal.includes('LIMIT')) return;

    const val = e.target.value;
    
    if (prevVal.length > 10) {
      maxNumberWarning();
    }
    else if (isEvaluated) {
      setCurVal(val);
      setPrevVal(val);
      setOperations([]);
      setIsEvaluated(false);
    }
    else {
      if (prevVal.includes('.')) {
        setCurVal(curVal + val);
        setPrevVal(prevVal + val);
      }
      else {
        const curVal_ = curVal.replace(startsWithZero, '');
        const prevVal_ = prevVal.replace(startsWithZero, '');
        
        if (prevVal_ === '0' && val === '0') return;

        if (isOperator.test(prevVal_)) {
          setPrevVal(val);
        }
        else {
          setPrevVal(prevVal_ + val);
        }

        setCurVal(curVal_ + val);
      }
    }
  }

  const handleOperations = e => {
    const val = e.target.value;
    setOperations([...operations]);

    if (isEvaluated) {
      setCurVal(prevVal + val);
      setPrevVal(val);
      setOperations([val]);
      setIsEvaluated(false);
    }
    else {
      if (isOperator.test(prevVal)) {
        let slicedOp = operations.slice(0, operations.length - 1);
        setCurVal(curVal.replace(endsWithOperator, val));
        setPrevVal(val);
        setOperations([...slicedOp, val]);
      }
      else {
        if (!prevVal.includes('LIMIT')) {
          setCurVal(curVal + val);
          setPrevVal(val);
          setOperations([...operations, val]);
        }
      }
    }
  }

  const handleDecimal = e => {
    const val = e.target.value;

    if (isEvaluated) {
      setCurVal('0' + val);
      setPrevVal('0' + val);
      setIsEvaluated(false);
    }
    else {
      if (!prevVal.includes('.') && !prevVal.includes('LIMIT')) {
        setCurVal(curVal + val);
        setPrevVal(prevVal + val);
      }
    }
  }

  const handleResult = () => {
    if (isEvaluated) return;

    let sliced = curVal.slice();
    if (endsWithOperator.test(curVal)) {
      sliced = curVal.slice(0, curVal.length - 1)
    }

    const result = math.evaluate(sliced);
    setCurVal(`${sliced}=${result}`);
    setPrevVal(`${result}`);
    setIsEvaluated(true);
  }

  return (
    <div id="container" className="container">
      <div className="calculator-container">
        <Result head={curVal} result={prevVal} />
        <Board 
          clears={handleClear}
          numbers={handleNumbers}
          operations={handleOperations}
          decimal={handleDecimal}
          result={handleResult}
        />
      </div>
      <Author 
        name='Wesley Yang'
        github='https://github.com/WYang6060'
      />
    </div>
  );
}

export default App;