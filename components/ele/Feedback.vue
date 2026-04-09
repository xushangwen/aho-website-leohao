<template>
    <div class="_feedback">
        <div class="form">
            <div class="form-control name" required>
                <div class="label">{{ $t('feedback.nameLabel') }}</div>
                <div class="input"><input type="text"></div>
            </div>
            <div class="form-control tel" required>
                <div class="label">{{ $t('feedback.telLabel') }}</div>
                <div class="input"><input type="tel"></div>
            </div>
            <div class="form-control comp" required>
                <div class="label">{{ $t('feedback.companyLabel') }}</div>
                <div class="input"><input type="text"></div>
            </div>
            <div class="form-control email" required>
                <div class="label">{{ $t('feedback.emailLabel') }}</div>
                <div class="input"><input type="email"></div>
            </div>
            <div class="form-control disc span-full" required>
                <div class="label">{{ $t('feedback.descLabel') }}</div>
                <div class="input"><input type="text"></div>
            </div>
            <div class="form-control capt">
                <div class="label">{{ $t('feedback.captchaLabel') }}</div>
                <div class="input"><input type="tel"></div>
            </div>
            <div class="form-control capt no-border">
                <div class="label"><input type="radio"></div>
                <div class="input">
                    <span>{{ $t('feedback.agreeText') }}</span>
                </div>
            </div>
        </div>
        <div class="tool">
            <div class="_btn">
                <div class="_str">{{ $t('feedback.submitBtn') }}</div>
                <div class="_icon ri-mail-send-line"></div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.form {
    width: 96%;
    max-width: min(800px, 90vw);
    margin: 0 auto fluid(60px, 32px);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: fluid(50px, 20px);
    @include mo {
        grid-template-columns: 1fr;
        grid-gap: 20px;
    }
}
.form-control {
    @include flex-r(nowrap);
    justify-content: flex-start;
    align-items: flex-start;
    padding-bottom: fluid(20px, 12px);
    &:not(.no-border) {
        border-bottom: 1px solid #B4B4B4;
    }
    .label {
        flex: none;
        max-width: 100px;
        font-size: fluid(16px, 14px);
        color: var(--main-dark-gray);
        position: relative;
    }
    .input {
        width: 100%;
        flex: auto;
        margin-left: 20px;
        input {
            width: 100%;
            font-size: fluid(18px, 14px);
            color: var(--main-dark-gray);
            background-color: transparent;
            border: none;
            outline: none;
        }
    }
    &[required] {
        .label::after {
            content: '*';
            color: var(--main-orange);
            font-weight: bold;
            font-size: 16px;
            position: absolute;
            top: -2px;
            right: -10px;
        }
    }
}
.tool {
    text-align: center;
}
</style>
<style lang="scss">
.span-full {
    grid-column: 1 / -1; /* 跨所有列 */
    grid-row: auto; /* 自动换行 */
}
</style>
