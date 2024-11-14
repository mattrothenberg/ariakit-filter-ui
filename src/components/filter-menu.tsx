import * as Ariakit from "@ariakit/react";
import { FunnelSimple } from "@phosphor-icons/react";
import { useAtom } from "jotai";
import { filtersAtom } from "../state";
import { filterOptions } from "../data";
import { useState } from "react";
import { Select } from "./select";
import { FilterChip } from "./filter-chip";

export function FilterMenu() {
	const [activeMenuId, setActiveMenuId] = useState<string>();
	const [anchorEl, setAnchorEl] = useState<"select" | "menu">();
	const [filters, setFilters] = useAtom(filtersAtom);

	function handleSelectClose() {
		setAnchorEl(undefined);
		setActiveMenuId(undefined);
	}

	return (
		<div className="flex flex-wrap gap-3">
			{filters.map((filter) => {
				return (
					<FilterChip
						key={filter.id}
						id={filter.id}
						value={filter.value}
						onValueClick={() => {
							setAnchorEl("select");
							setActiveMenuId(filter.id);
						}}
						onClear={() => {
							setFilters((filters) => {
								return filters.filter((f) => f.id !== filter.id);
							});
						}}
					/>
				);
			})}
			<Ariakit.MenuProvider>
				<Ariakit.MenuButton
					id="js-menu-filter"
					className="border-black h-9 focus:outline-none focus:ring-black/20 focus:ring border-2 rounded flex items-center gap-2 py-1 px-2.5 hover:bg-black/5 transform active:translate-y-px"
				>
					<FunnelSimple size={20} weight="bold" />
					{filters.length > 0 ? null : (
						<span className="font-medium">Filters</span>
					)}
				</Ariakit.MenuButton>
				<Ariakit.Menu gutter={8} className="menu p-3">
					{Object.entries(filterOptions).map(([id, filter]) => {
						const IconEl = filter.icon;
						return (
							<Ariakit.MenuItem
								onClick={() => {
									if (filters.find((f) => f.id === id)) {
										setAnchorEl("select");
									} else {
										setAnchorEl("menu");
									}

									setActiveMenuId(id);
								}}
								className="menu-item"
								key={id}
							>
								<IconEl size={20} weight="bold" />
								<span>{filter.label}</span>
							</Ariakit.MenuItem>
						);
					})}
				</Ariakit.Menu>
				{activeMenuId ? (
					<Select
						anchorId={
							anchorEl === "menu" ? "js-menu-filter" : `js-${activeMenuId}-chip`
						}
						id={activeMenuId}
						onClose={handleSelectClose}
					/>
				) : null}
			</Ariakit.MenuProvider>
		</div>
	);
}
