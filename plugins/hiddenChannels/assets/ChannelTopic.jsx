const {
   ui: { openModal, ModalBody, ModalRoot, ModalHeader },
} = shelter;

import classes from "./style.scss";

function openTopicModal(props) {
   openModal((mprops) => (
      <ModalRoot>
         <ModalHeader close={mprops.close}>{props.channel.name}</ModalHeader>
         <ModalBody>
            <div class={classes.topicModal}>{props.channel.topic}</div>
         </ModalBody>
      </ModalRoot>
   ));
}

export default function ChannelTopic(props) {
   return props.channel.topic ? (
      <div class={classes.topicWrapper}>
         <div class={classes.divider} />
         <div
            class={classes.topic}
            onKeyPress={(e) => {
               if (e.key === "Enter") {
                  openTopicModal(props);
               }
            }}
            onClick={() => openTopicModal(props)}
         >
            {props.channel.topic}
         </div>
      </div>
   ) : (
      <></>
   );
}
