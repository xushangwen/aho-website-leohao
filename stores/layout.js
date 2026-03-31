import { defineStore} from "pinia";

export const useLayoutStore = defineStore('layout', {
    state: () => ({
        orgInfo: {}, // 机构信息
        nav: [],
    }),
    actions: {
        setOrgInfo(orgInfo) {
            this.orgInfo = orgInfo
        },
        setNav(nav) {
            this.nav = nav
        }
    }
})

export default useLayoutStore
