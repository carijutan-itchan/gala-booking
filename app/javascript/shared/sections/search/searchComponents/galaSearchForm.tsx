import React, { useEffect, useState } from "react";
import LocationInput from "./LocationInput";
// import GuestsInput, { GuestsInputProps } from "./GuestsInput";
import { FocusedInputShape } from "react-dates";
import GalaDatePicker from "./galaDatepickerForm";
import ButtonPrimary from "../../../buttons/buttonPrimary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import { FC } from "react";

export interface DateRage {
  startDate: moment.Moment | null;
  endDate: moment.Moment | null;
}

export interface StaySearchFormProps {
  haveDefaultValue?: boolean;
}

// DEFAULT DATA FOR ARCHIVE PAGE
const defaultLocationValue = "Tokyo, Jappan";
const defaultDateRange = {
  startDate: moment("2021-08-08"),
  endDate: moment("2021-09-09"),
};
// const defaultGuestValue: GuestsInputProps["defaultValue"] = {
//   guestAdults: 2,
//   guestChildren: 2,
//   guestInfants: 1,
// };

const GalaSearchForm: FC<StaySearchFormProps> = ({
  haveDefaultValue = false,
}) => {
  const [dateRangeValue, setDateRangeValue] = useState<DateRage>({
    startDate: null,
    endDate: null,
  });
  const [locationInputValue, setLocationInputValue] = useState("");
  const [guestValue, setGuestValue] = useState({});

  const [dateFocused, setDateFocused] = useState<FocusedInputShape | null>(
    null
  );

  //
  useEffect(() => {
    if (haveDefaultValue) {
      setDateRangeValue(defaultDateRange);
      setLocationInputValue(defaultLocationValue);
      // setGuestValue(defaultGuestValue);
    }
  }, []);
  //

  const renderForm = () => {
    return (
      <form className="w-full relative mt-8 flex rounded-full shadow-xl dark:shadow-2xl bg-white">
        <LocationInput
          defaultValue={locationInputValue}
          onChange={(e) => setLocationInputValue(e)}
          onInputDone={() => setDateFocused("startDate")}
        />
        <GalaDatePicker
          defaultValue={dateRangeValue}
          defaultFocus={dateFocused}
          onFocusChange={(focus) => setDateFocused(focus)}
          onChange={(data) => setDateRangeValue(data)}
        />
        {/* <GuestsInput
          defaultValue={guestValue}
          onChange={(data) => setGuestValue(data)}
        /> */}
        {/* BUTTON SUBMIT OF FORM */}
        <div className="px-4 py-4 lg:py-0">
          <button type="button" className="h-14 md:h-16 w-full md:w-16 rounded-full bg-indigo-600 hover:bg-indigo-700 flex items-center justify-center text-neutral-50 focus:outline-none">
            <FontAwesomeIcon icon={faSearch} size="lg" />
          </button>
        </div>
      </form>
    );
  };

  return renderForm();
};

export default GalaSearchForm;
