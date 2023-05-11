<template>
<v-sheet class="d-flex align-stretch">
    <SessionInformation></SessionInformation>
    <SessionView></SessionView>
</v-sheet>
</template>

<script>
import SessionInformation from '../components/RunningSession/SessionInformation.vue'
import SessionView from '../components/RunningSession/SessionView.vue'

export default{
    components: {
        SessionInformation,
        SessionView
    }
}
</script>