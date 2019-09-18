import FETCH from '../../lib/FETCH';

export const news = async () => {
  const response = await FETCH({
    method: 'GET',
    data: {
      apiName: 'headlineNews',
      apiVersion: '1.0',
    },
  });

  return response;
};

export const headlineNews = async () => {
  const response = await FETCH('http://localhost:8080/api/v1/news/headline-news');
  return response;
};
