import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import liveReload from 'vite-plugin-live-reload'
// import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})


// plugins: [react(),liveReload('.path'),eslintPlugin({cache: false})],
// {
//   include: "**/*.jsx",
// }