import { atomWithImmer } from "jotai-immer";
import type { Filter } from "./types";

export const filtersAtom = atomWithImmer<Filter[]>([]);
