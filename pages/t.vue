<script setup lang="ts">

</script>

<template>
<div class="container">
    <p>1</p>
    <p>2</p>
    <p>3</p>
    <p>4</p>
    <p>5</p>
    <p>6</p>
    <p>7</p>
    <p>8</p>
    <p>9</p>
    <p>10</p>
    <p>11</p>
    <p>12</p>
    <p>13</p>
    <p>14</p>
    <p>15</p>
    <p>16</p>
    <p>17</p>
    <p>18</p>
    <p>19</p>
    <p>20</p>
    <div class="sticky"></div>
    <p>hello01</p>
    <p>hello02</p>
    <p>hello03</p>
    <p>hello04</p>
    <p>hello05</p>
    <p>hello06</p>
    <p>hello07</p>
    <p>hello08</p>
    <p>hello09</p>
    <p>hello010</p>
    <p>hello011</p>
    <p>hello012</p>
    <p>hello013</p>
    <p>hello014</p>
    <p>hello015</p>
    <p>hello016</p>
    <p>hello017</p>
    <p>hello018</p>
    <p>hello019</p>
    <p>hello020</p>
    <p>hello021</p>
    <p>hello022</p>
    <p>hello023</p>
    <p>hello024</p>
    <p>hello025</p>
    <p>hello026</p>
    <p>hello027</p>
    <p>hello028</p>
    <p>hello029</p>
    <p>hello030</p>
    <p>hello031</p>
    <p>hello032</p>
    <p>hello033</p>
    <p>hello034</p>
    <p>hello035</p>
    <p>hello036</p>
    <p>hello037</p>
    <p>hello038</p>
    <p>hello039</p>
    <p>hello040</p>
</div>
</template>

<style scoped lang="scss">
.container {
    width: 100%;
    height: 100vh;
    position: relative;
    overflow-y: visible;
    overflow-x: hidden;
    p {
        padding: 10px 0;
    }
    p:nth-child(3n+1) {
        background: #dbffe2;
    }
    p:nth-child(3n+2) {
        background: #cbccff;
    }
    p:nth-child(3n+3) {
        background: #ffd2e7;
    }
    .sticky {
        height: 100px;
        position: sticky;
        top: 100px;
        background: #1E3296;
    }
    &::-webkit-scrollbar {
        width: 0px;
        background-color: rgba(30, 50, 150, 0.5);
    }
    &::-webkit-scrollbar-thumb {
        //background-color: rgba(167, 30, 63, 0.8);
        background-color: rgba(30, 50, 150, 0.8);
        border-radius: 0px;
    }
    &::-webkit-scrollbar-track {
        //-webkit-box-shadow: inset 0 0 6px rgba(217, 217, 217, 0.1);
        //background-color: #f1f1f1;
    }
}
</style>
