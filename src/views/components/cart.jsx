import React from 'react'
import "../../styles/components/cart.css"

class Cart extends React.Component{
    render(){
        return(
            <div className = "cart" align="center">
                 <table border = "1">
                    <tr>
                        <td colSpan="2" width="300">カート内商品</td> 
                        <td width="150">単価</td>
                        <td width="150">数量</td>
                        <td width="150">小計</td>
                    </tr>
                    <tr>
                        <td width="150"><img src="IceCoffee.ico" /></td>
                        <td width="150">アイスコーヒー</td> 
                        <td width="150">4740￥</td>
                        <td width="150">1個</td>
                        <td width="150">4740￥</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export  default Cart;