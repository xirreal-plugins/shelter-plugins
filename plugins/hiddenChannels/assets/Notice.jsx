const {
   ui: { Header, HeaderTags, Text, TextTags },
} = shelter;

import classes from "./style.scss";

import ChannelTopic from "./ChannelTopic.jsx";
import LockedChannelIcon from "./LockedChannelIcon.jsx";
import HeaderBar from "./HeaderBar.jsx";
import ChestIcon from "./ChestIcon.jsx";

export default (props) => {
   return (
      <div
         style={{
            "min-width": "100%",
            width: "100%",
            overflow: "hidden",
            "border-top": "1px solid var(--app-border-frame)",
            background: "var(--bg-overlay-chat, var(--background-base-lower))",
         }}
      >
         <HeaderBar>
            <LockedChannelIcon channel={props.channel} />
            <Text tag={TextTags.channelTitle} class={classes.bold}>
               {props.channel.name}
            </Text>
            <ChannelTopic channel={props.channel} />
         </HeaderBar>
         <div class={classes.mainBody}>
            <Header tag={HeaderTags.H2} class={classes.bold}>
               This is a hidden channel.
            </Header>
            <ChestIcon />
            <Header tag={HeaderTags.H5} style={{
               "color": "var(--text-secondary)",
               "margin-top": "12px",
            }}>
               You cannot see the contents of this channel. However, you may see its name and topic.
            </Header>
         </div>
      </div>
   );
};
