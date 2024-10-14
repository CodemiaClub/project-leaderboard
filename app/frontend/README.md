# Project Leaderboard

## Frontend

### Tabla de Contenidos

- [Stack](#Stack)
- [Instalación](#instalación)
- [Uso](#uso)
- [Scripts](#scripts)

### Stack

- React
- TypeScript
- Tailwind CSS
- Parcel
- Prettier

### Instalación

Para instalar y configurar el proyecto, seguir los siguientes pasos:

1. Clonar el repositorio:

   ```sh
   git clone https://github.com/CodemiaClub/project-leaderboard.git

   ```

2. Entrar al directorio del proyecto:

   ```sh
   cd project-leaderboard/app/frontend
   ```

3. Instalar las dependencias:

   ```sh
   npm install
   ```

4. Crear un archivo `.env` en la raiz del proyecto y configurarlo con los siguientes valores:

   ```env
   NODEJS_URI=http://localhost:3000            # URI pública del backend Node.js utilizado por la aplicación frontend.
   ```

### Uso

#### Desarrollo

Para iniciar el servidor de desarrollo, ejecutar:

```sh
npm run dev
```

Para desplegar la aplicación ejecutar:

```sh
npm run build
```

### Scripts

- `dev:` Ejecuta el servidor de desarrollo.
- `build:` Genera una versión de producción de la aplicación.
