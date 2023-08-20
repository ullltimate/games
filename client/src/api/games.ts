import axios from "axios";
import { urlAPI } from "./url";

export const getGames = async (setGames: any) => {
    try {
        const response = await axios.get(`${urlAPI}/games`);
        setGames(response.data);
    } catch (error: any) {
        console.log(error.response.data.message)
    }
}