const {
  ui: {
    Button,
    ButtonColors,
    ButtonLooks,
    ButtonSizes,
    Checkbox,
    CheckboxItem,
    Header,
    HeaderTags,
    Switch,
    SwitchItem,
    showToast,
    openModal,
    ToastColors,
    TextBox,
    TextArea,
    ModalRoot,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalSizes,
    Slider,
  },
  solid: { createSignal },
} = shelter;

import classes from "./index.jsx.scss";

function TestUI() {
  const [pos, setPos] = createSignal({ x: 0, y: 0 });
  const [dragging, setDragging] = createSignal(false);
  const [offset, setOffset] = createSignal({ x: 0, y: 0 });
  const onMouseDown = (e) => {
    // check if the mouse is over the element
    if (e.target.id !== "test-ui") return;
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
    setOffset({ x: e.clientX - pos().x, y: e.clientY - pos().y });
  };
  const onMouseMove = (e) => {
    if (dragging()) {
      setPos({
        x: e.clientX - offset().x,
        y: e.clientY - offset().y,
      });
    }
  };
  const onMouseUp = () => {
    setDragging(false);
  };
  const onMouseLeave = () => {
    setDragging(false);
  };

  const [checked, setChecked] = createSignal(false);
  const onCheckboxChange = () => {
    setChecked(!checked());
  };

  const [slider, setSlider] = createSignal(50);
  const onSliderChange = (value) => {
    setSlider(value);
  };

  return (
    <div
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      id="test-ui"
      style={{
        position: "absolute",
        top: `${pos().y}px`,
        left: `${pos().x}px`,
        cursor: "move",
        padding: "48px 128px",
        border: "1px solid var(--opacity-8)",
        "border-radius": "8px",
        display: "flex",
        "z-index": 10000,
        background: "var(--background-base-lowest)",
        display: "flex",
        "flex-direction": "column",
        "align-items": "center",
        "justify-content": "center",
        gap: "16px",
      }}
    >
      <Header tag={HeaderTags.H2}>Buttons</Header>
      <div
        style={{
          display: "grid",
          "grid-template-rows": "repeat(5, 1fr)",
          "grid-auto-flow": "column",
          "grid-gap": "10px",
          "align-items": "center",
          "justify-items": "center",
        }}
      >
        <Button
          color={ButtonColors.BRAND}
          look={ButtonLooks.FILLED}
          size={ButtonSizes.LARGE}
        >
          Brand - Filled
        </Button>
        <Button
          color={ButtonColors.BRAND}
          look={ButtonLooks.FILLED}
          size={ButtonSizes.LARGE}
          disabled={true}
        >
          Brand - Disabled
        </Button>
        <Button
          color={ButtonColors.BRAND}
          look={ButtonLooks.INVERTED}
          size={ButtonSizes.LARGE}
        >
          Brand - Inverted
        </Button>
        <Button
          color={ButtonColors.BRAND}
          look={ButtonLooks.OUTLINED}
          size={ButtonSizes.LARGE}
        >
          Brand - Outlined
        </Button>
        <Button
          color={ButtonColors.BRAND}
          look={ButtonLooks.LINK}
          size={ButtonSizes.LARGE}
        >
          Brand - Link
        </Button>
        <Button
          color={ButtonColors.RED}
          look={ButtonLooks.FILLED}
          size={ButtonSizes.LARGE}
        >
          Red - Filled
        </Button>
        <Button
          color={ButtonColors.RED}
          look={ButtonLooks.FILLED}
          size={ButtonSizes.LARGE}
          disabled={true}
        >
          Red - Disabled
        </Button>
        <Button
          color={ButtonColors.RED}
          look={ButtonLooks.INVERTED}
          size={ButtonSizes.LARGE}
        >
          Red - Inverted
        </Button>
        <Button
          color={ButtonColors.RED}
          look={ButtonLooks.OUTLINED}
          size={ButtonSizes.LARGE}
        >
          Red - Outlined
        </Button>
        <Button
          color={ButtonColors.RED}
          look={ButtonLooks.LINK}
          size={ButtonSizes.LARGE}
        >
          Red - Link
        </Button>
        <Button
          color={ButtonColors.GREEN}
          look={ButtonLooks.FILLED}
          size={ButtonSizes.LARGE}
        >
          Green - Filled
        </Button>
        <Button
          color={ButtonColors.GREEN}
          look={ButtonLooks.FILLED}
          size={ButtonSizes.LARGE}
          disabled={true}
        >
          Green - Disabled
        </Button>
        <Button
          color={ButtonColors.GREEN}
          look={ButtonLooks.INVERTED}
          size={ButtonSizes.LARGE}
        >
          Green - Inverted
        </Button>
        <Button
          color={ButtonColors.GREEN}
          look={ButtonLooks.OUTLINED}
          size={ButtonSizes.LARGE}
        >
          Green - Outlined
        </Button>
        <Button
          color={ButtonColors.GREEN}
          look={ButtonLooks.LINK}
          size={ButtonSizes.LARGE}
        >
          Green - Link
        </Button>
        <Button
          color={ButtonColors.SECONDARY}
          look={ButtonLooks.FILLED}
          size={ButtonSizes.LARGE}
        >
          Primary - Filled
        </Button>
        <Button
          color={ButtonColors.SECONDARY}
          look={ButtonLooks.FILLED}
          size={ButtonSizes.LARGE}
          disabled={true}
        >
          Primary - Disabled
        </Button>
        <Button
          color={ButtonColors.SECONDARY}
          look={ButtonLooks.INVERTED}
          size={ButtonSizes.LARGE}
        >
          Primary - Inverted
        </Button>
        <Button
          color={ButtonColors.SECONDARY}
          look={ButtonLooks.OUTLINED}
          size={ButtonSizes.LARGE}
        >
          Primary - Outlined
        </Button>
        <Button
          color={ButtonColors.SECONDARY}
          look={ButtonLooks.LINK}
          size={ButtonSizes.LARGE}
        >
          Primary - Link
        </Button>
        <Button
          color={ButtonColors.LINK}
          look={ButtonLooks.FILLED}
          size={ButtonSizes.LARGE}
        >
          Link - Filled
        </Button>
        <Button
          color={ButtonColors.LINK}
          look={ButtonLooks.FILLED}
          size={ButtonSizes.LARGE}
          disabled={true}
        >
          Link - Disabled
        </Button>
        <Button
          color={ButtonColors.LINK}
          look={ButtonLooks.INVERTED}
          size={ButtonSizes.LARGE}
        >
          Link - Inverted
        </Button>
        <Button
          color={ButtonColors.LINK}
          look={ButtonLooks.OUTLINED}
          size={ButtonSizes.LARGE}
        >
          Link - Outlined
        </Button>
        <Button
          color={ButtonColors.LINK}
          look={ButtonLooks.LINK}
          size={ButtonSizes.LARGE}
        >
          Link - Link
        </Button>
        <Button
          color={ButtonColors.WHITE}
          look={ButtonLooks.FILLED}
          size={ButtonSizes.LARGE}
        >
          White - Filled
        </Button>
        <Button
          color={ButtonColors.WHITE}
          look={ButtonLooks.FILLED}
          size={ButtonSizes.LARGE}
          disabled={true}
        >
          White - Disabled
        </Button>
        <Button
          color={ButtonColors.WHITE}
          look={ButtonLooks.INVERTED}
          size={ButtonSizes.LARGE}
        >
          White - Inverted
        </Button>
        <Button
          color={ButtonColors.WHITE}
          look={ButtonLooks.OUTLINED}
          size={ButtonSizes.LARGE}
        >
          White - Outlined
        </Button>
        <Button
          color={ButtonColors.WHITE}
          look={ButtonLooks.LINK}
          size={ButtonSizes.LARGE}
        >
          White - Link
        </Button>
        <Button
          color={ButtonColors.TRANSPARENT}
          look={ButtonLooks.FILLED}
          size={ButtonSizes.LARGE}
        >
          Transparent - Filled
        </Button>
        <Button
          color={ButtonColors.TRANSPARENT}
          look={ButtonLooks.FILLED}
          size={ButtonSizes.LARGE}
          disabled={true}
        >
          Transparent - Disabled
        </Button>
        <Button
          color={ButtonColors.TRANSPARENT}
          look={ButtonLooks.INVERTED}
          size={ButtonSizes.LARGE}
        >
          Transparent - Inverted
        </Button>
        <Button
          color={ButtonColors.TRANSPARENT}
          look={ButtonLooks.OUTLINED}
          size={ButtonSizes.LARGE}
        >
          Transparent - Outlined
        </Button>
        <Button
          color={ButtonColors.TRANSPARENT}
          look={ButtonLooks.LINK}
          size={ButtonSizes.LARGE}
        >
          Transparent - Link
        </Button>
      </div>
      <Header tag={HeaderTags.H2}>Checkboxes</Header>
      <div style={{ width: "100%" }}>
        <CheckboxItem
          tooltip="Interactive Checkbox"
          checked={checked()}
          onChange={onCheckboxChange}
        >
          Interactive Checkbox
        </CheckboxItem>
      </div>
      <div
        style={{
          display: "grid",
          "grid-template-columns": "repeat(2, 1fr)",
          "grid-template-rows": "repeat(4, 1fr)",
          "grid-auto-flow": "column",
          "grid-gap": "10px",
          "grid-template-areas": `
                  "checkbox checkbox checkbox checkbox"
                  "checkbox-item checkbox-item checkbox-item checkbox-item"
               `,
        }}
      >
        <Checkbox tooltip="Checked Checkbox" checked={true} />
        <Checkbox tooltip="Unchecked Checkbox" checked={false} />
        <Checkbox
          tooltip="Disabled Checked Checkbox"
          checked={true}
          disabled={true}
        />
        <Checkbox
          tooltip="Disabled Unchecked Checkbox"
          checked={false}
          disabled={true}
        />
        <CheckboxItem tooltip="Checked Checkbox" checked={true}>
          Checked Checkbox
        </CheckboxItem>
        <CheckboxItem tooltip="Unchecked Checkbox" checked={false}>
          Unchecked Checkbox
        </CheckboxItem>
        <CheckboxItem
          tooltip="Disabled Checked Checkbox"
          checked={true}
          disabled={true}
        >
          Disabled Checked Checkbox
        </CheckboxItem>
        <CheckboxItem
          tooltip="Disabled Unchecked Checkbox"
          checked={false}
          disabled={true}
        >
          Disabled Unchecked Checkbox
        </CheckboxItem>
      </div>
      <Header tag={HeaderTags.H2}>Switches</Header>
      <div style={{ width: "100%" }}>
        <SwitchItem
          tooltip="Interactive Switch"
          value={checked()}
          onChange={onCheckboxChange}
          hideBorder={true}
        >
          Interactive Switch
        </SwitchItem>
      </div>
      <div
        style={{
          display: "grid",
          "grid-template-columns": "repeat(2, 1fr)",
          "grid-template-rows": "repeat(4, 1fr)",
          "grid-auto-flow": "column",
          "grid-gap": "10px",
          "grid-template-areas": `
                  "checkbox checkbox checkbox checkbox"
                  "checkbox-item checkbox-item checkbox-item checkbox-item"
               `,
        }}
      >
        <Switch tooltip="Checked Switch" checked={true} />
        <Switch tooltip="Unchecked Switch" checked={false} />
        <Switch
          tooltip="Disabled Checked Switch"
          checked={true}
          disabled={true}
        />
        <Switch
          tooltip="Disabled Unchecked Switch"
          checked={false}
          disabled={true}
        />
        <SwitchItem tooltip="Checked Switch" checked={true}>
          Checked Switch
        </SwitchItem>
        <SwitchItem tooltip="Unchecked Switch" checked={false}>
          Unchecked Switch
        </SwitchItem>
        <SwitchItem
          tooltip="Disabled Checked Switch"
          checked={true}
          disabled={true}
        >
          Disabled Checked Switch
        </SwitchItem>
        <SwitchItem
          tooltip="Disabled Unchecked Switch"
          checked={false}
          disabled={true}
        >
          Disabled Unchecked Switch
        </SwitchItem>
      </div>
      <Header tag={HeaderTags.H2}>Modals and toasts</Header>
      <div
        style={{
          display: "flex",
          "flex-direction": "row",
          gap: "16px",
        }}
      >
        <Button
          color={ButtonColors.PRIMARY}
          look={ButtonLooks.FILLED}
          size={ButtonSizes.LARGE}
          onClick={() => {
            showToast({
              title: "Neutral",
              content: "This is a toast",
              color: ToastColors.INFO,
            });
          }}
        >
          Neutral
        </Button>

        <Button
          color={ButtonColors.GREEN}
          look={ButtonLooks.FILLED}
          size={ButtonSizes.LARGE}
          onClick={() => {
            showToast({
              title: "Positive",
              content: "Use this for success",
              color: ToastColors.SUCCESS,
            });
          }}
        >
          Positive
        </Button>

        <Button
          class={`${classes.warning} ${classes.fuck} ${classes.you}`}
          look={ButtonLooks.FILLED}
          size={ButtonSizes.LARGE}
          onClick={() => {
            showToast({
              title: "Warning",
              content: "Use this for warnings",
              color: ToastColors.WARNING,
            });
          }}
        >
          Warning
        </Button>

        <Button
          color={ButtonColors.RED}
          look={ButtonLooks.FILLED}
          size={ButtonSizes.LARGE}
          onClick={() => {
            showToast({
              title: "Negative",
              content: "Use this for errors",
              color: ToastColors.CRITICAL,
            });
          }}
        >
          Critical
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          "flex-direction": "row",
          gap: "16px",
        }}
      >
        <Button
          color={ButtonColors.PRIMARY}
          look={ButtonLooks.FILLED}
          size={ButtonSizes.LARGE}
          onClick={() => {
            showToast({
              title: "1s",
              content: "Goodbye!",
              color: ToastColors.INFO,
              duration: 1000,
            });
          }}
        >
          1s
        </Button>
        <Button
          color={ButtonColors.PRIMARY}
          look={ButtonLooks.FILLED}
          size={ButtonSizes.LARGE}
          onClick={() => {
            showToast({
              title: "5s",
              content: "Goodbye!",
              color: ToastColors.INFO,
              duration: 5000,
            });
          }}
        >
          5s
        </Button>
        <Button
          color={ButtonColors.PRIMARY}
          look={ButtonLooks.FILLED}
          size={ButtonSizes.LARGE}
          onClick={() => {
            showToast({
              title: "10s",
              content: "Goodbye!",
              color: ToastColors.INFO,
              duration: 10000,
            });
          }}
        >
          10s
        </Button>
        <Button
          color={ButtonColors.PRIMARY}
          look={ButtonLooks.FILLED}
          size={ButtonSizes.LARGE}
          onClick={() => {
            showToast({
              title: "Infinite",
              content: "I'm gonna stick around yo!",
              color: ToastColors.INFO,
              duration: Number.POSITIVE_INFINITY,
            });
          }}
        >
          Infinite
        </Button>
      </div>
      <Button
        color={ButtonColors.LINK}
        look={ButtonLooks.FILLED}
        size={ButtonSizes.LARGE}
        onClick={() => {
          openModal((mprops) => (
            <ModalRoot size={ModalSizes.LARGE}>
              <ModalHeader close={mprops.close}>My modal header</ModalHeader>
              <ModalBody>
                <div
                  style={{
                    display: "flex",
                    "flex-direction": "column",
                    gap: "8px",
                  }}
                >
                  My modal content!
                  <Button size={ButtonSizes.SMALL} color={ButtonColors.GREEN}>
                    Smol
                  </Button>
                  <TextBox
                    placeholder={"Type something here, for no reason!"}
                    value={""}
                  ></TextBox>
                </div>
              </ModalBody>
              <ModalFooter>
                <div class={classes.footer}>
                  <Button
                    color={ButtonColors.RED}
                    look={ButtonLooks.FILLED}
                    size={ButtonSizes.MEDIUM}
                    onClick={() => {
                      mprops.close();
                      showToast({
                        title: "Modal closed",
                        content: "You closed the modal!",
                        color: ToastColors.INFO,
                      });
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    color={ButtonColors.BRAND}
                    look={ButtonLooks.FILLED}
                    size={ButtonSizes.MEDIUM}
                    onClick={() => {
                      mprops.close();
                      showToast({
                        title: "Modal closed",
                        content: "You closed the modal!",
                        color: ToastColors.INFO,
                      });
                    }}
                  >
                    Done
                  </Button>
                </div>
              </ModalFooter>
            </ModalRoot>
          ));
        }}
      >
        Open Modal
      </Button>
      <Header tag={HeaderTags.H2}>Inputs</Header>
      <TextBox placeholder={"Search for love..."}></TextBox>
      <TextArea
        placeholder={"Can this have multiple lines?\nYes it can!"}
        counter={true}
      ></TextArea>
      <Slider
        min={0}
        max={100}
        step={10}
        tick={10}
        value={slider()}
        onInput={onSliderChange}
      />
      <Slider min={0} max={100} value={slider()} onInput={onSliderChange} />
    </div>
  );
}

export function onLoad() {
  document.body.appendChild(<TestUI />);
}

export function onUnload() {
  const testUI = document.getElementById("test-ui");
  if (testUI) {
    testUI.remove();
  }
}

export const settings = () => {
  throw new Error("nyaboom");
};
