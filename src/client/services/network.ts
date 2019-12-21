import axios from 'axios';


const DEFAULT_ERR_MSG = 'Something went wrong';


const get = (url: string): Promise<object | null> => axios.get(url)
  .then((res) => res)
  .catch(() => {
    throw new Error(DEFAULT_ERR_MSG);
  });

const post = (url: string, data: object): Promise<object | null> => axios({
  method: 'POST',
  url,
  data,
})
  .then((res) => res)
  .catch(() => {
    throw new Error(DEFAULT_ERR_MSG);
  });


const http = {
  get,
  post,
};

export default http;
