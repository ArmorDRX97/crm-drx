<template>
    <div id="app">
        <component :is="layout">
            <router-view/>
        </component>
    </div>
</template>

<script>
    import LoginLayout from '@/layouts/LoginLayout'
    import MainLayout from '@/layouts/MainLayout'

    export default {
        components: {
            LoginLayout, MainLayout
        },
        computed: {
            layout() {
                return (this.$route.meta.layout || 'login') + '-layout'
            }
        }
    }
</script>

<style lang="scss">
    @import "~materialize-css/dist/css/materialize.min.css";
    @import "assets/scss/style.scss";
</style>
