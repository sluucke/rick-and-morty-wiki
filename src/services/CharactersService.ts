import { GenericService } from "./GenericService";

class CharactersService extends GenericService {
  constructor() {
    super("/character");
  }

  public async fetchAll({
    page = 1,
    filter,
  }: {
    page?: number;
    filter?: {
      name?: string;
      status?: string;
      species?: string;
      type?: string;
      gender?: string;
    };
  }) {
    return this.http.get("", {
      params: {
        page,
        ...filter,
      },
    });
  }

  public async fetchById(id: string) {
    return this.http.get(`/${id}`);
  }
}

export default new CharactersService();
