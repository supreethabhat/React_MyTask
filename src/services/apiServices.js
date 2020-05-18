import Fetcher, { DELETE, GET, POST, PUT } from './fetcher';
const LOGIN_URL = '/login';
const DASH_URL = '/dashboard';
const TASK_URL = '/tasks';
const UPDATE_TASKS = '/tasks/{taskID}';
class TaskServices {
    /** Service to Login and get Authorization Key */
    static async Login() {
        const URL = LOGIN_URL;
        const payload = {
            name: 'John Doe',
            apiKey: '32bfee0c72840a0b',
        };
        return Fetcher.call(POST, `${URL}`, payload);
    }
    /** Service to get Dashboard data */
    static async getDashboardData() {
        const URL = DASH_URL;
        return Fetcher.call(GET, `${URL}`);
    }
    /** Service to get list of tasks */
    static async getTasks() {
        const URL = TASK_URL;
        return Fetcher.call(GET, `${URL}`);
    }
    /** Service to get update the task */
    static async updateTasks(taskId) {
        const URL = UPDATE_TASKS.replace('{taskId}', taskId);
        const payload = {
            name: 'Cleaning Dishes 123',
            completed: true,
        };
        return Fetcher.call(PUT, `${URL}`, payload);
    }
    /** Service to get create the task */
    static async createTasks() {
        const URL = TASK_URL;
        const payload = {
            name: 'Cleaning Dishes 123',
            completed: false,
        };
        return Fetcher.call(POST, `${URL}`, payload);
    }
}

export default TaskServices;
