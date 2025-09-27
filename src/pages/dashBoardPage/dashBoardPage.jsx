
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaSignOutAlt } from 'react-icons/fa';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import logo from '../../assets/logo.jpg';
import userDefault from '../../assets/user.png'; 
import './dashBoardPage.css';
import Swal from 'sweetalert2';
import NavBar from '../components/NavBarPage';
import Footer from '../components/FooterPage';

function DashboardPage() {
  const [user] = useAuthState(auth);
    
      // Determinar foto de usuario
      const userPhoto = user?.photoURL || userDefault;
    
      // Agregamos el console.log para verificar qué foto se está usando
      console.log(
        user?.photoURL
          ? `Usuario tiene foto: ${user.photoURL}`
          : `Usuario SIN foto, se usará: ${userDefault}`
      );
  return (
    <>
      <div>
        <NavBar/>
            {/* CONTENIDO PRINCIPAL */}
            <main className="main-content">
                <div>
                <img src={logo} alt="Logo" className="main-logo" />
                <h1 className="welcome-title">!Bienvenido a TechMobile!</h1>
                <p className="welcome-text">
                    Adquiere nustros servicios de Tecnologia celular
                </p>

                <p className="welcome-text">
                    <strong>Nombre:</strong> {user?.displayName || "Sin nombre"}
                </p>
                <p className="welcome-text">
                    <strong>Email:</strong> {user?.email || "Sin correo"}
                </p>
                <img
                    src={userPhoto}
                    alt="Foto de usuario"
                    className="main-logo"
                    style={{ maxWidth: '100px', borderRadius: '50%' }}
                />
                </div>
            </main>
          <Footer/>
      </div>
    </>
  );
}

export default DashboardPage;