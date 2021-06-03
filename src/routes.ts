import { Router } from "express";
import { CalculationsController } from "./controllers/CalculationsController";
import { CompaniesController } from "./controllers/CompaniesController";

const routes = Router()

const companiesController = new CompaniesController()
const calculationsController = new CalculationsController()

routes.post("/companies", companiesController.create)
routes.post("/calculation", calculationsController.createCalc)

export { routes }


