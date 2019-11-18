import React, { Component } from 'reatct';
import '../../styles/components/login_form.css';

class signup_from extends Component{
    render(){
        return(
            <div id="login_form">
                <from>
                    <h2>新規登録</h2>
                    <table>
                        <tr>
                            <td>ユーザーID</td>
                        </tr>
                        <tr>
                            <td id="space"><input type="text" maxLength="50" /></td>
                        </tr>
                        <tr>
                            <td>氏名</td>
                        </tr>
                        <tr>
                            <td id="space"><input type="text" maxLength="20" /></td>
                        </tr>
                        <tr id="attention">空白入れない    例)コーヒー太郎</tr>
                        <tr>
                            <td>フリガナ</td>
                        </tr>
                        <tr>
                            <td id="space"><input type="text" maxLength="20" /></td>
                        </tr>
                        <tr id="attention">空白入れない    例)コーヒータロウ</tr>
                        <tr>
                            <td>性別</td>
                        </tr>
                        <tr>
                            <input type="radio" name="gender" value="man" checked/>男性
                            <input type="radio" name="gender" value="woman" />女性
                        </tr>
                        <tr>
                            <td>電話番号</td>
                        </tr>
                        <tr>
                            <td><input type="text" maxLength="11" /></td>
                        </tr>
                        <tr id="attention">ハイフン無しで入力してください。    例)080123456</tr>
                        <tr>
                            <td>メールアドレス</td>
                        </tr>
                        <tr>
                            <td><input type="text" maxlength="100" /></td>
                        </tr>
                        <tr>
                            <td>パスワード</td>
                        </tr>
                    </table>
                </from>
            </div>
        );
    }
}

export default signup_from;