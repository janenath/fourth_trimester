export const FETCH_ARTICLES_BEGIN   = 'FETCH_ARTICLES_BEGIN';
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLES_FAILURE = 'FETCH_ARTICLES_FAILURE';

export const fetchArticlesBegin = () => ({
  type: FETCH_ARTICLES_BEGIN
});

export const fetchArticlesSuccess = Articles => ({
  type: FETCH_ARTICLES_SUCCESS,
  payload: { Articles }
});

export const fetchArticlesFailure = error => ({
  type: FETCH_ARTICLES_FAILURE,
  payload: { error }
});

