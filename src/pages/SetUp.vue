<template>
    <patient-registration v-if="!patientRegistered" @create-session="registerPatient"></patient-registration>
    <session-configuration v-else-if="!sessionConfigured" @session-config-cancelled="backToPatientRegistration"
        @set-session-configuration="setSessionConfiguration"></session-configuration>
    <session-overview v-else 
    :scenario-title="sessionSettings.scenarioTitle"
    :scenario-description="sessionSettings.scenarioDescription"
    :platform-name="sessionSettings.platformName"
    @session-overview-cancelled="backToSessionConfiguration"
    @start-session="startSession"
    ></session-overview>
</template>


<script>
import PatientRegistration from '../components/SetUp/PatientRegistration.vue'
import SessionConfiguration from '../components/SetUp/SessionConfiguration.vue'
import SessionOverview from '../components/SetUp/SessionOverview.vue'

export default {
    components: {
        PatientRegistration, SessionConfiguration, SessionOverview
    },
    data() {
        return {
            patient: {
                id: '',
                name: ''
            },
            patientRegistered: false,
            sessionConfigured: false,
            sessionSettings: {
                platform: '',
                platformName: '',
                scenario: '',
                scenarioTitle: '',
                scenarioDescription: ''
            },
            scenarios: [
                { type: 'subheader', title: 'Scenario:' },
                { type: 'divider' },
                {
                    title: 'Dog Sleeping',
                    subtitle: 'Dog will sleep in the distant',
                    value: 1,
                },
                { type: 'divider' },
                {
                    title: 'Dog Sniffing',
                    subtitle: 'Dog will walk around calmly and sniff from time to time',
                    value: 2,
                },
                { type: 'divider' },
                {
                    title: 'Dog Stretching',
                    subtitle: 'Dog will walk around calmly, yawn, stretch',
                    value: 3,
                },
                { type: 'divider' },
                {
                    title: 'Dog Active',
                    subtitle: 'Dog will walk around more actively, sniff, look around',
                    value: 4,
                },
                { type: 'divider' },
            ],
            platforms: [
            { type: 'subheader', title: 'Platform:' },
            { type: 'divider' },
            {
                title: 'Oculus Quest',
                value: 'oculus',
            },
            { type: 'divider' },
            {
                title: 'No Device',
                value: 'no_device',
            },
            { type: 'divider' },
        ],
        };
    },
    provide() {
        return {
            scenarios: this.scenarios,
            platforms: this.platforms,
        }
    },
    methods: {
        startSession(){
            console.log("start Session");
        },
        registerPatient(id, name) {
            this.patient.id = id;
            this.patient.name = name;
            console.log("registered Patient: " + this.patient.id + ' ' + this.patient.name);
            this.patientRegistered = true;
        },
        backToPatientRegistration() {
            this.patientRegistered = false;
        },
        setSessionConfiguration(sessionConfig) {
            const scenario = this.scenarios.find(scenario => scenario.value === sessionConfig.scenario);
            this.sessionSettings.scenario = scenario.value;
            this.sessionSettings.scenarioTitle = scenario.title;
            this.sessionSettings.scenarioDescription = scenario.subtitle;

            const platform = this.platforms.find(platform => platform.value === sessionConfig.platform);
            this.sessionSettings.platform = platform.value;
            this.sessionSettings.platformName = platform.title;

            if (this.sessionSettings.platform != '' && this.sessionSettings.scenario != '') {
                this.sessionConfigured = true;
            }
        },
        backToSessionConfiguration() {
            this.sessionConfigured = false;
        }
    }
}
</script>