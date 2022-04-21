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
al hacer npm run swagger se actu
hemos visto un poco de mongo/ crear bases de datos y los primeros pasos de la carpeta doamin
User.entity.ts / User.orm.ts / 

Aqui lo que he hecho fue hacer las instalaciones y añadir datos a la clase GoodbyeController.ts

## /************ Video 2 ************/
 -_- npm i -D ts-loader --> 
  -_- npm i -D @types/swagger-jsdoc @types/swagger-ui-express --> podemos acceder a todas las peticiones de los endpoints directamente

    -_- npm i --save swagger-jsdoc swagger-ui-express --> se generan las depencias para los documentos basicos swagger
        -_- npm i tsoa --> sirve para usar swagger con typescript y comentar el codigo

-Replicar la creación de base de datos en MongoDB
* Crear una colección llamada Katas (retos de programación)
  * Cada documento deberá tener:
  * Name
  * Description
  * Level (nivel de dificultad numérico)
  * User (id asociado al usuario que lo ha creado)
  * Date (Fecha de creación del reto)
  * Valoration (sobre 5, valor numérico)



 # SESIÓN 4 
## Datos y ejercicios
En el package.json en --> dev 
si ponemos --> \"nodemon -x tsoa spec\"     Lo que hara es actualizarse la informacion del swagger al cambiar algo
pero ahora no usaremos ese comando.

En esta sesion se ha dedicado a el tema de la db de mongo y sus consultas.


### EJERCICIO 1:

* Asegúrate de poder ver correctamente documentada tu API con Swagger
  *  Descarga el JSON de 5000 contactos (Carpeta de MOCKS del Repo del proyecto (https://gitlab.com/masajo/code-verifier-backend/-/tree/main/mocks))
* JSON obtenido de la API Rest Pública (https://randomuser.me/api/?results=5000)
* Crea una base de datos en Mongo con Mongo Compass llamada “Pruebas”
* Importa el JSON a una colección llamada Contacts
* Hacer peticiones al servidor de Mongo desde Mongo Compass & Mongo Shell para hacer los siguientes ejercicios:
  * Listar todos los contactos.         --> db.Contacts.find()
  * Busca el primer contacto que sea de Alemania (Germany).
         --> db.Contacts.findOne({"location.country": "Germany"})   ||     db.Contacts.find({"location.country": "Germany"}).limit(1)

  * Busca todos los contactos que tengan Blake como nombre (first).         --> db.Contacts.find({"name.first": "Blake"})
  * Busca los primeros 5 contactos que tengan como género (gender) hombre (male)      --> db.Contacts.find({"gender": "Blake"}).limit(5)
  * Devuelve los 4 primeros contactos ordenados por nombre (name) de manera descendente.  --> db.Contacts.find().sort({name: 1}).limit(4)
  * Clona la colección de Contacts a CopiaContacts y luego bórrala. --> db.Contacts.copyTo("CopiaContacts")   --> db.CopiaContacts.dropDatabase()
  * Renombra el campo de name por nombre. --> db.Contacts.updateMany({}, {$rename: {name: "nombre"}})
  * Borra todos los contactos que tengan como estado (state) Florida.  --> db.Contacts.deleteMany({"location.state": "Florida"})


### EJERCICIO 2:

* Muestra las primeras 5 ciudades que empiecen por A ordenadas de manera ascendente, las soluciones deben ser únicas.
* Crea una colección a parte, que solo contenga a los contactos de Francia (France) y que tengan entre 18 y 50 años. Usa una agregación para ello.
* Añade un número favorito a cada contacto, luego crea un bucket agrupando por número favorito que separe en 5 segmentos.
* En la colección de Contatcs, haz una proyección la cual tiene que devolver solo el name y username del contacto.
db.Contacts.aggregate([
    { $match: {name: {$gt: 1}}},
    { $project: {_id: 0, name: 1, username: 1
  }}
])


* Haz una consulta en la colección de Contacts la cual devuelva un documento por cada nombre (name) y que sea único, ordenado por apellido (last), tienes que usar el operador unwind.
db.Contacts.aggregate([
{ $group: { _id: "arrayContacts", nombreContact: {$addToSet: "$name.last"
}}},
{ $unwind: "$nombreContact" },
{ $sort: { last: 1 }}
])

* Haz una proyección convirtiendo la fecha (date) a un formato DD-MM-AAAA, la nueva variable será fechaNacimiento
db.Contacts.aggregate([
{ $project: {
    _id: 0,
    fechaNacimiento:
    { $concat: [
    {$toString: "$nacimiento.fecha.dia"},
    "-",
    {$toString: "$nacimiento.fecha.mes"},
    "-",
    {$toString: "$nacimiento.fecha.año"}
    ]
  }}}
])

* Como solución deberás entregar ya sea escrito o en captura los scripts a ejecutar de cada parte.
Ok






















## -_- Al subir el archivo a git seria tal que asi:
 -_- git add .
 -_- git commit -m ""
 -_- git push