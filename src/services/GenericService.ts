import axios, { AxiosInstance } from "axios";

export class GenericService {
  protected http: AxiosInstance;

  constructor(relativePath: string) {
    const baseURL = `https://rickandmortyapi.com/api${relativePath}`;
    this.http = axios.create({
      baseURL,
    });
  }
}
