import { useState } from 'react';
import '../stylesheets/form.css';





export const Form = () => {
    const [username, setUsername] = useState("");

    const [password, setPassword] = useState("");

    const [error, setError] = useState(false);
    
    const [showPassword, setShowPassword] = useState(false); // nuevo estado

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "" || password === "") {
            setError(true);
        }
    };

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <input
                        className="input-container"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder=" "
                        required
                    />
                    <label className="floating-label">Usuario o Email</label>
                </div>

                <div className="input-wrapper">
                    <input
                        className="input-container"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder=" "
                        required
                    />
                    <label className="floating-label">Contraseña</label>
                </div>

                <div className="show-password-wrapper">
                <label className="custom-checkbox">
                    <input
                        type="checkbox"
                        checked={showPassword}
                        onChange={() => setShowPassword(!showPassword)}
                    />
                    <span className="checkmark"></span>
                    Mostrar contraseña
                </label>

                </div>

                <button className="submit-btn" type="submit">Siguiente</button>
            </form>

            {error && <p>Todos los campos deben ser cargados</p>}
        </>
    );
};