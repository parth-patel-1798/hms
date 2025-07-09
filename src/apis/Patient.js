import { AxiosServices } from '@utils/AxiosService';
import toast from 'react-hot-toast';

export async function AddPatientAPI() {
    try {
    } catch (error) {
        console.error(`Error fetching roles: ${error.message || error}`);
        const { data } = error.response;
        toast.error(data.message);
        throw new Error('Failed to fetch Laboratory. Please try again later.');
    }
}

export async function PatientListAPI() {
    try {
        const response = await AxiosServices.get('patient');
        if (response?.status === 200 && response?.data) {
            return response.data;
        } else {
            throw new Error('Unexpected API response');
        }
    } catch (error) {
        console.error(`Error fetching patient: ${error.message || error}`);
        const { data } = error.response;
        toast.error(data.message);
        throw new Error('Failed to fetch patient. Please try again later.');
    }
}

export async function PatientDetailsByIdAPI(id) {
    try {
        const response = await AxiosServices.get(`patient/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching patient: ${error.message || error}`);
        const { data } = error.response;
        toast.error(data.message);
        throw new Error('Failed to fetch patient. Please try again later.');
    }
}
