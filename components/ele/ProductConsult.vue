<template>
  <section class="s3">
    <div class="bg norm"><img src="/images/contact/c-2.jpg" alt="" /></div>
    <div class="bg mobi"><img src="/images/contact/c-2m.jpg" alt="" /></div>
    <div class="wrap">
      <svg
        class="icon"
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1_1075)">
          <path
            d="M80.0001 40.5591C80.0001 35.2184 75.8583 30.8297 70.6186 30.4288V26.4868H65.1147C62.4583 -5.24853 17.4739 -5.22445 14.8296 26.4868H9.32576V30.4288C-3.11336 31.7519 -3.10414 49.3709 9.32576 50.6893V54.6312H24.9616V26.4867H19.5283C21.9247 0.971575 58.0292 0.990962 60.4157 26.4867H54.9824V54.6312H60.4549V60.8409C60.4637 67.4292 54.9975 72.7607 48.4153 72.6125C48.8232 67.615 45.0487 63.2285 39.9719 63.231C35.3163 63.231 31.5285 67.0186 31.5285 71.6743V77.3033C33.4602 77.309 47.1336 77.299 48.6833 77.3033C57.7607 77.3033 65.1457 69.9183 65.1457 60.8409V54.6312H70.6182V50.6893C75.8584 50.2885 80.0001 45.8998 80.0001 40.5591V40.5591ZM4.63515 40.5591C4.63515 37.8069 6.67736 35.5228 9.32592 35.1422V45.976C6.67736 45.5956 4.63515 43.3113 4.63515 40.5591ZM20.271 49.9406H14.0167V31.1776H20.271V49.9406ZM43.7248 72.6126H36.2196V71.6745C36.2196 69.6052 37.903 67.9219 39.9722 67.9219C42.0415 67.9219 43.7248 69.6052 43.7248 71.6745V72.6126ZM59.6734 31.1776H65.9278V49.9406H59.6734V31.1776ZM70.6186 45.976V35.1422C76.8404 36.182 76.8358 44.9387 70.6186 45.976Z"
            fill="white"
          />
          <path
            d="M37.6268 38.5264H42.3176V43.2171H37.6268V38.5264Z"
            fill="white"
          />
          <path
            d="M28.2454 38.5264H32.9361V43.2171H28.2454V38.5264Z"
            fill="white"
          />
          <path
            d="M47.0083 38.5264H51.6991V43.2171H47.0083V38.5264Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_1075">
            <rect width="80" height="80" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <div class="info">
        <div class="t1">项目咨询/技术咨询</div>
        <div class="t2">
          让我们携手合作，为您量身打造高精度、高可靠性的工业自动化解决方案。
        </div>
        <div class="ab">
          <span>如果您在工业自动化领域有任何项目需求或技术疑问，</span>
          <span
            >常州艾克斯智能科技有限公司（AIXER）将是您值得信赖的合作伙伴。</span
          >
        </div>
      </div>
      <NuxtLink class="more" :to="`/contact`">
        <div class="_btn line sm">
          <div class="_str"><span>即刻联系</span></div>
          <i class="_icon ri-arrow-right-line"></i>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.s3 {
    position: relative;
    padding: 88px 0;
    .bg {
        position: absolute;
        inset: 0;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center right;
        }
        &.mobi {
            display: none;
        }
    }
    .wrap {
        @include flex-c();
        justify-content: center;
        gap: 48px;
        .info {
            color: white;
            .t1 {
                font-size: 36px;
                font-weight: 700;
            }
            .t2 {
                font-size: 20px;
                font-weight: 700;
                margin-top: 12px;
            }
            .ab {
                margin-top: 12px;
                font-size: 16px;
                font-weight: 400;
                line-height: 150%; /* 24px */
                span {
                    display: block;
                }
            }
        }
        ._btn {
            border-color: white;
            color: white;
        }
    }
}
@include mo {
  .s3 {
      .wrap {
          svg {
              width: 48px;
              height: 48px;
          }
          .info {
              .t1 {
                  font-size: 24px;
              }
              .t2 {
                  font-size: 18px;
              }
              .ab {
                  font-size: 14px;
              }
          }
      }
      .bg {
          &.norm {
              display: none;
          }
          &.mobi {
              display: block;
          }
      }
  }
}
</style>