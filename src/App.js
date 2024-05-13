import React from 'react';
import './App.scss';
import Basket from './components/Basket/Basket';
import Header from './components/Header/Header';
import Sneakers from './components/Sneakers/Sneakers';


function App() {
  const [basketOpened, setBasketOpened] = React.useState(false);

  const [basketItem, setBasketItem] = React.useState([])

  const basketAdd = (item) =>{
    setBasketItem(item);
    console.log(basketItem);
  }

  const basketOpenedHandler = () =>{
    setBasketOpened(!basketOpened);
  }
  
  return (
    <div className="wrapper">
      {basketOpened ? <Basket  basketItem={basketItem} basketOpenedHandler={basketOpenedHandler}/> : null}
      <Header  basketOpenedHandler={basketOpenedHandler}/>
      <main>
        <Sneakers basketAdd={basketAdd} />
      </main>
    </div>
  );
}

export default App;
