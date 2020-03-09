import axios, { AxiosRequestConfig } from 'axios';
import { CommonError } from '../../../../src/server/utils/errors';
import { Response } from '../../../../src/server/utils/responseBuilder';


function get<Data, Meta>(url: string): Promise<Response<Data, Meta, CommonError>> {
  return axios.get(url)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
}

function post<Payload, Data>(url: string, payload?: Payload): Promise<Response<Data, {}, CommonError>> {
  const config: AxiosRequestConfig = {
    method: 'POST',
    url,
    data: payload,
  };

  return axios(config)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
}

function del<Data>(url: string): Promise<Response<Data, {}, CommonError>> {
  const config: AxiosRequestConfig = {
    method: 'DELETE',
    url,
  };

  return axios(config)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
}

const http = {
  get,
  post,
  delete: del,
};

export default http;
