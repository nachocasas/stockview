import axios from 'axios';
export const FETCH_QUOTE = 'FETCH_QUOTE';
export const UPDATE_QUOTE = 'UPDATE_QUOTE';
export const REMOVE_QUOTE = 'REMOVE_QUOTE';
export const SET_LOADING = 'SET_LOADING';

const API_KEY = '8Q0D7JFV40RJL5CX';
const API_URL = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&interval=1min&apikey=${API_KEY}`;

export function fetchQuote(term){
    const URL = `${API_URL}&symbol=${term}`
    const requestPromise = axios.get(URL);

    return {
        type: FETCH_QUOTE,
        payload: requestPromise
    }
}

export function updateQuote(term){
    const URL = `${API_URL}&symbol=${term}`
    const requestPromise = axios.get(URL);

    return {
        type: UPDATE_QUOTE,
        payload: requestPromise
    }
}


export function removeQuote(symbol){
    
    return {
        type: REMOVE_QUOTE,
        payload: symbol
    }
}
