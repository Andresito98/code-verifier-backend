# Tercer Commit
# code-verifier-backend

## Replicar proyecto completo Node con TS y Express visto en el vídeo
-Subir el enlace al repositorio Github / Gitlab donde lo subas
## -_-  https://github.com/Andresito98/code-verifier-backend.git

## Crear un README.md explicando:
-Las dependencias que has instalado y para qué sirve cada una de ellas
-Los scripts de NPM que hayas creado y para qué sirven cada uno de ellos;
 ## /************ Video 1 ************/
 -_- npm init --> se crea el paquete "package.json"
  -_- npm i express --save --> instalamos "Express.js"
   -_- npm i dotenv --save --> Es la libreria principal "dotenv" que nos permitira leer .env
    -_- npm install -D nodemon --> Sirve para que cada vez que guardemos se actualice solo la api , "npm run (dev)"
     -_- npm i -D typescript @types/express @types/node--> se crean todas las dependencias de ts necesarias
      -_- npx tsc --init --> nos crea un archivo con todos los elementos necesarios "tsconfig.json"
       -_- npm i -D concurrently --> permite ejecutar varios npm al mismo tiempo sin tener que abrir varias terminales el ejemplo esta en ""dev": "concurrently \"npx tsc --watch \" \"nodemon -q dist/index.js \" ","
        -_- npm i -D webpack webpack-cli webpack-node-externals webpack-shell-plugin--> agrupa archivos JS
         -_- npm i -D eslint jest ts-jest @types/jest supertest --> Sirve para poner reglas al proyecto  
          -_- npm init --> nos crea un archivo con todos los elementos necesarios --> 3, 1, 3, Y, 2
           -_- npm init --> se crea el paquete "package.json"


-Las variables de entorno que habrá que crear en el .env para cualquiera que lo descargue;
{ Por ahora solo hemos creado la variable del puerto pero mas adelante habra que poner las de las base de datos }

## Creación de rutas (endpoints del servidor):
 -_- ya hemos realizado los primeros endpoints en "inde

### Ruta tipo GET que devuelva una Response 200 con un JSON con la siguiente estructura:
“data”: {
“message”: “Goodbye, world”

}

### EXTRA: Investigar cómo leer parámetros de consulta por la URL
Modificar la ruta “hello” para que reciba un parámetro query (?name=”Nombre”) y devuelva una Response 200 con un JSON con la siguiente estructura:
“data”: {
“message”: “Hola, {nombre pasado por parámetro o “anónimo” en caso de que no exista el parámetro}”

}

## Instalar Postman y probar las dos rutas del proyecto
 -_- Todo ok.


#
 # SESIÓN 2 
## Datos y ejercicios

Que orden tiene que seguir el proyecto.
### 1 ---> Primero la carpeta *Utils* con su index , ¿ Que hay/hace en esa carpeta ? se controla por ejemplo los errores o mensajes predeterminados 

### 2 ---> Segundo las interfaces de los controladores , se declara en el index interface y se implementa en el controlador.

### 3 ---> Tercero los types de los controladores, esto todavia no lo entiendo del todo bien.

### 4 ---> Se crea la clase controlador (HelloController.ts)

### 5 ---> Hacemos las rutas en este caso (HelloRouter.ts)

### 6 ---> Hacemos el index.ts de los routes

### 7 ---> Hacemos el index.ts de la carpeta server , es recomendable que antes de hacer ese index se guarde el proyecto. Y tenemos que instalar el cors y helmet
#### La instalación es npm i cors helmet

### 9 --->  Despues limpiamos el archivo index.ts de la raiz y quedamos solo lo necesario


## Crear un README.md explicando:
-Las dependencias que has instalado y para qué sirve cada una de ellas
-Los scripts de NPM que hayas creado y para qué sirven cada uno de ellos;
## /************ Video 2 ************/
 -_- npm i mongoose --> se instalan los paquetes de base de datos mongo
  -_- npm i cors helmet --> se instalan los paquetes cors y helmet


## EJERCICIO.
### Crear una ruta nueva:
* api/goodbye
  * Debe devolver un JSON con una despedida:
  * {
  * “message”: “Goodbye {NOMBRE POR QUERY PARAMS}”,
  * “Date”: {FECHA ACTUAL}
  * }

Recuerda crear un type específico para esta respuesta dentro de la carpeta de controllers

Recuerda crear Controller y Router oportuno


 # SESIÓN 3 
## Datos y ejercicios


## Crear un README.md explicando:
-Las dependencias que has instalado y para qué sirve cada una de ellas
-Los scripts de NPM que hayas creado y para qué sirven cada uno de ellos;
## /************ Video 2 ************/
 -_- npm i -D ts-loader --> 
  -_- npm i -D @types/swagger-jsdoc @types/swagger-ui-express --> podemos acceder a todas las peticiones de los endpoints directamente
    -_- npm i --save swagger-jsdoc swagger-ui-express --> se generan las depencias para los documentos basicos swagger
        -_- npm i tsoa --> sirve para usar swagger con typescript y comentar el codigo










## -_- Al subir el archivo a git seria tal que asi:
 -_- git add .
 -_- git commit -m ""
 -_- git push