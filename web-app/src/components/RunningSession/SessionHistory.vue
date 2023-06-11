<template>
    <v-container >
        <v-row>
            <v-col class="pl-xl-15 m-lg-n5">
                <div id="video-session-history" class="video"></div>
            </v-col>
            <v-col>
                <v-textarea label="Notes:" v-model="notes" style="max-width: 700px"></v-textarea>
                <v-btn class="me-auto" @click="downloadNotes">DOWNLOAD NOTES</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col  class="pl-xl-15">
                <v-btn class="me-auto" @click="downloadVideo">DOWNLOAD VIDEO</v-btn>
            </v-col>
            <v-col class="d-flex flex-column">
                <v-btn class="me-auto" @click="downloadAll">DOWNLOAD ALL</v-btn>
                <v-btn class="me-auto mt-5" theme="dark" :color="'rgba(31, 115, 221, 1)'" @click="startNextSession">START NEXT SESSION</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

export default {
    props: ['notesFromSession'],
    data() {
        return{
            notes: ''
        }
    },
    methods: {
        downloadAll() {
            console.log("download all");
        },
        downloadVideo() {
            console.log("download Video");
        },
        startNextSession() {
            console.log("start next session");
        },
        downloadNotes() {
            console.log("download notes");
        }
    },
    created() {
        this.notes = this.notesFromSession;
    }

}

</script>