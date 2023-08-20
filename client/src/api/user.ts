import axios from "axios";
import { urlAPI } from "./url";

export const addName = async (name: string) => {
    try {
        const response = await axios.post(`${urlAPI}/users/login`, {
            name
        })
        localStorage.setItem('userId', response.data._id);
        localStorage.setItem('userName', response.data.name);
    } catch (error: any) {
        console.log(error.response.data.message)
    }
}