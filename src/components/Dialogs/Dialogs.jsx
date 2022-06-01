import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';





const Dialogs = (props) =>{
return(
  <div className={style.dialogs}>
   <div className={style.dialogItems}>
     <DialogItem name='Dima' id='1'/>
     <DialogItem name='Masha' id='2'/>
     <DialogItem name='Vanya' id='3'/>
     <DialogItem name='Victor' id='4'/>
     <DialogItem name='Carl' id='5'/>
    </div>


      <div className={style.messages}>
        <Message message='Hello' />
        <Message message='How are you?' />
        <Message message='Fine' />
        <Message message='Nice car!' /> 
        <Message message='keeek' /> 
        <Message message='Yo!!' />
      </div>

  </div>
)
}

export default Dialogs;