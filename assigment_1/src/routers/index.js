
import * as express from 'express'
import { nationalController, playerController } from '../controllers/index.js';
import { NationalRouter } from './nationalRouter.js';
import { PlayerRouter } from './playerRouter.js'

const playerRouter = new PlayerRouter(playerController);
const nationalRouter = new NationalRouter(nationalController);

const route = express.Router()

route.use('/national', nationalRouter.router);
route.use('/player', playerRouter.router);
export default route;