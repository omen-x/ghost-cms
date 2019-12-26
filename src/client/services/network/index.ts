import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';


const DEFAULT_ERR_MSG = 'Something went wrong';


function get<Data>(url: string): Promise<AxiosResponse<Data>> {
  return axios.get(url)
    .then((res) => res)
    .catch(() => {
      throw new Error(DEFAULT_ERR_MSG);
    });
}

function post<Data, Payload>(url: string, payload: Payload): Promise<AxiosResponse<Data>> {
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


const http = {
  get,
  post,
};

export default http;
