const mongoose = require('mongoose');
const MongModels = require('../models/model_Ninjas');
const Ninja = MongModels.Ninja;

module.exports =  {
    getRetrieveAll:function (req, res) {
        console.log("Retrieving all records");
        Ninja.find()
        .then(data => {
            console.log(data);
            
            res.json(data);   // TODO: if API then we should return only the JSON object.
        })
        .catch(err => res.json(err));
    },
}