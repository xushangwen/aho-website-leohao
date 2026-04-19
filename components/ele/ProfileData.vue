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
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        column-gap: 24px;
        row-gap: 28px;
    }

    @media screen and (max-width: 1320px) {
        >.wrap {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }

    @media screen and (max-width: 560px) {
        >.wrap {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }

    .item {
        width: auto;
        min-width: 0;
        min-height: 226px;
        padding: 0 20px 0;
        border-left: 1px solid var(--main-light-gray);
        position: relative;
        display: grid;
        grid-template-rows: auto auto 1fr auto;
        row-gap: 4px;

        @include mo {
            row-gap: 16px;
            min-height: 160px;
            padding: 16px 12px 16px 16px;
            border-left: 0.5px solid var(--main-light-gray);
        }

        .label {
            color: var(--main-black, #000);
            font-size: 18px;
            line-height: 1.35;
            @include mo { font-size: 14px; }
        }
        .data {
            text-edge: cap;
            font-family: 'Google Sans', SpaceGrotesk, sans-serif;
            // clamp(28px, 3.5vw, 60px)：4 列窄区间（约 1320px）时缩至 ~46px，避免长数字溢出列边界
            font-size: clamp(28px, 3.5vw, 60px);
            font-weight: 700;
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-items: flex-end;
            gap: 4px;
            color: var(--main-blue);
            @include mo {
                font-size: 28px;
                font-size: clamp(24px, 7vw, 36px);
            }
        }
        .abst {
            font-size: 14px;
            color: var(--main-blue);
            align-self: start;
            padding-right: 0;
            white-space: normal;
            word-break: normal;
            line-break: auto;
            overflow-wrap: normal;

            // 只在更宽设备保留更强的中文排版优化，避免 iOS WebKit 在手机端
            // 对 text-wrap: pretty 的断行策略过度介入，出现“标点优先回行”。
            @media screen and (min-width: 993px) {
                text-wrap: pretty;
                word-break: keep-all; // CJK 只在标点（，、。）处回行，不在字间任意断
            }

            @include mo {
                font-size: 12px;
                padding-right: 32px;
                text-wrap: initial;
                overflow-wrap: break-word;
            }
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
            @include mo {
                left: -1px;
                top: 24px;
                height: 60px;
            }
        }
        .icon {
            // 大屏：参与文档流，左对齐，与 border-left 底部完全齐平
            position: static;
            align-self: end;
            @include mo {
                // 手机端保持绝对定位右下角水印效果
                position: absolute;
                right: 8px;
                bottom: 0;
                opacity: 0.15;
                transform: scale(1);
                transform-origin: bottom right;
            }
            :deep(svg path) {
                fill: var(--main-blue);
            }
            :deep(i) {
                font-size: 24px;
                color: var(--main-blue);
            }
        }
    }
}
</style>
