import { AxiosServices } from '@utils/AxiosService';

const LabURL = '/package';
export async function PackageListAPI() {
    try {
        const response = await AxiosServices.get(LabURL);
        if (response?.status === 200 && response?.data) {
            return response.data;
        } else {
            throw new Error('Unexpected API response');
        }
    } catch (error) {
        console.error(`Error fetching roles: ${error.message || error}`);
        const { data } = error.response;
        toast.error(data.message);
        throw new Error('Failed to fetch Laboratory. Please try again later.');
    }
}
