<template>
    <v-sheet class="mx-auto" item-value="test">
        <v-list :items="items" @click:select="platformSelected" :mandatory="true"></v-list>
    </v-sheet>
</template>

<script>
export default {
    emits: ['updatePlatform'],
    data: () => ({
        test: [],
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
    }),
    methods: {
        platformSelected(item) {
            this.$emit('updatePlatform', item.id);
        }
    }
}
</script>