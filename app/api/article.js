import FETCH from '../lib/FETCH';
import { production } from '../../config/index';

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

export const fetchArticle = async () => {
  const response = await FETCH(production ? 'http://http://128.199.156.110:8080/article' : 'http://localhost:8080/api/v1/article');
  // console.log(JSON.stringify(response))
  return response;
};
