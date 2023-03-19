import {
    FETCH_NEWS_REQUEST,
    FETCH_NEWS_SUCCESS,
    FETCH_NEWS_FAILURE,
  } from './Actiontypes';
    
  const initialState = {
    news: [],
    loading: false,
    error: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_NEWS_REQUEST:
        return { ...state, loading: true };
      case FETCH_NEWS_SUCCESS:
        return { ...state, loading: false, news: action.payload };
      case FETCH_NEWS_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default reducer;
  