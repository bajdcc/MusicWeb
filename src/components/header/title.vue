<template>
    <div class="playing_info">
        <span class="songName">{{song}}</span>
        <span class="singer">{{singer}}</span>
    </div>
</template>
<style lang="less" rel="stylesheet/less">
    .playing_info {
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        color: #ffffff;
        font-size: 17px;
        text-align: center;
        padding: 10px;
        -webkit-box-sizing: border-box;

        .songName {
            font-weight: bold;
        }

        .singer {
            font-size: 13px;
        }
    }
</style>
<script type="text/babel">
    export default {
        data () {
            return {
                song: 'HTML5',
                singer: 'music player'
            };
        },
        components:{}
    }
</script>