import { HospitalURL } from '@utils/ApiConstant';
import { AxiosServices } from '@utils/AxiosService';
import toast from 'react-hot-toast';

export async function HospitalListAPI() {
    try {
        const response = await AxiosServices.get(HospitalURL);
        if (response?.status === 200 && response?.data) {
            return response.data;
        } else {
            throw new Error('Unexpected API response');
        }
    } catch (error) {
        console.error(`Error fetching roles: ${error.message || error}`);
        const { data } = error.response;
        toast.error(data.message);
        throw new Error('Failed to fetch Hospital. Please try again later.');
    }
}

export async function HospitalAddUpdateAPI(data) {
    try {
        let response;
        if (data.id) {
            const url = HospitalURL + '/' + data.id;
            response = await AxiosServices.put(url, data);
        } else {
            response = await AxiosServices.post(HospitalURL, data);
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

export async function HospitalDeleteAPI(id) {
    try {
        const url = HospitalURL + '/' + id;
        const response = await AxiosServices.delete(url);
        return response.data;
    } catch (error) {
        const { data } = error.response;
        toast.error(data.message);
        throw new Error(data.message || 'Failed to Delete Hospital API. Please try again later.');
    }
}
