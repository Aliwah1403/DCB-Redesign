// Dependencies: pnpm install react-phone-number-input lucide-react

"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ChevronDown, Phone } from "lucide-react";
import React, { forwardRef, useState } from "react";
import * as RPNInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";

export default function PhoneNumberInput() {
  const [value, setValue] = useState("");

  return (
    <div className="space-y-2" dir="ltr">
      <Label htmlFor="input-46">Phone number</Label>
      <RPNInput.default
        className="flex rounded-lg shadow-sm shadow-black/5"
        international
        flagComponent={FlagComponent}
        countrySelectComponent={CountrySelect}
        defaultCountry="KE"
        inputComponent={PhoneInput}
        id="input-46"
        placeholder="Enter phone number"
        value={value}
        onChange={(newValue) => setValue(newValue ?? "")}
      />
    </div>
  );
}

const PhoneInput = forwardRef(({ className, ...props }, ref) => {
  return (
    <Input
      className={cn(
        "-ms-px rounded-s-none shadow-none focus-visible:z-10",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

PhoneInput.displayName = "PhoneInput";

const CountrySelect = ({ disabled, value, onChange, options }) => {
  const handleSelect = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="relative inline-flex items-center self-stretch rounded-s-lg border border-input bg-background py-2 pe-2 ps-3 text-muted-foreground transition-shadow focus-within:z-10 focus-within:border-ring focus-within:outline-none focus-within:ring-[3px] focus-within:ring-ring/20 hover:bg-accent hover:text-foreground has-[:disabled]:pointer-events-none has-[:disabled]:opacity-50">
      <div className="inline-flex items-center gap-1" aria-hidden="true">
        <FlagComponent country={value} countryName={value} aria-hidden="true" />
        <span className="text-muted-foreground/80">
          <ChevronDown size={16} strokeWidth={2} aria-hidden="true" />
        </span>
      </div>
      <select
        disabled={disabled}
        value={value}
        onChange={handleSelect}
        className="absolute inset-0 text-sm opacity-0"
        aria-label="Select country"
      >
        <option key="default" value="">
          Select a country
        </option>
        {options
          .filter((x) => x.value)
          .map((option, i) => (
            <option key={option.value ?? `empty-${i}`} value={option.value}>
              {option.label}{" "}
              {option.value &&
                `+${RPNInput.getCountryCallingCode(option.value)}`}
            </option>
          ))}
      </select>
    </div>
  );
};

const FlagComponent = ({ country, countryName }) => {
  const Flag = flags[country];

  return (
    <span className="w-5 overflow-hidden rounded-sm">
      {Flag ? (
        <Flag title={countryName} />
      ) : (
        <Phone size={16} aria-hidden="true" />
      )}
    </span>
  );
};
