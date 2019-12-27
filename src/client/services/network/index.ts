import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';


const DEFAULT_ERR_MSG = 'Something went wrong';


function get<ResType>(url: string): Promise<AxiosResponse<ResType>> {
  return axios.get(url)
    .then((res) => res)
    .catch(() => {
      throw new Error(DEFAULT_ERR_MSG);
    });
}

function post<Payload, Response>(url: string, payload?: Payload): Promise<AxiosResponse<Response>> {
  const config: AxiosRequestConfig = {
    method: 'POST',
    url,
    data: payload,
  };

  return axios(config)
    .then((res) => res)
    .catch(() => {
      throw new Error(DEFAULT_ERR_MSG);
    });
}


function del<Payload, Response>(url: string, payload?: Payload): Promise<AxiosResponse<Response>> {
  const config: AxiosRequestConfig = {
    method: 'DELETE',
    url,
    data: payload,
  };

  return axios(config)
    .then((res) => res)
    .catch(() => {
      throw new Error(DEFAULT_ERR_MSG);
    });
}

const http = {
  get,
  post,
  delete: del,
};

export default http;
