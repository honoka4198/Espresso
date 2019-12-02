import React, { Component } from 'react';

class Secret_Question extends Component{
    render(){
        return(
            <div>
                <select>
                    <option value="1">卒業した学校は？</option>
                    <option value="2">子供時代を過ごした町の名前は？</option>
                    <option value="3">初めて飛行機に乗っていった場所は？</option>
                    <option value="4">小さい頃のあこがれの職業は？</option>
                    <option value="5">子供のころのニックネームは？</option>
                    <option value="6">学生時代に好きだったアーティストは？</option>
                </select>
            </div>
        );
    }
}

export default Secret_Question;