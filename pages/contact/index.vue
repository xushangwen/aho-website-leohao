<template>
    <main>
        <EleDefaultCover
            image="/images/contact/cover.jpg"
            image-mobile="/images/contact/cover_m.jpg"
            :text="$t('contact.coverTitle')"
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
                                    <span class="label">{{ $t('contact.addressLabel') }}</span>
                                    <span class="value" v-html="fmtAddr(company.address)"></span>
                                </div>
                                <div class="meta-item" v-if="company.zip">
                                    <span class="label">{{ $t('contact.zipLabel') }}</span>
                                    <span class="value">{{ company.zip }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 联系方式卡片 -->
                    <div class="factory-card contact-card">
                        <div class="contact-body">
                            <div class="contact-title">{{ $t('contact.contactTitle') }}</div>
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
                <div class="section-name">{{ $t('contact.inquiryTitle') }}</div>
                <EleFeedback class="feedback"></EleFeedback>
            </div>
        </section>

        <!-- 销售处及海外代表处 -->
        <section class="s3">
            <div class="wrap">
                <div class="section-name">{{ $t('contact.salesTitle') }}</div>
                <div class="pos-list">
                    <div
                        class="item"
                        v-for="(item, index) in salesPoints"
                        :key="`${item.pointName}-${index}`"
                    >
                        <div class="name">{{ locale === 'en' ? (item.pointNameEn || item.pointName) : item.pointName }}</div>
                        <div class="contact-info">
                            <div class="subitem">
                                <i class="icon ri-map-pin-5-line"></i>
                                <div class="value">{{ locale === 'en' ? (item.addressEn || item.address) : item.address }}</div>
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
const { t, locale } = useI18n()

const breadcrumb = computed(() => [{ name: t('contact.coverTitle'), link: '' }])

const companyImages = [
    '/images/home/about-bg.jpg',
    '/images/contact/haihong.png',
    '/images/contact/thailand.png',
    '/images/contact/singapore.png',
    '/images/contact/hongkong.jpg',
]
const companyKeys = ['company1', 'company2', 'company3', 'company4', 'company5']

const companies = computed(() => companyKeys.map((key, i) => ({
    name: t(`contact.${key}Name`),
    type: t(`contact.${key}Type`),
    address: t(`contact.${key}Address`),
    zip: t(`contact.${key}Zip`),
    image: companyImages[i],
})))

const contactInfo = computed(() => [
    { icon: 'ri-user-voice-line', label: t('contact.contactPersonLabel'), value: t('contact.contactPerson') },
    { icon: 'ri-phone-line', label: t('contact.phoneLabel'), value: t('contact.phoneNumber') },
    { icon: 'ri-mail-line', label: t('contact.emailLabel'), value: t('contact.emailAddress') },
])

// \n → <br>；CSS 控制 br 在桌面隐藏、手机显示，桌面不产生空格
function fmtAddr(addr) {
    return addr.replace(/\n/g, '<br>')
}
</script>

<style scoped lang="scss">
/* ===== Section 1: 制造基地 ===== */
.s1 {
    padding: fluid(100px, 40px) 0 fluid(80px, 32px);
    @include tab { padding: 56px 0 44px; }
    @include mo { padding: 36px 0 28px; }
    .section-hd {
        margin-bottom: fluid(48px, 20px);
        text-align: center;
        .cn {
            font-size: fluid(38px);
            font-weight: 700;
            color: #000;
            line-height: 1;
        }
    }

    .factory-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: fluid(32px, 20px);
        @include lap {
            grid-template-columns: repeat(2, 1fr);
        }
        @include mo {
            grid-template-columns: 1fr;
        }
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
            height: fluid(220px, 160px);
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
                font-size: fluid(22px);
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
                font-size: fluid(20px, 16px);
                font-weight: 700;
                color: var(--main-blue);
                line-height: 1.3;
                margin-bottom: fluid(28px);
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
                        text-wrap: pretty;
                        word-break: keep-all;
                        overflow-wrap: break-word;
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
            font-size: fluid(22px);
            font-weight: 700;
            color: var(--main-blue);
            margin-bottom: fluid(28px);
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
            font-size: fluid(26px);
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
    padding: fluid(100px, 48px) 0;
    background-color: #F8F8F8;
    .section-name {
        font-size: fluid(38px, 26px);
        font-weight: 700;
        text-align: center;
    }
    .feedback {
        margin-top: fluid(60px, 32px);
    }
    @include tab { padding: 56px 0; }
    @include mo {
        padding: 36px 0;
        .section-name { font-size: 26px; }
        .feedback { margin-top: 32px; }
    }
}

/* ===== Section 3: 销售处 ===== */
.s3 {
    padding: fluid(100px, 48px) 0;
    .section-name {
        font-size: fluid(38px, 26px);
        font-weight: 700;
        text-align: center;
    }
    @include tab { padding: 56px 0; }
    @include mo {
        padding: 36px 0;
        .section-name { font-size: 26px; }
    }
    .pos-list {
        margin-top: fluid(60px, 32px);
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: fluid(60px, 24px);
        grid-row-gap: 0;
        @include mo {
            grid-template-columns: 1fr;
            grid-column-gap: 0;
            margin-top: 32px;
        }
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

<style>
/* v-html 注入的 <br> 不受 scoped 控制，需用全局样式 */
.factory-meta .value br { display: none; }
@media (max-width: 992px) {
    .factory-meta .value br { display: inline; }
}
</style>
