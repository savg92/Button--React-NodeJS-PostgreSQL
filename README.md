# totalCoinTest
<!-- tittle -->
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

# Tecnologías
Backend:
- Node.js
- Express
- Sequelize
- Sequelize-cli
- PostgreSQL
- Cookie Parser
- Cors
- Debug
- Http Errors
- Jade
- Morgan
- Nodemon
- Pg

Frontend:
- Vite
- React
- TypeScript
- Tailwind CSS
- Axios
- React Dom

# Autor
- [Santiago Valenzuela](https://github.com/savg92)

# Licencia
[MIT](https://choosealicense.com/licenses/mit/)

# Agradecimientos
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

