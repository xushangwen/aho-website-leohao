<template>
    <section class="product-list">
        <div class="wrap">
            <div class="top">
                <div class="s-t">
                    <div class="t1">我们的产品</div>
                    <div class="abst">秉承“专业制造、专心服务”的核心理念，积极进取，创新匠造</div>
                </div>
                <NuxtLink v-if="usemore" class="more" :to="`/product`">
                    <div class="_btn line">
                        <div class="_str"><span>探索所有产品</span></div>
                        <i class="_icon ri-add-fill"></i>
                    </div>
                </NuxtLink>
            </div>

            <div class="list row">
                <NuxtLink
                    class="item col-lg-6"
                    v-for="(item, index) in list"
                    :key="index"
                    :to="item.link"
                >
                    <div class="item-wrapper">
                        <EleRatioWrapper
                            class=""
                            innerClass="bg"
                            ratio="0.55"
                            sm="0.58"
                        >
                            <img :src="item.cover" alt="">
                        </EleRatioWrapper>
                        <div class="info">
                            <div class="left">
                                <div class="t1">{{ item.name }}</div>
                                <div class="abst">{{item.abst}}</div>
                            </div>
                            <div class="_btn sm">
                                <div class="_str">了解更多</div>
                                <i class="_icon ri-arrow-right-line"></i>
                            </div>
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup>

defineProps({
    list: Array,
    usemore: Boolean
})

onMounted(() => {

})

</script>

<style scoped lang="scss">
.product-list {
    padding: tovw(100px) 0;
    .top {
        @include flex-r();
        justify-content: space-between;
        align-items: center;
    }
    .s-t {
        color: black;
        @include flex-c();
        gap: 12px;
        .t1 {
            font-size: fluid(36px, 24px);
            font-weight: 700;
            text-transform: uppercase;
        }
        .abst {
            font-size: 18px;
        }
    }
}
@include mo {
    .product-list {
        padding: 64px 0 32px;
        .s-t {
            .t1 {
                font-size: 24px;
            }
            .abst {
                font-size: 16px;
            }
        }
        .more {
            display: none;
        }
    }
}

.product-list {
    .list {
        --bs-gutter-x: 40px;
        margin-top: tovw(50px);
        margin-right: calc(-1* var(--bs-gutter-x));
        margin-left: calc(-1* var(--bs-gutter-x));
        @include mo {
            margin-top: 32px;
        }
        .item {
            padding-right: var(--bs-gutter-x);
            padding-left: var(--bs-gutter-x);
            margin-bottom: calc(var(--bs-gutter-x)*2);
            @include mo {
                margin-bottom: 32px;
            }
           .item-wrapper {
               cursor: pointer;
               transition: all .3s;
               padding-bottom: 4px;
               position: relative;
               &:after {
                   content: '';
                   display: block;
                   width: 100%;
                   height: 4px;
                   position: absolute;
                   bottom: 0;
                   left: 0;
                   background-color: var(--main-blue, #196BB6);
                   transform: scaleX(0);
                   transition: all .3s;
               }
           }
            &:hover {
                .item-wrapper {
                    box-shadow: 0 15px 20px -3px lighten($BC, 50%);
                    &:after {
                        transform: scaleX(1);
                    }
                }
            }
        }
        .bg {
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .info {
            background: #FAFAFA;
            padding: 36px;
            height: 225px;
            @include flex-r();
            justify-content: space-between;
            align-items: center;
            .left {
                margin-right: 36px;
                max-width: 450px;
                height: 100%;
                .t1 {
                    color: var(--main-blue, #196BB6);
                    font-size: fluid(30px, 20px);
                    font-weight: 700;
                    line-height: 1.5;
                }
                .abst {
                    max-width: 440px;
                    margin-top: 12px;
                    color: #6B6B6B;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 1.5;
                    text-transform: uppercase;
                }
            }
            ._btn {
                flex: none;
            }
            @include mo {
                padding: 24px;
                @include flex-c();
                justify-content: flex-start;
                align-items: flex-start;
                height: auto;
                .left {
                    width: 100%;
                    margin-right: 0;
                    .t1 {
                        font-size: 20px;
                    }
                    .abst {
                        font-size: 14px;
                    }
                }
                ._btn {
                    margin-top: 18px;
                }
            }
        }
    }
}
</style>
