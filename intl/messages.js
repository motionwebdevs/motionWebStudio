import {LOCALES} from "./locales";
import {All} from "./messages/all";

export const MESSAGES = {
    [LOCALES.ENGLISH]:{
        ...All[LOCALES.ENGLISH],
    },
    [LOCALES.RUSSIAN]:{
        ...All[LOCALES.RUSSIAN],
    }

}
