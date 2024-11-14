import * as Ariakit from "@ariakit/react";
import { Check } from "@phosphor-icons/react";

export function Checkbox() {
	return (
		<div className="checkbox size-5 border-2 border-black rounded flex items-center justify-center">
			<Ariakit.SelectItemCheck>
				<Check weight="bold" />
			</Ariakit.SelectItemCheck>
		</div>
	);
}
