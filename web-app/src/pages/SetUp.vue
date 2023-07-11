<template>
    <v-layout>
        <v-app-bar clipped-left title="Remote Control App" color="rgba(61,61,61, 1)" theme="dark"
            density="comfortable"></v-app-bar>
        <patient-registration v-if="!patientRegistered" @create-session="registerPatient"></patient-registration>
        <session-configuration v-else-if="!sessionConfigured" @session-config-cancelled="backToPatientRegistration"
            @set-session-configuration="setSessionConfiguration"></session-configuration>
        <session-overview v-else :scenario-title="sessionSettings.scenarioTitle"
            :scenario-description="sessionSettings.scenarioDescription" :therapist-name="sessionSettings.therapistName"
            @session-overview-cancelled="backToSessionConfiguration" @start-session="startSession"></session-overview>
    </v-layout>
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
                therapist: '',
                therapistName: '',
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
            therapists: [
                { type: 'subheader', title: 'Therapist:' },
                { type: 'divider' },
                {
                    title: 'Realistic Human',
                    value: 'real_human',
                },
                { type: 'divider' },
                {
                    title: 'Cartoon Human',
                    value: 'cartoon_human',
                },
                { type: 'divider' },
                {
                    title: 'Cat',
                    value: 'cat',
                },
                { type: 'divider' },
                {
                    title: 'Robot',
                    value: 'robot',
                },
                { type: 'divider' },
            ],
        };
    },
    provide() {
        return {
            scenarios: this.scenarios,
            therapists: this.therapists,
        }
    },
    methods: {
        startSession() { //no session Id anymore
            this.$router.push({
                name: 'RunningSession',
                params: {
                    /* sessionId: sessionId, */
                    patientId: this.patient.id,
                    patientName: this.patient.name,
                    therapistName: this.sessionSettings.therapistName,
                    scenarioTitle: this.sessionSettings.scenarioTitle
                }
            });
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

            const therapist = this.therapists.find(therapist => therapist.value === sessionConfig.therapist);
            this.sessionSettings.therapist = therapist.value;
            this.sessionSettings.therapistName = therapist.title;

            if (this.sessionSettings.therapist != '' && this.sessionSettings.scenario != '') {
                this.sessionConfigured = true;
            }
        },
        backToSessionConfiguration() {
            this.sessionConfigured = false;
        },
    },
}
</script>