import React, { Component } from "react";
import Aux from "../../Hoc/Aux";
import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";
import Modal from "../../Components/UI/Modal/Modal";
import OrderSummary from "../../Components/OrderSummary/OrderSummary";
const PRICE = {
  cheese: 10,
  meat: 23,
  salad: 12,
  bacon: 30
};
class BurgerBuilder extends Component {
  constructor(props) {
    super();
    this.state = {
      ingredients: {
        salad: 0,
        cheese: 0,
        meat: 0,
        bacon: 0
      },
      totalPrice: 40,
      isPurchase: false
    };
  }

  addIngredient = type => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + 1;
    console.log(newCount);
    const updatedCount = {
      ...this.state.ingredients
    };
    updatedCount[type] = newCount;
    const addPrice = PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + addPrice;

    console.log("keep checking" + newPrice);
    this.setState(
      {
        ingredients: updatedCount,
        totalPrice: newPrice
      },
      () => {
        this.checkPurchase();
      }
    );
  };

  removeIngredient = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount < 1) return;
    const newCount = oldCount - 1;
    console.log("from less---" + newCount);
    const updatedCount = { ...this.state.ingredients };
    updatedCount[type] = newCount;
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - PRICE[type];
    this.setState(
      {
        ingredients: updatedCount,
        totalPrice: newPrice
      },
      () => {
        this.checkPurchase();
      }
    );
  };

  checkPurchase = () => {
    let ingredients = {
      ...this.state.ingredients
    };
    let checkSum = 0;
    const sum = Object.keys(ingredients).map(iKey => {
      return ingredients[iKey];
    });
    for (let i = 0; i < sum.length; i++) {
      checkSum = checkSum + sum[i];
    }
    this.setState({
      isPurchase: checkSum > 0
    });
  };

  render() {
    const disableButton = {
      ...this.state.ingredients
    };

    for (let key in disableButton) {
      disableButton[key] = disableButton[key] <= 0;
    }

    return (
      <Aux>
        <Modal>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients}> </Burger>
        <BuildControls
          add={this.addIngredient}
          remove={this.removeIngredient}
          checkDisable={disableButton}
          price={this.state.totalPrice}
          purchase={this.state.isPurchase}
        />
      </Aux>
    );
  }
}
export default BurgerBuilder;
