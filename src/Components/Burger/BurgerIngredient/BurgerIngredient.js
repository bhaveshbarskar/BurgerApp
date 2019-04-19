import React, { Component } from "react";
import classes from "./BurgerIngredient.module.css";
import PropTypes from "prop-types";

class BurgerIngredient extends Component {
  render() {
    console.log(this.props.type);
    let ingredient = null;
    switch (this.props.type) {
      case "bread-top":
        ingredient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1} />
            <div className={classes.Seeds2} />
          </div>
        );
        break;
      case "bread-bottom":
        ingredient = <div className={classes.BreadBottom} />;
        break;
      case "meat":
        ingredient = <div className={classes.Meat} />;
        break;
      case "cheese":
        ingredient = <div className={classes.Cheese} />;
        break;
      case "salad":
        ingredient = <div className={classes.Salad} />;
        break;
      case "bacon":
        ingredient = <div className={classes.Bacon} />;
        break;

      default:
        ingredient = null;
    }
    return ingredient;
  }
}

BurgerIngredient.PropType = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;
