<template>
    <main>
        <EleDefaultCover
            image="/images/prod/cover.jpg"
            image-mobile="/images/prod/cover-m.jpg"
            text="投资者关系"
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
                        <div class="card-en">Stock Information</div>
                        <div class="card-cn">股票信息</div>
                        <div class="_btn">
                            <div class="_str">了解更多</div>
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
                        <div class="card-en">Periodic Announcements</div>
                        <div class="card-cn">定期公告</div>
                        <div class="_btn">
                            <div class="_str">了解更多</div>
                            <div class="_icon ri-arrow-right-line"></div>
                        </div>
                    </div>
                </a>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
// 注意cover图片需要替换
const breadcrumb = ref([
    {
        name: '投资者关系',
        link: ''
    }
])
</script>

<style scoped lang="scss">
.s1 {
    padding: 80px 0 100px;
    .wrap {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 32px;
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
