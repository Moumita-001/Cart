import React from 'react';

export default function Header(props){
    return (
        <header className="heading">
            <div>
                <a href="#/">
                    <h1>Shopping Cart</h1>
                </a>
            </div>

            <div>
                {/* <a href="#/cart">Cart</a>  */}
                {/* <a href="#/signin" className="signin">Sign In</a> */}
            </div>
        </header>

    );
}