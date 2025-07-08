# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

# 🚀 Cómo ejecutar este proyecto

## Opción 1: Usando Docker (recomendado)

No necesitas instalar Node.js ni npm en el servidor, solo Docker.

1. **Construye la imagen:**
   ```bash
   docker build -t pagina_soporte .
   ```
   > Puedes cambiar `pagina_soporte` por el nombre que prefieras.

2. **Ejecuta el contenedor:**
   ```bash
   docker run -d -p 3030:80 --name pagina_soporte --restart unless-stopped pagina_soporte
   ```
   > Cambia el puerto `3030` si lo necesitas.

3. **(Opcional) Si usas Nginx Proxy Manager:**
   - Conecta el contenedor a la red de tu proxy:
     ```bash
     docker run -d --name pagina_soporte --restart unless-stopped --network nginx-network pagina_soporte
     ```
   - Configura el proxy para redirigir al contenedor en el puerto 80.

---

## Opción 2: Sin Docker (Node.js y npm instalados)

1. Instala dependencias:
   ```bash
   npm install
   ```
2. Compila el proyecto:
   ```bash
   npm run build
   ```
3. Sirve la carpeta `dist` (o `build`) con tu servidor web favorito (por ejemplo, Nginx).

---

**Notas:**
- Si usas Docker, no necesitas instalar Node.js ni npm en el servidor.
- Si no usas Docker, asegúrate de tener Node.js y npm instalados.
