import { GenericService } from "./GenericService";

class EpisodeService extends GenericService {
  constructor() {
    super("/episode");
  }

  public async fetchAll() {
    return this.http.get("");
  }

  public async fetchById(id: string) {
    return this.http.get(`/${id}`);
  }
}

export default new EpisodeService();
