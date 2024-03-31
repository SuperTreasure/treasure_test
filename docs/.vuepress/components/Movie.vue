<template>
    <div v-for="item in value" class="my-movie">
        <div class="movie-name">
            <h1>{{ item.name }}</h1>
        </div>

        <div v-for="image in item.data.images" class="movie-image">
            <img :src="image" style="width: 70%; height: 70%;">
        </div>

        <div>
            <p>{{ item.data.synopsis }}</p>
        </div>

        <div class="movie-tag">
            <Space>
                <div v-for="tag in item.data.tag">
                    <Tag :color="tag_color()"><a href="https://blog.csdn.net/Dandrose">{{ tag }}</a></Tag>
                </div>
            </Space>
        </div>

        <div class="movie-link">
            <Space>
                <Card :MyCard="item.data.links" />
            </Space>
        </div>
    </div>

</template>


<script setup>
import { ref } from 'vue';
import Space from './Space.vue';

const props = defineProps( {
    MyMovie: Object
} )
const value = ref( props.MyMovie );

function tag_color() {
    const myColor = [ 'success', 'processing', 'error', 'warning', 'pink', 'red', 'yellow', 'orange', 'cyan', 'green', 'blue', 'purple', 'geekblue', 'magenta', 'volcano', 'gold', 'lime' ];
    const rand = Math.floor( Math.random() * myColor.length );
    return myColor[ rand ];
}
</script>


<style lang="scss">
button {
    background-color: #4e6ef2
}

.g-card-link {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    text-align: center;
    line-height: 38px;

    .g-card-item {
        background: blue;
        width: 113px;
        max-width: 138px;
        height: 38px;
        cursor: pointer;
        overflow: hidden;
    }

    .g-card-item:nth-of-type(2n) {
        background: rgba(44, 104, 255, .1);
    }

    .g-card-item:nth-of-type(2n+1) {
        background: rgba(56, 203, 137, .1);
    }
}
</style>