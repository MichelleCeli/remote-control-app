<template>
    <v-sheet class="mx-auto">
        <v-list :items="scenarios" item-props :subtitle="scenarios.subtitle" lines="two" @click:select="scenarioSelected" :mandatory="true">
            <template v-slot:subtitle="{ subtitle }">
                <div v-html="subtitle"></div>
            </template>
        </v-list>
    </v-sheet>
</template>

<script>
import { computed } from 'vue';

export default {
    emits: ['updateScenario'],
    data: () => ({
        scenarios: [
            { type: 'subheader', title: 'Scenario:' },
            { type: 'divider' },
            {
                title: 'Dog Sleeping',
                subtitle: 'Dog will sleep in the distant',
                value: 1,
            },
            { type: 'divider' },
            {
                title: 'Dog Sniffing',
                subtitle: 'Dog will walk around calmly and sniff from time to time',
                value: 2,
            },
            { type: 'divider' },
            {
                title: 'Dog Stretching',
                subtitle: 'Dog will walk around calmly, yawn, stretch',
                value: 3,
            },
            { type: 'divider' },
            {
                title: 'Dog Active',
                subtitle: 'Dog will walk around more actively, sniff, look around',
                value: 4,
            },
            { type: 'divider' },
        ],
    }),
    provide() {
        return {
            scenarios: computed(() => this.scenarios)
        }
    },
    methods: {
        scenarioSelected(scenario) {
            this.$emit('updateScenario', scenario.id);
        }
    }
}
</script>