import dummyData from "./_propertyDummyData.json"
import { DEMO_PROPERTY_CATEGORIES } from "./taxonomy"
import { DEMO_AUTHORS } from "./authors"
import { PropertyDataType } from "../types/propertyDataTypes";

const DEMO_PROPERTY_LISTINGS = dummyData.map((post, index): PropertyDataType => {
  const category = DEMO_PROPERTY_CATEGORIES.filter(
    (taxonomy) => taxonomy.id === post.listingCategoryId
  )[0];

  return {
    ...post,
    saleOff: !index ? "-20% today" : post.saleOff,
    isAds: !index ? true : post.isAds,
    author: DEMO_AUTHORS.filter((user) => user.id === post.authorId)[0],
    listingCategory: category,
  };
});

export { DEMO_PROPERTY_LISTINGS };
