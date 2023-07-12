<template>
    <v-container class="d-flex flex-column align-center" style="width: 700px">
        
        <v-row>
            <v-col>
            <v-label>patient's view</v-label>
            <!-- <v-label>{{stream}}</v-label> -->
            <v-img width="480" height="360" cover :src="stream" class="mr-4"></v-img>
        </v-col>
        <v-col>
            <div id="dialog01">
            <v-btn onclick="triggerAudio()">T1</v-btn>
            <v-btn onclick="triggerAudio()">T2</v-btn>
            <v-btn onclick="triggerAudio()">T2A_Richtig</v-btn>
            <v-btn onclick="triggerAudio()">T2B_Falsch</v-btn>
            <v-btn onclick="triggerAudio()">T3</v-btn>
            <v-btn onclick="triggerAudio()">T3A_Richtig</v-btn>
            <v-btn onclick="triggerAudio()">T3B_Falsch</v-btn>
            <v-btn onclick="triggerAudio()">T4</v-btn>
            <v-btn onclick="triggerAudio()">T4A_JA</v-btn>
            <v-btn onclick="triggerAudio()">T4B_NEIN</v-btn>
            <v-btn onclick="triggerAudio()">T4B_NEIN_2</v-btn>
            </div>
            
        </v-col>
        </v-row>
        <v-row>
            <!-- <div id="video-psychoeducation" class="video"></div> -->
        
        <!-- <div class="d-flex justify-space-between mt-3" style="width: 100%" >
            <v-btn>change volume</v-btn>
            <v-btn @click="changeMicrophoneState">{{ micBtnTitle }}</v-btn>
        </div> -->
        <v-btn v-if="!sceneRunning" theme="dark" :color="'rgba(0, 200, 81, 1)'" class="mt-12" @click="startPeScene" >START SCENE</v-btn>
        <v-btn v-else class="mt-12" @click="$emit('switchToExposure')">SWITCH TO EXPOSURE SCENE</v-btn>
    </v-row>
    </v-container>
</template>

<script>

export default{
    props: ['stream', 'socket'],
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
        },
        triggerAudio(){

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

<style>

</style>