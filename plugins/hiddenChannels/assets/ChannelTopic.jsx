const {
   ui: { openModal, ModalBody, ModalRoot, ModalHeader, ModalSizes },
} = shelter;

import LockedChannelIcon from "./LockedChannelIcon.jsx";

import classes from "./style.scss";

function openTopicModal(props) {
   openModal((mprops) => (
      <ModalRoot size={ModalSizes.DYNAMIC}>
         <ModalHeader close={mprops.close}>
            <LockedChannelIcon channel={props.channel} />
            {props.channel.name}
         </ModalHeader>
         <ModalBody>
            <div class={classes.topicModal}>{props.channel.topic}</div>
         </ModalBody>
      </ModalRoot>
   ));
}

export default function ChannelTopic(props) {
   return props.channel.topic ? (
      <div class={classes.topicWrapper}>
         <svg class={classes.divider} aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 4 4">
            <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
         </svg>
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
