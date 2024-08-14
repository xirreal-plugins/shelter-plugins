const {
   ui: { ReactInSolidBridge, Header, HeaderTags },
} = shelter;

import classes from "./style.scss";

import ChannelTopic from "./ChannelTopic.jsx";
import LockedChannelIcon from "./LockedChannelIcon.jsx";

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
                  <img
                     src="https://discord.com/assets/9b1b9ee4868c262e7351.svg"
                     alt="Hidden channel"
                     class={classes.hiddenChannelImage}
                  />
                  <div class={classes.hiddenChannelTextContainer}>
                     <p class={classes.hiddenChannelText}>
                        This is a hidden channel.
                     </p>
                     <p class={classes.hiddenChannelSubText}>
                        You cannot see the contents of this channel. However, you
                        may see its name and topic.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
