const express = require('express');
const routes = express.Router();
const IncidentControler = require('./controllers/IncidentController');
const OngControler = require('./controllers/OngController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

routes.post('/session',SessionController.store);

routes.get('/ongs', OngControler.index)
routes.post('/ongs', OngControler.store);

routes.get('/profile', ProfileController.index)

routes.get('/incidents', IncidentControler.index)
routes.post('/incidents', IncidentControler.store);
routes.delete('/incidents/:id', IncidentControler.delete);

module.exports = routes;
