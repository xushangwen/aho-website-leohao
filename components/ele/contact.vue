<template>
    <div id="form" action="" class="row">
        <div class="col-lg-6">
            <div class="input-group">
                <div class="label">First name</div>
                <div class="input"><input type="text" placeholder="First name" v-model="model.first_name"></div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="input-group">
                <div class="label">Last name</div>
                <div class="input"><input type="text" placeholder="Last name" v-model="model.last_name"></div>
            </div>
        </div>
        <div class="col-lg-12">
            <div class="input-group">
                <div class="label">Email</div>
                <div class="input"><input type="email" placeholder="you@company.com" v-model="model.email"></div>
            </div>
        </div>
        <div class="col-lg-12">
            <div class="input-group">
                <div class="label">Phone number</div>
                <div class="input"><input type="tel" placeholder="" v-model="model.phone"></div>
            </div>
        </div>
        <div class="col-lg-12">
            <div class="input-group">
                <div class="label">Message</div>
                <div class="input">
                    <textarea type="text" rows="5" placeholder="Leave us a message..." v-model="model.message"></textarea>
                </div>
            </div>
        </div>
        <div class="col-lg-12">
            <div class="input-group checkbox">
                <input type="checkbox">
                <span>You agree to our friendly <span class="underline">privacy policy.</span></span>
            </div>
            <!-- <div class="g-recaptcha" data-sitekey="6LcM7RcpAAAAABroY1gLYil_bmt47kI-fK8bLhcZ" data-action="LOGIN"></div> -->
        </div>
        <div class="col-lg-12">
            <BtnDefault class="submit" @click="submit">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                    <path d="M10.5004 15.8331V9.99978M10.7433 15.9037L16.5587 17.8505C17.0145 18.0031 17.2423 18.0793 17.3829 18.0246C17.5049 17.9771 17.5975 17.8749 17.6328 17.7488C17.6735 17.6036 17.5752 17.3843 17.3787 16.9457L11.1383 3.01842C10.9462 2.5895 10.8501 2.37505 10.7162 2.30859C10.5999 2.25086 10.4633 2.25064 10.3469 2.308C10.2128 2.37402 10.116 2.58817 9.92245 3.01647L3.62703 16.9465C3.42895 17.3848 3.32991 17.6039 3.37019 17.7493C3.40516 17.8756 3.49747 17.978 3.61941 18.0259C3.75981 18.081 3.98806 18.0053 4.44455 17.8538L10.3217 15.9031C10.3999 15.8771 10.439 15.8642 10.4791 15.859C10.5146 15.8545 10.5505 15.8545 10.586 15.8592C10.626 15.8644 10.6651 15.8775 10.7433 15.9037Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Send message</span>
            </BtnDefault>
        </div>
    </div>
</template>

<script setup>
const appConfig = useAppConfig()
const model = ref({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    message: ''
})

async function submit() {
    const { data: response } = await useFetch(appConfig.api(`/message/feedback`), {
        method: "POST",
        body: model.value
    })
}

</script>

<style scoped lang="scss">

    #form {
        margin-top: 24px;
    }
    .checkbox {
        display: flex;
        align-items: center;
    }
    .submit {
        width: 100%;
        height: 48px;
        font-size: 16px;
        margin-top: 32px;
    }

    .input-group {
        margin: 12px 0;
        >.label {
            color: var(--gray-700, #344054);
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 20px; /* 142.857% */
            margin-bottom: 6px;

        }
        >.input {
            width: 100%;
            display: flex;
            padding: 10px 14px;
            align-items: center;
            gap: 8px;
            align-self: stretch;
            border-radius: 8px;
            border: 1px solid var(--gray-300, #D0D5DD);
            background: var(--base-white, #FFF);
            box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
            input, textarea {
                border: none;
                outline-style: none;
                width: 100%;
                color: #000000;
                &::placeholder {
                    color: var(--gray-500, #667085);
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 24px; /* 150% */
                }
            }
        }
        input[type="checkbox"] {
            margin-right: 12px;
            width: 20px;
            height: 20px;
            border-radius: 6px;
            border: 1px solid var(--gray-300, #D0D5DD);
            background: var(--base-white, #FFF);
        }
    }
    .underline {
        text-decoration: underline;
    }
</style>
