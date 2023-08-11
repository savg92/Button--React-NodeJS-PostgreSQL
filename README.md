# Language / Idioma:
Language / Idioma:
- [Español](#español)
- [English](#english)

## Español
# Tabla de Contenido
- [Problema](#problema)
- [Se requiere](#se-requiere)
- [Adicional](#adicional)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Tecnologías y Agradecimientos](#tecnologías-y-agradecimientos)
- [Autor](#autor)
- [Licencia](#licencia)

## Problema
Se busca crear una aplicación que sirva para contar la cantidad de veces que se apretaron botones.
# Se requiere
Construir una API Rest que tenga la capacidad de crear botones, registrar que se apretó un botón y de contar cuantas veces se apretó cada botón.

Construir una aplicación React que:
1. Muestre los botones creados cuyo texto el numero de botón con un contador de la cantidad de veces que fue apretado 2. Tener un botón “agregar” que agregue un botón al final de la lista de botones

#Adicional
Agregar un botón con un icono alusivo a eliminar, al lado de cada botón. Al ser clickeado, esto eliminará el botón de la lista.

# Requisitos
- Node.js
- npm
- PostgreSQL

# Instalación
1. Clonar el repositorio
2. Instalar dependencias para el backend, en la carpeta del backend ejecutar:
```
npm install
```
3. Modificar el archivo config.js con los datos de su base de datos PostgreSQL (username, password, database, host, dialect) y el puerto en el que desea que corra el servidor creando una variable de entorno llamada PORT en un archivo .env; de lo contrario, el puerto por defecto será el 3000.
4. Crear la base de datos en PostgreSQL con el nombre que se haya colocado en el archivo config.js
5. Ejecutar las migraciones y los seeders para crear las tablas y los datos de prueba, en la carpeta del backend ejecutar:
```
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```
6. Instalar dependencias para el frontend, en la carpeta del frontend ejecutar:
```
npm install
```
7. En la carpeta de services del frontend, carpeta src y carpeta services, modificar el archivo services.js; las variables port y baseURL deben coincidir con el puerto en el que se ejecuta el servidor y la dirección en la que se ejecuta el servidor respectivamente.
8. Ejecutar el servidor, en la carpeta del backend ejecutar:
```
npm start
```
9. Ejecutar el frontend, en la carpeta del frontend ejecutar:
```
npm run dev
```
10. Abrir en el navegador la dirección que se muestra en la terminal en la que se ejecutó el frontend.

# Uso
1. En la página principal se muestran los botones creados, con su número y la cantidad de veces que se ha presionado cada uno.
2. Para crear un botón, presionar el botón "Agregar botón +" y se creará un botón con el número siguiente al último botón creado.
3. Se podra hacer click en cada botón para aumentar el contador de veces que se ha presionado.
4. Para eliminar un botón, presionar el botón con el ícono de basurero al lado del botón que se desea eliminar.

# Tecnologías y Agradecimientos
Backend:
- [Node.js](https://nodejs.org/es/)
- [Express](https://expressjs.com/es/)
- [Sequelize](https://sequelize.org/)
- [Sequelize-cli](https://www.npmjs.com/package/sequelize-cli)
- [PostgreSQL](https://www.postgresql.org/)
- [Cookie Parser](https://www.npmjs.com/package/cookie-parser)
- [Cors](https://www.npmjs.com/package/cors)
- [Debug](https://www.npmjs.com/package/debug)
- [Http Errors](https://www.npmjs.com/package/http-errors)
- [Jade](https://www.npmjs.com/package/jade)
- [Morgan](https://www.npmjs.com/package/morgan)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Pg](https://www.npmjs.com/package/pg)

Frontend:
- [Vite](https://vitejs.dev/)
- [React](https://es.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [React Dom](https://es.reactjs.org/docs/react-dom.html)

# Autor
- [Santiago Valenzuela](https://github.com/savg92)

# Licencia
[MIT](https://choosealicense.com/licenses/mit/)


## English
# Table of Contents
- [Exercise](#exercise)
- [Required](#required)
- [Additional](#additional)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies and Acknowledgments](#technologies-and-acknowledgments)
- [Author](#author)
- [License](#license)

## Exercise
An application is sought to count the number of times buttons were pressed.
# Required
Build a Rest API that is capable of creating buttons, registering that a button was pressed and counting how many times each button was pressed.

Build a React application that:
1. Show the created buttons whose text is the button number with a counter of the number of times it was pressed 
2. Have an "add" button that adds a button to the end of the list of buttons

# Additional
Add a button with an allusive icon to delete, next to each button. When clicked, this will delete the button from the list.

# Requirements
- Node.js
- npm
- PostgreSQL

# Installation
1. Clone the repository
2. Install dependencies for the backend, in the backend folder run:
```
npm install
```
3. Modify the config.js file with the data of your PostgreSQL database (username, password, database, host, dialect) and the port on which you want the server to run by creating an environment variable called PORT in a .env file; otherwise, the default port will be 3000.
4. Create the database in PostgreSQL with the name that was placed in the config.js file.
5. Run the migrations and seeders to create the tables and test data, in the backend folder run:
```
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```
6. Install dependencies for the frontend, in the frontend folder run:
```
npm install
```
7. In the services folder of the frontend, src folder and services folder, modify the services.js file; the port and baseURL variables must match the port on which the server is running and the address on which the server is running respectively.
8. Run the server, in the backend folder run:
```
npm start
```
9. Run the frontend, in the frontend folder run:
```
npm run dev
```
10. Open in the browser the address shown in the terminal in which the frontend was executed.

# Usage
1. On the main page the created buttons are shown, with their number and the number of times each one has been pressed.
2. To create a button, press the "Add button +" button and a button will be created with the number following the last button created.
3. You can click on each button to increase the counter of times it has been pressed.
4. To delete a button, press the button with the trash can icon next to the button you want to delete.

# Acknowledgements and Technologies
Backend:
- [Node.js](https://nodejs.org/es/)
- [Express](https://expressjs.com/es/)
- [Sequelize](https://sequelize.org/)
- [Sequelize-cli](https://www.npmjs.com/package/sequelize-cli)
- [PostgreSQL](https://www.postgresql.org/)
- [Cookie Parser](https://www.npmjs.com/package/cookie-parser)
- [Cors](https://www.npmjs.com/package/cors)
- [Debug](https://www.npmjs.com/package/debug)
- [Http Errors](https://www.npmjs.com/package/http-errors)
- [Jade](https://www.npmjs.com/package/jade)
- [Morgan](https://www.npmjs.com/package/morgan)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Pg](https://www.npmjs.com/package/pg)

Frontend:
- [Vite](https://vitejs.dev/)
- [React](https://es.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [React Dom](https://es.reactjs.org/docs/react-dom.html)

# Author
- [Santiago Valenzuela](https://github.com/savg92)

# License
[MIT](https://choosealicense.com/licenses/mit/)
