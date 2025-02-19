import { makeRequestUnsecure } from "@/config/makeRequest";
class ItemsService {
  getAllItems() {
    return makeRequestUnsecure(`items`, {
      method: "GET",
    });
  }

  addItem(item) {
    return makeRequestUnsecure(`items`, {
      method: "POST",
      body: item,
    });
  }
}

const service = new ItemsService();
export { service as itemsService };
