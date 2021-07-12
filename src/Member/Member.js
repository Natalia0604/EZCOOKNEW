import React from 'react';



export default function Member() {

    return(
    <>
        <div className="container">
            <div className="selfie-container">
                <img className="selfie" src="http://fakeimg.pl/150x150"/>
            </div>
            <div className="member-info-container">
                <div className="member-info">
                    <h2>MemberName</h2>
                    <span className="member-info-text">發布食譜</span>
                    <span className="member-count">22</span><br/>
                    <span className="member-info-text">收藏食譜</span>
                    <span className="member-count">33</span><br/>
                    <span className="member-info-text">粉絲</span>
                    <span className="member-count">44</span><br/>
                </div>
            </div>
            <div className="show-post">
               <div className="list-posts">
                <div className="box">
                    <div className="imgContainer">
                        <img className="contentImg" src="http://fakeimg.pl/150x150"/>
                    </div>
                    <div className="name">草莓蛋糕</div>  
                </div>  
                     一次秀9篇 
                    <label for="file" >File progress:</label>
                    <progress id="file" max="100" value="70"> 70% </progress>
                    <input type="file" accept="image/png, image/jpeg" className="upload-btn"/>
               </div> 
            </div>
        </div>
    </>
    )
}
