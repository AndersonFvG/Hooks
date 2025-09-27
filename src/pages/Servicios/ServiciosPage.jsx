
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaSignOutAlt } from 'react-icons/fa';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Dispositivos from '../../assets/Tienda.png';
import './ServiciosPage.css';
import Swal from 'sweetalert2';
import Soporte from '../../assets/Soporte.png';
import NavBar from '../components/NavBarPage';
import Footer from '../components/FooterPage';

function ServiciosPage() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <NavBar/>
            {/* CONTENIDO PRINCIPAL */}
            <main className="main-content">
                <div>
                    <h1 className="welcome-title">!Nuestros Servicios!</h1>
                     <img
                    src={Soporte}
                    alt="img Soporte Tecnico"
                    className="opciones"
                    style={{ maxWidth: '100px', borderRadius: '50%' }}
                    onClick={() => navigate('/soporte')}
                    
                  />
                <h3>Soporte Tecnico</h3>
                  <img
                    src={Dispositivos}
                    alt="img Tienda"
                    className="opciones"
                    style={{ maxWidth: '100px'}}
                    onClick={() => navigate('/tienda')}
                />
                <h3>Venta de Telefonos</h3>
                </div>
            </main>
          <Footer/>
      </div>
    </>
  );
}

export default ServiciosPage;