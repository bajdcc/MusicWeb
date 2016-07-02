import {
    ADD_MUSIC_LIST,
    REMOVE_MUSIC_LIST,
    GET_MUSIC_LIST
}  from '../api'

// 状态
const state = {
    // 播放列表
    musicList: []
};

// 变更
const mutations = {
    [ADD_MUSIC_LIST] (state, obj) {
        state.musicList.push(obj);
    },
    [REMOVE_MUSIC_LIST] (state, id){
        //TODO: Unimplemented
    },
    [GET_MUSIC_LIST] (state){
        return state.musicList;
    }
};

export default {
    state,
    mutations
}