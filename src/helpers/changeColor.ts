import { variablesAlias } from "../models/enums";
import { rootVariables } from "../models/types";

export const changeColor = (name: rootVariables, newColor: string | null) => {
  const root: HTMLElement | null = document.querySelector(':root');
  if (!root) {
    throw new Error(`Can't select the root element`)
  }

  root.style.setProperty(variablesAlias[name], newColor);
}