import axios, { AxiosResponse } from 'axios';
import ITask from '../common/interfaces/task.interface';


const domain = process.env.NODE_ENV === "production" ? process.env.PRODUCTION_URL : process.env.LOCAL_URL;
const api = axios.create({
    baseURL: `${domain}api`,
});

interface IResponse {
    data: ITask[];
}


class TasksService {

    async get(quantity: number): Promise<IResponse | undefined> {
        try {
            const response:AxiosResponse<any, any> = await api.get(`/tasks/`,
                {
                    params: {
                        quantity
                    }
                });

            return response.data;
        } catch (e) {
            console.error(e);
        }
    }

    async updateTask(task: ITask) {
        try {
          await api.put(`/tasks/`,{task});
        } catch (e) {
            console.error(e);
        }
    }


}


const tasksService = new TasksService();
export default tasksService;