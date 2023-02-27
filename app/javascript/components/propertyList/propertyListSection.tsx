import React, { FC } from "react";
import PropertyListHeading from "./propertyListComponents/propertyListHeading";
import PropertyListCard from "./propertyListComponents/propertyCard";
import { DEMO_PROPERTY_LISTINGS } from "../../data/propertyListing";
import { PropertyDataType } from "../../types/propertyDataTypes";
// import Pagination from "shared/Pagination/Pagination";
// import TabFilters from "./TabFilters";
// import Heading2 from "components/Heading/Heading2";
// import CarCard from "components/CarCard/CarCard";

export interface SectionGridFilterCardProps {
  className?: string;
  data?: PropertyDataType[];
}

const DEMO_DATA: PropertyDataType[] = DEMO_PROPERTY_LISTINGS.filter((_, i) => i < 12);

const PropertyListSection: FC<SectionGridFilterCardProps> = ({
  className = "",
  data = DEMO_DATA,
}) => {
  return (
    <div
      className={`nc-SectionGridFilterCard ${className}`}
      data-nc-id="SectionGridFilterCard"
    >
      <PropertyListHeading
        subHeading={
          <span className="block text-neutral-500 dark:text-neutral-400 mt-3">
            233 cars
            <span className="mx-2">·</span>
            Aug 12 - 18
          </span>
        }
      />

      <div className="mb-8 lg:mb-11">
        {/* <TabFilters /> */}
      </div>
      <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((property) => (
          <PropertyListCard key={property.id} data={property} />
        ))}
      </div>
      <div className="flex mt-16 justify-center items-center">
        {/* <Pagination /> */}
      </div>
    </div>
  );
};

export default PropertyListSection;
