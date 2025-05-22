import { FILTER_ITEMS } from "../constants/index";

export type TTodo = {
  id: string;
  text: string;
  completed: boolean;
};

export type TFILTER_ITEMS = (typeof FILTER_ITEMS)[number];
