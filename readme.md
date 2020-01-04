# login-api

* The login-api is a simple node.js based api. With this api you have a simple system of login and authentication for your projects. It is basic, you can use it as base to mount a bigger api or simply use it as an independent authentication system. 

# To initialize the login api local
* clone or download the project
* install dependencies
```sh
npm i
```

* install mongoDB in your computer

* create a .env file with the configuration
```sh
EXPRESS_SESSION_KEY= yourkey
DB_URI=mongodb://localhost/login-api
PORT=4000
JWT_SECRET = yoursecret
```

* start the api local
```sh
npm start
```
