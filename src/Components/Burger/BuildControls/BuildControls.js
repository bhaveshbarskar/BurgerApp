import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" },
  { label: "Meat", type: "meat" }
];

const buildControls = props => (
  <div className={classes.BuildControls}>
    <p>
      Current Price : <strong>{props.price} </strong>
    </p>
    {controls.map(ctrl => {
      return (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => props.add(ctrl.type)}
          removed={() => props.remove(ctrl.type)}
          disabledButton={props.checkDisable[ctrl.type]}
        />
      );
    })}

    <button
      className={classes.OrderButton}
      disabled={!props.purchase}
      onClick={props.summary}
    >
      Place Order
    </button>
  </div>
);
export default buildControls;
