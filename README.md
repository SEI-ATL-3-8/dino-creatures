## DINOS AND CREATURES

Lets finally create our own api!!!
Full CRUD woohoo!!!

Overview:

- Create Database
- Create a server to talk to the database
- Use postman to interact with the server
- Get full CRUD functionality

### Setup

- `npm init -y`
- `npm i -g nodemon`
- `npm i express pg sequelize body-parser rowdy-logger`
- add a `.gitignore` and add node_modules and or config to it
- in your package.json add these to the scripts after "test"
- <pre>
  <code>
      "start": "node server.js",
      "dev": "nodemon server.js"
  </code>
  </pre>
- it should look like this
  - <pre>
      <code>
      "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "start": "node server.js",
      "dev": "nodemon server.js"
    },
      </code>
      </pre>
- sequelize init
- update config.json (change dialect to postgres)
- create database
- create our model
  - Please type this out to get reps in!!
  - `sequelize model:generate --name=dino --attributes name:string,type:string`
- check your database that everything you have your tables!

- create our second model
- Please type this out to get reps in!!
  - `sequelize model:generate --name=creatures --attributes name:string,img_url:string`
- check your database that everything you have your tables!
- `sequelize db:migrate`

- now once you've ran the migration run this in your terminal
  `sequelize-cli seed:generate --name dino-creatures`
  - check your seeders folder and you should see a file created - replace ALL the contents of that file with the contents of the seed.js located in the seedTemplate folder
- now run `sequelize-cli db:seed:all`
- this will run your seed file and populate your database!

## Part 1

- code/pay attention as we create the dino API
- at the root of this repo create a server.js

## in server.js

- add these lines
<pre>
<code>
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(PORT, () => {
console.log(`Listening on port ${PORT}`);
})
</code>

</pre>
- once you've got this setup go to your terminal and run 
`npm run dev` and you should see your server running on 3001!!!
- lets open our home boy postman 
## PART 2

- Now that we've created the Dinos table and added CRUD you will create the crud for creatures!!
