import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  AxiosInstance,
} from 'axios';
import Vue from 'vue';
import { CommonResponse } from '@/api/response';
const vm = new Vue();

class HttpRequest {
  private baseUrl: string;
  public constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }
  public getInsideConfig() {
    const config = {
      baseURL: this.baseUrl,
      headers: {},
    };
    return config;
  }
  public interceptors(instance: AxiosInstance) {
    // 请求拦截
    instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      },
    );
    // 响应拦截
    instance.interceptors.response.use(
      (res: AxiosResponse) => {
        const data: CommonResponse = res.data;
        const SUCCESS = 200;

        if (data.code !== SUCCESS) {
          const h = vm.$createElement;
          if (data.msg) {
            const arr: any[] = data.msg.split('\n').map((item: string) =>
              h('div', {}, item),
            );
            const node = h('div', {}, arr);
            vm.$message({
              message: node,
              type: 'error',
              showClose: true,
            });
          }
        }
        return res;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      },
    );
  }
  public request<T = CommonResponse>(options: AxiosRequestConfig): Promise<T> {
    const instance: AxiosInstance = axios.create();
    options = Object.assign(this.getInsideConfig(), options);
    this.interceptors(instance);

    return instance(options).then((res: AxiosResponse) => res.data as T);
  }
}

export default HttpRequest;
