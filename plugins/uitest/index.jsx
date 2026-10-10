const {
	ui: {
		Button,
		ButtonColors,
		ButtonLooks,
		ButtonSizes,
		LinkButton,
		Checkbox,
		CheckboxItem,
		Switch,
		SwitchItem,
		Header,
		HeaderTags,
		HeaderWeights,
		Text,
		TextTags,
		TextWeights,
		TextBox,
		TextArea,
		Slider,
		openModal,
		openConfirmationModal,
		ModalRoot,
		ModalHeader,
		ModalBody,
		ModalFooter,
		ModalConfirmFooter,
		ModalSizes,
		showToast,
		ToastColors,
		IconAdd,
		IconBin,
		IconClose,
		IconCog,
		IconEdit,
		IconInfo,
		IconUpdate,
		IconUpload,
		ChevronIcon,
		DevIcon,
		LocalIcon,
		SyncIcon,
		Space,
		ErrorBoundary,
		focusring,
		tooltip,
		niceScrollbarsClass,
	},
	solid: { createSignal, For, Show },
} = shelter;

import classes from "./index.jsx.scss";

const Section = (props) => (
	<div class={classes.section}>
		<Text tag={TextTags.displaySM} class={classes.sectionTitle}>
			{props.title}
		</Text>
		{props.children}
	</div>
);

const SubSection = (props) => (
	<>
		<Header tag={HeaderTags.HeadingMD} class={classes.subsection}>
			{props.title}
		</Header>
		{props.children}
	</>
);

const Row = (props) => <div class={classes.row}>{props.children}</div>;
const Col = (props) => <div class={classes.col}>{props.children}</div>;
const Grid = (props) => <div class={classes.grid}>{props.children}</div>;

const ICONS = [
	{ Icon: IconAdd, name: "IconAdd" },
	{ Icon: IconBin, name: "IconBin" },
	{ Icon: IconClose, name: "IconClose" },
	{ Icon: IconCog, name: "IconCog" },
	{ Icon: IconEdit, name: "IconEdit" },
	{ Icon: IconInfo, name: "IconInfo" },
	{ Icon: IconUpdate, name: "IconUpdate" },
	{ Icon: IconUpload, name: "IconUpload" },
	{ Icon: ChevronIcon, name: "ChevronIcon" },
	{ Icon: DevIcon, name: "DevIcon" },
	{ Icon: LocalIcon, name: "LocalIcon" },
	{ Icon: SyncIcon, name: "SyncIcon" },
];

const BUTTON_COLORS = ["PRIMARY", "SECONDARY", "CRITICAL_PRIMARY", "CRITICAL_SECONDARY", "ACTIVE", "OVERLAY_PRIMARY", "OVERLAY_SECONDARY"];
const BUTTON_SIZES = ["TINY", "SMALL", "MEDIUM", "LARGE", "XLARGE"];

function ButtonTests() {
	return (
		<Section title="Buttons">
			<SubSection title="Colors">
				<Grid>
					<For each={BUTTON_COLORS}>
						{(color) => (
							<Button size={ButtonSizes.LARGE} color={ButtonColors[color]}>
								{color}
							</Button>
						)}
					</For>
				</Grid>
			</SubSection>

			<SubSection title="Disabled">
				<Grid>
					<For each={["PRIMARY", "SECONDARY", "CRITICAL_PRIMARY", "ACTIVE"]}>
						{(color) => (
							<Button size={ButtonSizes.LARGE} color={ButtonColors[color]} disabled>
								{color}
							</Button>
						)}
					</For>
				</Grid>
			</SubSection>

			<SubSection title="Sizes">
				<Row>
					<For each={BUTTON_SIZES}>
						{(size) => (
							<Button size={ButtonSizes[size]}>{size}</Button>
						)}
					</For>
				</Row>
			</SubSection>

			<SubSection title="Special Sizes">
				<Col>
					<Text>MIN - fits content:</Text>
					<Button size={ButtonSizes.MIN}>Min Size</Button>

					<Text>MAX - fills container:</Text>
					<div style={{ width: "300px" }}>
						<Button size={ButtonSizes.MAX}>Max Size</Button>
					</div>

					<Text>ICON - icon only:</Text>
					<Button size={ButtonSizes.ICON}>
						<IconCog />
					</Button>
				</Col>
			</SubSection>

			<SubSection title="Grow">
				<Row style={{ width: "100%" }}>
					<Button grow>Grow 1</Button>
					<Button grow>Grow 2</Button>
					<Button grow>Grow 3</Button>
				</Row>
			</SubSection>

			<SubSection title="Tooltips">
				<Row>
					<Button tooltip="Top tooltip">Hover me</Button>
					<Button tooltip={[true, "Bottom tooltip"]}>Bottom</Button>
				</Row>
			</SubSection>

			<SubSection title="LinkButton">
				<Row>
					<LinkButton href="https://github.com/uwu/shelter">GitHub</LinkButton>
					<LinkButton href="https://discord.com" tooltip="Opens Discord">Discord</LinkButton>
				</Row>
			</SubSection>
		</Section>
	);
}

function ReactivityTests() {
	const [color, setColor] = createSignal(ButtonColors.PRIMARY);
	const [size, setSize] = createSignal(ButtonSizes.MEDIUM);

	const colors = [ButtonColors.PRIMARY, ButtonColors.SECONDARY, ButtonColors.CRITICAL_PRIMARY, ButtonColors.ACTIVE];
	const sizes = [ButtonSizes.TINY, ButtonSizes.SMALL, ButtonSizes.MEDIUM, ButtonSizes.LARGE];

	const cycleColor = () => setColor(colors[(colors.indexOf(color()) + 1) % colors.length]);
	const cycleSize = () => setSize(sizes[(sizes.indexOf(size()) + 1) % sizes.length]);

	return (
		<Section title="Reactivity">
			<div class={classes.demo}>
				<Text>Click to cycle through colors and sizes:</Text>
				<Row>
					<Button color={color()} size={size()}>Reactive Button</Button>
					<Button onClick={cycleColor}>Cycle Color</Button>
					<Button onClick={cycleSize}>Cycle Size</Button>
				</Row>
			</div>
		</Section>
	);
}

function CheckboxTests() {
	const [checked, setChecked] = createSignal(false);

	return (
		<Section title="Checkboxes">
			<SubSection title="Interactive">
				<Row>
					<Checkbox checked={checked()} onChange={setChecked} tooltip="Click to toggle" />
					<Text>Checked: {checked() ? "Yes" : "No"}</Text>
				</Row>
			</SubSection>

			<SubSection title="States">
				<Row>
					<Checkbox checked={true} tooltip="Checked" />
					<Checkbox checked={false} tooltip="Unchecked" />
					<Checkbox checked={true} disabled tooltip="Disabled checked" />
					<Checkbox checked={false} disabled tooltip="Disabled unchecked" />
				</Row>
			</SubSection>

			<SubSection title="CheckboxItem">
				<Col style={{ "max-width": "400px" }}>
					<CheckboxItem checked={checked()} onChange={setChecked}>Interactive</CheckboxItem>
					<CheckboxItem checked={true}>Checked</CheckboxItem>
					<CheckboxItem checked={false}>Unchecked</CheckboxItem>
					<CheckboxItem checked={true} disabled>Disabled checked</CheckboxItem>
					<CheckboxItem checked={false} mt>With margin-top</CheckboxItem>
				</Col>
			</SubSection>
		</Section>
	);
}

function SwitchTests() {
	const [enabled, setEnabled] = createSignal(false);

	return (
		<Section title="Switches">
			<SubSection title="Interactive">
				<Row>
					<Switch checked={enabled()} onChange={setEnabled} tooltip="Click to toggle" />
					<Text>Enabled: {enabled() ? "Yes" : "No"}</Text>
				</Row>
			</SubSection>

			<SubSection title="States">
				<Row>
					<Switch checked={true} tooltip="On" />
					<Switch checked={false} tooltip="Off" />
					<Switch checked={true} disabled tooltip="Disabled on" />
					<Switch checked={false} disabled tooltip="Disabled off" />
				</Row>
			</SubSection>

			<SubSection title="SwitchItem">
				<Col style={{ "max-width": "400px" }}>
					<SwitchItem checked={enabled()} onChange={setEnabled} note="With note text">Interactive</SwitchItem>
					<SwitchItem checked={true} note="Always on">Enabled</SwitchItem>
					<SwitchItem checked={false}>No note</SwitchItem>
					<SwitchItem checked={true} disabled note="Cannot change">Disabled</SwitchItem>
					<SwitchItem checked={false} hideBorder>Hidden border</SwitchItem>
				</Col>
			</SubSection>
		</Section>
	);
}

function HeaderTests() {
	return (
		<Section title="Headers">
			<SubSection title="Tags">
				<Col>
					<Header tag={HeaderTags.HeadingXXL}>HeadingXXL</Header>
					<Header tag={HeaderTags.HeadingXL}>HeadingXL</Header>
					<Header tag={HeaderTags.HeadingLG}>HeadingLG</Header>
					<Header tag={HeaderTags.HeadingMD}>HeadingMD</Header>
					<Header tag={HeaderTags.HeadingSM}>HeadingSM</Header>
					<Header tag={HeaderTags.EYEBROW}>EYEBROW</Header>
				</Col>
			</SubSection>

			<SubSection title="Weights">
				<Grid>
					<For each={["normal", "medium", "semibold", "bold", "extrabold"]}>
						{(weight) => (
							<Header tag={HeaderTags.HeadingMD} weight={HeaderWeights[weight]}>{weight}</Header>
						)}
					</For>
				</Grid>
			</SubSection>

			<SubSection title="No Margin">
				<div class={classes.demo}>
					<Header tag={HeaderTags.HeadingMD} margin={false}>No margin</Header>
					<Text>Directly below</Text>
				</div>
			</SubSection>
		</Section>
	);
}

function TextTests() {
	const TEXT_TAGS = ["displayLG", "displayMD", "displaySM", "textLG", "textMD", "textSM", "textXS", "textXXS", "messagePreview", "channelTitle"];

	return (
		<Section title="Text">
			<SubSection title="Tags">
				<Col>
					<For each={TEXT_TAGS}>
						{(tag) => <Text tag={TextTags[tag]}>{tag}</Text>}
					</For>
				</Col>
			</SubSection>

			<SubSection title="Weights">
				<Row>
					<For each={["normal", "medium", "semibold", "bold", "extrabold"]}>
						{(weight) => <Text weight={TextWeights[weight]}>{weight}</Text>}
					</For>
				</Row>
			</SubSection>
		</Section>
	);
}

function InputTests() {
	const [text, setText] = createSignal("");
	const [area, setArea] = createSignal("");
	const [slider, setSlider] = createSignal(50);

	return (
		<Section title="Inputs">
			<SubSection title="TextBox">
				<Col>
					<div class={classes.inputContainer}>
						<TextBox value={text()} onInput={setText} placeholder="Type something..." />
					</div>
					<Text>Value: "{text()}"</Text>
					<div class={classes.inputContainer}>
						<TextBox value={text()} onInput={setText} placeholder="Max 10 chars" maxLength={10} />
					</div>
					<div class={classes.inputContainer}>
						<TextBox value="" placeholder="Disabled" disabled />
					</div>
				</Col>
			</SubSection>

			<SubSection title="TextArea">
				<Col>
					<div class={classes.textareaContainer}>
						<TextArea value={area()} onInput={setArea} placeholder="Multi-line..." resize-y counter maxlength={500} />
					</div>
					<div class={classes.textareaContainer}>
						<TextArea value={area()} onInput={setArea} placeholder="Monospace" mono resize-x resize-y />
					</div>
				</Col>
			</SubSection>

			<SubSection title="Slider">
				<Col>
					<Text>Value: {slider()}</Text>
					<div class={classes.sliderContainer}>
						<Slider min={0} max={100} value={slider()} onInput={setSlider} />
					</div>
					<Text>With ticks:</Text>
					<div class={classes.sliderContainer}>
						<Slider min={0} max={100} step={10} tick={20} value={slider()} onInput={setSlider} />
					</div>
				</Col>
			</SubSection>
		</Section>
	);
}

function ToastTests() {
	const toast = (title, content, color) => () => showToast({ title, content, color });

	return (
		<Section title="Toasts">
			<SubSection title="Colors">
				<Grid>
					<Button onClick={toast("Info", "Informational message", ToastColors.INFO)}>Info</Button>
					<Button onClick={toast("Success", "Operation completed", ToastColors.SUCCESS)} color={ButtonColors.ACTIVE}>Success</Button>
					<Button onClick={toast("Warning", "Something might be wrong", ToastColors.WARNING)} class={classes.warning}>Warning</Button>
					<Button onClick={toast("Error", "Something went wrong", ToastColors.CRITICAL)} color={ButtonColors.CRITICAL_PRIMARY}>Critical</Button>
				</Grid>
			</SubSection>

			<SubSection title="Durations">
				<Row>
					<Button onClick={() => showToast({ title: "Quick", content: "1 second", duration: 1000 })}>1s</Button>
					<Button onClick={() => showToast({ title: "Normal", content: "3 seconds", duration: 3000 })}>3s</Button>
					<Button onClick={() => showToast({ title: "Long", content: "10 seconds", duration: 10000 })}>10s</Button>
					<Button onClick={() => showToast({ title: "Persistent", content: "Click to dismiss", duration: Infinity })}>∞</Button>
				</Row>
			</SubSection>

			<SubSection title="Clickable">
				<Button onClick={() => showToast({ title: "Clickable", content: "Click me!", onClick: () => alert("Clicked!"), duration: 5000 })}>
					Show Clickable Toast
				</Button>
			</SubSection>
		</Section>
	);
}

function ModalTests() {
	const openBasic = () =>
		openModal((props) => (
			<ModalRoot>
				<ModalHeader close={props.close}>Basic Modal</ModalHeader>
				<ModalBody>
					<Text>A basic modal with header, body, and footer.</Text>
				</ModalBody>
				<ModalFooter>
					<Button onClick={props.close}>Close</Button>
				</ModalFooter>
			</ModalRoot>
		));

	const openSized = (size, name) => () =>
		openModal((props) => (
			<ModalRoot size={size}>
				<ModalHeader close={props.close}>{name}</ModalHeader>
				<ModalBody>
					<Text>ModalSizes.{name}</Text>
				</ModalBody>
				<ModalFooter>
					<Button onClick={props.close}>Close</Button>
				</ModalFooter>
			</ModalRoot>
		));

	const openNoClose = () =>
		openModal((props) => (
			<ModalRoot>
				<ModalHeader close={props.close} noClose>No Close Button</ModalHeader>
				<ModalBody>
					<Text>Press Escape or click outside to close.</Text>
				</ModalBody>
				<ModalFooter>
					<Button onClick={props.close}>Manual Close</Button>
				</ModalFooter>
			</ModalRoot>
		));

	const openConfirm = () =>
		openModal((props) => (
			<ModalRoot>
				<ModalHeader close={props.close}>Confirm</ModalHeader>
				<ModalBody>
					<Text>Uses ModalConfirmFooter.</Text>
				</ModalBody>
				<ModalConfirmFooter
					close={props.close}
					confirmText="Confirm"
					type="confirm"
					onConfirm={() => showToast({ title: "Confirmed!", color: ToastColors.SUCCESS })}
				/>
			</ModalRoot>
		));

	const openDanger = () =>
		openModal((props) => (
			<ModalRoot>
				<ModalHeader close={props.close}>Danger</ModalHeader>
				<ModalBody>
					<Text>Dangerous action!</Text>
				</ModalBody>
				<ModalConfirmFooter close={props.close} type="danger" confirmText="Delete" onConfirm={() => {}} />
			</ModalRoot>
		));

	const openScrollable = () =>
		openModal((props) => (
			<ModalRoot size={ModalSizes.MEDIUM}>
				<ModalHeader close={props.close}>Scrollable</ModalHeader>
				<ModalBody>
					<For each={Array(20).fill(0)}>
						{(_, i) => <Text style={{ "margin-bottom": "16px" }}>Paragraph {i() + 1}. Lorem ipsum dolor sit amet.</Text>}
					</For>
				</ModalBody>
				<ModalFooter>
					<Button onClick={props.close}>Close</Button>
				</ModalFooter>
			</ModalRoot>
		));

	const openNested = () =>
		openModal((props) => (
			<ModalRoot>
				<ModalHeader close={props.close}>First Modal</ModalHeader>
				<ModalBody>
					<Text>Open another modal on top!</Text>
				</ModalBody>
				<ModalFooter>
					<Button
						onClick={() =>
							openModal((props2) => (
								<ModalRoot>
									<ModalHeader close={props2.close}>Nested Modal</ModalHeader>
									<ModalBody>
										<Text>This is nested!</Text>
									</ModalBody>
									<ModalFooter>
										<Button onClick={props2.close}>Close</Button>
									</ModalFooter>
								</ModalRoot>
							))
						}
					>
						Open Nested
					</Button>
				</ModalFooter>
			</ModalRoot>
		));

	return (
		<Section title="Modals">
			<SubSection title="Basic">
				<Row>
					<Button onClick={openBasic}>Basic</Button>
					<Button onClick={openNoClose}>No Close Button</Button>
					<Button onClick={openScrollable}>Scrollable</Button>
					<Button onClick={openNested}>Nested</Button>
				</Row>
			</SubSection>

			<SubSection title="Sizes">
				<Row>
					<Button onClick={openSized(ModalSizes.SMALL, "SMALL")}>Small</Button>
					<Button onClick={openSized(ModalSizes.MEDIUM, "MEDIUM")}>Medium</Button>
					<Button onClick={openSized(ModalSizes.LARGE, "LARGE")}>Large</Button>
					<Button onClick={openSized(ModalSizes.DYNAMIC, "DYNAMIC")}>Dynamic</Button>
				</Row>
			</SubSection>

			<SubSection title="Confirm Footer">
				<Row>
					<Button onClick={openConfirm} color={ButtonColors.ACTIVE}>Confirm</Button>
					<Button onClick={openDanger} color={ButtonColors.CRITICAL_PRIMARY}>Danger</Button>
				</Row>
			</SubSection>

			<SubSection title="openConfirmationModal">
				<Row>
					<Button
						onClick={() =>
							openConfirmationModal({
								header: () => "Confirm?",
								body: () => "Are you sure?",
								type: "confirm",
								confirmText: "Yes",
							}).then(() => showToast({ title: "Confirmed!", color: ToastColors.SUCCESS }))
						}
					>
						Confirm Dialog
					</Button>
					<Button
						onClick={() =>
							openConfirmationModal({
								header: () => "Delete?",
								body: () => "Cannot be undone.",
								type: "danger",
								confirmText: "Delete",
							})
						}
						color={ButtonColors.CRITICAL_PRIMARY}
					>
						Danger Dialog
					</Button>
				</Row>
			</SubSection>
		</Section>
	);
}

function IconTests() {
	return (
		<Section title="Icons">
			<div class={classes.iconGrid}>
				<For each={ICONS}>
					{({ Icon, name }) => (
						<div class={classes.iconItem}>
							<Icon />
							<span class={classes.iconLabel}>{name}</span>
						</div>
					)}
				</For>
			</div>

			<SubSection title="Sizes">
				<Row>
					<IconCog width="16" height="16" />
					<IconCog width="24" height="24" />
					<IconCog width="32" height="32" />
					<IconCog width="48" height="48" />
				</Row>
			</SubSection>

			<SubSection title="Colors">
				<Row>
					<IconCog style={{ color: "var(--text-default)" }} />
					<IconCog style={{ color: "var(--status-positive)" }} />
					<IconCog style={{ color: "var(--status-warning)" }} />
					<IconCog style={{ color: "var(--status-critical)" }} />
					<IconCog style={{ color: "var(--brand-500)" }} />
				</Row>
			</SubSection>
		</Section>
	);
}

function UtilityTests() {
	return (
		<Section title="Utilities">
			<SubSection title="Tooltips">
				<div class={classes.tooltipDemo}>
					<span use:tooltip="Top tooltip" class={classes.tooltipTarget}>Hover (top)</span>
					<span use:tooltip={[true, "Bottom tooltip"]} class={classes.tooltipTarget}>Hover (bottom)</span>
					<span use:tooltip={<strong>Rich!</strong>} class={classes.tooltipTarget}>Rich tooltip</span>
				</div>
			</SubSection>

			<SubSection title="Nice Scrollbars">
				<div class={`${niceScrollbarsClass()} ${classes.scrollDemo}`}>
					<For each={Array(20).fill(0)}>{(_, i) => <div>Line {i() + 1}</div>}</For>
				</div>
			</SubSection>
		</Section>
	);
}

function CrashingComponent() {
	throw new Error("Intentional crash for testing");
}

function ErrorBoundaryTests() {
	const [showCrash, setShowCrash] = createSignal(false);

	return (
		<Section title="Error Boundary">
			<Show when={showCrash()} fallback={<Text>Click to crash component</Text>}>
				<CrashingComponent />
			</Show>
			<Button class={classes.crashButton} onClick={() => setShowCrash(true)} color={ButtonColors.CRITICAL_PRIMARY}>
				Crash
			</Button>
		</Section>
	);
}

export const settings = () => (
	<div>
		<ButtonTests />
		<ReactivityTests />
		<CheckboxTests />
		<SwitchTests />
		<HeaderTests />
		<TextTests />
		<InputTests />
		<ToastTests />
		<ModalTests />
		<IconTests />
		<UtilityTests />
		<ErrorBoundaryTests />
	</div>
);
