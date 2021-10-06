import axios from 'axios';

export default class DicordLogger {
    /**
     * @param {string} app_name: Optional Discord app name
     * @param {string} url : Discord Webhook url
     */
    constructor(app_name, url) {
        this.app_name = app_name;
        this.url = url;
    }

    /**
     * @param {string} message: required Output to be send to the 
     * discord channel.
     * @param {number} timer: optional for specific delay timer , default 
     * set to 1000 millisencods
     */
    async to_discord(message, timer = 1000) {
        let this_url = this.url;
        let parameters = {
            username: (this.app_name),
            content: (message),
        };

        console.log(this.url)
        setTimeout(async function () {
            return axios({
                method: ('POST'),
                headers: {
                    'Content-Type': 'application/json',
                },
                data: (JSON.stringify(parameters)),
                url: (this_url),
            });
        }, (timer));
    }
}