import loading from '../../Assets/Images/loading.gif'

const preloaderStyle = {
  zIndex: 2,
  width: '350px'
}
const wrapperPreload = {
  width: '100%',
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '30vh',
  backgroundColor: 'rgba(255, 255, 255, 0.2)'
}

let Preloader = () => {
  return <div style={wrapperPreload}> <img src={loading} style={preloaderStyle} />
  </div>
}

export default Preloader