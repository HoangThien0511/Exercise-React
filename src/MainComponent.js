import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishDetail'; // Add this line

import { DISHES } from './dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    const selectedDish = this.state.dishes.find(
      (dish) => dish.id === this.state.selectedDish
    );

    return (
      <div>
        <Header />
        <Menu
          dishes={this.state.dishes}
          onDishSelect={(dishId) => this.onDishSelect(dishId)}
        />
        <DishDetail dish={selectedDish} />
        <Footer />
      </div>
    );
  }
}

export default Main;