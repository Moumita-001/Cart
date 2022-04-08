import React from 'react';

export default function Cart(props){
    const {cartItems,onAdd,onRemove}=props;
    const itemsPrice=cartItems.reduce((a,c)=>a+c.price*c.qty,0);
    const taxPrice=itemsPrice*0.14;
    const shippingPrice=itemsPrice>2000?0:50;
    const totalPrice=itemsPrice+taxPrice+shippingPrice;

    return (
    <aside className="col-2">
        <h2>Cart Items</h2>
        <div>
            {cartItems.length===0&&<div class="txt">Cart Is Empty</div>}
            {cartItems.map((item)=>(
                <div key={item.id} className="fruits">
                <div>{item.name}</div>
                <div class="right">
                <div className="buttons">
                    <button onClick={()=>onAdd(item)} className="add">+</button>
                    <button onClick={()=>onRemove(item)} className="remove">-</button>
                </div>
                <div>
                    {item.qty}X ${item.price.toFixed(2)}
                </div>
                </div>
                </div>

            ))}
        </div>
        {cartItems.length!==0&&(
            <>
            <hr></hr>
            <div className="prices">
                <div>Items Price</div>
                <div>${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="prices">
                <div>Tax Price</div>
                <div>${taxPrice.toFixed(2)}</div>
            </div>
            <div className="prices">
                <div>Shipping Price</div>
                <div>${shippingPrice.toFixed(2)}</div>
            </div>
            <div className="prices">
                <div><strong>Total Price</strong></div>
                <div class="final">${totalPrice.toFixed(2)}</div>
            </div>
            </>
        )}

    </aside>
    );
}