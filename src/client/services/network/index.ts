import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';


function get<ResType>(url: string): Promise<AxiosResponse<ResType>> {
  return axios.get(url)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
}

function post<Payload, Response>(url: string, payload?: Payload): Promise<AxiosResponse<Response>> {
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


function del<Response>(url: string): Promise<AxiosResponse<Response>> {
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
