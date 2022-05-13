import s from './Post.module.css';

const Post = () => {
  return (
    <div className={s.item}>
        <img src='https://trikky.ru/wp-content/blogs.dir/1/files/2020/01/04/12.jpg'/>
        post 1
        <div>
            <span>like</span>
        </div>
    </div>
  )
}

export default Post;