<template>
    <main>
        <EleDefaultCover
            image="/images/prod/cover.jpg"
            image-mobile="/images/prod/cover-m.jpg"
            :text="$t('invest.coverTitle')"
        ></EleDefaultCover>
        <EleBreadcrumb
            :navigate="breadcrumb"
        />

        <section class="s1">
            <div class="wrap">
                <a
                    class="ir-card"
                    href="https://www.cninfo.com.cn/new/disclosure/stock?stockCode=605058&orgId=9900039836#latestAnnouncement"
                    target="_blank"
                >
                    <img
                        src="/images/investors/getty-images-AM3wYIikxO4-unsplash.jpg"
                        alt="股票信息"
                        class="card-bg"
                    >
                    <div class="card-overlay"></div>
                    <div class="card-content">
                        <i class="card-icon ri-line-chart-line"></i>
                        <div class="card-en" v-if="locale !== 'en'">Stock Information</div>
                        <div class="card-cn">{{ $t('invest.stockInfo') }}</div>
                        <div class="_btn">
                            <div class="_str">{{ $t('invest.learnMore') }}</div>
                            <div class="_icon ri-arrow-right-line"></div>
                        </div>
                    </div>
                </a>

                <a
                    class="ir-card"
                    href="https://www.cninfo.com.cn/new/disclosure/stock?stockCode=605058&orgId=9900039836#latestAnnouncement"
                    target="_blank"
                >
                    <img
                        src="/images/investors/getty-images-0aT1JDaGPyI-unsplash%20(1).jpg"
                        alt="定期公告"
                        class="card-bg"
                    >
                    <div class="card-overlay"></div>
                    <div class="card-content">
                        <i class="card-icon ri-file-list-3-line"></i>
                        <div class="card-en" v-if="locale !== 'en'">Periodic Announcements</div>
                        <div class="card-cn">{{ $t('invest.announcements') }}</div>
                        <div class="_btn">
                            <div class="_str">{{ $t('invest.learnMore') }}</div>
                            <div class="_icon ri-arrow-right-line"></div>
                        </div>
                    </div>
                </a>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
const { t, locale } = useI18n()
const breadcrumb = computed(() => [
    { name: t('invest.coverTitle'), link: '' }
])
</script>

<style scoped lang="scss">
.s1 {
    padding: 80px 0 100px;
    @include mo {
        padding: 40px 0 60px;
    }
    .wrap {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 32px;
        @include mo {
            grid-template-columns: 1fr;
            gap: 20px;
        }
    }
}

.ir-card {
    position: relative;
    display: block;
    height: 400px;
    overflow: hidden;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        .card-bg { transform: scale(1.04); }
        .card-overlay { opacity: 0.72; }
        .card-arrow {
            background: var(--main-orange);
            transform: translateX(4px);
        }
    }
    .card-bg {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform .6s ease;
    }
    .card-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.80) 0%,
            rgba(0, 0, 0, 0.30) 60%,
            rgba(0, 0, 0, 0.10) 100%
        );
        transition: opacity .4s;
    }
    .card-content {
        position: absolute;
        inset: 0;
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-end;
        padding: 40px;
        .card-icon {
            font-size: 36px;
            color: #fff;
            opacity: 0.9;
            margin-bottom: 16px;
        }
        .card-en {
            font-family: 'SpaceGrotesk', sans-serif;
            font-size: 12px;
            font-weight: 500;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: var(--main-orange);
            margin-bottom: 10px;
        }
        .card-cn {
            font-size: 32px;
            font-weight: 700;
            color: #fff;
            line-height: 1.2;
            margin-bottom: 24px;
        }
        ._btn {
            align-self: flex-start;
            margin-top: 0;
        }
    }
}
</style>
