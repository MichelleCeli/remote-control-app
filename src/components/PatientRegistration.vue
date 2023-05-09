<template >
    <v-card id="patient-info-input" class="d-flex flex-column">
        <v-card-title class="mb-3 align-self-center">Please enter the patient information:</v-card-title>
        <v-form class="d-flex flex-column" @submit.prevent="createSession">
            <v-text-field id="patient-id" label="Patient ID" :rules="rules" v-model="patientId" required></v-text-field>
            <v-text-field label="Patient Name" :rules="rules" v-model="patientName" required></v-text-field>
            <v-btn type="submit" color="rgba(31, 115, 221, 1)" theme="dark" class="align-self-center">CREATE
                SESSION</v-btn>
        </v-form>
    </v-card>
</template>

<script>

export default {
    emits: ['createSession'],
    data() {
        return {
            patientId: '',
            patientName: '',
            rules: [
                value => {
                    if (value) return true
                    return 'You must enter the information about your patient to create a session'
                },
            ],
        }
    },
    methods: {
        createSession() {
            if (this.patientId != '' && this.patientName != ''){
            console.log("patient data: " + this.patientId + ' ' +  this.patientName);
            this.$emit('createSession', this.patientId, this.patientName);
            } else {
                console.log("enter data first");
            }
        }
    }
}

</script>

<style scoped>
#patient-info-input {
    display: flex;
    flex-direction: column;
    top: 25vh;
    width: 30%;
    margin: 0 auto;
    padding: 2rem;
    justify-content: center;
}
</style>