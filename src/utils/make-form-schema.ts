import { RJSFSchema } from "@rjsf/utils";
import { getDataList, getDataModel } from "../api/getData";

export const formSchema = async ( collection: string = 'brand' ) => {

    const data = await getDataList(collection);
    const modelInfo = await getDataModel(collection);

    const { model } = modelInfo.body;

    console.log(model);

    let schemaTemp: RJSFSchema = {
        "title": 'Test',
        "description": 'Un ejemplo',
        "type": 'object',
        "properties": {}
    }

    Object.entries(model).map( (element:any) => {
        schemaTemp.properties[element[0]] = {
            "type": element[1].type.toLowerCase() === 'integer' || element[1].type.toLowerCase() === 'decimal'
                ? 'number' 
                : element[1].type.toLowerCase(),
            "required": element[1].allowNull,
            "maxLenght": element[1].lenght ? element[1].lenght : null,
        }
    })
    
    console.log(schemaTemp);
    
    

    return schemaTemp;
}