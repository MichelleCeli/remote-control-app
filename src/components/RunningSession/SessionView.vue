<template>
    <v-container class="d-flex justify-center mt-10">
        <h2>title part of intervention</h2>
    </v-container>
    <psychological-intervention v-if="sessionState === 'psychological-intervention'"></psychological-intervention>
    <exposure-scenario v-else-if="sessionState === 'exposure-scenario'"></exposure-scenario>
    <session-history v-else></session-history>

</template>

<script>
import PsychologicalIntervention from './PsychologicalEducation.vue'
import ExposureScenario from './ExposureScenario.vue'
import SessionHistory from './SessionHistory.vue'

export default {
    components: {
        PsychologicalIntervention,
        ExposureScenario,
        SessionHistory
    },
    data() {
        return {
            sessionState: 'exposure-scenario'
        }
    }
}

</script>