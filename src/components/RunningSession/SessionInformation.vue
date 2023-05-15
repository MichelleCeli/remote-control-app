<template>
   <v-container class="h-100 ml-4 d-flex flex-column justify-space-between">
      <div class="mt-10">
         <div class="info-p">
            <h3>Session ID:</h3>
            <h4>{{ sessionId }}</h4>
         </div>
         <div class="info-p">
            <h3>Patient ID:</h3>
            <h4>{{ patientId }}</h4>
         </div>
         <div class="info-p">
            <h3>Name des Patienten:</h3>
            <h4>{{ patientName }}</h4>
         </div>
         <div class="info-p">
            <h3>Titel Scenario:</h3>
            <h4>{{ scenarioTitle }}</h4>
         </div>
      </div>

      <div>
         <h3>Aktive Szene:</h3> <!-- comp property for active scene color -->
         <h4>Psychoedukation</h4>
         <h4>Exposition</h4>
      </div>

      <v-btn theme="dark" class="me-auto mb-10" :color="'rgba(221, 139, 31, 1)'">DISCONNECT</v-btn>

   </v-container>
</template>

<script>
export default{
   props: 
   ['sessionId', 
   'patientId', 
   'patientName', 
   'scenarioTitle', 
   'activeScene']
}
</script>

<style scoped>
.info-p {
   margin-bottom: 1rem;
}
</style>