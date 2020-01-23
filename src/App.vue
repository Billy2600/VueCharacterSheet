<template>
    <div id="app">
        <h1>Character Sheet</h1>
        <PersonGreeter personName="Travis" />
    </div>
</template>

<script>
import PersonGreeter from './components/PerosnGreeter.vue'

export default {
    name: 'app',
    components: {
        PersonGreeter
    }
}
</script>

<style scoped>
    #app {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>