<template>
  <div>
    <button id="tetris" @click="moveToTetris">TETRIS</button>

    <button id="ranking" @click="moveToRanking">RANKING</button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { useRouter } from "vue-router";
  export default defineComponent({
    name: "Top",
    setup(_, ctx) {
      const router = useRouter();
      const moveToTetris = () => {
        return router.replace({ name: "Tetris" });
      };
      const moveToRanking = () => {
        return router.replace({ name: "Ranking" });
      };

      return {
        moveToTetris,
        moveToRanking,
      };
    },
  });
</script>
<style scoped lang="scss">
  #ranking {
    text-align: -webkit-center;
  }
  table {
    color: cornsilk;
    background-color: rgb(25, 92, 75);
    font-size: 25px;
    border-collapse: collapse;
    th {
      background-color: rgb(67, 144, 70);
    }
    th,
    td,
    tr {
      padding: 0.5rem 1rem;
      text-align: center;
      border-color: cornsilk;
      border: solid 1.5px;
    }
  }
</style>
