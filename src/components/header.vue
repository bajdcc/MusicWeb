<template>
    <div>
        <msearch></msearch>
        <mtitle></mtitle>
    </div>
</template>
<style lang="less" rel="stylesheet/less">
</style>
<script type="text/babel">
    import search from './header/search';
    import title from './header/title';

    export default {
        components: {
            msearch: search,
            mtitle: title
        }
    }
</script>