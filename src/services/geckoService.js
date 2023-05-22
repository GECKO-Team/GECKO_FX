import axios from "axios";
import {push} from "svelte-spa-router";
import { LoggedIn, UserName } from "./stores.js"


export class geckoService {
    baseUrl = "";
    username = "";

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        const credentials = localStorage.GECKO

    }

    async getbaseUrl() {
        return this.baseUrl;
    }

    async login(email, password) {
        try {
            const response = await axios.post(`${this.baseUrl}/api/authenticate`, {email, password});
            axios.defaults.headers.common.Authorization = `Bearer ${  response.data.token}`;
            console.log(response)
            if (response.data.success) {
                LoggedIn.set(true);
                this.username = response.data.username;
                UserName.set(response.data.username);
                localStorage.Gecko = JSON.stringify({username: response.data.username,token:response.data.token});
                return true;
            }
            return false;
        } catch (error) {
            return false;
        }
    }

    // eslint-disable-next-line class-methods-use-this
    async logout() {
        axios.defaults.headers.common.Authorization = "";
        LoggedIn.set(false);
        localStorage.removeItem("Gecko");
        await push("#/")
        console.log("User has logged out.")
    }

    async signup(username, email, password) {
        let res;
        try {
            const userDetails = {
                username: email,
                email: email,
                password: password,
            };
            console.log(email)
            // check if the email ends with @st.oth-regensburg.de or @oth-regensburg.de
            if (email.endsWith("@st.oth-regensburg.de") || email.endsWith("@oth-regensburg.de")) {
                let newuser = await axios.post(`${this.baseUrl  }/api/addUser`, userDetails);
                // console.log("User created!");
                res = { status : "success", message : "User created!"};
            }
            else {
                res = { status : "error", message : "Email is not valid!"};
                return res;
            }
        } catch (error) {
            console.log(error)
            return res
        }
    }

    async checkUsername_exists(username) {
        try {
            const response = await axios.post(`${this.baseUrl}/api/checkUsername_exists`, {username});
            console.log(response)
            if (response.data.success) {
                return true;
            }
            return false;
        } catch (error) {
            return false;
        }
    }

}
export  const GeckoService = new geckoService();