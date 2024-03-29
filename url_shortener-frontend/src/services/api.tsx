import axios from 'axios';
import { apiKey } from '../global_variables';

const baseUrl = apiKey;

export const createSURL = (URLSItem: any, back_half: string, needsQR: boolean) => axios.post(baseUrl + "/" + back_half + "/" + needsQR, URLSItem)
export const checkBackHalf = (back_half: string) => axios.post(baseUrl + "/" + back_half);
