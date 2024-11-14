import * as Ariakit from "@ariakit/react";
import { filterOptions } from "../data";
import { useAtom } from "jotai";
import { filtersAtom } from "../state";
import { Checkbox } from "./checkbox";

export function Select({
	id,
	anchorId,
	onClose,
}: { id: string; anchorId: string; onClose: () => void }) {
	const [filters, setFilters] = useAtom(filtersAtom);
	const filterOption = filterOptions[id];

	return (
		<Ariakit.SelectProvider
			placement="bottom-start"
			defaultOpen
			value={filters.find((filter) => filter.id === id)?.value || []}
			setValue={(choices) => {
				setFilters((filters) => {
					const filter = filters.find((filter) => filter.id === id);
					if (filter) {
						if (choices.length === 0) {
							onClose();
							return filters.filter((f) => f.id !== id);
						}
						filter.value = choices;
					} else {
						filters.push({ id, value: choices });
					}
				});
			}}
			setOpen={(open) => {
				if (!open) {
					onClose();
				}
			}}
		>
			<Ariakit.SelectPopover
				gutter={8}
				portal={false}
				getAnchorRect={() => {
					return (
						document.getElementById(anchorId)?.getBoundingClientRect() ?? null
					);
				}}
				className="menu p-3"
			>
				{filterOption.choices.map((choice) => (
					<Ariakit.SelectItem
						className="menu-item"
						key={choice}
						hideOnClick={false}
						value={choice}
					>
						<Checkbox />
						{choice}
					</Ariakit.SelectItem>
				))}
			</Ariakit.SelectPopover>
		</Ariakit.SelectProvider>
	);
}
