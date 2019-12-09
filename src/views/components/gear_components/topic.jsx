import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/components/home_form.css';

class Topic extends Component{
    render(){
        return(
            <div class="d-box">
                    <span class="bor">TOPIC</span>
                    <Link to="topic-list" className="list-setting">TOPIC一覧へ</Link>
                    <p><Linktag id="topic-Christmas" day="2019.12.01" name="クリスマスセール開催中" /></p>
                    <p><Linktag id="holiday" day="2019.11.30" name="年末年始休業のお知らせ" /></p>
                    <p><Linktag id="blog-updata" day="2019.11.20" name="ブログを更新しました" /></p>
                    <p><Linktag id="change-price" day="2019.10.01" name="商品の価格変更について" /></p>
                    <p><Linktag id="new-item" day="2019.09.16" name="新商品入荷のお知らせ" /></p>
                </div>
        );
    }
}

function Linktag(props) {
    return (
        <Link to={props.id} className="linkcol">{props.day}  |  {props.name}</Link>
    );
}

export default Topic;