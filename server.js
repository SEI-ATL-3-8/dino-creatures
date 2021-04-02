
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const rowdy = require('rowdy-logger')

const routesReport = rowdy.begin(app)
app.use(express.json())
app.listen(PORT, () => {
console.log(`Listening on port ${PORT}`)
routesReport.print()
})

const models = require('./models')

const getAllDinos = async (req,res) => {
    try {
    // request
    let dinos = await models.dino.findAll()

    // response will be a json version of dinos
    res.json({dinos})
    } catch (error) {
    res.json({error})
    }
}

const getOneDino = async (req,res) => {
    try {
        let dino = await models.dino.findOne({
            where: {
                id: req.params.id 
            }
        })
        res.json({dino}) 
    } catch (error) {
        res.json({error})
    }
}

const createDino = async (req,res) => {
    try {
        let newDino = await models.dino.create({
            name: req.body.name,
            type: req.body.type
        })
        res.json({newDino})
    } catch (error) {
        res.json({error})
    }
}

app.get('/', (req,res) => {
    res.send('hello')
})

const updateDino = async (req,res) => {
    try {
        // get updates from the request body
        let updates = req.body
        //find the id based on url parameter
        let dinoToUpdate = await models.dino.findOne({
            where:{
                id: req.params.id
            }
        })
        //apply those changes to the found dinasaur
        let final = await dinoToUpdate.update(updates)
        //respond with the final changes!
        res.json({final})

    } catch (error) {
        res.json({error})
    }
}

const deleteDino = async(req,res) => {
    try {
        let deadDino = await models.dino.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({deadDino})
    } catch (error) {
        res.json({error})
    }
}

app.get('/dinos', getAllDinos)
app.get('/dinos/:id', getOneDino)
app.post('/dinos',createDino)
app.put('/dinos/:id',updateDino)
app.delete('/dinos/:id', deleteDino)




