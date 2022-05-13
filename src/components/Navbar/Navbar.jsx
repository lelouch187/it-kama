import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const chekLink = () =>{
    return select => select.isActive ? s.active: s.item;
}

const Navbar = () => {
  return  (<nav className={s.nav}>
      <div className={`${s.item} ${s.active}`}>
          <NavLink to='/profile' className={chekLink()}>Profile</NavLink>
      </div>
      <div className={s.item}>
          <NavLink to='/dialogs' className={chekLink()} >Messages</NavLink>
      </div>
      <div className={s.item}>
          <NavLink to='/news' className={chekLink()} >News</NavLink>
      </div>
      <div className={s.item}>
          <NavLink to='/music' className={chekLink()} >Music</NavLink>
      </div>
      <div className={s.item}>
          <NavLink to='/setings' className={chekLink()}>Setings</NavLink>
      </div>
  </nav>)
}

export default Navbar;