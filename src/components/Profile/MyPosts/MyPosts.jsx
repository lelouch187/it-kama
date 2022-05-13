import s from './MyPosts.module.css';
import Post from "./post/Post";

const MyPosts = (porps) => {
  return  <div className={`${s.content} + ${s.postBlock} `}>
      <div>
          <h3>My posts</h3>
          <div>
              <div>
                <textarea></textarea>
              </div>
              <button>Add post</button>
          </div>
          <div className={s.posts}>
              <Post message='Hello guys' likesCount=' 2'/>
              <Post message="it's my first post" likesCount=' 15'/>
          </div>
      </div>
  </div>
}

export default MyPosts;