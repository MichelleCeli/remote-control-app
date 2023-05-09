<template>
    <v-card id="choose-platform-scenario" class="d-flex flex-column justify-space-between">
        <v-card-title class="mb-3 align-self-center">Please choose the platform and a scenario for the exposure therapy session:</v-card-title>

        <v-sheet class="d-flex flex-row">
            <PlatformList class="w-50" @update-platform="updatePlatform"></PlatformList>
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
import PlatformList from './PlatformList.vue';
import ScenarioList from './ScenarioList.vue';

export default {
    components: {
        PlatformList, ScenarioList
    },
    emits: ['sessionConfigCancelled', 'setSessionConfiguration'],
    data() {
        return {
            sessionSettings: {
                platform: '',
                scenario: ''
            }
        }
    },
    computed: {
        settingsDone() {
            if (this.sessionSettings.platform === '' || this.sessionSettings.scenario === '') {
                return true;
            }
            return false;
        }
    },
    methods: {
        updatePlatform(platform) {
            this.sessionSettings.platform = platform;
        },
        updateScenario(scenario) {
            this.sessionSettings.scenario = scenario;
        },
        saveSessionConfigurations(platform, scenario) {
            this.sessionSettings.platform = platform;
            this.sessionSettigns.scenario = scenario;
        },

    }
}
</script>



<style scoped>
#choose-platform-scenario {
    /* display: flex;
    flex-direction: column; */
    top: 20vh;
    width: 60%;
    height: 60vh;
    margin: 0 auto;
    padding: 2rem;
}

.list-container {
    width: 50%;
}
</style>