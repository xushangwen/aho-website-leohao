<template>
<main>
    <div class="_blank"></div>
    <EleBreadcrumb
        :navigate="breadcrumb"
    />
    <div class="wrap">
        <div class="arti">
            <div class="date">2025-10-14</div>
            <div class="title">喜封金顶，开启全球化新征程</div>
            <div class="cont">
                <div class="t1">里程碑时刻</div>
                <img src="/images/news/1/1.jpg" alt="">
                <div class="p">2025 年 10 月 3 日，随着最后一方混凝土精准浇筑到位，澳弘电子泰国生产基地主体结构正式封顶！公司创始人耿同章先生携核心管理团队、中泰员工代表及合作伙伴齐聚现场，共同见证这一标志着公司全球化战略落地的里程碑时刻。</div>

                <div class="t1">从蓝图到封顶</div>
                <img src="/images/news/1/2.jpg" alt="">
                <div class="p">本次封顶的一期工程总建筑面积达7.1万平方米，项目建成后，将彻底填补公司海外产能空白，进一步开拓新能源汽车、AI 算力中心、服务器等新兴应用领域的增量市场，为公司打造新的利润增长点</div>

                <div class="t1">新的征程</div>
                <div class="p">接下来，泰国工厂项目将全面进入设备安装、调试及人员培训阶段，预计2026年二季度开始试生产。这座凝聚着中泰协作智慧的智能化工厂，将成为澳弘电子深耕全球市场的重要枢纽。从常州到泰国，从国内到全球布局，每一块砖瓦都承载着澳弘人的初心。未来，我们将持续以优质 PCB 产品赋能全球智造，书写中泰经贸合作与企业国际化的新篇章！</div>
            </div>
        </div>
    </div>

</main>
</template>

<script setup>
definePageMeta({ layout: 'news' })
const breadcrumb = ref([
    {
        name: '新闻中心',
        link: '/news'
    },
    {
        name: '喜封金顶，开启全球化新征程',
        link: ''
    },
])

</script>

<style scoped lang="scss">
._blank {
    width: 100%;
    height: var(--HEADER_HEIGHT);
}
.wrap {
    max-width: 880px;
}
.arti {
    padding: 64px 0 200px;
    .date {
        color: var(--main-orange, #FF6400);
        font-family: "TT Fors";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 26px; /* 162.5% */
    }
    .title {
        color: var(--main-black, #000);
        font-size: fluid(28px, 20px);
        font-style: normal;
        font-weight: 700;
        line-height: 130%; /* 36.4px */
        margin-top: 24px;
    }
}
.t1 {
    color: var(--main-orange, #FF6400);
    font-size: fluid(20px);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 50px;
}
.p {
    color: var(--main-dark-gray, #3C3C3C);
    font-family: "HarmonyOS Sans SC";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 27px */
}
img {
    width: 100%;
    height: auto;
}
.p,
img {
    margin-top: 24px;
}
</style>
