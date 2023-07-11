<template>
    <v-card id="choose-therapist-scenario" class="d-flex flex-column justify-space-between">
        <v-card-title class="mb-3 align-self-center">Please choose a therapist and a scenario for the exposure therapy session:</v-card-title>

        <v-sheet class="d-flex flex-row">
            <TherapistList class="w-50" @update-therapist="updateTherapist"></TherapistList>
            <v-divider :vertical="true" class="mx-2" :thickness="2"></v-divider>
            <ScenarioList class="w-50" @update-scenario="updateScenario"></ScenarioList>
        </v-sheet>
        <v-sheet class="d-flex justify-space-between mt-2">
            <v-btn @click="$emit('sessionConfigCancelled')">CANCEL</v-btn>
            <v-btn :disabled="settingsDone" :color="settingsDone ? '' : 'rgba(31, 115, 221, 1)'" theme="dark"
                @click="$emit('setSessionConfiguration', this.sessionSettings)">NEXT</v-btn>
        </v-sheet>
    </v-card>
</template>

<script>
import TherapistList from './TherapistList.vue';
import ScenarioList from './ScenarioList.vue';

export default {
    components: {
        TherapistList, ScenarioList
    },
    emits: ['sessionConfigCancelled', 'setSessionConfiguration'],
    data() {
        return {
            sessionSettings: {
                therapist: '',
                scenario: ''
            }
        }
    },
    computed: {
        settingsDone() {
            if (this.sessionSettings.therapist === '' || this.sessionSettings.scenario === '') {
                return true;
            }
            return false;
        }
    },
    methods: {
        updateTherapist(therapist) {
            this.sessionSettings.therapist = therapist;
        },
        updateScenario(scenario) {
            this.sessionSettings.scenario = scenario;
        },
        saveSessionConfigurations(therapist, scenario) {
            this.sessionSettings.therapist = therapist;
            this.sessionSettigns.scenario = scenario;
        },

    }
}
</script>



<style scoped>
#choose-therapist-scenario {
    /* display: flex;
    flex-direction: column; */
    top: 20vh;
    width: 50%;
    height: 60vh;
    margin: 0 auto;
    padding: 2rem;
}

.list-container {
    width: 50%;
}
</style>