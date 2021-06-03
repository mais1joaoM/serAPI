import { request, Request, Response } from "express"
import { CalculationsService } from "../services/CalculationsService"


class CalculationsController{

    async createCalc( request: Request, response: Response ){

        const {

            readingOne,
            readingTwo,
            readingThree,
            readingFour,
            readingFive,
            defaultValue,
            ures,
            udefault,
            weightedAverage,
            errorDefault,
            ue,
            company_id,

        } = request.body;

        const calculationsService = new CalculationsService

        try{
            const calculations = await calculationsService.createCalc({
                readingOne,
                readingTwo,
                readingThree,
                readingFour,
                readingFive,
                defaultValue,
                ures,
                udefault,
                weightedAverage,
                errorDefault,
                ue,
                company_id,
            })

            return response.json(calculations)
        }catch(err){
            return response.status(400).json({ message: err.message })
        }

    }

}

export { CalculationsController }