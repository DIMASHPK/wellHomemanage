# wellHomemanage

I don't want to put here a big description about this project, only some words about this. It`s not very speceial system to handle data about flats and houses. 
I have created ui to manage backend data with simple auth and CRUD operations for each kind of table with some features:
 - sorting, 
 - filters, 
 - pagination, 
 - count rows per page select
 - hidding unneccesary table columns
 - responsive layout
 
## I have used here: 
- React JS, 
- TS, 
- ESlint, 
- Webpack, 
- Node JS, 
- Express, 
- Nodemon, 
- Axios, 
- Redix toolkit, 
- React Material ui, 
- React hook form, 
- Lodash, 
- Prettier
- Docker
- Postgresql
- Sequelize
- JWT
- Jest

## If you want to run this project locally you can follow these steps:
1. Clone this repo(I wish you have already installed node js, yarn, postgresql, docker, git localy)
2. You can run app by two ways wih docker and without
  - Without Docker:
    - Open main folder of project
    - Open two terminal windows one for client and next for server
    - `cd client => yarn => yarn start ` to run client
    - `cd server => yarn` => change .env file `POSTGRES_HOST` variable to `POSTGRES_HOST = localhost` => `yarn start:dev` to run server
 - With Docker
  - Open main folder of project
  - open one terminal window => `docker-compose -f docker-compose.dev.yml up --build`
  
  After these steps you can you can open `localhost:3000` for client and `localhost:777` for server
  
  
