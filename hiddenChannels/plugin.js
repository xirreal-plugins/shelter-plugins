(function(T,N,r,c){"use strict";function p(t){if(t&&t.__esModule)return t;var e=Object.create(null);return t&&Object.keys(t).forEach(function(a){if(a!=="default"){var h=Object.getOwnPropertyDescriptor(t,a);Object.defineProperty(e,a,h.get?h:{enumerable:!0,get:function(){return t[a]}})}}),e.default=t,Object.freeze(e)}var n=p(T),i=p(N),I=()=>cumcord.patcher.injectCSS('[aria-label$=hidden]>div path[d^=M2][d*="19"],[aria-label$=hidden]>div path[d^=M17][d*="19"]{fill:#ed4245!important}');const l=n.findByProps("h5"),o=n.findByProps("flex","directionColumn","alignCenter"),b=n.findByProps("chat","chatContent"),B=n.findByDisplayName("ChannelTextLimited"),P=n.findByDisplayName("ChannelTextNSFW"),f=n.findByDisplayName("HeaderBar"),g=n.findByDisplayName("ChannelTopic"),_=f.Icon,D=f.Title;var M=({channel:t,guild:e})=>c.React.createElement("div",{style:{width:"100%",background:"var(--background-primary)"}},c.React.createElement(f,{className:"fake-headerbar"},c.React.createElement(_,{icon:t.nsfw?P:B}),c.React.createElement(D,null,t.name),c.React.createElement(g,{channel:t,guild:e},"lmao")),c.React.createElement("div",{className:`hidden-notice ${b.content}`,style:{height:"100%"}},c.React.createElement("div",{className:`${o.flexCenter}`,style:{width:"100%"}},c.React.createElement("div",{className:`${o.flex} ${o.directionColumn} ${o.alignCenter}`},c.React.createElement("h2",{className:`${l.h2} ${l.defaultColor}`},"This is a hidden channel."),c.React.createElement("h5",{className:`${l.h5} ${l.defaultColor}`},"You cannot see the contents of this channel. However, you may see its name and topic.")))));const s={},y=n.findByProps("getMutableGuildChannels").getChannel,R=n.findByProps("getVoiceStateStats").getChannelId,U=n.findByProps("getGuild").getGuild,O=n.findByDisplayName("RouteWithImpression",!1),m=n.findByProps("getChannelPermissions"),C=n.findByProps("hasUnread"),v=n.findByProps("fetchMessages","sendMessage"),G=n.findByDisplayName("ChannelItem",!1),E=n.findByPrototypes("isManaged"),L=m.can.bind({}),d=t=>{if(typeof t!="object"&&!t.id)try{t=y(t)}catch{}if(!t||[r.ChannelTypes.DM,r.ChannelTypes.GROUP_DM,r.ChannelTypes.GUILD_CATEGORY].includes(t.type))return!0;let e=[r.ChannelTypes.GUILD_TEXT,r.ChannelTypes.GUILD_VOICE,r.ChannelTypes.GUILD_STAGE_VOICE,r.ChannelTypes.GUILD_ANNOUNCEMENT,r.ChannelTypes.ANNOUNCEMENT_THREAD,r.ChannelTypes.PRIVATE_THREAD,r.ChannelTypes.PUBLIC_THREAD].includes(t.type),a=t.canBeSeen();return e&&a};var $=t=>({onLoad(){s.css=I(),s.Channel=()=>{delete E.prototype.isHidden},E.prototype.canBeSeen=function(){return L(r.Permissions.VIEW_CHANNEL,this)},s.can=i.after("can",m,(e,a)=>e[0]==r.Permissions.VIEW_CHANNEL?!0:a),s.Route=i.after("default",O,(e,a)=>{const h=a.props?.computedMatch?.params?.channelId,S=a.props?.computedMatch?.params?.guildId;let u;try{u=y(h)}catch{return a}return!d(u)&&u.id!=R()&&(a.props.render=()=>M({channel:u,guild:U(S)})),a}),s.channelItem=i.before("default",G,e=>(d(e[0].channel)||(e[0]["aria-label"]+=" hidden"),e)),s.hasUnread=i.before("hasUnread",C,e=>(d(e[0])||(e[0]=""),e)),s.hasUnreadPins=i.before("hasUnreadPins",C,e=>d(e[0])?e:["unread"]),s.fetchMessages=i.instead("fetchMessages",v,(e,a)=>{if(!!d(e[0].channelId))return a(...e)})},onUnload(){for(let e of Object.values(s))e()}});return $})(cumcord.modules.webpack,cumcord.patcher,cumcord.modules.common.constants,cumcord.modules.common);
