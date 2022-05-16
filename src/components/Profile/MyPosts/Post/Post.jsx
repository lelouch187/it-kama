import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://trikky.ru/wp-content/blogs.dir/1/files/2020/01/04/12.jpg'/>
            {props.message}
            <div>
                <span>like:{props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;