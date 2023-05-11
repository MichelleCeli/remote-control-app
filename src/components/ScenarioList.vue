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

export default {
    emits: ['updateScenario'],
    inject: ['scenarios'],
    methods: {
        scenarioSelected(scenario) {
            this.$emit('updateScenario', scenario.id);
        }
    }
}
</script>