<template>
  
<!--   <v-layout>
    <v-app-bar clipped-left title="Remote Control App" color="rgba(61,61,61, 1)" theme="dark" density="comfortable"></v-app-bar>
  </v-layout> -->
  <v-sheet class="bg-grey-lighten-5" style="min-height: 100vh;">
    <!-- <v-layout>
    <v-app-bar title="Remote Control App" color="rgba(61,61,61, 1)" theme="dark" density="comfortable"></v-app-bar>
  </v-layout> -->
    <router-view></router-view>
  
  </v-sheet>
</template>

<script>

  //
</script>

<style>
@media (min-width: 1200px){
  .video{
  height: 340px;
  width: 567px;
  background-color: rgb(180, 180, 180);
}
}


@media (min-width: 1800px){
  .video{
  height: 420px;
  width:  700px;
  }
}


</style>
