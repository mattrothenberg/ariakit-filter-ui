import type { Icon } from "@phosphor-icons/react";

export interface Filter {
	value: string[];
	id: string;
}

export interface FilterOption {
	id: string;
	icon: Icon;
	label: string;
	choices: string[];
	combobox?: boolean;
}
