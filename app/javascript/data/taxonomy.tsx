import propertyTaxonomy from "./_propertyDummyTaxonomy.json"
import { TaxonomyType } from "../types/taxonomyTypes";


export const DEMO_PROPERTY_CATEGORIES: TaxonomyType[] = propertyTaxonomy.map((item) => ({
  ...item,
  taxonomy: "category",
  listingType: "stay",
}));