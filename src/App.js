import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/loginpages/LoginPage";
import ForgotPage from "./pages/forgotpage/forgotPage";
import RegisterPage from "./pages/registerpage/registerPage";
import HookGral from "./playground/HooksGral";
import UseStateContador from "./playground/useState";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/forgot" element={<ForgotPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        
        <Route path="/hook" element={<HookGral/>}/>
        <Route path="/usestate" element={<UseStateContador/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
