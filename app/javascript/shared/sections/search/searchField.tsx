import React, { FC, useState } from "react";
import GalaSearchForm from "./searchComponents/galaSearchForm";
// import "react-dates/initialize";
// import ExperiencesSearchForm from "./ExperiencesSearchForm";
// import StaySearchForm from "./StaySearchForm";
// import RentalCarSearchForm from "./RentalCarSearchForm";

export type SearchTab = "Stay" | "Experiences" | "Rental car";

export interface HeroSearchFormProps {
  className?: string;
  currentTab?: SearchTab;
  currentPage?: "Stay" | "Experiences" | "Rental car";
}

const HeroSearchForm: FC<HeroSearchFormProps> = ({
  className = "",
  currentTab = "Stay",
  currentPage,
}) => {
  const tabs: SearchTab[] = ["Stay", "Experiences", "Rental car"];
  const [tabActive, setTabActive] = useState<SearchTab>(currentTab);

  const renderForm = () => {
    const isArchivePage = !!currentPage && !!currentTab;
    return <GalaSearchForm haveDefaultValue={isArchivePage} />;
  };

  return (
    <div
      className={`nc-HeroSearchForm w-full max-w-6xl py-5 lg:py-0 ${className}`}
      data-nc-id="HeroSearchForm"
    >
      {renderForm()}
    </div>
  );
};

export default HeroSearchForm;
