import React, { Component } from 'react';
import '../../styles/components/login_form.css';
import SecretQestionSelectbox from '../../views/components/gear_components/secret_question_selectbox.jsx';
import '../../styles/components/signup_form.css';

class Password_Change extends Component{
    render(){
        return(
            <div align="center" class="line-H">
                <form>
                    <h2>パスワード変更</h2>
                    <table>
                        <tr>
                            <td>
                                ID：<input type="text" name="userid" maxLength="50" size="50" />
                            </td>
                        </tr>
                        <tr>
                            <td id="attention">ユーザーIDまたはメールアドレス</td>
                        </tr>
                        <tr>秘密の質問</tr>
                        <tr>
                            <td>
                                <SecretQestionSelectbox />
                            </td>
                        </tr>
                        <tr>
                            <input type="buttom" name="answer" size="60" />
                        </tr>
                    </table>
                </form>
            </div>
        );
    }
}

export default Password_Change;