<template>
    <main>
        <EleDefaultCover
            image="/images/contact/cover.jpg"
            image-mobile="/images/contact/cover_m.jpg"
            text="联系我们"
        ></EleDefaultCover>
        <EleBreadcrumb :navigate="breadcrumb" />

        <!-- 制造基地 + 联系方式 -->
        <section class="s1">
            <div class="wrap">
                <!-- 工厂 & 离岸公司卡片 + 联系方式 -->
                <div class="factory-grid">
                    <div class="factory-card" v-for="(company, index) in companies" :key="index">
                        <div class="factory-img">
                            <img :src="company.image" :alt="company.name">
                            <div class="img-icon" :class="index < 3 ? 'factory' : 'company'">
                                <i :class="index < 3 ? 'ri-building-line' : 'ri-building-4-line'"></i>
                            </div>
                        </div>
                        <div class="factory-body">
                            <div class="factory-type">{{ company.type }}</div>
                            <div class="factory-name">{{ company.name }}</div>
                            <div class="factory-meta">
                                <div class="meta-item">
                                    <span class="label">地址</span>
                                    <span class="value">{{ company.address }}</span>
                                </div>
                                <div class="meta-item" v-if="company.zip">
                                    <span class="label">邮编</span>
                                    <span class="value">{{ company.zip }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 联系方式卡片 -->
                    <div class="factory-card contact-card">
                        <div class="contact-body">
                            <div class="contact-title">联系方式</div>
                            <div class="contact-list">
                                <div class="contact-item" v-for="(item, index) in contactInfo" :key="index">
                                    <i :class="['contact-icon', item.icon]"></i>
                                    <div class="contact-content">
                                        <div class="contact-label">{{ item.label }}</div>
                                        <div class="contact-value">{{ item.value }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 留言表单 -->
        <section class="s2">
            <div class="wrap">
                <div class="section-name">如您有需求，请与我们联系</div>
                <EleFeedback class="feedback"></EleFeedback>
            </div>
        </section>

        <!-- 销售处及海外代表处 -->
        <section class="s3">
            <div class="wrap">
                <div class="section-name">销售处及海外代表处</div>
                <div class="pos-list">
                    <div
                        class="item"
                        v-for="(item, index) in salesPoints"
                        :key="`${item.pointName}-${index}`"
                    >
                        <div class="name">{{ item.pointName }}</div>
                        <div class="contact-info">
                            <div class="subitem">
                                <i class="icon ri-map-pin-5-line"></i>
                                <div class="value">{{ item.address }}</div>
                            </div>
                        </div>
                        <div class="contact-info">
                            <div class="subitem" v-for="(nameItem, i) in item.name" :key="`name-${i}`">
                                <i class="icon ri-user-voice-line"></i>
                                <div class="value">{{ nameItem }}</div>
                            </div>
                        </div>
                        <div class="contact-info">
                            <div class="subitem" v-for="(telItem, i) in item.tel" :key="`tel-${i}`">
                                <i class="icon ri-phone-line"></i>
                                <div class="value">{{ telItem }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
const appConfig = useAppConfig()
const salesPoints = reactive(appConfig.clientConfig.salesPoints)

const breadcrumb = ref([{ name: '联系我们', link: '' }])

const companies = [
    {
        name: '常州澳弘电子股份有限公司',
        type: '双面 / 多层 / HDI板制造基地',
        address: '江苏省常州市新北区电子产业园新科路15号',
        zip: '213000',
        image: '/images/home/about-bg.jpg',
    },
    {
        name: '常州海弘电子有限公司',
        type: '单面PCB制造基地',
        address: '江苏省常州市滨江经济开发区兴塘路16号',
        zip: '213000',
        image: '/images/contact/haihong.png',
    },
    {
        name: '澳弘（泰国）电子有限公司',
        type: '单面 / 双面 / 多层 / HDI板制造基地',
        address: '555 Moo 1, Soi Industry 5, Digital Park, Chachoengsao',
        zip: '24000',
        image: '/images/contact/thailand.png',
    },
    {
        name: 'Elite Prospect Singapore Pte. Ltd.',
        type: '离岸公司（新加坡）',
        address: '10 Marina Boulevard, Marina Bay Financial Centre, Singapore',
        zip: '018983',
        image: '/images/contact/singapore.png',
    },
    {
        name: 'Elite Prospect Trading Co. Ltd',
        type: '离岸公司（香港）',
        address: 'S602 Block A PMQ, 35 Aberdeen Street Central',
        zip: '999077',
        image: '/images/contact/hongkong.jpg',
    },
]

const contactInfo = [
    { icon: 'ri-user-voice-line', label: '联系人', value: '耿克非' },
    { icon: 'ri-phone-line', label: '电话', value: '0519-69887878 转 9666' },
    { icon: 'ri-mail-line', label: '邮箱', value: 'gengkf@czaohong.com' },
]
</script>

<style scoped lang="scss">
/* ===== Section 1: 制造基地 ===== */
.s1 {
    padding: tovw(100px) 0 tovw(80px);

    .section-hd {
        margin-bottom: tovw(48px);
        text-align: center;
        .cn {
            font-size: 38px;
            font-weight: 700;
            color: #000;
            line-height: 1;
        }
    }

    .factory-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: tovw(32px);
    }

    .factory-card {
        display: flex;
        flex-direction: column;
        border: 1px solid var(--main-light-gray);
        overflow: hidden;
        transition: box-shadow .3s;
        &:hover {
            box-shadow: 0 8px 32px rgba(0,0,0,0.08);
            .factory-img img {
                transform: scale(1.04);
            }
        }

        .factory-img {
            width: 100%;
            height: tovw(220px);
            overflow: hidden;
            position: relative;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform .6s ease;
            }
            .img-icon {
                position: absolute;
                top: 16px;
                left: 16px;
                width: 44px;
                height: 44px;
                border-radius: 6px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                font-size: 22px;
                backdrop-filter: blur(8px);
                &.factory {
                    background: var(--main-blue);
                    opacity: 0.9;
                }
                &.company {
                    background: var(--main-orange);
                    opacity: 0.9;
                }
            }
        }

        .factory-body {
            padding: 24px 28px 28px;
            flex: 1;

            .factory-type {
                font-size: 13px;
                color: var(--main-orange);
                font-weight: 500;
                letter-spacing: 0.02em;
                margin-bottom: 8px;
            }

            .factory-name {
                font-size: tovw(20px);
                font-weight: 700;
                color: var(--main-blue);
                line-height: 1.3;
                margin-bottom: 28px;
            }

            .factory-meta {
                display: flex;
                flex-direction: column;
                gap: 10px;
                padding-top: 18px;
                margin-top: 0;
                position: relative;
                
                // 灰色分隔线（完整宽度）
                &::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 1px;
                    background-color: var(--main-light-gray);
                }
                
                // 橙色短线叠加在灰色线上（垂直居中）
                &::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 32px;
                    height: 3px;
                    background-color: var(--main-orange);
                    transform: translateY(-1px);
                    z-index: 1;
                }

                .meta-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 12px;
                    font-size: 14px;
                    line-height: 1.5;

                    .label {
                        flex: none;
                        color: var(--main-dark-gray);
                        opacity: 0.6;
                        min-width: 28px;
                    }
                    .value {
                        color: var(--main-dark-gray);
                        font-weight: 500;
                    }
                }
            }
        }
    }

    /* 联系方式卡片（嵌入grid） */
    .contact-card {
        background: #fff;
        .contact-body {
            padding: 32px 28px;
            height: 100%;
            display: flex;
            flex-direction: column;
        }
        .contact-title {
            font-size: 22px;
            font-weight: 700;
            color: var(--main-blue);
            margin-bottom: 28px;
            padding-bottom: 20px;
            position: relative;
            // 灰色分隔线（1px）
            &::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 1px;
                background-color: var(--main-light-gray);
            }
            // 橙色短线（3px，垂直居中在灰线上）
            &::before {
                content: '';
                position: absolute;
                bottom: -1px;
                left: 0;
                width: 40px;
                height: 3px;
                background-color: var(--main-orange);
                z-index: 1;
            }
        }
        .contact-list {
            display: flex;
            flex-direction: column;
            gap: 16px;
            flex: 1;
        }
        .contact-item {
            display: flex;
            align-items: flex-start;
            gap: 14px;
            padding: 16px;
            background: #FAFAFA;
            border-radius: 4px;
            transition: all .3s;
            &:hover {
                background: #F0F0F0;
                transform: translateX(4px);
            }
        }
        .contact-icon {
            font-size: 26px;
            color: var(--main-orange);
            flex: none;
            margin-top: 1px;
        }
        .contact-content {
            flex: 1;
        }
        .contact-label {
            font-size: 12px;
            color: var(--main-dark-gray);
            opacity: 0.7;
            margin-bottom: 6px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }
        .contact-value {
            font-size: 16px;
            font-weight: 600;
            color: #000;
            line-height: 1.5;
        }
    }
}

/* ===== Section 2: 留言表单 ===== */
.s2 {
    padding: 100px 0;
    background-color: #F8F8F8;
    .section-name {
        font-size: 38px;
        font-weight: 700;
        text-align: center;
    }
    .feedback {
        margin-top: 60px;
    }
}

/* ===== Section 3: 销售处 ===== */
.s3 {
    padding: 100px 0;
    .section-name {
        font-size: 38px;
        font-weight: 700;
        text-align: center;
    }
    .pos-list {
        margin-top: tovw(60px);
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: tovw(60px);
        grid-row-gap: 0;
        .item {
            padding: 32px 12px;
            border-top: 1px solid var(--main-light-gray);
            cursor: pointer;
            transition: all .3s;
            &:hover {
                background-color: #F6F6F6;
                border-top-color: var(--main-orange);
            }
            .name {
                font-size: 18px;
                font-weight: 700;
                color: var(--main-blue);
                line-height: 1;
                margin-bottom: 16px;
            }
            .contact-info {
                line-height: 1.3;
                @include flex-r(nowrap);
                margin-bottom: 6px;
                .subitem {
                    width: 100%;
                    color: var(--main-dark-gray);
                    font-size: 15px;
                    @include flex-r(nowrap);
                    align-items: flex-start;
                    .icon {
                        flex: none;
                        font-size: 15px;
                        color: var(--main-orange);
                        margin-right: 8px;
                        margin-top: 2px;
                    }
                    .value {
                        flex: auto;
                        line-height: 1.5;
                    }
                }
            }
        }
    }
}
</style>
