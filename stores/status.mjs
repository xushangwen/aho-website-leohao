import { defineStore } from 'pinia'

// main is the name of the store. It is unique across your application
// and will appear in devtools
export const useStatusStore = defineStore('status', {
    // a function that returns a fresh state
    state: () => ({
        /**
         * no
         * closing
         * loaded
         */
        loadingStatus: 'no',
    }),
    // optional getters
    getters: {
        // getters receive the state as first parameter
        // doubleCounter: (state) => state.counter * 2,
        // use getters in other getters
        // doubleCounterPlusOne(): number {
        //     return this.doubleCounter + 1
        // },
    },
    // optional actions
    actions: {
        // reset() {
        //     // `this` is the store instance
        //     this.counter = 0
        // },
    },
})
