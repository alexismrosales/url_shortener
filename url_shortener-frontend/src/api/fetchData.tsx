import axios from 'axios';

const baseUrl = apikey;

export const createSURL = (URLSItem: any, back_half: string, needsQR: boolean) => axios.post(baseUrl + "/" + back_half + "/" + needsQR, URLSItem);
export const checkBackHalf = (back_half: string) => axios.post(baseUrl + "/" + back_half);
