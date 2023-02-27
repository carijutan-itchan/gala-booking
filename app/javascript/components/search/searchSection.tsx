import React, { FC, ReactNode } from "react";
// @ts-ignore
import bgImg from "../../../assets/images/bg_section1.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocationDot, faHouse } from '@fortawesome/free-solid-svg-icons'
import SearchField from "./searchField";
// import imagePng from "images/hero-right2.png";
// import HeroSearchForm, {
//   SearchTab,
// } from "components/HeroSearchForm/HeroSearchForm";

// export interface SectionHeroArchivePageProps {
//   className?: string;
//   listingType?: ReactNode;
//   currentPage: "Stay" | "Experiences" | "Rental car";
//   currentTab: SearchTab;
// }

const SearchSection: FC = () => {
  return (
    <div
      className={`nc-SectionHeroArchivePage flex flex-col relative pt-10 pb-24 lg:pb-28 lg:pt-16`}
      data-nc-id="SectionHeroArchivePage"
    >
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="basis-1/2">
            <h2 className="font-medium text-8xl md:text-5xl xl:text-7xl leading-[110%] text-stone-900" id="country-id">
              Tokyo, Japan
            </h2>
            <div className="flex items-center text-base md:text-lg text-neutral-500 dark:text-neutral-400 pt-10">
              <FontAwesomeIcon icon={faMapLocationDot} />
              <span className="ml-2.5">Jappan </span>
              <span className="mx-5" />
              <FontAwesomeIcon icon={faHouse} />
              <span className="ml-2.5" />
              <span>112 properties</span>
            </div>
          </div>
          <div className="basis-1/2">
            <div className="flex-grow">
              <img className="w-full" src={bgImg} alt="hero" />
            </div>
          </div>
        </div>
        <div className="flow-root w-full">
          <div className="z-10 mb-12 lg:mb-0 lg:-mt-40 w-full">
            <SearchField />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
