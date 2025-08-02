import { useState } from "react";
import axios from "axios";

function Login() {
    const [error, setError] = useState('');
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        if (name === 'email' && value.length > 60) return;
        if (name === 'password' && value.length > 15) return;

        setData({...data, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('Credenciales incorrectas');
    }

    return (
        <>
        <div className="flex items-center justify-center min-h-screen bg-[#F2F2F2]">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-[#1E6045] mb-6">Inicia Sesión</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label for="email" className="block text-sm font-medium mb-1">Correo Electrónico</label>
                    <input type="email" id="email" name="email" value={data?.email} onChange={handleChange} required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#34A853]" />
                </div>

                <div>
                    <label for="password" className="block text-sm font-medium mb-1">Contraseña</label>
                    <input type="password" id="password" name="password" value={data?.password} onChange={handleChange} required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#34A853]" />
                </div>

                <div className="flex justify-between items-center">
                    <label className="flex items-center">
                    <input type="checkbox" className="accent-[#34A853] mr-2" />
                    <span className="text-sm">Recuérdame</span>
                    </label>
                    <a href="#" className="text-sm text-[#34A853] hover:underline">¿Olvidaste tu contraseña?</a>
                </div>
                {error && <p className="text-red-500">{error}</p>}
                <button type="submit"
                        className="w-full bg-[#34A853] text-white py-3 rounded-lg hover:bg-[#2A8B45] transition">
                    Iniciar Sesión
                </button>
                </form>

                <p className="text-sm text-center mt-6">
                ¿No tienes cuenta? <a href="#" className="text-[#34A853] hover:underline">Regístrate aquí</a>
                </p>
            </div>
        </div>
        </>
    );
}

export default Login;