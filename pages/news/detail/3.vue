<template>
<main>
    <div class="_blank"></div>
    <EleBreadcrumb
        :navigate="breadcrumb"
    />
    <div class="wrap">
        <div class="arti">
            <div class="date">2025-08-28</div>
            <div class="title">澳弘电子再次荣获美国伊顿公司“全球卓越供应商”奖项</div>
            <div class="cont">
                <div class="t1">Aoh</div>
                <div class="p">8月27日，全球电气与工业解决方案巨头伊顿（EATON）在美国克利夫兰隆重举办全球供应链管理供应商大会。凭借优异的产品质量、稳定的交付能力与高效的售后服务，常州澳弘电子股份有限公司（以下简称“澳弘电子”）从众多国际供应商中脱颖而出，再次荣获伊顿“全球卓越供应商”奖项！这一荣誉不仅是对澳弘电子综合实力的高度肯定，更表明了澳弘电子已深度融入其全球供应链体系！</div>
                <img src="/images/news/3/1.jpg" alt="">
                <div class="fig">注：澳弘电子董事长兼总经理陈定红（左四）</div>

                <div class="t1">EATON</div>
                <div class="p">伊顿（EATON）是全球领先的多元化动力管理公司，其2024年销售额达249亿美元，业务范围覆盖电气、航空航天、车辆工业、数据中心等领域，产品包括数据中心不间断电源（UPS）、输配电及控制系统;工控设备所需的液压动力元件、系统和服务;航空航天所需的燃油、液压和气动系统以及汽车动力及传动系统等。</div>

                <div class="t1">Aoh</div>
                <div class="p">澳弘电子始终以“技术驱动未来，品质服务全球”为使命，产品广泛应用于汽车电子、电源/新能源、工业控制、通信设备等领域，客户覆盖欧美、亚太等多个国家和地区。随着澳弘电子国际化布局加速，澳弘电子将更快的融入全球供应链体系，进一步深化与伊顿等国际客户的战略合作。我们将发挥在创新技术和世界级制造服务方面的优势，不断为客户创造更高的价值，成为最可靠的全球合作伙伴。</div>

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
