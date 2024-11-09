import { RoleListURL, RolePermissionsURL, RoleURL } from '@utils/ApiConstant';
import { AxiosServices } from '@utils/AxiosService';

/**
 * Fetches the list of roles from the API.
 * @returns {Promise<Array|Error>} Resolves to an array of roles or an error message.
 */
export async function RoleListAPI() {
    try {
        const response = await AxiosServices.get(RoleListURL);

        // Check if the response status is OK and the data exists
        if (response?.status === 200 && response?.data) {
            // Optionally, you can validate or transform the data here
            return response.data; // Return the roles data
        } else {
            throw new Error('Unexpected API response');
        }
    } catch (error) {
        console.error(`Error fetching roles: ${error.message || error}`);
        throw new Error('Failed to fetch roles. Please try again later.');
    }
}
export async function RolePermissionListAPI() {
    try {
        const response = await AxiosServices.get(RolePermissionsURL);

        // Check if the response status is OK and the data exists
        if (response?.status === 200 && response?.data) {
            // Optionally, you can validate or transform the data here
            return response.data; // Return the roles data
        } else {
            throw new Error('Unexpected API response');
        }
    } catch (error) {
        console.error(`Error fetching roles: ${error.message || error}`);
        throw new Error('Failed to fetch roles. Please try again later.');
    }
}

export async function RoleAddUpdateAPI(data) {
    try {
        let response;
        if (data.id) {
            const url = RoleURL + '/' + data.id;
            response = await AxiosServices.put(url, data);
        } else {
            response = await AxiosServices.post(RoleURL, data);
        }
        if (response?.status === 200 && response?.data) {
            return response.data;
        } else {
            throw new Error('Unexpected API response');
        }
    } catch (error) {
        console.error(`Error fetching roles: ${error.message || error}`);
        throw new Error('Failed to fetch roles. Please try again later.');
    }
}
