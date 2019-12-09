import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../../../styles/components/home_form.css";
import FeatureCoffee1 from "../../../image/sweets_coffee.jpg";
import FeatureCoffee2 from "../../../image/Coffee_item_feauture.jpg";
import FeatureCoffee3 from "../../../image/coffee.jpg";

class Feature extends Component{
    render() {
        return (
            <div class="d-box">
                <span class="bor">特集</span>
                <Link to="feature-list" className="link-setting">特集一覧</Link>
                <table>
                    <tr>
                        <td class="pad">
                            <Flink id="SweetCoffee" /><img src={FeatureCoffee1} />
                            <Flink id="HomeCoffee" /><img src={FeatureCoffee2} />
                            <Flink id="CoffeeItem" /><img src={FeatureCoffee3} />
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
