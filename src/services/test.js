import { makeRequest } from "../config/makeRequest";
class TestService {
  getAllPosts() {
    return makeRequest(`posts`, {
      method: "GET",
    });
  }
}

const service = new TestService();
export { service as testService };
