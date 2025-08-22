import { Link } from "react-router-dom";
function ForgotPage(){
    return (
        <div>
            <h1>Olvide Contraseña</h1>
            <Link to="/">
                <button>Volver al Login</button>
            </Link>
            <div class="form-card w-50 mx-auto">
                <h3 class="text-center mb-4">Recuperar Contraseña</h3>
                <form id="recuperarForm">
                    <div class="mb-3">
                        <label for="name" class="form-label">Tu nombre</label>
                        <input type="text" class="form-control" id="name" name="name" placeholder="Nombre completo" required />
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Correo electrónico</label>
                        <input type="email" class="form-control" id="email" name="email" placeholder="correo@ejemplo.com"
                            required />
                    </div>

                
                    <input type="hidden" id="token" name="token" />

                    <div class="d-grid">
                        <button type="submit" class="btn btn-primary">Enviar al correo</button>
                        <a href="../index.html" class="btn btn-outline-secondary mt-2">Volver al login</a>
                        <Link to="/">
                           <a href="../index.html" class="btn btn-outline-secondary mt-2">Volver al login</a>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default ForgotPage;