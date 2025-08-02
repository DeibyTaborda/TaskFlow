module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',        // Fondo principal
        primary: '#34A853',           // Botón principal, íconos activos, enlaces
        'primary-dark': '#1E6045',    // Botón secundario, bordes, badges
        'primary-hover': '#2A8B45',   // Hover o estado activo
        foreground: '#2C2C2C',        // Texto principal
        muted: '#F2F2F2',             // Fondo de secciones secundarias
      },
    },
  },
  plugins: [],
};
