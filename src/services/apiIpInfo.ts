import axios from "axios";

export const apiIpInfo = axios.create({
    baseURL: 'https://ipinfo.io'
});