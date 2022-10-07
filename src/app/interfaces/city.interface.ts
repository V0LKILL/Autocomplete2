import {Autocomplete} from "./autocomplete.interface";

export interface CityInterface extends Autocomplete {
  "city": string;
  "mtsbuCode": number;
  "saiNumbers": number;
  "saiNumbersOld": number;

}
