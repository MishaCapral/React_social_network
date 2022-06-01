import { NavLink } from 'react-router-dom';
import style from './DialogItem.module.css'

const DialogItem = (props) => {
  return(
    <div className={style.dialog}> 
     <NavLink to={'/dialogs/' + props.id} className='link'>{props.name}</NavLink>
     </div>
    //  class.active
  )
}

export default DialogItem;