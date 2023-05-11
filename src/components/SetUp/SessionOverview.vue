<template>
    <v-card id="scenario-overview" class="d-flex flex-column">
        <v-card-title class="mb-3 align-self-center">
            {{ platformName + ' - ' + scenarioTitle }}
        </v-card-title>

        <v-sheet class="d-flex ">
            <v-img max-width="300" aspect-ratio="16/9" cover src="../../assets/scenarios/hund_placeholder.png" class="mr-4"></v-img>
            <v-sheet>
                <h3>Description:</h3>
                <p>{{ scenarioDescription }}</p>
            </v-sheet>
        </v-sheet>
        <h2 class="align-self-center mt-10 text-orange">
            {{ 'Session Code: ' + sessionCode }}
        </h2>

        <v-sheet class="d-flex justify-space-between mt-10">
            <v-btn @click="$emit('sessionOverviewCancelled')">BACK</v-btn>
            <v-btn theme="dark" :color="'rgba(31, 115, 221, 1)'"
            @click="$emit(startSession)">START</v-btn>
        </v-sheet>

    </v-card>
</template>

<script>
export default {
    props: ['platformName', 'scenarioTitle', 'scenarioDescription'],
    emits: ['sessionOverviewCancelled', 'startSession'],
    data() {
        return {
            imgSrc: './',
            sessionCode: 'XXXXX'
        }
    }
}
</script>

<style scoped>
#scenario-overview {
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