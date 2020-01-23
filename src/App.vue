<template>
    <div id="app">
        <InfoPage characterName="Baciar" />
    </div>
</template>

<script>
import InfoPage from './components/InfoPage.vue'

export default {
    name: 'app',
    components: {
        InfoPage
    }
}
</script>

<style scoped>
    #app {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        color: #2c3e50;
        margin-top: 15px;
    }
</style>