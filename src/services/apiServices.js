import Fetcher, { DELETE, GET, POST, PUT } from './fetcher';
const LOGIN_URL = '/login';
const DASH_URL = '/dashboard';
const TASK_URL = '/tasks';
const UPDATE_TASKS = '/tasks/{taskID}';
class TaskServices {
    /** Service to Login and get Authorization Key */
    static async Login(name) {
        const URL = LOGIN_URL;
        const payload = {
            name: name,
            apiKey: '32bfee0c72840a0b', // have hardcoded or else, ID will be sent
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
    static async updateTasks(taskId, data) {
        const URL = UPDATE_TASKS.replace('{taskID}', taskId);
        return Fetcher.call(PUT, `${URL}`, data);
    }
    /** Service to get create the task */
    static async createTasks(data) {
        const URL = TASK_URL;
        const payload = {
            name: data.data,
            completed: false,
        };
        return Fetcher.call(POST, `${URL}`, payload);
    }

    /** Service to get delete the task */
    static async deleteTask(taskId) {
        const URL = UPDATE_TASKS.replace('{taskID}', taskId);
        return Fetcher.call(DELETE, `${URL}`);
    }
}

export default TaskServices;
