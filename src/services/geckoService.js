import axios from "axios";
import {push} from "svelte-spa-router";
import { LoggedIn } from "./stores.js"


export class geckoService {
    baseUrl = "";

    loggedIn = false;

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
            const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, {email, password});
            axios.defaults.headers.common.Authorization = `Bearer ${  response.data.token}`;
            console.log(response)
            if (response.data.success) {
                loggedin.set(true);
                this.username = response.data.username;
                console.log("LOGGED IN!")
                console.log(response.data)
                currentUserName.set(response.data.username);

                if (response.data.role === "admin") {
                    isAdmin.set(true);
                }
                else {
                    isAdmin.set(false);
                }
                localStorage.WAHI = JSON.stringify({username: response.data.username, role: response.data.role ,token:response.data.token});

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
        loggedin.set(false);
        isAdmin.set(false);
        currentUserName.set(null);
        localStorage.removeItem("WAHI");
        await push("#/")
        console.log("LOGGED OUT!")
    }

    async signup(firstName, lastName, username, email, password) {
        let res;
        try {
            const userDetails = {
                firstName: firstName,
                lastName: lastName,
                username: username,
                email: email,
                password: password,
            };
            await axios.post(`${this.baseUrl  }/api/addUser`, userDetails);
            // console.log("User created!");
            res = { status : "success", message : "User created!"};
            return res;
        } catch (error) {
            if (error.response.data.message === "\"email\" must be a valid email")
                res = { status : "error", message : "Email is not valid!"};
            else if (error.response.status === 400) {
                res = { status : "exists", message : "User already exists"};
            }
            else {
                res = { status : "error", message : "Signup failed"};
            }
            return res
        }
    }
}
export  const GeckoService = new geckoService(); //TODO