import { FilterMenu } from "./components/filter-menu";

export default function App() {
	return (
		<div>
			<a
				target="_blank"
				className="font-mono text-white text-sm bg-black p-3 hover:bg-black/90 block text-center"
				href="https://github.com/mattrothenberg/ariakit-filter-ui"
				rel="noreferrer"
			>
				mattrothenberg/ariakit-filter-ui
			</a>
			<div className="p-4">
				<FilterMenu />
			</div>
		</div>
	);
}
