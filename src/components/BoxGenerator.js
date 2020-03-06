import React, { useState } from "react";
import styles from "./BoxGen.module.css";

const BoxGenerator = props => {
  const [state, setState] = useState({
    boxes: [],
    color: ""
  });

  const onChangeHandler = event => {
    setState({
      ...state,
      color: event.target.value
    });
  };

  const onSubmitHandler = event => {
    event.preventDefault();
    const newBoxes = state.boxes.slice();
    newBoxes.push(state.color);
    setState({
      ...state,
      boxes: newBoxes
    });
  };

  return (
    <>
      <div>
        <form onSubmit={onSubmitHandler}>
          <div>
            <label>Color: </label>
            <input className={styles.addBox} onChange={onChangeHandler} />
            <input
              className={styles.addButton}
              type="submit"
              value="Add"
              onSubmit={onSubmitHandler}
            />
          </div>
        </form>
      </div>
      <div>
        {state.boxes.map((color, i) => (
          <div
            key={i}
            className={styles.new_box}
            style={{
              backgroundColor: color,
              width: 200,
              height: 200
            }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default BoxGenerator;
