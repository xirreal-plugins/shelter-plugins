const {
	plugin: { store },
	ui: { SwitchItem, Button, ButtonSizes, Space },
} = shelter;

import {
	toggleAcrylic,
	toggleCSS,
	openEditor,
	setAcrylicType,
	syncSettings,
} from "./index.js";

const types = ["Mica (Windows 11)", "Acrylic", "Blur "];

import { classes } from "./settings.jsx.scss";

export default () => (
	syncSettings(),
	(
		<>
			<SwitchItem
				hideBorder={true}
				value={store.acrylic}
				onChange={(v) => toggleAcrylic(v)}
			>
				Acrylic effect
			</SwitchItem>
			<SwitchItem
				hideBorder={true}
				value={store.css}
				onChange={(v) => toggleCSS(v)}
			>
				Theme injector
			</SwitchItem>
			<div class={`${classes.row}`}>
				<div class={`${classes.rowItem}`}>
					<label class={`${classes.label}`}>Open CSS Editor</label>
					<Button
						classes={`${classes.alignRightFlex}`}
						size={ButtonSizes.MEDIUM}
						onClick={openEditor}
					>
						Open
					</Button>
				</div>
			</div>
			<Space />
			<div class={`${classes.row}`}>
				<div class={`${classes.rowItem}`}>
					<label class={`${classes.label}`}>Blur type</label>
					<Button
						classes={`${classes.alignRightFlex}`}
						size={ButtonSizes.MEDIUM}
						grow={true}
						onClick={() => {
							setAcrylicType((store.type + 1) % 3);
						}}
					>
						{types[store.type]}
					</Button>
				</div>
			</div>
		</>
	)
);
