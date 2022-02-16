import * as webpack from "@cumcord/modules/webpack"
const text = webpack.findByProps("h5");
const flex = webpack.findByProps("flex", "directionColumn", "alignCenter");
const chat = webpack.findByProps("chat", "chatContent");
const limited = webpack.findByDisplayName("ChannelTextLimited");
const nsfw = webpack.findByDisplayName("ChannelTextNSFW");
const HeaderBar = webpack.findByDisplayName("HeaderBar");
const ChannelTopic = webpack.findByDisplayName("ChannelTopic");
const Icon = HeaderBar.Icon;
const Title = HeaderBar.Title;

export default ({channel, guild}) => {
   return <div style={{"width" : "100%", "background": "var(--background-primary)"}}>
      <HeaderBar className={`fake-headerbar`}>
         <Icon icon={channel.nsfw ? nsfw : limited}></Icon>
         <Title>{channel.name}</Title>
         <ChannelTopic channel={channel} guild={guild}>lmao</ChannelTopic>
      </HeaderBar>
      <div className={`hidden-notice ${chat.content}`} style={{"height": "100%"}}>
         <div className={`${flex.flexCenter}`} style={{"width": "100%"}}>
           <div className={`${flex.flex} ${flex.directionColumn} ${flex.alignCenter}`}>
               <h2 className={`${text.h2} ${text.defaultColor}`}>This is a hidden channel.</h2>
               <h5 className={`${text.h5} ${text.defaultColor}`}>You cannot see the contents of this channel. However, you may see its name and topic.</h5>
            </div>
         </div>
      </div>
   </div>
};