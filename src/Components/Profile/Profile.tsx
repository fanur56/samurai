import React from "react";
import s from "./Profile.module.css"
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


export const Profile = () => {
    return (
        <div>
            <div className={s.profileImage}>
                <img alt='pic'
                     src='https://mediaproxy.salon.com/width/1200/https://media.salon.com/2022/04/planet-pluto-0405221.jpg'/>
            </div>
            <div>
                Ava+description
            </div>
            <MyPostsContainer />
        </div>
    )
}