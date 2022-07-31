import axios from "axios";

export const apiVisualCrossing = axios.create({
    baseURL: 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline'
});