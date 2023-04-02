import { GenericService } from "./GenericService";

class LocationService extends GenericService {
  constructor() {
    super("/location");
  }

  public async fetchAll() {
    return this.http.get("");
  }

  public async fetchById(id: string) {
    return this.http.get(`/${id}`);
  }
}

export default new LocationService();
