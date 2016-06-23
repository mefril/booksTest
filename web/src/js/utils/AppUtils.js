import axios from  'axios';

export default class AppUtils {

    static getApplicationContext() {
        return '/api/';
    }

    static httpGet(url) {
        return axios.get(this.getApplicationContext() + url);
    }

    static httpPost(url, json) {
        return axios.post(this.getApplicationContext() + url, json);
    }
}