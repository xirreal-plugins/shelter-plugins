const {
   ui: { renderSolidInReact, openModal, ModalBody, ModalRoot, ModalHeader },
} = shelter;

import classes from "./style.scss";

const ChannelTopic = (props) => {
   return props.channel.topic ? (
      <div class={classes.topicWrapper}>
         <div class={classes.divider} />
         <div
            class={classes.topic}
            onClick={() =>
               openModal((mprops) => (
                  <ModalRoot>
                     <ModalHeader close={mprops.close}>
                        #{props.channel.name}
                     </ModalHeader>
                     <ModalBody>{props.channel.topic}</ModalBody>
                  </ModalRoot>
               ))
            }
         >
            {props.channel.topic}
         </div>
      </div>
   ) : (
      <div></div>
   );
};

export default (props) => {
   return renderSolidInReact(ChannelTopic, props);
};
