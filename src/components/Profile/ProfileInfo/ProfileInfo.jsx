import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (<div>
        <div>
            <img src='https://avatars.mds.yandex.net/i?id=a22abf1a733adb8e9544b5208db52f5c-5233241-images-thumbs&n=13'/>
    </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
</div>
    )
}
export default ProfileInfo;