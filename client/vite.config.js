import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD
  plugins: [react(),
    tailwindcss(),
  ],
=======
  plugins: [react(),tailwindcss()],
>>>>>>> 3e10416182bceb9fd75e131601f80385afeee9bc
})
