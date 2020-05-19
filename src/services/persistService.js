// import { AsyncStorage } from 'AsyncStorage';

const SESSION_KEY = 'KEY_SESSION_TOKENS';

export default class Session {
    /**
     * This will fetch session details from the Async storage.
     */
    static async getSessionDetails() {
        try {

            const data = await localStorage.getItem(SESSION_KEY);
            if (data !== null) {
                return JSON.parse(data);
            }
        } catch (e) {}
        return null;
    }

    /**
     * This will save session daa into the async storage.
     * @param {*} session
     */
    static async saveSessionDetails(session) {
        try {
             await localStorage.setItem(SESSION_KEY, JSON.stringify(session));
        } catch (e) {}
    }

    /**
     * This will remove the session object from the persistent storage.
     */
    static async removeSession() {
        try {
          await localStorage.removeItem(SESSION_KEY);
        } catch (e) {}
    }
}
