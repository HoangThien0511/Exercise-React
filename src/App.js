import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';


import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import { DISHES } from './dishes';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       dishes: DISHES
//     };
//   }

//   render() {
//     return (
//       <div className="App">
//         <Navbar dark color="primary">
//           <div className="container">
//             <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
//           </div>
//         </Navbar>
//         <Menu dishes={this.state.dishes} />
//       </div>
//     );
//   }
// }

// export default App;
import Main from './MainComponent';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>

    );
  }
}

export default App;