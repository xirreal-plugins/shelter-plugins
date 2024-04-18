const {
   ui: { ReactInSolidBridge, Header, HeaderTags },
} = shelter;

import classes from "./style.scss";

import LockedChannelIcon from "./LockedChannelIcon.jsx";
import ChannelTopic from "./ChannelTopic.jsx";

export default (props) => {
   return (
      <div style={{ width: "100%", background: "var(--background-secondary)" }}>
         <div
            style={{ width: "100%", background: "var(--background-primary)" }}
         >
            <ReactInSolidBridge
               comp={props.components.headerBar}
               props={{ className: "hc-header-bar" }}
            >
               <LockedChannelIcon channel={props.channel} />
               <props.components.headerBar.Title>
                  {props.channel.name}
               </props.components.headerBar.Title>
               <ChannelTopic channel={props.channel} />
            </ReactInSolidBridge>
            <div class={classes.mainBody}>
               <div class={classes.chat}>
                  <Header tag={HeaderTags.H2}>This is a hidden channel.</Header>
                  <Header tag={HeaderTags.H5}>
                     You cannot see the contents of this channel. However, you
                     may see its name and topic.
                  </Header>
               </div>
            </div>
         </div>
      </div>
   );
};
