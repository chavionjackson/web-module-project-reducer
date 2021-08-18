import React, { useReducer } from "react";

import "./App.css";

import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import reducer, { initialState } from "./reducers";
import {
  addOne,
  applyMemory,
  applyNumber,
  clearDisplay,
  clearMemory,
  moreMath,
  saveMemory,
} from "./actions";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const doMath = (num) => {
    dispatch(applyNumber(num));
  };

  const Math = (opp) => {
    dispatch(moreMath(opp));
  };

  const reset = () => {
    dispatch(clearDisplay());
  };

  const saveMem = () => {
    dispatch(saveMemory());
  };

  const applyMem = (num) => {
    dispatch(applyMemory(num));
  };

  const clearMem = () => {
    dispatch(clearMemory())
  }

  // const addNum = (num) => {
  //   dispatch(addOne(num))
  // }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img width="40px" src="./Lambda-Logo-Red.png" /> Lambda Reducer
          Challenge
        </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b>
                {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b>
                {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton onClick={saveMem} value={"M+"} />
              <CalcButton onClick={() => applyMem()} value={"MR"} />
              <CalcButton onClick={clearMem} value={"MC"} />
            </div>

            <div className="row">
              <CalcButton onClick={() => doMath(1)} value={1} />
              <CalcButton onClick={() => doMath(2)} value={2} />
              <CalcButton onClick={() => doMath(3)} value={3} />
            </div>

            <div className="row">
              <CalcButton onClick={() => doMath(4)} value={4} />
              <CalcButton onClick={() => doMath(5)} value={5} />
              <CalcButton onClick={() => doMath(6)} value={6} />
            </div>

            <div className="row">
              <CalcButton onClick={() => doMath(7)} value={7} />
              <CalcButton onClick={() => doMath(8)} value={8} />
              <CalcButton onClick={() => doMath(9)} value={9} />
            </div>

            <div className="row">
              <CalcButton onClick={() => Math("+")} value={"+"} />
              <CalcButton onClick={() => Math("*")} value={"*"} />
              <CalcButton onClick={() => Math("-")} value={"-"} />
            </div>

            <div className="row ce_button">
              <CalcButton onClick={reset} value={"CE"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
