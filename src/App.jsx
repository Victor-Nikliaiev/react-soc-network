import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Profile } from "./pages/profile";
import { Register } from "./pages/register";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/profile/:username' element={<Profile />} />
        </Routes>
    );
}

export default App;
