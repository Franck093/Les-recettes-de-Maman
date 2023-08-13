import logo from '../assets/logo.png';
import '../styles/logo.css';

export default function Logo() {
    return (
        <div className='container'>
            <div id='img-border-wrap'>
                <img id = 'logoImg' src={logo} alt="Logo" />
            </div>
            <h1 id = 'title'>Les Recettes de Maman</h1>
        </div>
    );
  }
