<template>
  <h1>Score Ranking TOP 10</h1>
  <div id="ranking">
    <table>
      <thead>
        <tr>
          <th v-for="(header, index) in headers" v-bind:key="index">
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, index) in ranking" v-bind:key="value.id">
          <th>{{ index + 1 }}</th>
          <td>{{ value.name }}</td>
          <td>{{ value.score }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
  // import { axios } from "../infrastructure/AxiosInstance";
  import axios from "axios";
  import { defineComponent, ref } from "vue";
  export default defineComponent({
    name: "Ranking",
    setup(_, ctx) {
      const getRanking = async () => {
        const response = await axios
          .get(`https://tetris-vue-db.herokuapp.com/score/ranking`)
          .catch((error) => error.response);
        ranking.value = response.data;
      };
      let ranking = ref([]);
      const headers = ["No.", "名前", "スコア"];

      getRanking();
      return {
        ranking,
        headers,
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
