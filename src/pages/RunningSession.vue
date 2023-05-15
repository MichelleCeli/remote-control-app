<template> 
    <v-layout>
        <v-app-bar title="Remote Control App" color="rgba(61,61,61, 1)" theme="dark" density="comfortable"></v-app-bar>
        <v-navigation-drawer location="left" color="grey-lighten-2" permanent >
           <session-information 
           :session-id="sessionId"
           :patient-id="patientId"
           :patient-name="patientName"
           :scenario-title="scenarioTitle"></session-information>
        </v-navigation-drawer>
        <v-main style="min-height: 300px;">
            <SessionView></SessionView>
        </v-main>
    </v-layout>
</template>

<script>
 import SessionInformation from '../components/RunningSession/SessionInformation.vue'
import SessionView from '../components/RunningSession/SessionView.vue'

export default{
    props: ['sessionId', 'patientId', 'patientName', 'scenarioTitle'],
    components: {
        SessionInformation,
        SessionView
    },
    data() {
        return {
          /*   sessionId: 'sessionId',
            patientId: 'patentid',
            patientName: 'patientname',
            scenarioTitle: 'scenarioTitle', */
            activeScene: ''
        }
    }
}
</script>