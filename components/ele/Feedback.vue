<template>
    <div class="_feedback">
        <div class="form">
            <div class="form-control name" required>
                <div class="label">姓名</div>
                <div class="input"><input type="text"></div>
            </div>
            <div class="form-control tel" required>
                <div class="label">电话</div>
                <div class="input"><input type="tel"></div>
            </div>
            <div class="form-control comp" required>
                <div class="label">公司</div>
                <div class="input"><input type="text"></div>
            </div>
            <div class="form-control email" required>
                <div class="label">邮箱</div>
                <div class="input"><input type="email"></div>
            </div>
            <div class="form-control disc span-full" required>
                <div class="label">项目需求描述</div>
                <div class="input"><input type="tel"></div>
            </div>
            <div class="form-control capt">
                <div class="label">验证码</div>
                <div class="input"><input type="tel"></div>
            </div>
            <div class="form-control capt no-border">
                <div class="label"><input type="radio"></div>
                <div class="input">
                    <span>我已阅读并同意隐私声明</span>
                </div>
            </div>
        </div>
        <div class="tool">
            <div class="_btn">
                <div class="_str">提交</div>
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
    max-width: 800px;
    margin: 0 auto 60px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: tovw(50px);
}
.form-control {
    @include flex-r(nowrap);
    justify-content: flex-start;
    align-items: flex-start;
    padding-bottom: 20px;
    &:not(.no-border) {
        border-bottom: 1px solid #B4B4B4;
    }
    .label {
        flex: none;
        max-width: 100px;
        font-size: 16px;
        color: var(--main-dark-gray);
        position: relative;
    }
    .input {
        width: 100%;
        flex: auto;
        margin-left: 20px;
        input {
            width: 100%;
            font-size: 18px;
            color: var(--main-dark-gray);
            //height: 35px;
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
