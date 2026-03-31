<template>
    <div class="_table" v-if="readyStatus">
        <table border="0">
            <tr class="head">
                <th
                    v-for="(headItem, headIndex) in head"
                    :key="headIndex"
                    :class="headItem.sortable ? 'sortable' : ''"
                    @click="switchSort(headIndex)"
                >
                    <span v-html="headItem.label"></span>
                    <svg
                        v-if="headItem.sortable && headItem.sort"
                        :class="headItem.sort?headItem.sort : ''"
                        class="sort" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8.00016 12.6673V3.33398M8.00016 3.33398L3.3335 8.00065M8.00016 3.33398L12.6668 8.00065" stroke="#667085" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </th>
            </tr>
            <tr
                v-for="(rowItem, rowIndex) in rows"
                :key="`row${rowIndex}`"
                class="data-row"
            >
                <td
                    v-for="(cellItem, cellIndex) in rowItem"
                    :key="`${rowIndex}${cellIndex}`"
                    v-html="cellItem"
                    :class="cellIndex === 'name' ? 'cursor':''"
                    @click="clickItem(rowIndex, cellIndex)"
                ></td>
            </tr>
        </table>
        <div class="tools">
            <BtnDefault
                @click="goPrev()"
                class="prev"
                :class="{
                    show: numPrev > 0
                }"
            >
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M15.8332 9.99935H4.1665M4.1665 9.99935L9.99984 15.8327M4.1665 9.99935L9.99984 4.16602" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Previous</span>
            </BtnDefault>
            <div class="pagi" :class="{locked: lockClick}">
                <div
                    v-for="(item, index) in  pageList"
                    :key="index"
                    :class="{
                        item: typeof item !== 'string',
                        dot: item === '...',
                        active: item === pagenow
                    }"
                >
                    {{ item }}
                </div>
            </div>

            <BtnDefault
                @click="goNext()"
                class="next"
                :class="{
                    show: pagenow !== pagetotal
                }"
            >
                <span>Next</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4.1665 9.99935H15.8332M15.8332 9.99935L9.99984 4.16602M15.8332 9.99935L9.99984 15.8327" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </BtnDefault>
        </div>
    </div>

</template>

<script setup>
    const emit = defineEmits(['click_item', 'click_page'])
    const readyStatus = ref(false)
    const props = defineProps({
        rows: Array,
        columns: Array,
        limit: Number,
        pagenow: Number,
        pagetotal: Number
    });

    const {
        rows, columns, limit, pagenow, pagetotal
    } = toRefs(props);

    const pageList = ref([])
    const lockClick = ref(false)
    let timerLock = null

    const numPrev = computed(() => {
        return pagenow.value - 1
    })
    const numNext = computed(() => {
        return pagenow.value + 1
    })

    watch(pagenow, (newValue, oldValue) => {
        generatePageNum()
    },{ immediate: true })


    const head = reactive([
        {
            label: 'Model',
            sortable: false,
            keywords: 'model',
        },
        {
            label: 'Product<br>Name',
            sortable: false,
            keywords: 'name',
        },
        {
            label: 'Rated<br>Voltage<br>(V)',
            sortable: true,
            sort: '',
            keywords: 'rated_voltage',
        },
        {
            label: 'Operating<br>Voltage<br>(V)',
            sortable: true,
            sort: '',
            keywords: 'operating_voltage',
        },
        {
            label: 'Curren<br>Consumption<br>(mA)',
            sortable: true,
            sort: '',
            keywords: 'consumption',
        },
        {
            label: 'SPL<br>(dB)',
            sortable: true,
            sort: '',
            keywords: 'spl',
        },
        {
            label: 'Resonant<br>Frequency<br>(Hz)',
            sortable: true,
            sort: '',
            keywords: 'resonant_frequency',
        },
        {
            label: 'Operating<br>Temperature<br>(℃)',
            sortable: true,
            sort: '',
            keywords: 'operating_temperature',
        },
        {
            label: 'Weight<br>(g)',
            sortable: true,
            sort: '',
            keywords: 'weight',
        },
    ])
    // const row = reactive([
    //     {
    //         model: '',
    //         name: 'LPB1475B-TO- 12-4.0-7.6-R',
    //         rated_voltage: '12',
    //         operating_voltage: '3～16',
    //         consumption: '≤12',
    //         spl: '≥90@10cm',
    //         resonant_frequency: '4000±500',
    //         operating_temperature: '-40 ～ +85',
    //         weight: '0.96'
    //     }
    // ])

    // const rowTrans = computed(() => Object.values(row))

    onMounted(() => {
        readyStatus.value = true
    })

    function goNext() {
        if (pagenow.value >= pagetotal.value) {
            return
        }
        goPage(numNext.value)
    }

    function goPrev() {
        if (pagenow.value <= 1) {
            return
        }
        goPage(numPrev.value)
    }

    function goPage(num) {
        if (num < 1 || num > pagetotal.value || num === pagenow.value) return
        emit('click_page', num)
        clearTimeout(timerLock)
        lockClick.value = true
        timerLock = setTimeout(() => {
            lockClick.value = false
        })
    }

    function generatePageNum() {
        const arr = []
        if (pagetotal.value <10) {

            for(let i = 1; i < pagetotal.value + 1; i += 1 ) {
                arr.push(i)
            }
            pageList.value = arr
            return
        }

        /**
         * 在两边
         * [1, 2, 3, '...', '8', '9', '10']
         */
        if (pagenow.value < 5 || pagenow.value > (pagetotal.value - 5)) {
            for(let i = 1; i < 4; i += 1 ) {
                arr.push(i)
            }
            if (pagenow.value === 4) {
                arr.push(4)
                arr.push(5)
            }
            arr.push('...')
            if (pagenow.value === pagetotal.value - 4) {
                arr.push(pagetotal.value - 5)
                arr.push(pagetotal.value - 4)
            }
            for(let i = pagetotal.value - 3; i < pagetotal.value + 1; i += 1 ) {
                arr.push(i)
            }
            pageList.value = arr
            return
        }

        /**
         * 在中间
         * [1, 2, 3, '...', '8', '9', '10']
         */
        for(let i = 1; i < 3; i += 1 ) {
            arr.push(i)
        }
        arr.push('...')
        for(let i = pagenow.value - 1; i < pagenow.value + 2; i += 1 ) {
            arr.push(i)
        }
        arr.push('...')
        for(let i = pagetotal.value - 2; i < pagetotal.value + 1; i += 1 ) {
            arr.push(i)
        }
        pageList.value = arr
        return

    }

    /**
     *
     * @param rowIndex 行号
     * @param cellIndex 列字段
     */
    function clickItem(rowIndex, cellIndex) {
        emit('click_item', rowIndex, cellIndex)
    }

</script>

<style scoped lang="scss">
    ._table {
        overflow: hidden;
        border-radius: 8px;
        border: 1px solid var(--gray-200, #EAECF0);
        background: var(--base-white, #FFF);
        /* Shadow/sm */
        box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10);
    }
    table {
        width: 100%;
        border-spacing: 0;
        th {
            height: 88px;
            border-bottom: 1px solid var(--gray-200, #EAECF0);
            background: var(--gray-50, #F9FAFB);
            color: var(--gray-500, #667085);

            /* Text xs/Medium */
            font-family: Inter;
            font-size: 12px;
            font-style: normal;
            font-weight: 500;
            line-height: 18px; /* 150% */
            text-align: left;
            &.sortable {
                cursor: pointer;
            }
            >span {
                display: inline-block;
                text-align: center;
            }
            .sort {
                display: inline-block;
                vertical-align: middle;
                /*padding-top: 5px;*/
            }
        }
        th, td {
            box-sizing: border-box;
            padding: 12px 24px;
        }
        td {
            height: 100px;
            border-bottom: 1px solid var(--gray-200, #EAECF0);
            cursor: pointer;
        }
        tr.data-row {
            transition: background-color .3s;
            &:hover {
                background-color: #f5f5f5;
            }
        }
    }

    .cursor {
        cursor: pointer;
    }

    .tools {
        padding: 12px 24px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        .prev,
        .next {
            visibility: hidden;
            &.show {
                visibility: visible;
            }
        }
        .pagi {
            display: flex;
            flex-flow: row nowrap;
            justify-content: center;
            align-items: center;
            &.locked {
                opacity: .4;
            }
            .item {
                width: 40px;
                height: 40px;
                border-radius: 40px;
                transition: all .3s;
                cursor: pointer;
                text-align: center;
                line-height: 40px;
                color: var(--gray-800, #1D2939);
                margin: 0 5px;
                /* Text sm/Medium */
                font-family: Inter;
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                &:hover {
                    background-color: #fafafa;
                }
                &.active {
                    color: #ffffff;
                    background: var(--gray-50, #1D2939);
                }
            }
        }
    }
</style>
