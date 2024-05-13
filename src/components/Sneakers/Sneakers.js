
import { useEffect, useState } from 'react';
import Sneaker from '../Items/Sneakers';
import './Sneakers.scss';





function Sneakers(props) {
    const [sneakersItems, setSneakersItems] = useState([])

    useEffect(() => {
        fetch('https://6420310582bea25f6dfbcd95.mockapi.io/items').then(res => {return res.json()}).then(json => {setSneakersItems(json)});
    }, []);

    let sneaker = sneakersItems.map(item => <Sneaker basketAdd={props.basketAdd} sneaker={item} />)


    return (
        <div className='sneakers'>

            <section>
                <h4>
                    Все кроссовки
                </h4>

                <div className='search'>
                    <input type='text' placeholder='Поиск...' />
                    <img src='../../../img/search.svg' className='search__logo' />
                </div>
            </section>
            <div className='sneakers__items'>
                {sneaker}
            </div>

        </div>
    );
}

export default Sneakers;
