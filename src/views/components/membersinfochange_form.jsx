import React, { Component } from 'react';
import Prefectures from '../../views/components/gear_components/prefectures_selectbox.jsx';
import '../../styles/components/signup_form.css';

class MemberInfoChange extends Component {
    render() {
        return (
            <div class="line-H" align="center">
                <h2>会員情報変更</h2>
                <form>
                    <table class="lineH">
                        <tr>
                            <td>ユーザーID</td>
                        </tr>
                        <tr>
                            <td><input type="text" maxLength="50" size="50" disabled="disabled" /></td>
                        </tr>

                        <tr>
                            <td>氏名</td>
                        </tr>
                        <tr>
                            <td><input type="text" maxLength="20" size="50" /></td>
                        </tr>
                        <tr>
                            <td class="attention">空白は入れない  例)コーヒー太郎</td>
                        </tr>

                        <tr>
                            <td>フリガナ</td>
                        </tr>
                        <tr>
                            <td><input type="text" maxLength="40" size="50" /></td>
                        </tr>
                        <tr>
                            <td class="attention">空白は入れない  例)コーヒータロウ</td>
                        </tr>

                        <tr>
                            <td>性別</td>
                        </tr>
                        <tr>
                            <td class="pad-gender">
                                <span class="mar-right"><input type="radio" name="gender" value="1" checked />男性</span>
                                <input type="radio" name="gender" value="2" />女性
                            </td>
                        </tr>

                        <tr>
                            <td>電話番号</td>
                        </tr>
                        <tr>
                            <td><input type="text" maxLength="11" size="30" /></td>
                        </tr>
                        <tr>
                            <td class="attention">ハイフン無しで入力してください。    例)080123456</td>
                        </tr>

                        <tr>
                            <td>メールアドレス</td>
                        </tr>
                        <tr>
                            <td><input type="text" maxLength="100" size="50" /></td>
                        </tr>
                        <tr>
                            <td>郵便番号</td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" maxLength="7" size="20" />
                                <input type="button" value="検索" />
                            </td>
                        </tr>
                        <tr>
                            <td class="attention">ハイフン無しで入力してください。    例)1234567</td>
                        </tr>
                        <tr>
                            <td>都道府県</td>
                        </tr>
                        <tr>
                            <td>
                                <Prefectures />
                            </td>
                        </tr>

                        <tr>
                            <td>市区町村</td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" maxLength="7" size="50" />
                            </td>
                        </tr>

                        <tr>
                            <td>番地・建物名</td>
                        </tr>
                        <tr>
                            <td><input type="text" maxLength="30" size="50" /></td>
                        </tr>
                        <tr>
                            <td class="attention">例)1-23 Espresso ビル</td>
                        </tr>

                        <tr>
                            <td>メールマガジン</td>
                        </tr>
                        <tr>
                            <td class="pad-mail">
                                <span class="mar-right"><input type="radio" name="y/n" checked />受け取る</span>
                                <input type="radio" name="y/n" />受け取らない
                            </td>
                        </tr>
                        <tr class="center"><input type="button" value="変更" /></tr>
                    </table>
                </form>
            </div>
        );
    }
}

export default MemberInfoChange;