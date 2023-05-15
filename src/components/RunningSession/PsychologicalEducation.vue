<template>
    <v-container class="d-flex flex-column align-center" style="width: 700px">
        <div>
            <v-label>patient's view</v-label>
            <div id="video-psychoeducation" class="video"></div>
        </div>
        <div class="d-flex justify-space-between mt-3" style="width: 100%" >
            <v-btn>change volume</v-btn>
            <v-btn>mic on/off</v-btn>
        </div>
        <v-btn theme="dark" :color="'rgba(0, 200, 81, 1)'" class="mt-12" @click="$emit('switchToExposure')">SWITCH TO EXPOSURE SCENE</v-btn>
    </v-container>
</template>

<script>

export default{
    emits: ['switchToExposure'],
}
</script>