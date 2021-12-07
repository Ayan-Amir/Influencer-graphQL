<template>
    <div v-if="alert.message" :class="'alert ' + alert.type">
        {{ alert.message }}
    </div>
</template>

<script>
export default {
    props:{
        alert: Object
    }
}
</script>

<style>

</style>