import axios from '../libs/axios.request';
import qs from 'qs';
import { CommonResponse } from './response';

/**
 * @description post请求方式
 * @param {String} url 请求地址
 * @param {Object} data 请求数据
 * @param {String} type content-type
 */
export const httpsPost = <T = CommonResponse>(
  url: string,
  data = {},
  type = 'json',
) => {
  const headers: any = {
    'Content-Type': 'application/json',
  };

  if (type === 'form') {
    headers['Content-Type'] = 'application/x-www-form-urlencoded';
    data = qs.stringify(data);
  }
  return axios.request<T>({
    url,
    data,
    method: 'post',
    headers,
  });
};

export const httpsGet = <T = CommonResponse>(url: string, params = {}) => {
  return axios.request<T>({
    url,
    method: 'get',
    params,
  });
};
