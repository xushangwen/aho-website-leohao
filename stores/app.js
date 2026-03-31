import { defineStore} from "pinia";

export const useAppStore = defineStore('app', {
    state: () => ({
        prodCate: [],
        postCate: [],
    }),
    actions: {
        setProdCate(prodCate) {
            this.prodCate = prodCate
        },
        setPostCate(postCate) {
            this.postCate = postCate
        }
    }
})

export default useAppStore
