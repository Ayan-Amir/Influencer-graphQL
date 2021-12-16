<template>
    <div v-if="alert" :class="'alert ' + alert.type">
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