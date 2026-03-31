<template>
    <div class="info-container">
        <div class="top">
            <div class="type">{{cate}}</div>
            <div class="date">{{date}}</div>
            <div class="title">{{title}}</div>
        </div>
        <div class="bot">
            <BtnDefault :link="link" line>
                <span>Learn more</span>
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3.33301 8.00016H12.6663M12.6663 8.00016L7.99967 3.3335M12.6663 8.00016L7.99967 12.6668" stroke="#A71E3F" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </BtnDefault>
        </div>
    </div>
</template>

<script setup>
defineProps({
    cate: String,
    date: String,
    title: String,
    link: String
})
</script>

<style scoped lang="scss">
    .cate {
        color: #AFAFAF;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    .date {
        color: #AFAFAF;
        font-feature-settings: 'clig' off, 'liga' off;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    .title {
        color: #666;
        margin-top: 15px;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%; /* 28px */
    }
    .bot {
        margin-top: 50px;
    }
</style>
