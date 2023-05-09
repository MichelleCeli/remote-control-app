<template>
    <patient-registration v-if="!patientRegistered" @create-session="registerPatient"></patient-registration>
    <session-configuration v-else-if="!sessionConfigured" @session-config-cancelled="backToPatientRegistration" @set-session-configuration="setSessionConfiguration"></session-configuration>
    <session-overview v-else ></session-overview>
</template>


<script>
import PatientRegistration from '../components/PatientRegistration.vue'
import SessionConfiguration from '../components/SessionConfiguration.vue'
import SessionOverview from '../components/SessionOverview.vue'

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
            patientRegistered: true, //for developing
            sessionConfigured: false,
            sessionSettings: {
                platform: '',
                scenario: ''
            },
        }
    },
    methods: {
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
            this.sessionSettings.platform = sessionConfig.platform;
            this.sessionSettings.scenario = sessionConfig.scenario;
            if(this.sessionSettings.platform != '' && this.sessionSettings.scenario != ''){
                this.sessionConfigured = true;
            }
        }
    }
}
</script>