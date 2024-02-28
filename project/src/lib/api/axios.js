import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL; // Next 사용중인 프로젝트

function getAxiosInstance() {
    const instance = axios.create({
        baseURL: BASE_URL,
        headers : {'Authorization' : "bearer "+localStorage.getItem('authToken')}
      });

    return instance;
}


const instance = axios.create({
  baseURL: BASE_URL,
  headers : {}
});

instance.interceptors.request.use(
  function (config) {
    // request처리 로직 (header 등)
    return config;
  },
  function (error) {
    // 요청 오류시 처리 로직
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    // response처리 로직
    return response;
  },
  function (error) {
    // error처리 로직
    return Promise.reject(error);
  }
);

export default instance;