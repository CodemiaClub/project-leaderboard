# Project Leaderboard

## Backend

### Tabla de Contenidos

- [Stack](#Stack)
- [Instalación](#instalación)
- [Uso](#uso)
- [Scripts](#scripts)

### Stack

- Node.js
- Express
- TypeScript
- Google APIs
- dotenv-cli
- Prettier

### Instalación

Para instalar y configurar el proyecto, seguir los siguientes pasos:

1. Clonar el repositorio:

   ```sh
   git clone https://github.com/CodemiaClub/project-leaderboard.git

   ```

2. Entrar al directorio del proyecto:

   ```sh
   cd project-leaderboard/app/backend
   ```

3. Instalar las dependencias:

   ```sh
   npm install
   ```

4. Crear un archivo `.env` en la raiz del proyecto y configurarlo con los siguientes valores:

   ```env
   PORT=3000                                                                 # Puerto en el que se ejecutará la aplicación.
   ACCESS_CONTROL_ALLOW_ORIGIN=*                                             # Controla qué dominios pueden acceder a la aplicación (CORS).
   SPREADSHEETID=your_spreadsheetid                                          # ID de Google Sheet.
   GOOGLE_APPLICATION_CREDENTIALS=project-leaderboard\app\backend\keys.json  # Ruta al archivo de credenciales de la cuenta de servicio de Google.
   ```

5. Solicitar acceso al Google Sheet de Monedas [**Google Sheet**](https://docs.google.com/spreadsheets/d/1QANs9Hi1v1w4VQiuCDfIXIbLqFpncMkxKHu0U2u-Bi4/edit?gid=565713578#gid=565713578).

6. Una vez que nos dieron acceso al Google Sheet de Monedas, hacer un copia. Tomar el ID de la url, y asignárselo a la variable de entorno SPREADSHEETID del archivo .env.

7. Crear en la raíz del proyecto ( app/backend ) el archivo `keys.json` con las credenciales de tu cuenta de servicio de Google, para ello realizar los siguientes pasos:

   1. Acceder a [**Google Cloud Console**](https://console.cloud.google.com/).
   2. Crear un nuevo proyecto haciendo clic en el menú desplegable de selección de proyectos en la parte superior de la página.
   3. En el menú de la izquierda, seleccionar **API & Services** -> **Library** y buscar la API **Google Sheets API**. Luego, hacer clic en **ENABLE** para habilitarla.
   4. En el menú de la izquierda, seleccionar **IAM & Admin** -> **Service Accounts**. Hacer clic en **CREATE SERVICE ACCOUNT** para crear una cuenta de servicio, asignar un nombre y hacer clic en **CREATE AND CONTINUE**.
   5. Asignar el rol a la cuenta de servicio, por ejemplo **Basic** -> **Editor**. Hacer clic en **CONTINUE** y luego en **DONE**.
   6. En el menu de la izquierda, seleccionar **IAM & Admin** -> **Service Accounts**. Buscar la cuenta de servicio creada, y hacer clic en los tres puntos a la derecha y selecciona **Manage keys**. Luego hacer clic en el menu desplegable **ADD KEY**, y seleccionar **Create new key**. Seleccionar **JSON** como tipo de clave y luego **CREATE**. Esto descargará automáticamente un archivo .json, renombrarlo a **keys.json** y guardarlo en la raíz del proyecto ( app/backend ).
   7. Compartir la copia del Google Sheet con el email que tiene asignado el service account. Para ello ir a **IAM & Admin** -> **Service Accounts** y copiar el email. Luego ir a la copia del Google Sheet de Monedas, hacer clic en **Compartir**, pegarlo en el campo disponible y hacer clic en **Enviar**.

### Uso

#### Desarrollo

Para iniciar el servidor de desarrollo, ejecutar:

```sh
npm run dev
```

Para monitorear los cambios y reiniciar automáticamente el servidor, ejecutar:

```sh
npm run dev:watch
```

Para hacer una prueba de la API ir a http://localhost:3000/table .

#### Formateo de código

Para formatear el código, ejecutar:

```sh
npm run format
```

### Scripts

- `dev:` Compila el código TypeScript y ejecuta el servidor de desarrollo.
- `dev:watch:` Ejecuta el servidor de desarrollo con monitoreo de cambios.
- `format:` Aplica el formato del código con Prettier.
