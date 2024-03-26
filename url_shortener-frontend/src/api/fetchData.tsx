import axios from 'axios';
import data from '../data/api.json'

const baseUrl = data.baseUrl;

export const createSURL = (URLSItem: any, back_half: any, needsQR: any) => axios.post(baseUrl + "/" + back_half + "/" + needsQR, URLSItem);
export const checkBackHalf = (back_half: any) => axios.post(baseUrl + "/" + back_half);
