export interface Response<D, M, E> {
  data?: D;
  meta?: M;
  error?: E;
}


export class ResponseBuilder {
  data: any;
  meta: object | undefined | null;
  error: object | undefined;

  constructor(data?: any, meta?: object | null, error?: object) {
    if (data) this.data = data;
    if (meta) this.meta = meta;
    if (error) this.error = error;
  }
}
