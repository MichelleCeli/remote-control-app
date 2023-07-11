<template> 
    <v-layout>
        <v-app-bar title="Remote Control App" color="rgba(61,61,61, 1)" theme="dark" density="comfortable"></v-app-bar>
        <v-navigation-drawer location="left" color="grey-lighten-2" permanent >
           <session-information 
           :patient-id="patientId"
           :patient-name="patientName"
           :therapist-name="therapistName"
           :scenario-title="scenarioTitle"
           :active-scene="activeScene"></session-information>
        </v-navigation-drawer>
        <v-main style="min-height: 300px;">
            <SessionView :scenario-title="scenarioTitle" :therapist-name="therapistName" :stream="stream" @change-active-scene="changeActiveScene"></SessionView>
        </v-main>
    </v-layout>
</template>

<script>
import SessionInformation from '../components/RunningSession/SessionInformation.vue'
import SessionView from '../components/RunningSession/SessionView.vue'


export default{
    props: ['patientId', 'patientName', 'therapistName', 'scenarioTitle'],
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
            activeScene: 'psychological-education',
            socket: {},
            connectedStatus: 'Not connected!',
            message: 'No message yet!',
            stream: ''
        }
    },
    methods: {
        changeActiveScene(sessionState) {
            if(sessionState === 'exposure-scenario'){
                this.activeScene = 'exposure-scenario';
            } else if (sessionState === 'session-history'){
                this.activeScene = 'session-history';
               /*  console.log('active scene changed to session-history'); */
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
        }
    },
    async mounted() {
        // Calculate the URL for the websocket. If you have a fixed URL, then you can remove all this and simply put in
        // ws://your-url-here.com or wss:// for secure websockets.
        /* const socketProtocol = (window.location.protocol === 'https:' ? 'wss:' : 'ws:')
        const port = ':3000';
        const echoSocketUrl = socketProtocol + '//' + window.location.hostname + port + '/ws' */
    
        // Define socket and attach it to our data object
        this.socket = await new WebSocket("ws://localhost:8080"); //not echoSocketUrl anymore

        // When it opens, console log that it has opened. and send a message to the server to let it know we exist
        this.socket.onopen = () => {
            console.log('Websocket connected.');
            this.connectedStatus = 'Connected';
            this.sendMessage(JSON.stringify({"message" : "Hello, server."}));
        }

        // When we receive a message from the server, we can capture it here in the onmessage event.
        this.socket.onmessage = (event) => {
            // We can parse the data we know to be JSON, and then check it for data attributes
            let parsedMessage = JSON.parse(event.data);
            // If those data attributes exist, we can then console log or show data to the user on their web page.
            /* console.log("message from server!");
            console.log(typeof parsedMessage.data); */

            if(typeof parsedMessage.data !== "undefined") {
                var frame = parsedMessage.data.frame;
                /* frame = frame.slice(23); */
                console.log('We have received a message from the server!');
                
                this.stream = frame;
                console.log(this.stream);
            }
    
            if(typeof parsedMessage.message !== "undefined" && parsedMessage.message == "hello") {
                this.message = parsedMessage.message;
                console.log('We have received a message from the server!')
            }
        }
    },
}
</script>