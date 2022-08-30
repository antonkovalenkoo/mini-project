import { InputHTMLAttributes } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface ICommonInputProps extends InputHTMLAttributes<HTMLInputElement> {
  prefixIcon?: IconDefinition;
  postfixIcon?: IconDefinition;
}