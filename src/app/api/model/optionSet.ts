/**
 * server API
 * server API documentation
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { OptionValue } from './optionValue';


export interface OptionSet { 
    Code?: string;
    Created?: Date;
    Id?: number;
    LastUpdate?: Date;
    Name: string;
    OptionValues?: Array<OptionValue>;
    Uuid?: string;
}