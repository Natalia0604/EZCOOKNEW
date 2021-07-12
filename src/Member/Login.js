import React from 'react';
import close from "../img/icon/close.png";


export default function login() {
    return (
       <>
         <div className="loginBox" id="loginBox">
            <div className="decoratorBar"></div>
            <form>
                <div className="close" id="closeLoginBox" onclick="closeLoginBox();">
                    <img src={close}/>
                </div>
                <h3 className="loginTitle">登入會員帳號</h3>
                <input type="text" className="loginEmail" id="loginEmail" name="loginEmail" placeholder="輸入電子信箱"/>
                <input type="password" className="loginPassword" id="loginPassword" name="loginPassword" placeholder="輸入密碼" />
                <button className="btn_login" type="button" onclick="login();">登入帳戶</button>
                <div className="loginMessage" id="loginMessage"></div>
                <h4 className="signupURL" onclick="showSignupBox();">還沒有登入帳戶?點此註冊</h4>
            </form>
        </div>
        <div className="signupBox" id="signupBox">
            <div className="decoratorBar"></div>
            <form>
                <div className="close" id="closeSignupBox" onclick="closeSignupBox();">
                    <img src={close}/>
                </div>
                <h3 className="signupTitle">註冊會員帳號</h3>
                <input type="text" className="signupName" id="signupName" name="signupName" placeholder="輸入姓名"/>
                <input type="text" className="signupEmail" id="signupEmail" name="signupEmail" placeholder="輸入電子信箱"/>
                <input type="password" className="signupPassword" id="signupPassword" name="signupPassword" placeholder="輸入密碼"/>
                <button className="btn_login" type="button" onclick="signup();">註冊帳戶</button>
                <div className="signupMessage" id="signupMessage"></div>
                <h4 className="loginURL" onclick="showLoginBox();">已經有帳戶了?點此登入</h4>
            </form>
        </div>
       </>
    )
}
