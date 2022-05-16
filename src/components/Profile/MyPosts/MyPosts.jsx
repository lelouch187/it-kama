import s from './MyPosts.module.css';
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }


    let PostsElement = props.posts
        .map(p => <Post message={p.message} likesCount={p.likesCount}/>);

  return  <div className={`${s.content} + ${s.postBlock} `}>
      <div>
          <h3>My posts</h3>
          <div>
              <div>
                <textarea ref={newPostElement}></textarea>
              </div>
              <button onClick={addPost}>Add post</button>
          </div>
          <div className={s.posts}>
              {PostsElement}
          </div>
      </div>
  </div>
}

export default MyPosts;