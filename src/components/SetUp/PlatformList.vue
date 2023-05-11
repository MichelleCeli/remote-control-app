<template>
    <v-sheet class="mx-auto">
        <v-list :items="platforms" @click:select="platformSelected" :mandatory="true"></v-list>
    </v-sheet>
</template>

<script>
export default {
    emits: ['updatePlatform'],
    inject: ['platforms'],
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
        platformSelected(platform) {
            this.$emit('updatePlatform', platform.id);
        }
    }
}
</script>