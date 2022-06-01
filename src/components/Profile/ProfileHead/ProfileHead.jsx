import style from './ProfileHead.module.css'

const ProfileHead = () => {
  return  <div className={style.head}>
    <div className={style.head_wrapper}>
    {/* <img src='https://images.prom.ua/2877113385_w640_h640_asfalt-v-10asfaltobeton-melkozernistyj.jpg' alt='background img' className={style.background_img}></img> */}
    <div className={style.banner}>
      <h1>Record the history of your car</h1>
      <h3>without unnecessary problems and worries</h3>
  </div>
  </div>
</div>
}
export default ProfileHead;