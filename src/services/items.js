import { makeRequestUnsecure } from "@/config/makeRequest";
class ItemsService {
  getAllItems() {
    return makeRequestUnsecure(`items`, {
      method: "GET",
    });
  }
}

const service = new ItemsService();
export { service as itemsService };
