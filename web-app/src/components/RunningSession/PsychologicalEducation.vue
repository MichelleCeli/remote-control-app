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
            <v-btn @click="triggerAudio('T1')">T1</v-btn>
            <v-btn @click="triggerAudio('T2')">T2</v-btn>
            <v-btn @click="triggerAudio('T2A')">T2A_Richtig</v-btn>
            <v-btn @click="triggerAudio('T2B')">T2B_Falsch</v-btn>
            <v-btn @click="triggerAudio('T3')">T3</v-btn>
            <v-btn @click="triggerAudio('T3A')">T3A_Richtig</v-btn>
            <v-btn @click="triggerAudio('T3B')">T3B_Falsch</v-btn>
            <v-btn @click="triggerAudio('T4')">T4</v-btn>
            <v-btn @click="triggerAudio('T4A')">T4A_JA</v-btn>
            <v-btn @click="triggerAudio('T4B')">T4B_NEIN</v-btn>
            <v-btn @click="triggerAudio('T4B2')">T4B_NEIN_2</v-btn>
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
    props: ['stream', 'socket', 'therapistName'],
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
        triggerAudio(audio){
            this.sendMessage(JSON.stringify({
                "type" : "Trigger Audio",
                "therapist" : this.therapistName,
                "scenarioTitle" : " ",
                "audio" : audio                
            })); 
            console.log(audio);
        },
        sendMessage: async function(message) {
            // We use a custom send message function, so that we can maintain reliable connection with the
            // websocket server.
            if (this.socket.readyState !== this.socket.OPEN) {
                try {
                    await this.waitForOpenConnection(this.socket)
                    this.socket.send(message)
                } catch (err) { console.error(err) }
            } else {
                this.socket.send(message)
            }
        },
        waitForOpenConnection: function() {
            // We use this to measure how many times we have tried to connect to the websocket server
            // If it fails, it throws an error.
            return new Promise((resolve, reject) => {
                const maxNumberOfAttempts = 10
                const intervalTime = 200 

                let currentAttempt = 0
                const interval = setInterval(() => {
                    if (currentAttempt > maxNumberOfAttempts - 1) {
                        clearInterval(interval)
                        reject(new Error('Maximum number of attempts exceeded.'));
                    } else if (this.socket.readyState === this.socket.OPEN) {
                        clearInterval(interval)
                        resolve()
                    }
                    currentAttempt++
                }, intervalTime)
            })
        },
    /* computed: {
        micBtnTitle() {
            if (this.isMicOn === true){
                return 'Mikrofon ausschalten';
            } else return 'Mikrofon anschalten';
        }
    } */
}
}

</script>

<style>

</style>