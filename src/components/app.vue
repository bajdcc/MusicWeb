<template>
    <div>
        <mheader></mheader>
        <mslider></mslider>
        <mfooter></mfooter>
    </div>
</template>
<style lang="less" rel="stylesheet/less">
    html,
    body {
        padding: 0;
        margin: 0;
        height: 100%;
    }

    body {
        font-family: "SimSun", "Arial", "sans-serif";
        background: url("../../assets/images/bg.png") no-repeat;
        background-size: cover;
        width: 100%;
        min-width: 320px;
        overflow: hidden;
    }

    header {
        left: 0;
        top: 0;
        width: 100%;
        height: 45px;
        border-bottom: solid 1px rgba(207, 209, 215, 0.5);
    }

    footer {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100px;
        min-width: 320px;
    }

    #music {
    }
</style>
<script type="text/babel">
    import store from '../vuex/store';
    import header from './header';
    import slider from './slider';
    import footer from './footer';

    export default {
        el: '#music',
        data () {
            let serverData = store;

            return {
                // 播放列表
                musicList: serverData.musicList
            };
        },
        computed: {},
        watch: {
            musicList: {
                deep: true,
                handler () {
                }
            }
        },
        store: {
            getters: {
                list: state => state.musicList
            },
            actions: {
            }
        },
        components: {
            mheader: header,
            mslider: slider,
            mfooter: footer
        }
    };
</script>