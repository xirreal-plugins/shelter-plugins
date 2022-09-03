(function(I,p,s,b,E){"use strict";function f(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach(function(a){if(a!=="default"){var m=Object.getOwnPropertyDescriptor(e,a);Object.defineProperty(t,a,m.get?m:{enumerable:!0,get:function(){return e[a]}})}}),t.default=e,Object.freeze(t)}var n=f(I),i=f(p),r=f(E),N=()=>p.injectCSS('[aria-label$=hidden]>div path[d^=M2][d*="19"],[aria-label$=hidden]>div path[d^=M17][d*="19"]{fill:#ed4245!important}');const o=n.findByProps("h5"),d=n.findByProps("flex","directionColumn","alignCenter"),P=n.findByProps("chat","chatContent"),M=n.findByDisplayName("ChannelTextLimited"),S=n.findByDisplayName("ChannelTextNSFW"),h=n.findByDisplayName("HeaderBar"),_=n.findByDisplayName("ChannelTopic"),D=h.Icon,T=h.Title;var v=({channel:e,guild:t})=>r.createElement("div",{style:{width:"100%",background:"var(--background-primary)"}},r.createElement(h,{className:"fake-headerbar"},r.createElement(D,{icon:e.nsfw?S:M}),r.createElement(T,null,e.name),r.createElement(_,{channel:e,guild:t},"lmao")),r.createElement("div",{className:`hidden-notice ${P.content}`,style:{height:"100%"}},r.createElement("div",{className:`${d.flexCenter}`,style:{width:"100%"}},r.createElement("div",{className:`${d.flex} ${d.directionColumn} ${d.alignCenter}`},r.createElement("h2",{className:`${o.h2} ${o.defaultColor}`},"This is a hidden channel."),r.createElement("h5",{className:`${o.h5} ${o.defaultColor}`},"You cannot see the contents of this channel. However, you may see its name and topic.")))));const c={},y=n.findByProps("hasChannel").getChannel,O=n.findByProps("getVoiceStateStats").getChannelId,$=n.findByProps("getGuild").getGuild;n.findByProps("getMember").getMember,n.findByProps("getCurrentUser").getCurrentUser;const L=n.findByDisplayName("RouteWithImpression",!1),C=n.findByProps("getChannelPermissions"),R=n.findByProps("ReadState").ReadState.prototype,j=n.findByProps("fetchMessages","sendMessage"),w=n.findByDisplayName("ChannelItem",!1),g=n.findByPrototypes("isManaged"),x=C.can.bind({}),G=e=>e?.permissionOverwrites?.length>0,l=e=>{if(typeof e!="object"&&!e?.id)try{e=y(e)}catch{e=null}return!e||[s.ChannelTypes.DM,s.ChannelTypes.GROUP_DM,s.ChannelTypes.GUILD_CATEGORY,s.ChannelTypes.GUILD_STORE,s.ChannelTypes.GUILD_DIRECTORY].includes(e.type)?!0:e.canBeSeen()};var U=e=>({onLoad(){c.css=N(),c.Channel=()=>{delete g.prototype.canBeSeen},g.prototype.canBeSeen=function(){return x(s.Permissions.VIEW_CHANNEL,this)},c.can=i.instead("can",C,(t,a)=>t[0]==s.Permissions.VIEW_CHANNEL&&!G(t[1])?!0:a(...t)),c.Route=i.after("default",L,(t,a)=>{const m=a.props?.computedMatch?.params?.channelId,B=a.props?.computedMatch?.params?.guildId;let u;try{u=y(m)}catch{return a}return!l(u)&&B&&u?.id!=O()&&(a.props.render=()=>v({channel:u,guild:$(B)})),a}),c.channelItem=i.before("default",w,t=>(l(t[0].channel)||(t[0]["aria-label"]+=" hidden"),t)),c.unreadStateManager=i.after("canTrackUnreads",R,function(t,a){return a&&l(this.channelId)}),c.fetchMessages=i.instead("fetchMessages",j,(t,a)=>{if(!l(t[0].channelId)){b.dispatch({type:"LOAD_MESSAGES_FAILURE",channelId:t[0].channelId});return}return a(...t)})},onUnload(){for(let t of Object.values(c))t()}});return U})(cumcord.modules.webpack,cumcord.patcher,cumcord.modules.common.constants,cumcord.modules.common.FluxDispatcher,cumcord.modules.common.React);
