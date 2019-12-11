import React, { Component } from 'react';
import '../../styles/components/contact.css';

class Contact_form extends React.Component{
    render(){
        return(
            <div id = "contact_form" align="center">
                <form name="contact" method="post">
                <p>
                    <h1>お問い合わせ</h1>
                    <table cellpadding="3">
                        <tr>
                            <td>　  <span id="mgr-1">お名前　</span><span id="mgr-2">: </span>
                                <input type="text" name="contact_user_name" maxLength="50" />
                        </td>
                        </tr>
                        <tr>
                            <td><span id="mgr-2">メールアドレス :</span>
                                <input type="email" name="contact_mail" />
                            </td>
                        </tr>
                        <tr>
                            <td>お問い合わせ内容
                                </td>
                                </tr>
                                <tr>
                            <textarea id="contact_inquiry" name="contact_name"></textarea>
                        </tr>
                        <tr>
                            <td id="center">
                            <input type="button" onClick="" value="送信" />
                            </td>
                        </tr>

                    </table>
                    </p>
                </form>
            </div>
        );
    }
}
export default Contact_form;
