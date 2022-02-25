import { privateApi } from '../../../app/axiosClient';

class AdminService {
    async createPersonnel(user) {
        const { data } = await privateApi.post('/admin/create_personnel', {
            ...user,
        });

        return data;
    }
}

const adminService = new AdminService();

export default adminService;
