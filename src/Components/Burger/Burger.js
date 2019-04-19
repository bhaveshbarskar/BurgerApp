import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
  let newIngredients = Object.keys(props.ingredients)
    .map(iKey => {
      return [...Array(props.ingredients[iKey])].map((_, i) => {
        return <BurgerIngredient key={iKey + i} type={iKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (newIngredients.length === 0) {
    newIngredients = <p>Start Adding!!!</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {newIngredients}

      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
export default burger;
