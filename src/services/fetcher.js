/**
 * This is a network library class, and will be used to perform all the network related operations.
 *
 */
import Axios from 'axios';
import { EnvConfig, Locales } from '../config';
import SessionService from '../services/persistService';

export const GET = 'GET';
export const POST = 'POST';
export const PUT = 'PUT';
export const DELETE = 'DELETE';

export default class Fetcher {
    /**
     * This method will hit the web server.
     *
     * @param {string} methodType - GET/POST values.
     * @param {string} servicePath - servicePath to be hit.
     * @param {Object} payload - will be empty in case of GET request.
     *
     */
    static async call(methodType, servicePath, payload) {
        const requestURL = EnvConfig.hostURL + servicePath;
        const headers = this.getRequestHeaders();

        try {
            let axiosResponse = null;
            try {
                const session = await SessionService.getSessionDetails();
                if (session !== null) {
                    headers.Authorization = `${session.token.token}`;
                }
                const axios = Axios.create({
                    baseURL: requestURL,
                    headers,
                    data: payload,
                });
                axiosResponse = await axios.request({
                    method: methodType,
                    data: payload,
                });
            } catch (error) {
                axiosResponse = error.response;
            }

            // The API call has been executed successfully. This will return the actual JSON response.

            if (axiosResponse.status === 200 || axiosResponse.status === 201) {
                return axiosResponse.data;
            }
            if (axiosResponse.status === 400) {
                throw new Error(Locales.genericErrorMessage);
            }
        } catch (error) {
            // There is an error in fetching the data. This will return the error message to the function caller.

            throw new Error(Locales.genericErrorMessage);
        }
    }

    /**
     function will create the required headers to be passed in  all the web services.
     @returns {Object} JSON-object with all headers details.
   */
    static getRequestHeaders() {
        const headers = {
            Accept: 'application/json',
        };
        headers['Content-Type'] = 'application/json';
        return headers;
    }
}
