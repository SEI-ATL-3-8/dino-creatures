const models = require('../models')

const dinoController = {}

dinoController.getAll = async (req,res) =>{
    try {
        // request
        let dinos = await models.dino.findAll()
    
        // response will be a json version of dinos
        res.json({dinos})
        } catch (error) {
        res.json({error})
        }
}

dinoController.find = async (req,res) => {
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

dinoController.create = async (req,res) => {
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



dinoController.update = async (req,res) => {
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

dinoController.delete = async(req,res) => {
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

module.exports = dinoController;