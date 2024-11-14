import {
	CircleDashed,
	Palette,
	Translate,
	TShirt,
} from "@phosphor-icons/react";
import type { FilterOption } from "./types";

export const filterOptions: Record<string, FilterOption> = {
	language: {
		id: "language",
		icon: Translate,
		label: "Language",
		combobox: true,
		choices: [
			"JavaScript",
			"TypeScript",
			"Python",
			"Java",
			"C++",
			"C#",
			"PHP",
			"Ruby",
			"Swift",
			"Kotlin",
			"Rust",
		],
	},
	color: {
		id: "color",
		icon: Palette,
		label: "Color",
		choices: ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"],
	},
	size: {
		id: "size",
		icon: TShirt,
		label: "Size",
		choices: ["Small", "Medium", "Large"],
	},
	status: {
		id: "status",
		icon: CircleDashed,
		label: "Status",
		choices: ["Active", "Inactive", "Pending", "Completed"],
	},
} as const;
