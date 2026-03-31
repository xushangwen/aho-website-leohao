<template>
    <main>
        <EleDefaultCover
            image="/images/about/culture/cover.jpg"
            image-mobile="/images/about/culture/cover-m.jpg"
            text="企业文化"
        ></EleDefaultCover>
        <EleBreadcrumb
            :navigate="breadcrumb"
        />
        <section class="s1">
            <div
                class="cont"
            >
                <img src="/images/about/culture/s1-content.jpg" alt="">
            </div>
        </section>
        <section class="s2">
            <div class="wrap">
                <div class="t">核心价值观</div>
                <div class="list">
                    <div
                        class="item"
                        v-for="(item, index) in valueList"
                        :key="index"
                        :class="{active: index === indexValue}"
                        @mouseenter="indexValueUpdate(index)"
                    >
                        <img :src="item.cover" alt="" class="bg">
                        <div class="t1">{{ item.t1 }}</div>
                        <div class="ab">{{ item.abst }}</div>
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                            <path d="M13.5 13.5V7.5H16.5V13.5H22.5V16.5H16.5V22.5H13.5V16.5H7.5V13.5H13.5ZM15 30C6.705 30 0 23.28 0 15C0 6.705 6.705 0 15 0C23.28 0 30 6.705 30 15C30 23.28 23.28 30 15 30ZM15 27C21.615 27 27 21.615 27 15C27 8.37 21.615 3 15 3C8.37 3 3 8.37 3 15C3 21.615 8.37 27 15 27Z" fill="white"/>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
const breadcrumb = ref([
    {
        name: '关于澳弘',
        link: '/about'
    }, {
        name: '企业文化',
        link: ''
    }
])
const valueList = ref([
    {
        cover: '/images/about/culture/value/1.jpg',
        t1: '市场为王',
        abst: '坚持市场导向，追求稳健和均衡的市场运营'
    },
    {
        cover: '/images/about/culture/value/2.jpg',
        t1: '专注品质',
        abst: '坚持市场导向，追求稳健和均衡的市场运营'
    },
    {
        cover: '/images/about/culture/value/3.jpg',
        t1: '提高效率',
        abst: '坚持市场导向，追求稳健和均衡的市场运营'
    },
    {
        cover: '/images/about/culture/value/4.jpg',
        t1: '注重团队',
        abst: '坚持市场导向，追求稳健和均衡的市场运营'
    },
    {
        cover: '/images/about/culture/value/5.jpg',
        t1: '遵守法规',
        abst: '坚持市场导向，追求稳健和均衡的市场运营'
    },
    {
        cover: '/images/about/culture/value/6.jpg',
        t1: '社会责任',
        abst: '坚持市场导向，追求稳健和均衡的市场运营'
    },
])
const indexValue = ref(0)
function indexValueUpdate(index) {
    indexValue.value = index
}
</script>

<style scoped lang="scss">
.s1 {
    width: 100%;
    height: auto;
    > .cont,
    img {
        width: 100%;
        height: auto;
    }
}
.s2 {
    padding: 100px 0;
    .t {
        font-size: 38px;
        font-weight: bold;
    }
    .list {
        height: 523px;
        margin-top: 48px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: flex-start;
        border-radius: 10px;
        overflow: hidden;
        .item {
            width: 12.6%;
            height: 100%;
            flex: none;
            overflow: hidden;
            transition: all .3s;
            padding: 50px;
            display: flex;
            flex-flow: column nowrap;
            justify-content: flex-end;
            align-items: center;
            gap: 14px;
            .t1 {
                color: white;
                font-size: 24px;
            }
            .ab {
                visibility: hidden;
                opacity: 0;
                height: 0;
                color: white;
            }
            .icon {
                z-index: 9;
                opacity: .5;
            }
            &.active {
                width: 37%;
                justify-content: flex-start;
                align-items: flex-start;
                .t1 {
                    font-size: 36px;
                }
                .ab {
                    visibility: visible;
                    opacity: 1;
                    height: auto;
                }
                .icon {
                    display: none;
                }
            }
            img {
                position: absolute;
                z-index: 0;
                inset: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}
</style>
