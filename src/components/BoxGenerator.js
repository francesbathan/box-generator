import React, { useState } from "react";
import styles from "./BoxGen.module.css";

const BoxGenerator = props => {
  const [state, setState] = useState({
    boxes: [],
    box: {
      color: "",
      height: 0,
      width: 0
    }
  });

  const onChangeHandler = event => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  const onSubmitHandler = event => {
    event.preventDefault();
    const newBoxes = state.boxes.slice();
    const newBox = {
      color: state.color,
      height: state.height,
      width: state.width
    };
    newBoxes.push(newBox);
    setState({
      boxes: newBoxes,
      color: "",
      height: "",
      width: ""
    });
  };

  return (
    <>
      <div>
        <form onSubmit={onSubmitHandler}>
          <div>
            <div className={styles.formElements}>
              <label>Color </label>
              <input
                name="color"
                className={styles.addBox}
                value={state.color}
                onChange={onChangeHandler}
              />
            </div>
            <div className={styles.formElements}>
              <label>Height </label>
              <input
                name="height"
                className={styles.addBox}
                value={state.height}
                onChange={onChangeHandler}
              />
            </div>
            <div className={styles.formElements}>
              <label>Width </label>
              <input
                name="width"
                className={styles.addBox}
                value={state.width}
                onChange={onChangeHandler}
              />
            </div>
            <input
              className={styles.addButton}
              type="submit"
              value="Add"
              onSubmit={onSubmitHandler}
            />
          </div>
        </form>
      </div>

      <div className={styles.boxes}>
        {state.boxes.map(({ color, height, width }, i) => (
          <div
            key={i}
            className={styles.new_box}
            style={{
              backgroundColor: color,
              width: !width ? 200 : parseInt(width),
              height: !height ? 200 : parseInt(height)
            }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default BoxGenerator;
