import React, { FC } from "react"
import ButtonPrimary from "../buttons/buttonPrimary";

const Header: FC = () => {
  return (
    <div className="nc-Header sticky top-0 w-full left-0 right-0 z-40 nc-header-bg shadow-sm backdrop-blur-2xl bg-white/60">
      <div className="nc-MainNav1 relative z-10 backdrop-filter" >
        <div className="container py-5 relative flex justify-between items-center space-x-4 xl:space-x-8">
          <div className="flex justify-start flex-grow items-center space-x-4 sm:space-x-10 2xl:space-x-14 text-neutral-700">
            <h1>Log here</h1>
            <h1>Navigation here</h1>
          </div>
          <div className="flex-shrink-0 flex items-center justify-end text-neutral-700 dark:text-neutral-100 space-x-1">
            <div className="hidden items-center xl:flex space-x-1">
              <div className="px-1" />
              <ButtonPrimary buttonName="Sign up" />
            </div>
            <div className="flex items-center xl:hidden">
              <h1>Menu bar</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header