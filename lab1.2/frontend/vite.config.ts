import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  server: {
    proxy: {
      '/employees': 'http://localhost:3000',
      '/roles': 'http://localhost:3000',
      '/departments': 'http://localhost:3000',
    }
  }
})