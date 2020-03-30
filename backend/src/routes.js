const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
const routes = express.Router();
const IncidentControler = require('./controllers/IncidentController');
const OngControler = require('./controllers/OngController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

routes.post('/session', SessionController.store);

routes.get('/ongs', OngControler.index)
routes.post(
    '/ongs',
    celebrate({
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            //whatsapp: Joi.number().required(),
            whatsapp: Joi.string().required().min(10).max(11),
            city: Joi.string().required(),
            uf: Joi.string().required().length(2),
        })
    }),
    OngControler.store);

routes.get(
    '/profile',
    celebrate({
        [Segments.HEADERS]: Joi.object({
            authorization: Joi.string().required()
        }).unknown()
    }), ProfileController.index)

routes.get(
    '/incidents',
    celebrate({
        [Segments.QUERY]: Joi.object().keys({
            page: Joi.number()
        })
    }),
    IncidentControler.index)
routes.post('/incidents', IncidentControler.store);
routes.delete(
    '/incidents/:id',
    celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.number().required()
        })
    }),
    IncidentControler.delete);

module.exports = routes;
