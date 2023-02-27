import __authors from "./_usersDummyData.json"
import { AuthorType } from "../types/authorTypes"

const DEMO_AUTHORS: AuthorType[] = __authors.map((item, index) => ({
  ...item,
  avatar: item.avatar,
}));

export { DEMO_AUTHORS };
