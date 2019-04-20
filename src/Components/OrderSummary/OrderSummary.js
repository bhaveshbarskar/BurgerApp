import React from "react";
import Aux from "../../Hoc/Aux";

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        {igKey} - {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Aux>
      <div>
        Order Summary :<ul>{ingredientSummary}</ul>
      </div>
    </Aux>
  );
};
export default orderSummary;
