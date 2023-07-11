<template>
    <v-sheet class="mx-auto">
        <v-list :items="therapists" @click:select="therapistSelected" :mandatory="true"></v-list>
    </v-sheet>
</template>

<script>
export default {
    emits: ['updateTherapist'],
    inject: ['therapists'],
    /* data: () => ({
        items: [
            { type: 'subheader', title: 'Platform:' },
            { type: 'divider' },
            {
                title: 'Oculus Quest',
                value: 'oculus',
            },
            { type: 'divider' },
            {
                title: 'No Device',
                value: 'no_device',
            },
            { type: 'divider' },
        ],
    }), */
    methods: {
        therapistSelected(therapist) {
            this.$emit('updateTherapist', therapist.id);
        }
    }
}
</script>