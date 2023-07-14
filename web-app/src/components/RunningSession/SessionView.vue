<template>
    <v-container class="d-flex justify-center mt-10">
        <h2>{{ stateTitle + ' ' + therapistName + ' - ' + scenarioTitle }}</h2> <!-- scenarioTitle -->
    </v-container>
    <psychological-education v-if="sessionState === 'psychological-education'" 
    @switch-to-exposure="switchScene" 
    @start-pe-scene="$emit('startPeScene')"
    :stream="stream"
    :socket="socket"
    :therapistName="therapistName"></psychological-education>
    <exposure-scenario v-else-if="sessionState === 'exposure-scenario'" 
    :stream="stream"
    :socket="socket"
    @end-session="switchScene"></exposure-scenario>
    <session-history v-else :notes-from-session="this.notes"></session-history>

</template>

<script>
import PsychologicalEducation from './PsychologicalEducation.vue'
import ExposureScenario from './ExposureScenario.vue'
import SessionHistory from './SessionHistory.vue'

export default {
    emits: ['changeActiveScene', 'startPeScene'],
    props: ['therapistName', 'scenarioTitle', 'stream', 'socket'],
    components: {
        PsychologicalEducation,
        ExposureScenario,
        SessionHistory
    },
    data() {
        return {
            sessionState: 'psychological-education',
            stateTitle: 'Psychoedukation:',
            notes: ''
        }
    },
    watch: {
        sessionState(newSessionState) {
            if (newSessionState === 'psychological-education'){
                this.stateTitle = 'Psychoedukation:';
            } else if (newSessionState === 'exposure-scenario'){
                this.stateTitle = 'Exposition:';
            } else if (newSessionState === 'session-history'){
                this.stateTitle = 'Session History:';
            }
        }
    },
    methods: {
        switchScene(notes){
            if(this.sessionState === 'psychological-education'){
                this.sessionState = 'exposure-scenario';
            } 
            else if (this.sessionState === 'exposure-scenario'){
                this.notes = notes;
                this.sessionState = 'session-history';
                /* console.log(this.notes); */
            }
            this.$emit('changeActiveScene', this.sessionState);
        }
    }
}

</script>