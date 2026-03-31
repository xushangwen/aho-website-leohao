import { defineStore } from 'pinia'

// main is the name of the store. It is unique across your application
// and will appear in devtools
export const useEventStore = defineStore('event', {
    // a function that returns a fresh state
    state: () => ({
        docScroll: [0, 0], // [left, top]
        docScrollTop: 0,
        windowWidth: 0,
        windowHeight: 0,
        docWidth: 0
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
        setScrollTop(num) {
            this.docScrollTop = num
        },
        setWindowSize(size) {
            const {width, height} = size
            this.windowWidth = width
            this.windowHeight = height
        },
        setScroll(array) {
            this.docScroll = array
        }
    },
})

export default useEventStore
