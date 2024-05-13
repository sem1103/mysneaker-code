import BasketSneaker from '../BasketSneaker/BasketSneaker';
import './Basket.scss'
function Basket(props) {
    console.log(props);

    let basketItem = props.basketItem
    return (
        <div>
            <div  id='background' >
                <div id='content'>

                    <div id='closedBtn' onClick={props.basketOpenedHandler}>
                    </div>

                    <h2>
                        Корзина
                    </h2>

                    <div id='items'>
                        {basketItem.map(item => <BasketSneaker basketItem={item} />)}
                       
                       
                      
                    </div>

                    <div id='sumPriceItems'>
                        <div id='sumPrice'>
                            <div id='price'>
                                <h4>
                                    Итого:
                                </h4>
                                <p>
                                    <b>
                                        2300руб.
                                    </b>
                                </p>
                            </div>

                            <div id='tax'>
                                <h4>
                                    Налог 3%:
                                </h4>
                                <p>
                                    <b>
                                        320руб.
                                    </b>
                                </p>
                            </div>
                        </div>

                        <div>
                            <button id='placeOrder'>Оформить заказ</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Basket;