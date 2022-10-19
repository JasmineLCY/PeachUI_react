import React, { ChangeEvent, FC, useCallback, useEffect, useMemo, useState } from "react";
import { AutoCompleteProps, Debounce, OptionProps } from "./type";
import "./AutoComplete.css";

export const AutoComplete: FC<AutoCompleteProps> = (props) => {
  const {
    options,
    placeholder,
    debounceDelay,
    dropdownClassName,
    notFoundContent,
    onChange,
    onSelect,
    highLightClassName
  } = props;
  const [inputValue, setInputValue] = useState<string>("");
  const [poperVisible, setPoperVisible] = useState<boolean>(false);
  const [filterOptions, setFilterOptions] = useState<OptionProps[]>(options);

  const debounce: Debounce = function (fn, delayTime = 300) {
    let timer:NodeJS.Timer|null = null;
    return (...params) => {
      if(params[0]===0){
        fn(...params)
        return
      }
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      timer = setTimeout(() => {
        fn(...params);
      }, delayTime);
    };
  };

  const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value, "inputValue");
    setInputValue(e.target.value);
    setPoperVisible(true);
    onChange && onChange(e.target.value);
    filterOption(1,e.target.value, options);
  };

  const filterOption = useCallback(
    debounce((mode:number, input: string, options: OptionProps[]) => {
      const filters = options.filter((item) => item.label.includes(input));
      filters.sort((cur, next) => {
        const priorityCur:number = cur.label.split(input).length;
        const priorityNext:number = next.label.split(input).length;
        return priorityNext - priorityCur;
      });
      setFilterOptions(filters);
      console.log("filters", filters);
    }, debounceDelay),
    [options, setFilterOptions]
  );

  const highLightMatch = (str: string, input: string) => {
    if (!input) return str;
    const arr = str.split(input);
    return arr.length > 1 ? (
      <>
        {arr.map((item, index) =>
          index === arr.length - 1 ? (
            item
          ) : (
            <>
              {item}
              <span className={highLightClassName} style={{ color: "red" }}>{input}</span>
            </>
          )
        )}
      </>
    ) : (
      str
    );
  };

  const handleSelect = (option: OptionProps) => {
    console.log(option.label, option, "selectValue");
    setInputValue(option.label);
    onSelect && onSelect(option.label, option);
    setPoperVisible(false);
  };

  const handleFocus = () => {
    setPoperVisible(true);
    filterOption(0,inputValue, options);
  };

  return (
    <div className="autoComplete">
      <input
        placeholder={placeholder || "please input"}
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleFocus}
      ></input>
      <div
        hidden={!poperVisible}
        className={
          dropdownClassName
            ? dropdownClassName + " dropdownCard"
            : "dropdownCard"
        }
      >
        {filterOptions.length > 0 ? (
          filterOptions.map((item) => {
            return (
              <div
                key={item.value}
                className="optionItem"
                onClick={() => {
                  handleSelect(item);
                }}
              >
                {highLightMatch(item.label, inputValue)}
              </div>
            );
          })
        ) : (
          <div className="notFound">{notFoundContent || "not found"}</div>
        )}
      </div>
    </div>
  );
};
