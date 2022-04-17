# Tercer Commit
# code-verifier-backend

## Replicar proyecto completo Node con TS y Express visto en el vídeo
-Subir el enlace al repositorio Github / Gitlab donde lo subas
## -_-  https://github.com/Andresito98/code-verifier-backend.git

## Crear un README.md explicando:
-Las dependencias que has instalado y para qué sirve cada una de ellas
-Los scripts de NPM que hayas creado y para qué sirven cada uno de ellos;
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