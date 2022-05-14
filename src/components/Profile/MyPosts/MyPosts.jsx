import s from './MyPosts.module.css';
import Post from "./post/Post";

const MyPosts = (porps) => {

    let Posts = [{message:'Hello guys', likesCount: ' 2'}, {message:"it\'s my first post", likesCount: ' 15'}];

    let PostsElement = Posts
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