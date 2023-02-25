import React, { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { DateRage } from "./galaSearchForm";
import { FC } from "react";
import ClearDataButton from "./ClearDataButton";
// import useWindowSize from "hooks/useWindowResize";

type Fields = "checkIn" | "checkOut";

export interface StayDatesRangeInputProps {
  defaultValue: DateRage;
  defaultFocus?: null;
  onChange?: (data: DateRage) => void;
  onFocusChange?: (focus: null) => void;
  fieldClassName?: string;
  wrapClassName?: string;
  numberOfMonths?: number;
  // anchorDirection?: AnchorDirectionShape;
}

const GalaDatePicker: FC<StayDatesRangeInputProps> = ({
  defaultValue,
  // onChange,
  defaultFocus = null,
  onFocusChange,
  fieldClassName = "[ nc-hero-field-padding ]",
  wrapClassName = "divide-y divide-neutral-200 lg:divide-y-0 md:border-l md:border-r border-neutral-200 lg:border-none",
  numberOfMonths,
  // anchorDirection,
}) => {
  const [focusedInput, setFocusedInput] = useState(defaultFocus);
  const [stateDate, setStateDate] = useState(defaultValue);

  // const windowSize = useWindowSize();

  // useEffect(() => {
  //   setStateDate(defaultValue);
  // }, [defaultValue]);

  useEffect(() => {
    setFocusedInput(defaultFocus);
  }, [defaultFocus]);

  // useEffect(() => {
  //   if (onChange) {
  //     onChange(stateDate);
  //   }
  // }, [stateDate]);

  const handleClearData = (field: Fields) => {
    switch (field) {
      case "checkIn": {
        // return setStateDate((date) => ({ ...date, startDate: null }));
      }
      case "checkOut": {
        // return setStateDate((date) => ({ ...date, endDate: null }));
      }

      default:
        break;
    }
  };

  // const handleDateFocusChange = (focus: FocusedInputShape | null) => {
  //   setFocusedInput(focus);
  //   onFocusChange && onFocusChange(focus);
  // };

  const renderInputCheckInDate = () => {
    const focused = focusedInput === "startDate";
    return (
      <div
        className={`relative flex flex-1 ${fieldClassName} flex-shrink-0 items-center space-x-3 cursor-pointer ${focused ? "shadow-2xl rounded-full dark:bg-neutral-800" : " "
          }`}
      // onClick={() => handleDateFocusChange("startDate")}
      >
        <div className="text-neutral-300 dark:text-neutral-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="nc-icon-field"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div className="flex-grow">
          <span className="block xl:text-lg font-semibold">
            {/* {stateDate.startDate
              ? stateDate.startDate.format("DD MMM")
              : "Check in"} */}
            20 Feb
          </span>
          <span className="block mt-1 text-sm text-neutral-400 leading-none font-light">
            {/* {stateDate.startDate ? "Check in" : `Add date`} */}
            Check in
          </span>
          {/* {stateDate.startDate && focused && (
            <ClearDataButton onClick={() => handleClearData("checkIn")} />
          )} */}
        </div>
      </div>
    );
  };

  const renderInputCheckOutDate = () => {
    const focused = focusedInput === "endDate";
    return (
      <div
        className={`relative flex flex-1 ${fieldClassName} flex-shrink-0 items-center space-x-3 cursor-pointer ${focused ? "shadow-2xl rounded-full dark:bg-neutral-800" : " "
          }`}
      // onClick={() => handleDateFocusChange("endDate")}
      >
        {/* <div className="text-neutral-300 dark:text-neutral-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="nc-icon-field"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div> */}
        {/* <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
          </div>
          <input name="start" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date start" />
        </div> */}
        <div className="flex-grow">
          <span className="block xl:text-lg font-semibold">
            {/* {stateDate.endDate
              ? stateDate.endDate.format("DD MMM")
              : "Check out"}
            24 Feb */}
          </span>
          <span className="block mt-1 text-sm text-neutral-400 leading-none font-light">
            {stateDate.endDate ? "Check out" : `Add date`}
            Check out
          </span>
          {/* {stateDate.endDate && focused && (
            <ClearDataButton onClick={() => handleClearData("checkOut")} />
          )} */}
        </div>
      </div>
    );
  };

  return (
    <div date-rangepicker="true" className="relative flex-shrink-0 flex z-10 [ lg:nc-flex-2 ] ">

      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
        </div>
        <input name="start" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date start" />
      </div>
      <span className="mx-4 text-gray-500">to</span>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
        </div>
        <input name="end" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date end" />
      </div>

      {/* <div className="absolute inset-x-0 bottom-0"> */}
      {/* <ReactDatePicker
          onChange={(date) => setStateDate(date)}
        // focusSelectedMonth={focusedInput}
        /> */}
      {/* <DateRangePicker
          startDate={stateDate.startDate}
          endDate={stateDate.endDate}
          focusedInput={focusedInput}
          onDatesChange={(date) => setStateDate(date)}
          onFocusChange={handleDateFocusChange}
          numberOfMonths={
            numberOfMonths || (windowSize.width <= 1024 ? 1 : undefined)
          }
          startDateId={"nc-hero-stay-startDateId"}
          endDateId={"nc-hero-stay-endDateId"}
          daySize={windowSize.width > 500 ? 56 : undefined}
          orientation={"horizontal"}
          showClearDates
          noBorder
          keepOpenOnDateSelect
          hideKeyboardShortcutsPanel
          anchorDirection={anchorDirection}
        /> */}
      {/* </div> */}

      <div
        className={`flex flex-col lg:flex-row lg:items-center w-full flex-shrink-0 relative  ${wrapClassName}`}
      >
        {/* {renderInputCheckInDate()}

        {renderInputCheckOutDate()} */}
      </div>
    </div>
  );
};

export default GalaDatePicker;
