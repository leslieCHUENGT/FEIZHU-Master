import { defineStore } from "pinia";
import { homeApi } from '../service/index'

export const useHomeStore = defineStore("home", {
    state: () => {
      return {
        sidebar:{ }
      }
    },
    actions: {
      async getSideBar() {
        const [e, r] = await homeApi.getSideBar();
        if (!e && r) this.sidebar = r
      }
    },
});
