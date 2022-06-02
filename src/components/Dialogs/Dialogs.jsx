import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

// Data
let dialogs =[
    {id:1,name:'Dima'},
    {id:2,name:'Masha'},
    {id:3,name:'Vanya'},
    {id:4,name:'Victor'},
    {id:5,name:'Carl'},]
let messages =[
    {id:1,message:'Hello'},
    {id:2,message:'How are you?'},
    {id:3,message:'Fine'},
    {id:4,message:'Nice car'},
    {id:5,message:'Yo!!!'},]


const Dialogs = (props) =>{
  let dialogElements = dialogs.map( dialog => ( <DialogItem name={dialog.name} id={dialog.id} /> ))
  let messagesElements = messages.map( message => ( <Message message={message.message} />))
return(
  <div className={style.dialogs}>
   <div className={style.dialogItems}>
      {dialogElements}
    </div>
    <div className={style.messages}>
        {messagesElements}
    </div>
  </div>
)
}

export default Dialogs;