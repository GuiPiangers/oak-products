import { ResponseError } from "@/controllers/products/ProductsController"

export class Validate {
  static isError<T>(data: T | ResponseError): data is ResponseError {
    if ((data as ResponseError)?.type === "error") return true
    return false
  }

  static isOk<T>(data: T | ResponseError): data is T {
    if ((data as ResponseError)?.type !== "error") return false
    return true
  }
}
