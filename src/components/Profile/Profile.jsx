import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return  <div>
      <div>
          <img src='https://avatars.mds.yandex.net/i?id=a22abf1a733adb8e9544b5208db52f5c-5233241-images-thumbs&n=13'/>
      </div>
      <div>
          ava + description
      </div>
      <MyPosts/>
  </div>
}

export default Profile;