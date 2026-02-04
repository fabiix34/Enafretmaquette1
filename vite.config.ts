import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Remplace 'ton-depot' par le nom de ton projet sur GitHub
  base: '/Enafretmaquette1/',

  plugins: [
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      // Ton alias pour éviter les ../..
      '@': path.resolve(__dirname, './src'),
    },
  },

  // Types de fichiers supportés en import brut
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
