<template>
    <div class="search-window">
        <input id="text" class="search-window-message" type="text" v-model="text" placeholder="搜索歌曲" @keyup="searching" />
    </div>
</template>
<style lang="less" rel="stylesheet/less">
    .search-window {
        position: fixed;
        left: 20px;
    }

    .search-window-message {
        width: 100%;
        height: 48px;
        background: none;
        color: #0AD5C1;
        border: 0;
        border-bottom: 1px solid rgba(25, 147, 147, 0.2);
        outline: none;
    }
</style>
<script type="text/babel">
    import * as api from "../../vuex/api"
    import store from "../../vuex/store"

    export default{
        data () {
            return {
                text: ''
            };
        },
        methods: {
            searching (e) {
                if (e.keyCode === 13 && this.text.length) {
                    //TODO: searching API
                    var input = this.text;
                    console.info('SEARCH: ' + input);
                    store.dispatch(api.ADD_MUSIC_LIST, input);
                    this.text = '';
                }
            }
        }
    }
</script>