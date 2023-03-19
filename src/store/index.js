import {
    fetchNewsRequest,
    fetchNewsSuccess,
    fetchNewsFailure,
} from './ActionCreators';

import  newsdata from '../data/news.json';


export const fetchNews = () => async (dispatch) => {
    try {
        dispatch(fetchNewsRequest());
        //   const response = await fetch('http://apiurl:4545/api/getNews');
        // const response = require('./test/data/news.json')
        // const data = response;
        console.log("data has been captured from API, result:",newsdata)
        dispatch(fetchNewsSuccess(newsdata['news']));
    } catch (error) {
        console.log("🚀 ~ file: Index.js:16 ~ fetchNews ~ error:", error)
        dispatch(fetchNewsFailure(error.message));        
    }
};
