<template>
    <main>
        <EleDefaultCover
            image="/images/contact/cover.jpg"
            image-mobile="/images/contact/cover-m.jpg"
            text="联系我们"
        ></EleDefaultCover>
        <EleBreadcrumb
            :navigate="breadcrumb"
        />

        <section class="s1">
            <div class="wrap">
                <div class="map-item">
                    <div class="left">
                        <div class="name">常州澳弘电子股份有限公司</div>
                        <div class="item"><div class="label">联系：</div><div class="value">耿克非</div></div>
                        <div class="item"><div class="label">电话：</div><div class="value">0519-69887878转9666</div></div>
                        <div class="item"><div class="label">邮箱：</div><div class="value">gengkf@czaohong.com</div></div>
                        <div class="item"><div class="label">地址：</div><div class="value">江苏省常州市新北区电子产业园新科路15号</div></div>
                        <div class="item"><div class="label">邮编：</div><div class="value">213000</div></div>
                    </div>
                    <div class="right" id="map-1" ref="elMap1"></div>
                </div>
                <div class="map-item">
                    <div class="left">
                        <div class="name">常州海弘电子有限公司</div>
                        <div class="item"><div class="label">联系：</div><div class="value">耿克非</div></div>
                        <div class="item"><div class="label">电话：</div><div class="value">0519-69887878转9666</div></div>
                        <div class="item"><div class="label">邮箱：</div><div class="value">gengkf@czhaihong.com</div></div>
                        <div class="item"><div class="label">地址：</div><div class="value">江苏省常州市滨江经济开发区兴塘路16号</div></div>
                        <div class="item"><div class="label">邮编：</div><div class="value">213000</div></div>
                    </div>
                    <div class="right" id="map-2" ref="elMap2"></div>
                </div>
            </div>
        </section>

        <section class="s2">
            <div class="wrap">
                <div class="section-name">如您有需求，请与我们联系</div>
                <EleFeedback class="feedback"></EleFeedback>
            </div>
        </section>

        <section class="s3">
            <div class="wrap">
                <div class="section-name">销售处及海外代表处</div>
                <div class="pos-list">
                    <div
                        class="item"
                        v-for="(item, index) in salesPoints"
                        :key="`${item.pointName}-${index}`"
                    >
                        <div class="name">{{item.pointName}}</div>
                        <!--address-->
                        <div class="contact-info">
                            <div class="subitem">
                                <i class="icon ri-map-pin-5-line"></i>
                                <div class="value">{{item.address}}</div>
                            </div>
                        </div>
                        <!--name-->
                        <div class="contact-info">
                            <div
                                class="subitem"
                                v-for="(nameItem, index) in item.name"
                                :key="`${nameItem}-${index}`"
                            >
                                <i class="icon ri-user-voice-line"></i>
                                <div class="value">{{nameItem}}</div>
                            </div>
                        </div>
                        <!--tel-->
                        <div class="contact-info">
                            <div
                                class="subitem"
                                v-for="(telItem, index) in item.tel"
                                :key="`${telItem}-${index}`"
                            >
                                <i class="icon ri-phone-line"></i>
                                <div class="value">{{telItem}}</div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>


    </main>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()
const appConfig = useAppConfig()

const salesPoints = reactive(appConfig.clientConfig.salesPoints)

const breadcrumb = ref([
    {
        name: '联系我们',
        link: ''
    }
])

const elMap1 = ref(null)
const elMap2 = ref(null)

onMounted(() => {
    if (import.meta.client) {
        ShowMap(
            elMap1.value,
            [
                [
                    '119.997538',
                    '31.877855',
                    '常州澳弘电子股份有限公司',
                    '江苏省常州市新北区电子产业园新科路15号',
                ]
            ],
            ['119.997538', '31.877855'],'12'
        );
        ShowMap(
            elMap2.value,
            [
                [
                    '119.951496',
                    '31.950719',
                    '常州海弘电子有限公司',
                    '江苏省常州市滨江经济开发区兴塘路16号',
                ]
            ],
            ['119.951496', '31.950719'],'12'
        );
    }

})

function ShowMap (id, points, center, zoom) {
    if (!center || !points || points.length < 1) return
    var map = new BMap.Map(id);
    map.centerAndZoom(new BMap.Point(center[0], center[1]), zoom);
    map.addControl(new BMap.NavigationControl());
    for (var i = 0; i < points.length; i += 1) {
        var marker = new BMap.Marker(new BMap.Point(points[i][0], points[i][1]))
        var infoWindow = new BMap.InfoWindow('<p style="color: #196AB6; font-weight:bold;font-size:16px;">' + points[i][2] + '</p><p style="color: #000; font-weight:regular;font-size:12px;">' + points[i][3] + '</p>');
        map.addOverlay(marker);
        marker.addEventListener("click", function () {
            this.openInfoWindow(infoWindow);
        });
        if (i === 0) {
            marker.openInfoWindow(infoWindow);
        }
    }
}
</script>

<style scoped lang="scss">
.s1 {
    padding: 100px 0;
    .wrap {
        @include flex-c(nowrap);
        gap: 60px;
    }
    .map-item {
        @include flex-r(nowrap);
        justify-content: space-around;
        align-items: flex-start;
        //gap: 100px;
        .left {
            height: 221px;
            width: 485px;
            flex: auto;
            padding-left: 27px;
            flex: none;
            &:before {
                content: '';
                display: block;
                position: absolute;
                top: 0;
                left: -1px;
                width: 3px;
                height: 24px;
                background-color: var(--main-orange);
                z-index: 9;
            }
            &:after {
                content: '';
                display: block;
                position: absolute;
                top: 0;
                left: 0px;
                width: 1px;
                height: 220px;
                background-color: var(--main-light-gray);
            }
            .name {
                font-size: 24px;
                color: var(--main-blue);
                font-weight: 700;
                margin-bottom: 20px;
            }
            .item {
                @include flex-r(nowrap);
                justify-content: flex-start;
                align-items: center;
                font-size: 16px;
                color: var(--main-dark-gray);
                line-height: 1.6;
                .value {
                    font-weight: 700;
                }
            }
        }
        .right {
            flex: none;
            border-radius: 10px;
            overflow: hidden;
            width: 460px;
            height: 260px;
        }
    }
}

.s2 {
    padding: 100px 0;
    background-color: #F8F8F8;
     .section-name {
         font-size: 38px;
         font-weight: 700;
         text-align: center;
     }
    .feedback {
        margin-top: 60px;
    }
 }

.s3 {
    padding: 100px 0;
    .wrap {

    }
    .section-name {
        font-size: 38px;
        font-weight: 700;
        text-align: center;
    }
    .pos-list {
        margin-top: 120px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: tovw(60px);
        grid-row-gap: 30px;
        .item {
            padding: 40px 12px;
            border-top: 1px solid var(--main-light-gray);
            cursor: pointer;
            transition: all .3s;
            &:hover {
                background-color: #F6F6F6;
                border-top-color: var(--main-orange);
            }
            .name {
                font-size: 22px;
                font-weight: 700;
                color: var(--main-blue);
                line-height: 1;
                margin-bottom: 22px;
            }
            .contact-info {
                line-height: 1.3;
                @include flex-r(nowrap);
                margin-bottom: 6px;
                .subitem {
                    width: 100%;
                    color: var(--main-dark-gray);
                    font-size: 16px;
                    @include flex-r(nowrap);
                    justify-content: space-between;
                    align-items: flex-start;
                    .icon {
                        flex: none;
                        font-size: 16px;
                        color: var(--main-orange);
                        margin-right: 8px;
                    }
                    .value {
                        width: 100%;
                        flex: auto;
                    }
                }
            }
        }
    }
}

</style>
