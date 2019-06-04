import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { code } from '@/config';
// 接口前缀
const BASE_URL = 'http://localhost:8888/api/v1';
// const BASE_URL = '/api/v1';

// axios 配置实例
const getAxiosInstance = (): AxiosInstance => {
  const instance: AxiosInstance = Axios.create({
    baseURL: `${BASE_URL}`
  });
  // instance.interceptors.request.use((config) => ({
  //   // withCredentials: true,
  //   ...config,
  //   params: {
  //     // 此处注意，你的`params`应该是个对象，不能是其他数据类型
  //     ...(config.params || {}),
  //     _: +new Date()
  //   }
  // }));
  instance.interceptors.request.use(
    axiosConfig => {
      // console.log(axiosConfig)
      axiosConfig.withCredentials = true
      return axiosConfig
    }
  )
  // instance.interceptors.request.use((config) => {
  //   config.withCredentials = true
  //   let obj = {
  //     ...config,
  //     params: {
  //       // 此处注意，你的`params`应该是个对象，不能是其他数据类型
  //       ...(config.params || {}),
  //       _: +new Date()
  //     }
  //   }
  //   return obj
  // });

  instance.interceptors.response.use(
    (response) => {
      // console.log(response)
      if (response && response.data) {
        return Promise.resolve(response);
      } else {
        return Promise.reject('response 不存在');
      }
    },
    (error) => {
      console.log('-- error --');
      console.log(error);
      console.log('-- error --');
      return Promise.resolve({
        data: {
          code: code.failed,
          message: typeof error === 'string' ? error : error.message
        }
      });
    }
  );
  return instance;
};

// 基本返回数据格式
interface BaseResponse<T> {
  code: number;
  data: any[];
  message?: string;
}

// 基本 Ajax 格式
interface BaseAjax {
  get: <T>(url: string, config?: object) => Promise<BaseResponse<T>>;
  delete: <T>(url: string, config?: object) => Promise<BaseResponse<T>>;
  head: <T>(url: string, config?: object) => Promise<BaseResponse<T>>;
  options: <T>(url: string, config?: object) => Promise<BaseResponse<T>>;
  post: <T>(url: string, data?: object, config?: object) => Promise<BaseResponse<T>>;
  put: <T>(url: string, data?: object, config?: object) => Promise<BaseResponse<T>>;
  patch: <T>(url: string, data?: object, config?: object) => Promise<BaseResponse<T>>;
}

// 获取一个 Ajax 实例
const GetAxios = () => {
  const instance: AxiosInstance = getAxiosInstance();
  const request = <T>(config: AxiosRequestConfig): Promise<BaseResponse<T>> => {
    return new Promise((resolve, reject) => {
      instance.request<BaseResponse<T>>(config).then((data) => {
        const __data = data.data;
        // if (__data.code === code.success) {
        //   resolve(__data);
        // } else {
        //   reject(__data);
        // }
        // 这里为什么不管成功与否否返回呢？因为有很多地方需要处理非200的情况，不同页面处理方式不一定一样呢，所以这些交给具体接口来单独处理吧
        resolve(__data);
      });
    });
  };

  // Ajax 实体
  const Ajax: BaseAjax = {
    get <T>(url: string, config: object = {}): Promise<BaseResponse<T>> {
      return request<T>(
        Object.assign({}, config, { method: 'GET', url })
      );
    },
    delete <T>(url: string, config: object = {}): Promise<BaseResponse<T>> {
      return request<T>(
        Object.assign({}, config, { method: 'DELETE', url })
      );
    },
    head <T>(url: string, config: object = {}): Promise<BaseResponse<T>> {
      return request<T>(
        Object.assign({}, config, { method: 'HEAD', url })
      );
    },
    options <T>(url: string, config: object = {}): Promise<BaseResponse<T>> {
      return request<T>(
        Object.assign({}, config, { method: 'OPTIONS', url })
      );
    },
    post <T>(url: string, data: object = {}, config: object = {}): Promise<BaseResponse<T>> {
      return request<T>(
        Object.assign({}, config, { method: 'POST', url, data })
      );
    },
    put <T>(url: string, data: object = {}, config: object = {}): Promise<BaseResponse<T>> {
      return request<T>(
        Object.assign({}, config, { method: 'PUT', url, data })
      );
    },
    patch <T>(url: string, data: object = {}, config: object = {}): Promise<BaseResponse<T>> {
      return request<T>(
        Object.assign({}, config, { method: 'PATCH', url, data })
      );
    }
  };

  return Ajax;
};

export const Ajax: BaseAjax = GetAxios();

export default GetAxios;