
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaSignOutAlt } from 'react-icons/fa';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Dispositivos from '../../assets/Tienda.png';
import './SoportePage.css';
import Swal from 'sweetalert2';
import Soporte from '../../assets/Soporte.png';
import NavBar from '../components/NavBarPage';
import Footer from '../components/FooterPage';

function SoportePage() {
  return (
    <>
      <div>
        <NavBar/>
            {/* CONTENIDO PRINCIPAL */}
            <main className="main-content">
                <div>
                <img src={Soporte} alt="Logo" className="main-logo" />
                <h1 className="welcome-title">Soporte Tecnico</h1>
                <p className="welcome-text">
                    Aqui podras contactarnos para ayudarte en lo relacionado a arreglos de telefonos y solucion de problemas de sofware
                </p>
                </div>
            </main>
          <Footer/>
      </div>
    </>
  );
}

export default SoportePage;