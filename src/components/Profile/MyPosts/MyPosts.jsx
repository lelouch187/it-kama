import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {


    let PostsElement = props.posts
        .map(p => <Post message={p.message} likesCount={p.likesCount}/>);

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
              {PostsElement}
          </div>
      </div>
  </div>
}

export default MyPosts;