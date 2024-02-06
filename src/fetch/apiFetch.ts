import axios, {AxiosProgressEvent} from 'axios';

export interface ApiConfigTypes {
  params?: {[index: string]: string | number | boolean};
  body?: {[index: string]: any};
  uploadProgress?: (progress: number) => void;
  downloadProgress?: (progress: number) => void;
  getHeader?: boolean;
  responseType?: 'blob';
  headers?: {[index: string]: string};
}

export type BaseResponseType<T = unknown> = {
  status: 'success' | 'fail' | 'loading' | 'init';
  data: null | T;
  errorCode: number;
  errorMessage: string;
  serverDate: string | Date;
};
interface InitResponseType extends BaseResponseType {
  status: 'init';
  data: null;
}
interface LoadResponseType extends BaseResponseType {
  status: 'loading';
  data: null;
}
interface ErrorResponseType extends BaseResponseType {
  status: 'fail';
  data: null;
}
interface SuccessResponseType<T> extends BaseResponseType<T> {
  status: 'success';
  data: T;
}

export type ApiResponseType<T> = InitResponseType | LoadResponseType | ErrorResponseType | SuccessResponseType<T>;


export async function apiFetch<T = any>(url: string, method: string, config?: ApiConfigTypes): Promise<ApiResponseType<T>> {
  try {
    let headers = config?.headers ? config?.headers : {'Content-Type': 'application/json'};
    headers = {
      ...headers,
    };
    const response = await axios<T>({
      url,
      method,
      params: config?.params,
      headers: headers,
      responseType: config?.responseType,
      onUploadProgress: function (progressEvent: AxiosProgressEvent) {
        const percentComplete = Math.floor((progressEvent.loaded / (progressEvent?.total ?? 1)) * 100);
        if (config?.uploadProgress) config.uploadProgress(percentComplete);
      },
      onDownloadProgress: function (progressEvent: AxiosProgressEvent) {
        const percentComplete = Math.floor((progressEvent.loaded / (progressEvent?.total ?? 1)) * 100);
        if (config?.downloadProgress) config.downloadProgress(percentComplete);
      },
      data: config?.body,
    });

    return {
      status: 'success',
      data: response.data,
      errorCode: 0,
      errorMessage: '',
      serverDate: new Date(),
    };
  } catch (error) {
    const errorRes: ErrorResponseType = {
      status: 'fail',
      data: null,
      errorCode: 0,
      errorMessage: '',
      serverDate: new Date(),
    };
    if (axios.isAxiosError(error)) {
      errorRes.errorCode = error.response ? error.response.status : 0;
      errorRes.errorMessage = error.response ? error.response.data : '';
    }
    return errorRes;
  }
}
