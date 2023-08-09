<template>
    <v-container >
        <v-row>
            <v-col class="pl-xl-15">
                <v-label>Patient's view</v-label>
                <v-img width="480" height="360" cover :src="stream" class="mr-4"></v-img>
            </v-col>
            <v-col>
                <!-- <v-label class="text-grey-lighten-5">Manipulate behavior</v-label>
                <v-expansion-panels style="width: 50%">
                    <v-expansion-panel title="Manipulate dog behavior" >
                        <v-expansion-panel-text>
                            <v-list-item v-for="(action, a) in manipulations" :key="a">
                                <v-btn block variant="outlined" color="rgba(31, 115, 221, 1)" >
                                    {{ manipulations[a].title }}
                                </v-btn>
                            </v-list-item>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels> -->
            </v-col>
        </v-row>
        <v-row>
            <v-col  class="pl-xl-15">
                <v-textarea label="Notes:" v-model="notes" style="max-width: 700px"></v-textarea>
            </v-col>
            <v-col class="d-flex flex-column">
                <!-- <v-btn class="me-auto" v-if="!activityIsRunning" theme="dark" :color="'rgba(0, 200, 81, 1)'"
                    @click="startActivity">START ACTIVITY</v-btn> -->
                <!-- <v-btn class="me-auto" v-else-if="activityIsRunning && !activityIsPaused" @click="pauseActivity">PAUSE ACTIVITY</v-btn> -->
                <!-- <v-btn class="me-auto" v-if="activityIsPaused" @click="continueActivity">CONTINUE ACTIVITY</v-btn> -->
                <v-btn theme="dark" color="rgba(255, 0, 0, 1)" class="me-auto mt-3" @click="endSession">END SESSION</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    props: ['stream', 'socket'],
    emits: ['endSession'],
    data() {
        return {
            notes: '',
            activityIsRunning: false,
            activityIsPaused: false,
            manipulations: [
                {
                    title: 'bark',
                },
                {
                    title: 'dig',
                },
                {
                    title: 'jump',
                }
            ]
        }
    },
    methods: {
        startActivity() {
            this.activityIsRunning = true;
            this.sendMessage(JSON.stringify({
                "type" : "Start Exposure",         
            }));
        },
        pauseActivity() {
            this.activityIsPaused = true;
        },
        continueActivity() {
            this.activityIsPaused = false;
        },
        endSession() {
            /* this.$emit('endSession', this.notes); */
            this.$router.push('/');
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
    }
}
</script>