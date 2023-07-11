<template>
   <v-container class="h-100 ml-4 d-flex flex-column justify-space-between">
      <div class="mt-10">
         <div class="info-p">
            <h3>Patient ID:</h3>
            <h4>{{ patientId }}</h4>
         </div>
         <div class="info-p">
            <h3>Name des Patienten:</h3>
            <h4>{{ patientName }}</h4>
         </div>
         <div class="info-p">
            <h3>Therapeut:</h3>
            <h4>{{ therapistName }}</h4>
         </div>
         <div class="info-p">
            <h3>Titel Scenario:</h3>
            <h4>{{ scenarioTitle }}</h4>
         </div>
         <div>
            <h3 v-if="activeScene != 'session-history'">Aktive Szene:</h3>
            <h4 v-if="activeScene === 'psychological-education'">Psychoedukation</h4>
            <h4 v-else-if="activeScene === 'exposure-scenario'">Exposition</h4>
            <h4 v-if="activeScene === 'session-history'">Sitzung beendet</h4>
         </div>
      </div>
      <v-btn theme="dark" class="me-auto mb-10" :color="'rgba(221, 139, 31, 1)'" @click="disconnect()">DISCONNECT</v-btn>
   </v-container>
</template>

<script>
export default {
   props:
      [  'patientId',
         'patientName',
         'therapistName',
         'scenarioTitle',
         'activeScene'],
   methods: {
      disconnect() {
         this.$router.push('/');
      }
   },
   /* created() {
      console.log(this.activeScene);
   } */
}
</script>

<style scoped>
.info-p {
   margin-bottom: 1rem;
}
</style>