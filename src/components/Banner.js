import logo from '../assets/logo.png'
import '../styles/banner.css'


function Banner(props) {
     const title = 'La maison jungle';
    function click(){
        console.log(title)
    }

    return (
        <div className='lmj-banner'>
            <img src={logo} alt='La maison jungle' className='lmj-logo' />
            <h1 className='lmj-title'>{props.hello}</h1>
            <button onClick={click}>entrer</button>
        </div>
    )
}

export default Banner