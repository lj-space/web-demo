import { createPinia, defineStore } from "pinia";

const pinia = createPinia();

const useStore = defineStore("main", {
  state: () => ({
    counter: 0,
    name: "lj-space",
    email: "1355187996@qq.com",
    isAdmin: true,
  }),
  actions: {
    increment() {
      this.counter++;
    },
  },
});

export { useStore };
export default pinia;
