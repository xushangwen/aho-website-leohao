<template>
    <div class="profile-list">
        <div class="wrap">
            <div class="item animate-show-delay"
                 v-for="(item, index) in profileData"
                 :key="`item-${index}`"
                 v-fade-in="{ mode: 'delay' }"
            >
                <div class="label">{{ locale === 'en' ? item.labelEn : item.label }}</div>
                <div class="data">
                    <div class="num">{{item.num}}</div>
                    <div class="unit">{{item.unit}}</div>
                </div>
                <div class="abst">
                    <p
                        v-for="(abstItem, abstIndex) in (locale === 'en' ? item.abstEn : item.abst)"
                        :key="`abstItem-${abstIndex}`"
                    >{{abstItem}}</p>
                </div>
                <div class="icon" v-html="item.icon"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()
const appConfig = useAppConfig()
const profileData = ref(appConfig.clientConfig.profileData)
const { locale } = useI18n()
</script>

<style scoped lang="scss">
.profile-list {
    >.wrap {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        @include mo {
            flex-flow: row wrap;
        }
    }
    .item {
        width: 305px;
        height: 226px;
        padding-left: 20px;
        border-left: 1px solid var(--main-light-gray);
        position: relative;

        // laptop (≤1400px)：item 宽度随容器缩放
        @include lap {
            width: auto;
            flex: 1;
            height: auto;
            min-height: 180px;
            padding: 0 16px 16px 20px;
        }
        // mobile (≤992px)：2列网格
        @include mo {
            width: 50%;
            flex: none;
            height: auto;
            min-height: 140px;
            padding: 16px 12px 16px 16px;
        }

        .label {
            color: var(--main-black, #000);
            font-size: 18px;
            @include lap { font-size: 16px; }
            @include mo { font-size: 14px; }
        }
        .data {
            text-edge: cap;
            font-family: 'Google Sans', SpaceGrotesk, sans-serif;
            font-size: 60px;
            font-weight: 700;
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-items: flex-end;
            color: var(--main-blue);
            @include lap { font-size: 48px; }
            @include mo { font-size: 36px; }
        }
        .abst {
            font-size: 14px;
            color: var(--main-blue);
            @include mo { font-size: 12px; }
            p {
                margin-block-start: 0;
                margin-block-end: 0;
                line-height: 1.3;
            }
            p:last-child {
                font-weight: bold;
            }
        }
        &::after {
            content: '';
            display: block;
            width: 1px;
            height: 85px;
            background-color: var(--main-orange);
            position: absolute;
            left: -1px;
            top: 37px;
        }
        .icon {
            position: absolute;
            left: 20px;
            bottom: -2px;
            @include mo {
                display: none;
            }
        }
    }
}
</style>
