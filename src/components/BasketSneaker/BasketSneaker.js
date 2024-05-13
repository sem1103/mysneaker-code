import './BasketSneaker.scss';

function BasketSneaker(props){
    return(
        <div>
            <div className='sneakerContainer'>
                <div className='closeBtn'>
                    <div></div>
                </div>
                <div className='sneakerImg'>
                    <img src={props.basketItem.img} width='100%' alt='' />
                </div>

                <div className='sneakeDesc'>
                    <h4 className='sneakerName'>
                    {props.basketItem.name}
                    </h4>
                    <p className='sneakerPrice'>
                    {props.basketItem.price} руб.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default BasketSneaker;