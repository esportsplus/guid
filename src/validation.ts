import { string } from '@esportsplus/validation';
import { isValid } from '.';


const guid = () => {
    return string().finally(isGUID);
};

const isGUID = (value: string, error: (message: string) => void) => {
    if (!isValid(value)) {
        error('Invalid id');
    }

    return value;
};


export { guid, isGUID };