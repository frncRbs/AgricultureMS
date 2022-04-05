import { privateApi } from '../../../app/axiosClient';

class AdminService {
    async createPersonnel(user) {
        const { data } = await privateApi.post('/admin/create_personnel', user);

        return data;
    }

    async createNewProgram(program) {
        const { data } = await privateApi.post('/admin/new_program', program);

        return data;
    }

    async listPrograms(type) {
        const { data } = await privateApi.post('/admin/list_programs', type);

        return data;
    }

    async deleteProgram(identifier) {
        const { data } = await privateApi.post(
            '/admin/delete_program',
            identifier
        );

        return data;
    }

    async updateProgram(identifier, program) {
        const { data } = await privateApi.post('/admin/update_program', {
            identifier,
            program,
        });

        return data;
    }

    async updateUserAccount(id, role, isActivated) {
        const { data } = await privateApi.post('/admin/change_role', {
            id,
            role,
        });

        await privateApi.post('/admin/set_account_status', {
            id,
            isActivated,
        });

        return data;
    }

    async listUsers(role) {
        const { data } = await privateApi.post('/admin/list_users', role);

        return data;
    }
}

const adminService = new AdminService();

export default adminService;
