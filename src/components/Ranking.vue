<template>
  <h1>Score Ranking TOP 10</h1>
  <div id="app">
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
        console.log("get request");
        const response = await axios
          .get(`/api`)
          .catch((error) => error.response);
        console.log(response);
        ranking = response.data;
      };
      let ranking = [];
      const headers = ["No.", "名前", "スコア"];
      getRanking();
      return {
        ranking,
        headers,
      };
    },
  });
</script>
