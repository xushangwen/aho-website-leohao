<template>
    <div class="map-container">
        <img :src="mapImage" alt="">
        <div
            class="pois-container"
            @click="getPosition($event)"
        >
            <div
                class="item"
                v-for="(item, index) in pois"
                :key="index"
                :style="{
                    left: `${item.position.left}`,
                    top: `${item.position.top}`
                }"
            >
                <div class="dot"></div>
                <div class="label">{{ item.name }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    mapImage: {
        type: String,
        default: () => {}
    },
    pois: {
        type: Array,
        default: () => []
    },
    enableClick: {
        type: Boolean,
        default: () => false
    }
})
const mapImage = computed(() => props.mapImage)
const enableClick = computed(() => props.enableClick)
const imageLoadStatus = ref(false)

function getPosition(e) {
    if (!enableClick.value) return
    const { width, height } = e.target.getBoundingClientRect()
    const { offsetX, offsetY } = e
    const pos = {
        left: (offsetX / width * 100).toFixed(3) + '%',
        top: (offsetY / height * 100).toFixed(3) + '%'
    }
}

onMounted(() => {
    if (import.meta.client) {
        const imageInst = new Image()
        imageInst.src = mapImage.value
        imageInst.onload = () => {
            imageLoadStatus.value = true
        }
    }
})
</script>

<style scoped lang="scss">
.map-container {
    width: 100%;
    height: auto;
    > img {
        width: 100%;
        height: auto;
    }
    .pois-container {
        position: absolute;
        inset: 0;
        .item{
            position: absolute;
        }
        .dot {
            width: 2px;
            height: 2px;
            border: 1px solid white;
            position: absolute;
            left: -2px;
            top: -2px;
            background-color: black;
        }
        .label {
            width: 100px;
            height: auto;
            position: absolute;
            left: -2px;
            top: 4px;
            background-color: rgba(255, 255, 255);
            opacity: .2;
            color: black;
            pointer-events: none;
        }
    }
}
.posi-container {

}
</style>
