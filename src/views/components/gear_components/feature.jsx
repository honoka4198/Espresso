import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../../../styles/components/home_form.css";

class Feature extends Component{
    render() {
        return (
            <div class="d-box">
                <span class="bor">特集</span>
                <Link to="feature-list" className="link-setting">特集一覧</Link>
                <table>
                    <tr>
                        <td class="pad">
                            <Flink id="SweetCoffee" /><img src="image/sweets_coffee.jpg" />
                            <Flink id="HomeCoffee" /><img src="image/Coffee_item_feauture.jpg" />
                            <Flink id="CoffeeItem" /><img src="image/coffee.jpg" />
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}
function Flink(props){
    return(
        <Link to={props.id} className="pad"></Link>
    );
}

export default Feature;
