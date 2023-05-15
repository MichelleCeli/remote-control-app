<template>
    <v-container class="d-flex justify-center mt-10">
        <h2>{{ scenarioTitle }}</h2>
    </v-container>
    <psychological-education v-if="sessionState === 'psychological-intervention'" @switch-to-exposure="switchScene"></psychological-education>
    <exposure-scenario v-else-if="sessionState === 'exposure-scenario'" @end-session="switchScene"></exposure-scenario>
    <session-history v-else></session-history>

</template>

<script>
import PsychologicalEducation from './PsychologicalEducation.vue'
import ExposureScenario from './ExposureScenario.vue'
import SessionHistory from './SessionHistory.vue'

export default {
    props: ['scenarioTitle'],
    components: {
        PsychologicalEducation,
        ExposureScenario,
        SessionHistory
    },
    data() {
        return {
            sessionState: 'psychological-intervention'
        }
    },
    methods: {
        switchScene(){
            if(this.sessionState === 'psychological-intervention'){
                this.sessionState = 'exposure-scenario';
            } 
            else if (this.sessionState === 'exposure-scenario'){
                this.sessionState = 'session-history';
            }
        }
    }
}

</script>