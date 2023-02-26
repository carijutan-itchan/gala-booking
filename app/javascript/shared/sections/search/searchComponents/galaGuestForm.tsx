
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import GalaInputNumber from "../../../inputNumber/galaInputNumber";
import { FC } from "react";
import ClearDataButton from "./ClearDataButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faSearch } from "@fortawesome/free-solid-svg-icons";

export interface GuestsInputProps {
  defaultValue: {
    guestAdults?: number;
    guestChildren?: number;
    guestInfants?: number;
  };
  onChange?: (data: GuestsInputProps["defaultValue"]) => void;
  fieldClassName?: string;
}

const GalaGuestsInput: FC<GuestsInputProps> = ({
  defaultValue,
  onChange,
  fieldClassName = "py-3 px-4 md: py-4 md:px-7 xl:py-6 xl:px-10",
}) => {
  const [guestAdultsInputValue, setGuestAdultsInputValue] = useState(
    defaultValue.guestAdults || 0
  );
  const [guestChildrenInputValue, setGuestChildrenInputValue] = useState(
    defaultValue.guestChildren || 0
  );
  const [guestInfantsInputValue, setGuestInfantsInputValue] = useState(
    defaultValue.guestInfants || 0
  );

  useEffect(() => {
    setGuestAdultsInputValue(defaultValue.guestAdults || 0);
    setGuestChildrenInputValue(defaultValue.guestChildren || 0);
    setGuestInfantsInputValue(defaultValue.guestInfants || 0);
  }, [defaultValue]);

  useEffect(() => {
    if (onChange) {
      onChange({
        guestAdults: guestAdultsInputValue,
        guestChildren: guestChildrenInputValue,
        guestInfants: guestInfantsInputValue,
      });
    }
  }, [guestAdultsInputValue, guestChildrenInputValue, guestInfantsInputValue]);

  const totalGuests =
    guestChildrenInputValue + guestAdultsInputValue + guestInfantsInputValue;

  return (

    <Popover className="flex relative [ gala-flex-1 ]">
      {({ open }) => (
        <>
          <div className={`flex-1 flex items-center focus:outline-none cursor-pointer ${open ? "shadow-2xl rounded-full" : ""}`}>
            <Popover.Button
              className={`flex-1 flex text-left w-full flex-shrink-0 items-center ${fieldClassName} [ gala-search-field-padding ] space-x-3 focus:outline-none cursor-pointer`}
            >
              <div className="text-neutral-300 dark:text-neutral-400">
                <FontAwesomeIcon icon={faUserPlus} size="xl" />
              </div>
              <div className="flex-grow">
                <span className="block xl:text-lg font-semibold">
                  {totalGuests || ""} Guests
                </span>
                <span className="block mt-1 text-sm text-neutral-400 leading-none font-light">
                  {totalGuests ? "Guests" : "Add guests"}
                </span>
                {!!totalGuests && open && (
                  <ClearDataButton
                    onClick={() => {
                      setGuestAdultsInputValue(0);
                      setGuestChildrenInputValue(0);
                      setGuestInfantsInputValue(0);
                    }}
                  />
                )}
              </div>
            </Popover.Button>
            <div className="relative"></div>
            <div className="pr-2 xl:pr-4 justify-items-end">
              <button type="button" className="h-14 md:h-16 w-full md:w-16 rounded-full bg-indigo-600 hover:bg-indigo-700 items-center text-neutral-50 focus:outline-none">
                <FontAwesomeIcon icon={faSearch} size="lg" />
              </button>
            </div>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute right-0 z-10 w-full sm:min-w-[340px] max-w-sm bg-white top-full mt-3 py-5 sm:py-6 px-4 sm:px-8 rounded-3xl shadow-xl">
              <GalaInputNumber
                className="w-full"
                defaultValue={guestAdultsInputValue}
                onChange={(value) => setGuestAdultsInputValue(value)}
                max={10}
                min={1}
                label="Adults"
                desc="Ages 13 or above"
              />
              <GalaInputNumber
                className="w-full mt-6"
                defaultValue={guestChildrenInputValue}
                onChange={(value) => setGuestChildrenInputValue(value)}
                max={4}
                label="Children"
                desc="Ages 2–12"
              />

              <GalaInputNumber
                className="w-full mt-6"
                defaultValue={guestInfantsInputValue}
                onChange={(value) => setGuestInfantsInputValue(value)}
                max={4}
                label="Infants"
                desc="Ages 0–2"
              />
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>

  );
};

export default GalaGuestsInput;
