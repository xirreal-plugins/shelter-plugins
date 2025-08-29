const {
    ui: {Header, HeaderTags, Text, TextTags},
    plugin: {store}
} = shelter;

import classes from "./style.scss";

import ChannelTopic from "./ChannelTopic.jsx";
import LockedChannelIcon from "./LockedChannelIcon.jsx";
import HeaderBar from "./HeaderBar.jsx";
import ChestIcon from "./ChestIcon.jsx";


function getPeopleWhoHaveAccess(channel) {
    const overwrites = shelter.flux.stores.ChannelStore.getChannel(channel.id).permissionOverwrites;
    const roles = shelter.flux.stores.GuildRoleStore.getSortedRoles(channel.guild_id);

    function hasView(number) {
        return (BigInt(number) & 1n << 10n) != 0n;
    }

    const everyoneRole = roles.at(-1);
    const isChannelViewableByEveryone = hasView(overwrites[everyoneRole.id].allow) && !hasView(overwrites[everyoneRole.id].deny);

    const peopleWhoHaveAccess = [[], []];

    for (const perm of Object.values(overwrites)) {
        if (hasView(perm.allow) || (isChannelViewableByEveryone && !hasView(perm.deny))) {
            if (perm.type == 0) {
                peopleWhoHaveAccess[0].push(roles.find(x => x.id == perm.id))
            } else {
                peopleWhoHaveAccess[1].push(shelter.flux.stores.UserStore.getUser(perm.id))
            }
        }
    }
    return peopleWhoHaveAccess
}

export default (props) => {
    const [rolesWithAccess, usersWithAccess] = getPeopleWhoHaveAccess(
        props.channel
    ).map((p) => p.filter(Boolean));

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
                <LockedChannelIcon channel={props.channel}/>
                <Text tag={TextTags.channelTitle} class={classes.channelTitle}>
                    {props.channel.name}
                </Text>
                <ChannelTopic channel={props.channel}/>
            </HeaderBar>
            <div class={classes.mainBody}>
                <Header tag={HeaderTags.H2} class={classes.bold}>
                    This is a hidden channel.
                </Header>
                <ChestIcon/>
                <Header
                    tag={HeaderTags.H5}
                    style={{
                        color: "var(--text-secondary)",
                        "margin-top": "12px",
                    }}
                >
                    You cannot see the contents of this channel. However, you may see its name and topic. <br/>
                </Header>
                <Show when={store.ShowPeopleWhoHaveAccess}>
                    <div
                        style={{
                            display: "flex",
                            "margin-top": "20px",
                            gap: "20px",
                        }}
                    >
                        <div style={{flex: 1}}>
                            <Header tag={HeaderTags.H5} class={classes.bold}>
                                Roles with access
                            </Header>
                            {rolesWithAccess.length > 0 ? (
                                rolesWithAccess.map((role) => (
                                    <>
                                        <Text key={role.id} style={{color: role.colorString || "var(--header-secondary)"}}>
                                            @{role.name}
                                        </Text>
                                        <br/>
                                    </>
                                ))
                            ) : (
                                <Text>No roles have explicit access.</Text>
                            )}
                        </div>
                        <div style={{flex: 1}}>
                            <Header tag={HeaderTags.H5} class={classes.bold}>
                                Users with access
                            </Header>
                            {usersWithAccess.length > 0 ? (
                                usersWithAccess.map((user) => (
                                    <div style={{"align-items": "center", "display": "flex"}}>
                                        <img
                                            style={{
                                                width: "25px",
                                                height: "25px",
                                                margin: "2px",
                                                "border-radius": "100%"

                                            }}
                                            alt={user.username}

                                            src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=256`}
                                        />
                                        <Text style={{}} key={user.id}>{user.username}</Text>
                                        <br/>
                                    </div>
                                ))
                            ) : (
                                <Text>No users have explicit access.</Text>
                            )}
                        </div>
                    </div>
                </Show>
            </div>
        </div>
    );
};
