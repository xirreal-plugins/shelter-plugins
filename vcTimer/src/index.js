import { findByDisplayName } from "@cumcord/modules/webpack"
import { before } from "@cumcord/patcher"
import { showToast } from "@cumcord/ui/toasts"

import Timer from "./Timer";
const unpatchList = {};

const PanelSubtext = findByDisplayName("PanelSubtext", false);

let hasFailed = false;

export default () => {
    return {
        onLoad() {
            unpatchList.PanelSubtext = before("default", PanelSubtext, (originalArgs, previousReturn) => {
                try {
                    if (!originalArgs[0]?.className?.includes("channel-")) return originalArgs;

                    const TimerItem = React.createElement(Timer, {
                        id: 'timer'
                    });

                    originalArgs[0].children = [...[originalArgs[0].children], TimerItem];
                }
                catch(err) {
                    console.error(err);
                    !hasFailed && showToast({
                        title: "VC Timer",
                        content: "An error has occured. Please check the console for more information.",
                        duration: 3000
                    });
                    hasFailed = true;
                }

                return previousReturn;
            });
        },
        onUnload() {
            for (let unpatch of Object.values(unpatchList)) unpatch();
        }
    }
}
