(function(_,y,s,I,P){"use strict";function u(n){if(n&&n.__esModule)return n;var e=Object.create(null);return n&&Object.keys(n).forEach(function(a){if(a!=="default"){var c=Object.getOwnPropertyDescriptor(n,a);Object.defineProperty(e,a,c.get?c:{enumerable:!0,get:function(){return n[a]}})}}),e.default=n,Object.freeze(e)}var t=u(_),l=u(y),r=u(P),N=()=>y.injectCSS('[aria-label$=hidden]>div path[d^=M2][d*="19"],[aria-label$=hidden]>div path[d^=M17][d*="19"]{fill:#ed4245!important}');const o=t.findByProps("h5"),h=t.findByProps("flex","directionColumn","alignCenter"),D=t.findByProps("chat","chatContent"),O=t.findByDisplayName("ChannelTextLimited"),M=t.findByDisplayName("ChannelTextNSFW"),f=t.findByDisplayName("HeaderBar"),T=t.findByDisplayName("ChannelTopic"),S=f.Icon,U=f.Title;var $=({channel:n,guild:e})=>r.createElement("div",{style:{width:"100%",background:"var(--background-primary)"}},r.createElement(f,{className:"fake-headerbar"},r.createElement(S,{icon:n.nsfw?M:O}),r.createElement(U,null,n.name),r.createElement(T,{channel:n,guild:e},"lmao")),r.createElement("div",{className:`hidden-notice ${D.content}`,style:{height:"100%"}},r.createElement("div",{className:`${h.flexCenter}`,style:{width:"100%"}},r.createElement("div",{className:`${h.flex} ${h.directionColumn} ${h.alignCenter}`},r.createElement("h2",{className:`${o.h2} ${o.defaultColor}`},"This is a hidden channel."),r.createElement("h5",{className:`${o.h5} ${o.defaultColor}`},"You cannot see the contents of this channel. However, you may see its name and topic.")))));const i={},C=t.findByProps("hasChannel").getChannel,R=t.findByProps("getVoiceStateStats").getChannelId,g=t.findByProps("getGuild").getGuild,j=t.findByDisplayName("RouteWithImpression",!1),b=t.findByProps("getChannelPermissions"),p=t.findByProps("hasUnread"),L=t.findByProps("fetchMessages","sendMessage"),G=t.findByDisplayName("ChannelItem",!1),E=t.findByPrototypes("isManaged"),w=b.can.bind({}),v=n=>{if(n?.permissionOverwrites){const e=Object.values(g(n.guild_id)?.roles||{})?.filter(a=>a?.tags?.subscription_listing_id!==void 0);if(e&&e.length>0){for(const a of Object.keys(n.permissionOverwrites))if(e.find(c=>c.id===a))return!0}}return!1},d=n=>{if(typeof n!="object"&&!n?.id)try{n=C(n)}catch{n=null}return!n||[s.ChannelTypes.DM,s.ChannelTypes.GROUP_DM,s.ChannelTypes.GUILD_CATEGORY,s.ChannelTypes.GUILD_STORE,s.ChannelTypes.GUILD_STORE,s.ChannelTypes.GUILD_DIRECTORY].includes(n.type)||v(n)?!0:n.canBeSeen()};var x=n=>({onLoad(){i.css=N(),i.Channel=()=>{delete E.prototype.canBeSeen},E.prototype.canBeSeen=function(){return w(s.Permissions.VIEW_CHANNEL,this)},i.can=l.instead("can",b,(e,a)=>e[0]==s.Permissions.VIEW_CHANNEL&&!v(e[1])?!0:a(...e)),i.Route=l.after("default",j,(e,a)=>{const c=a.props?.computedMatch?.params?.channelId,B=a.props?.computedMatch?.params?.guildId;let m;try{m=C(c)}catch{return a}return!d(m)&&B&&m?.id!=R()&&(a.props.render=()=>$({channel:m,guild:g(B)})),a}),i.channelItem=l.before("default",G,e=>(d(e[0].channel)||(e[0]["aria-label"]+=" hidden"),e)),i.hasUnread=l.before("hasUnread",p,e=>(d(e[0])||(e[0]=""),e)),i.hasUnreadPins=l.before("hasUnreadPins",p,e=>d(e[0])?e:["unread"]),i.hasUnreadMentions=l.after("getMentionCount",p,(e,a)=>d(e[0])?a:0),i.fetchMessages=l.instead("fetchMessages",L,(e,a)=>{if(!d(e[0].channelId)){I.dispatch({type:"LOAD_MESSAGES_FAILURE",channelId:e[0].channelId});return}return a(...e)})},onUnload(){for(let e of Object.values(i))e()}});return x})(cumcord.modules.webpack,cumcord.patcher,cumcord.modules.common.constants,cumcord.modules.common.FluxDispatcher,cumcord.modules.common.React);
