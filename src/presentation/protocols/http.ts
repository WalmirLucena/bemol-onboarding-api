interface IHttpResponse {
  statusCode: number;
  body: any;
}

interface IHttpRequest {
  body?: any;
  params?: any;
  query?: any;
  payload?: any;
}

export { IHttpRequest, IHttpResponse };
