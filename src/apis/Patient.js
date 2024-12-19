import toast from "react-hot-toast";

export async function AddPatientAPI() {
    try {
    } catch (error) {
        console.error(`Error fetching roles: ${error.message || error}`);
        const { data } = error.response;
        toast.error(data.message);
        throw new Error('Failed to fetch Laboratory. Please try again later.');
    }
}
