export class ApiError extends Error {
    public readonly statusCode: number;
    public readonly field: string | undefined;
  
    constructor(message: string, {
        statusCode, field
    }: {statusCode?: number, field?: string} = {}) {
      super(message);

      this.statusCode = statusCode || 400;
      this.field = field;
  
      Object.setPrototypeOf(this, ApiError.prototype);
    }
  }
  