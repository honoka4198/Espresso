import React, { Component } from 'react';
import '../../styles/components/login_form.css';

class Login_Form extends Component{
    render(){
        return(
            <div id = "login_form" align="center">
                <form name="Login" method="post">
                    <h1>ログイン</h1>
                    <table>
                        <tr>
                            <td>ユーザーID：
                                <input type="text" name="userid" maxLength="50" />
                            </td>
                        </tr>
                        <tr>
                            <td id="attention">ユーザーIDまたはメールアドレス</td>
                        </tr>
                        <tr>
                            <td>パスワード：
                                <input type="password" name="password" maxLength="15" />
                            </td>
                        </tr>
                        <tr>
                            <td id="center">
                                <input type="submit" value="ログイン" />
                            </td>
                        </tr>
                        <tr>
                            <td id="pass">パスワードを忘れた場合</td>
                        </tr>
                        <tr>
                            <td id="center">
                                    <button>新規登録</button>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        );
    }
}

export default Login_Form;