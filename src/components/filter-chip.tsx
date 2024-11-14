import { X } from "@phosphor-icons/react";
import { filterOptions } from "../data";

export function FilterChip({
	id,
	value,
	onClear,
	onValueClick,
}: {
	id: string;
	value: string[];
	onClear: () => void;
	onValueClick: () => void;
}) {
	const filterOption = filterOptions[id];
	const IconEl = filterOption.icon;

	return (
		<div className="flex h-9 border-black border-2 rounded isolate divide-x divide-black">
			<div className="flex items-center gap-1 p-2 rounded-tl rounded-bl">
				<IconEl weight="bold" />
				<span className="font-medium">{filterOption.label}</span>
			</div>
			<div className="flex items-center gap-1 px-2">
				<span className="text-black/60">includes</span>
			</div>
			<button
				type="button"
				id={`js-${id}-chip`}
				className="appearance-none flex items-center gap-1 p-2 focus:outline-none focus:ring focus:ring-black cursor-pointer focus:z-10 hover:bg-black/5"
				onClick={() => {
					onValueClick();
				}}
			>
				<span className="">{value.join(", ")}</span>
			</button>
			<button
				type="button"
				onClick={() => {
					onClear();
				}}
				className="flex items-center gap-1 p-1.5 rounded-tr rounded-br focus:outline-none focus:ring focus:ring-black focus:z-10 hover:bg-black/5"
			>
				<X weight="bold" size={16} />
			</button>
		</div>
	);
}
