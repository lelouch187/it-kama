import s from './MyPosts.module.css';
import Post from "./post/Post";

const MyPosts = () => {
  return  <div className={s.content}>
      <div>
          My posts
          <div>
              <textarea></textarea>
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