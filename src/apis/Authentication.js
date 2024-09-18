import { LoginURL } from '@utils/ApiConstant';
import { AxiosServices } from '@utils/AxiosService';

export function LoginAPI(data) {
    console.log(data);
    return AxiosServices.post(LoginURL, data);
}
