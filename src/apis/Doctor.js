import { DoctorSpecializationURL, DoctorURL } from '@utils/ApiConstant';
import { AxiosServices } from '@utils/AxiosService';
import toast from 'react-hot-toast';

export async function DoctorSpecializationListAPI() {
    try {
        const response = await AxiosServices.get(DoctorSpecializationURL);
        if (response?.status === 200 && response?.data) {
            return response.data;
        } else {
            throw new Error('Unexpected API response');
        }
    } catch (error) {
        console.error(`Error fetching roles: ${error.message || error}`);
        const { data } = error.response;
        throw new Error('Failed to fetch Doctor Specialization. Please try again later.');
    }
}
export async function DoctorAddUpdateAPI(data) {
    try {
        let response;
        console.log(data);
        if (data.id) {
            const url = DoctorURL + '/' + data.id;
            response = await AxiosServices.put(url, data);
        } else {
            response = await AxiosServices.post(DoctorURL, data);
        }
        if (response?.status === 200 && response?.data) {
            return response.data;
        } else {
            throw new Error('Unexpected API response');
        }
    } catch (error) {
        const { data } = error.response;
        toast.error(data.message);
        throw new Error(data.message || 'Failed to Add Update Hospital API. Please try again later.');
    }
}
