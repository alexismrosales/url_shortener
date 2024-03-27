import axios from 'axios';

const baseUrl = apikey;

export const createSURL = (URLSItem: any, back_half: any, needsQR: any) => axios.post(baseUrl + "/" + back_half + "/" + needsQR, URLSItem);
export const checkBackHalf = (back_half: any) => axios.post(baseUrl + "/" + back_half);
