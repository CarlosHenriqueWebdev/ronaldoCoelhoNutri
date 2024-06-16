<!-- pages/Home.vue -->
<template>
  <div class="flex flex-col gap-[100px]">
    <Hero title="Sobre Nós" />
    <Introduction />
    <HistoryMissionVision />
    <Values />
    <Message />
    <MeetOurTeam />
  </div>
</template>

<script>
import Hero from 'src/components/common/Hero.vue';
import Introduction from 'src/components/pages/about/Introduction.vue';
import HistoryMissionVision from 'src/components/pages/about/HistoryMissionVision.vue';
import MeetOurTeam from 'src/components/pages/about/MeetOurTeam.vue';
import Message from 'src/components/pages/about/Message.vue';
import Values from 'src/components/pages/about/Values.vue';

export default {
  components: {
    Hero,
    Introduction,
    HistoryMissionVision,
    MeetOurTeam,
    Message,
    Values,
  },
};
</script>

<style scoped>
/* Add any Home.vue specific styles here */
</style>
