let _mods = webpackChunkdiscord_app.push([[Symbol()],{},r=>r.c]);
webpackChunkdiscord_app.pop();

let findByProps = (...props) => {
    for (let m of Object.values(_mods)) {
        try {
            if (!m.exports || m.exports === window) continue;
            if (props.every((x) => m.exports?.[x])) return m.exports;
            for (let ex in m.exports) {
                if (props.every((x) => m.exports?.[ex]?.[x]) && m.exports[ex][Symbol.toStringTag] !== 'IntlMessagesProxy') return m.exports[ex];
            }
        } catch {}
    }
}

const PermissionStore = findByProps("canBasicChannel");
const UserStore = findByProps("getUserStoreVersion");
const GuildStore = findByProps("getGuildCount");

const setProtoFields = (obj, fields, value) => fields.forEach(field => Object.getPrototypeOf(obj)[field] = value);
const permissionProps = Object.fromEntries(Object.keys(PermissionStore.getGuildPermissionProps({ id: 0 })).map(key => [key, true]));

setProtoFields(PermissionStore, ["getGuildPermissions", "getChannelPermissions", "computePermissions", "computeBasicPermissions"], () => ~0n);
setProtoFields(PermissionStore, ["getGuildPermissionProps"], guild => ({ ...permissionProps, guild }));
setProtoFields(PermissionStore, ["can", "canAccessGuildSettings", "canAccessMemberSafetyPage", "canBasicChannel", "canImpersonateRole", "canManageUser", "canWithPartialContext", "isRoleHigher"], () => true);
PermissionStore.emitChange();

GuildStore.addChangeListener(() => GuildStore.getGuildsArray().forEach(g => g.ownerId = UserStore.getCurrentUser().id));
GuildStore.emitChange();
