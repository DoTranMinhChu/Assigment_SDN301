import { NationalController } from "./nationalController.js";
import { PlayerController } from "./playerController.js";

const playerController = new PlayerController();
const nationalController = new NationalController()

export {
    playerController,
    nationalController
}