const stateKey = Symbol.for("shelter.xirreal.dev/premium-state");

export function getPremiumType(user) {
   return (user?.[stateKey] ?? user)?.premiumType;
}

// is this unnecessarly complicated? probably.
export function spoofPremium(UserStore) {
   if (!UserStore.getCurrentUser()) return;

   if (!UserStore[stateKey]) {
      const users = new WeakMap();
      UserStore[stateKey] = {
         leases: new Set(),
         unpatch: shelter.patcher.after("getCurrentUser", UserStore, (_, user) => {
            if (!user) return user;
            if (!users.has(user)) {
               users.set(
                  user,
                  new Proxy(user, {
                     get(target, key, receiver) {
                        if (key === "premiumType") return 2;
                        if (key === "perks") return null;
                        if (key === stateKey) return target;
                        return Reflect.get(target, key, receiver);
                     },
                  }),
               );
            }
            return users.get(user);
         }),
      };
   }
   const state = UserStore[stateKey];
   const lease = {};
   state.leases.add(lease);

   return () => {
      if (!state.leases.delete(lease) || state.leases.size) return;
      state.unpatch();
      delete UserStore[stateKey];
   };
}
