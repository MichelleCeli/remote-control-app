<template>
    <v-container class="d-flex flex-column align-center" style="width: 700px">
        <div>
            <v-label>patient's view</v-label>
            <!-- <v-label>{{stream}}</v-label> -->
            <v-img width="480" height="360" cover :src="stream" class="mr-4"></v-img>
            <!-- <div id="video-psychoeducation" class="video"></div> -->
        </div>
        <!-- <div class="d-flex justify-space-between mt-3" style="width: 100%" >
            <v-btn>change volume</v-btn>
            <v-btn @click="changeMicrophoneState">{{ micBtnTitle }}</v-btn>
        </div> -->
        <v-btn v-if="!sceneRunning" theme="dark" :color="'rgba(0, 200, 81, 1)'" class="mt-12" @click="startPeScene" >START SCENE</v-btn>
        <v-btn v-else class="mt-12" @click="$emit('switchToExposure')">SWITCH TO EXPOSURE SCENE</v-btn>
    </v-container>
</template>

<script>

export default{
    props: ['stream'],
    emits: ['switchToExposure', 'startPeScene'],
    data() {
        return {
            sceneRunning: false
        }
    },
     methods: {
        startPeScene(){
            this.sceneRunning = true;
            this.$emit('startPeScene');
        }
       /*  changeMicrophoneState() {
            this.isMicOn = !this.isMicOn;
        } */
    }, 
    /* computed: {
        micBtnTitle() {
            if (this.isMicOn === true){
                return 'Mikrofon ausschalten';
            } else return 'Mikrofon anschalten';
        }
    } */
}
</script>