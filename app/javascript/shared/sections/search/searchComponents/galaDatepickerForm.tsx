import React, { useEffect, useState } from "react";
import 'react-dates/initialize';
import {
  AnchorDirectionShape,
  DateRangePicker,
  FocusedInputShape,
} from "react-dates";
import { DateRage } from "./galaSearchForm";
import { FC } from "react";
import ClearDataButton from "./ClearDataButton";
import useWindowSize from "../../../../hooks/useWindowResize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";

type Fields = "checkIn" | "checkOut";

export interface StayDatesRangeInputProps {
  defaultValue: DateRage;
  defaultFocus?: FocusedInputShape | null;
  onChange?: (data: DateRage) => void;
  onFocusChange?: (focus: FocusedInputShape | null) => void;
  fieldClassName?: string;
  wrapClassName?: string;
  numberOfMonths?: number;
  anchorDirection?: AnchorDirectionShape;
}

const GalaDatePicker: FC<StayDatesRangeInputProps> = ({
  defaultValue,
  onChange,
  defaultFocus = null,
  onFocusChange,
  fieldClassName = "py-3 px-4 md: py-4 md:px-7 xl:py-6 xl:px-10",
  wrapClassName = "divide-y divide-neutral-200 lg:divide-y-0 md:border-l md:border-r border-neutral-200 lg:border-none",
  numberOfMonths,
  anchorDirection,
}) => {
  const [focusedInput, setFocusedInput] = useState(defaultFocus);
  const [stateDate, setStateDate] = useState(defaultValue);

  const windowSize = useWindowSize();

  useEffect(() => {
    setStateDate(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    setFocusedInput(defaultFocus);
  }, [defaultFocus]);

  useEffect(() => {
    if (onChange) {
      onChange(stateDate);
    }
  }, [stateDate]);

  const handleClearData = (field: Fields) => {
    switch (field) {
      case "checkIn": {
        return setStateDate((date) => ({ ...date, startDate: null }));
      }
      case "checkOut": {
        return setStateDate((date) => ({ ...date, endDate: null }));
      }

      default:
        break;
    }
  };

  const handleDateFocusChange = (focus: FocusedInputShape | null) => {
    setFocusedInput(focus);
    onFocusChange && onFocusChange(focus);
  };

  const renderInputCheckInDate = () => {
    const focused = focusedInput === "startDate";
    return (
      <div
        className={`relative flex flex-1 ${fieldClassName} flex-shrink-0 items-center space-x-3 cursor-pointer ${focused ? "shadow-2xl rounded-full" : " "
          }`}
        onClick={() => handleDateFocusChange("startDate")}
      >
        <div className="text-neutral-300 dark:text-neutral-400 text-2xl">
          <FontAwesomeIcon icon={faCalendar} />
        </div>
        <div className="flex-grow">
          <span className="block xl:text-lg font-semibold">
            {stateDate.startDate
              ? stateDate.startDate.format("DD MMM")
              : "Check in"}
          </span>
          <span className="block mt-1 text-sm text-neutral-400 leading-none font-light">
            {stateDate.startDate ? "Check in" : `Add date`}
          </span>
          {stateDate.startDate && focused && (
            <ClearDataButton onClick={() => handleClearData("checkIn")} />
          )}
        </div>
      </div>
    );
  };

  const renderInputCheckOutDate = () => {
    const focused = focusedInput === "endDate";
    return (
      <div
        className={`relative flex flex-1 ${fieldClassName} flex-shrink-0 items-center space-x-3 cursor-pointer ${focused ? "shadow-2xl rounded-full" : " "
          }`}
        onClick={() => handleDateFocusChange("endDate")}
      >
        <div className="text-neutral-300 dark:text-neutral-400 text-2xl">
          <FontAwesomeIcon icon={faCalendar} />
        </div>
        <div className="flex-grow">
          <span className="block xl:text-lg font-semibold">
            {stateDate.endDate
              ? stateDate.endDate.format("DD MMM")
              : "Check out"}
          </span>
          <span className="block mt-1 text-sm text-neutral-400 leading-none font-light">
            {stateDate.endDate ? "Check out" : `Add date`}
          </span>
          {stateDate.endDate && focused && (
            <ClearDataButton onClick={() => handleClearData("checkOut")} />
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="StayDatesRangeInput relative flex z-10 [ lg:gala-flex-2 ] ">
      <div className="flex absolute inset-x-0 inset-y-0">
        <DateRangePicker
          startDate={stateDate.startDate}
          endDate={stateDate.endDate}
          focusedInput={focusedInput}
          onDatesChange={(date) => setStateDate(date)}
          onFocusChange={handleDateFocusChange}
          numberOfMonths={
            numberOfMonths || (windowSize.width <= 1024 ? 1 : undefined)
          }
          startDateId={"startDateId"}
          endDateId={"endDateId"}
          daySize={windowSize.width > 500 ? 56 : undefined}
          orientation={"horizontal"}
          showClearDates
          noBorder
          keepOpenOnDateSelect
          hideKeyboardShortcutsPanel
          anchorDirection={anchorDirection}
        />
      </div>

      <div
        className={`flex flex-col lg:flex-row lg:items-center w-full flex-shrink-0 relative  ${wrapClassName}`}
      >
        {renderInputCheckInDate()}

        {renderInputCheckOutDate()}
      </div>
    </div>
  );
};

export default GalaDatePicker;
