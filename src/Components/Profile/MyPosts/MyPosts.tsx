import React from "react";
import styles from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            <div>
                My posts
            </div>
            <textarea></textarea>
            <button>Add post</button>
            <div className={styles.posts}>
                New posts
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}