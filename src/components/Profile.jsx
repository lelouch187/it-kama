import s from './Profile.module.css';

const Profile = () => {
  return  <div className={s.content}>
      <div>
          <img src='https://avatars.mds.yandex.net/i?id=a22abf1a733adb8e9544b5208db52f5c-5233241-images-thumbs&n=13'/>
      </div>
      <div>
          ava + description
      </div>
      <div>
          My posts
          <div>
              New post
          </div>
          <div className={s.posts}>
              <div className={s.item}>
                  post 1
              </div>
              <div className={s.item}>
                  post 2
              </div>
          </div>
      </div>
  </div>
}

export default Profile;