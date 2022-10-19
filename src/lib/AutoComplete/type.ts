import React from "react"

export interface AutoCompleteProps {
    options:OptionProps[]
    placeholder?:string
    debounceDelay?:number
    dropdownClassName?:string
    notFoundContent?:string | React.ReactNode
    value?:string
    onChange?:(value:string)=>any
    onSelect?:(selectValue:string,option:OptionProps)=>any
    highLightClassName?:string
}

export interface OptionProps {
    label:any
    value:string
}

export type Debounce = <T extends (...args:any[])=>any>(
    fn:T,
    delayTime?:number
)=>(...args:Parameters<T>)=>void