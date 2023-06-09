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
            // check if the email includes with @st.oth-regensburg.de or @oth-regensburg.de
            if (email.includes("@st.oth-regensburg.de") || email.includes("@oth-regensburg.de")) {
                let newuser = await axios.post(`${this.baseUrl  }/api/addUser`, userDetails);
                // console.log("User created!");
                return { status : "success", message : "User created!"};
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

    async changeEmail() {
        try {
        } catch (error) {
        }
    }

    async getEvents() {
        try {
            // console.log(`${this.baseUrl}api/events`);
            const response = await axios.get(
                `${this.baseUrl}/api/events`,
                {
                    headers: [
                        { key: "Access-Control-Allow-Credentials", value: "true" },
                        { key: "Access-Control-Allow-Origin", value: "*" },
                        { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
                        { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                    ],
                    params: {
                        // example:
                        // title: 'Test2',
                    },
                }
            );

            if (response.status === 200) { // response - object, eg { status: 200, message: 'OK' }
                // console.log('Success getEvents');
                // console.log(response.data);
                return response.data;
                // return response.data;
            }

        } catch (error) {
            console.log("Error during getEvents!");
            console.error(error);
            return false;
        }
    }

    async postEvent(event_to_create) {
        try {
            console.log(event_to_create);
            const response = await axios.post(
                `${this.baseUrl}/api/events`,
                {
                    group_id: event_to_create.group_id,
                    city: event_to_create.city,
                    country: event_to_create.country,
                    description: event_to_create.description,
                    house_nr: event_to_create.house_nr,
                    street: event_to_create.street,
                    time: event_to_create.time,
                    title: event_to_create.title,
                    creator: event_to_create.creator
                },
                {
                    headers: [
                        { key: "Access-Control-Allow-Credentials", value: "true" },
                        { key: "Access-Control-Allow-Origin", value: "*" },
                        { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
                        { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                    ],
                }
            );

            console.log("response in postEvent:");
            console.log(response);

            if (response.status === 200) { // response - object, eg { status: 200, message: 'OK' }
                console.log('Success postEvent');
                return response;
            }

        } catch (error) {
            console.log("Error during postEvent!");
            console.error(error);
            return false;
        }
    }

    async createGroup(username, name, description) {
        try {
            let group = {
                username: username,
                name: name,
                description: description
            }
            console.log(group);
            const response = await axios.post(`${this.baseUrl}/api/createGroup`, group);
            if (response.status === 200) { // response - object, eg { status: 200, message: 'OK' }
                console.log('Success createEvent');
                return true;
            }
        }
        catch (error) {
            console.log("Error during createEvent!");
            console.error(error);
            return false;
        }
    }


    async deleteEvent(event_id_to_delete) {
        try {
            const response = await axios.delete(
                `${this.baseUrl}/api/events/${event_id_to_delete}`,
                {
                    headers: [
                        { key: "Access-Control-Allow-Credentials", value: "true" },
                        { key: "Access-Control-Allow-Origin", value: "*" },
                        { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
                        { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                    ],
                }
            );

            // console.log("response in event_id_to_delete:");
            // console.log(response);

            if (response.status === 200) { // response - object, eg { status: 200, message: 'OK' }
                // console.log('Success deleteEvent');
                return response;
            }

        } catch (error) {
            console.log("Error during deleteEvent!");
            console.error(error);
            return false;
        }
    }

    async getEvent(event_id) {
        try {
            const response = await axios.get(
                `${this.baseUrl}/api/events/${event_id}`,
                {
                    headers: [
                        { key: "Access-Control-Allow-Credentials", value: "true" },
                        { key: "Access-Control-Allow-Origin", value: "*" },
                        { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
                        { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                    ],
                }
            );

            // console.log("response in getEvent:");
            // console.log(response);

            if (response.status === 200) { // response - object, eg { status: 200, message: 'OK' }
                console.log('Success getEvent');
                return response;
            }

        } catch (error) {
            console.log("Error during getEvent!");
            console.error(error);
            return false;
        }
    }

    async putEvent(eventToEdit) {
        try {
            const response = await axios.put(
                `${this.baseUrl}/api/events/${eventToEdit.id}`,
                {
                    group_id: eventToEdit.group_id,
                    city: eventToEdit.city,
                    country: eventToEdit.country,
                    description: eventToEdit.description,
                    house_nr: eventToEdit.house_nr,
                    street: eventToEdit.street,
                    time: eventToEdit.time,
                    title: eventToEdit.title
                },
                {
                    headers: [
                        { key: "Access-Control-Allow-Credentials", value: "true" },
                        { key: "Access-Control-Allow-Origin", value: "*" },
                        { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
                        { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                    ],
                }
            );

            console.log("response in putEvent:");
            console.log(response);

            if (response.status === 200) { // response - object, eg { status: 200, message: 'OK' }
                console.log('Success putEvent');
                return response;
            }

        } catch (error) {
            console.log("Error during putEvent!");
            console.error(error);
            return false;
        }
    }

    async getAllGroups() {
        try {
            // ping /api/groups and get all groups
            let response = await axios.get(`${this.baseUrl}/api/groups`);
            console.log(response)
            return response.data;
        } catch (error) {
            return false;
        }
    }

}


export const GeckoService = new geckoService();