//Add your routes here...           
const Ninjas = require('../controllers/ctrl_Ninjas');

module.exports = function (app) {
    app.get('/', (req, res) => {General.index(req, res);});
    app.post('/e2etest', (req, res) => {Ninjas.e2etest(req, res);});
    app.post('/api/ninjas/newninja', (req, res) => {Ninjas.newninja(req, res);});
    app.get('/api/ninjas/retrieveall', (req,res)=> {Ninjas.getRetrieveAll(req, res);});
    app.get('/api/ninjas/retrieveId/:id', (req,res)=> {Ninjas.retrieveId(req, res);});
    app.delete('/api/ninjas/Delete/:id', (req,res)=> {Ninjas.deleteId(req, res);});
}