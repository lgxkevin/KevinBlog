import {ColorMapper} from "../Interfaces/IColorMapper";


export const mapColor = (color: string):string => {
    let color1 = ColorMapper[color];
    return color1;
}
