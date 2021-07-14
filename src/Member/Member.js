import React from 'react';



export default function Member() {

    return(
    <>
        <div className="container">
            <div className="selfie-container">
                <img className="selfie" src="http://fakeimg.pl/200x200"/>
                <div className="member-info-container">
                    <div className="member-info">
                        <div className="member-name">MemberName</div>
                        <div className="member-info-box">
                            <span className="member-info-text">發布食譜:</span>
                            <span className="member-count">22</span>
                        </div>
                        <div className="member-info-box">
                            <span className="member-info-text">收藏食譜:</span>
                            <span className="member-count">33</span><br/>
                        </div>
                        <div className="member-info-box">
                            <span className="member-info-text">粉絲:</span>
                            <span className="member-count">44</span><br/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="title">您的貼文:</div>
            <div className="list-posts">
                <div className="post-box">
                    <img className="post-contentImg" src="http://fakeimg.pl/200x200"/>
                </div>  
                <div className="post-box">
                    <img className="post-contentImg" src="http://fakeimg.pl/200x200"/>
                </div> 
                <div className="post-box">
                    <img className="post-contentImg" src="http://fakeimg.pl/200x200"/>
                </div> 
                <div className="post-box">
                    <img className="post-contentImg" src="http://fakeimg.pl/200x200"/>
                </div> 
            </div> 
            <label for="file" >File progress:</label>
                <progress id="file" max="100" value="70"> 70% </progress>
                <input type="file" accept="image/png, image/jpeg" className="upload-btn"/>
        </div>
    </>
    )
}
