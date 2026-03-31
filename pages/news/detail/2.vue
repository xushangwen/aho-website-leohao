<template>
<main>
    <div class="_blank"></div>
    <EleBreadcrumb
        :navigate="breadcrumb"
    />
    <div class="wrap">
        <div class="arti">
            <div class="date">2025-09-03</div>
            <div class="title">澳弘电子荣膺 LG “战略合作伙伴奖”</div>
            <div class="cont">
                <div class="p">9 月 3 日，LG 电子全球运营中心盛大举行2025 China Best Partner's Day（2025 中国最佳合作伙伴日）活动。澳弘电子凭借卓越的综合实力和多年来与 LG的深度合作，荣获 "Strategic Partner Award（战略合作伙伴奖）"。公司董事长兼总经理陈定红先生应邀出席。</div>
                <img src="/images/news/2/1.jpg" alt="">
                <div class="fig">注：澳弘电子董事长兼总经理陈定红（左四）</div>
                <div class="p">2025 年 10 月 3 日，随着最后一方混凝土精准浇筑到位，澳弘电子泰国生产基地主体结构正式封顶！公司创始人耿同章先生携核心管理团队、中泰员工代表及合作伙伴齐聚现场，共同见证这一标志着公司全球化战略落地的里程碑时刻。</div>

                <div class="t1"></div>
                <div class="p">澳弘电子与 LG 的合作渊源深厚，早在十多年前便开启了携手共进的征程。多年来，双方围绕产品研发、供应链协同、技术创新等核心领域展开了多层次、多维度的交流与合作。随着合作的不断深入，双方的信任度和依存度持续加深，塑造了强强联合、共赢发展的行业典范。此前，澳弘电子已先后荣获最佳协作奖、战略供应商、最佳合作获奖铜牌等一系列具有分量的大奖。</div>
                <img src="/images/news/2/2.jpg" alt="">
                <div class="p">近年来，双方高层保持着频繁且富有成效的交流互动，新技术新项目加速推进，进一步强化了双方在全球化市场中的协同效应，为深化战略合作关系奠定了坚实基础。</div>
                <div class="p">
                    此次荣获 LG"战略合作伙伴奖"，是LG对澳弘电子在技术创新能力、产品质量管控、供应链服务水平等综合实力的高度认可，也是澳弘电子在全球合作伙伴体系中地位的重要体现。未来，澳弘电子会持续发挥在创新技术和世界级制造服务方面的优势，进一步深化与LG等全球合作伙伴的战略合作，不断为客户创造更高的价值，成为最可靠的全球合作伙伴。</div>
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
        name: '澳弘电子荣膺 LG “战略合作伙伴奖”',
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
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: 130%; /* 36.4px */
        margin-top: 24px;
    }
}
.t1 {
    color: var(--main-orange, #FF6400);
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 50px;
}
.p,
.fig {
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
img,
.fig {
    margin-top: 24px;
}
.fig {
    font-size: 14px;
}
</style>
