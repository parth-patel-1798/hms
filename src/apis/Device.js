import { AxiosServices } from '@utils/AxiosService';
import toast from 'react-hot-toast';

export async function DeviceListAPI() {
    try {
        const response = await AxiosServices.get('device');
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
