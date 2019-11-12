//Add your routes here...           
const Ninjas = require('../controllers/ctrl_Ninjas');

module.exports = function (app) {
    app.post('/e2etest', (req, res) => {Ninjas.e2etest(req, res);});
    app.post('/api/ninjas/newGame', (req, res) => {Ninjas.newGame(req, res);});
    app.get('/api/ninjas/retrieveall', (req,res)=> {Ninjas.getRetrieveAll(req, res);});
    app.get('/api/ninjas/retrieveId/:id', (req,res)=> {Ninjas.retrieveId(req, res);});
    app.delete('/api/ninjas/Delete/:id', (req,res)=> {Ninjas.deleteId(req, res);});
}