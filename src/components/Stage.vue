<template>
  <!-- ステージ全体のコンポーネントです。背景・金魚・波紋を合成します -->
  <StageBg class="StageRoot">
    <PlayBoardLayer @ending="ending" />
  </StageBg>
  <div class="arrow">
    <div id="first">↑</div>
    <div id="second">↑</div>
    <div id="third">↑</div>
  </div>
  <div class="holdFrame"></div>
  <div class="title" id="hold">HOLD</div>
  <div class="stockFrame"></div>
  <div class="title" id="stock">NEXT</div>
  <div class="window" :class="{ end: flag }" />
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import StageBg from "./StageBg.vue";
  import PlayBoardLayer from "./PlayBoardLayer.vue";

  export default defineComponent({
    name: "Stage",
    components: { StageBg, PlayBoardLayer },
    props: {
      maxFish: { type: Number, default: 50 },
    },
    setup(_, ctx) {
      let flag = ref(false);
      const ending = (end: boolean) => {
        console.log("GET emit");
        if (end) flag.value = true;
      };
      return {
        flag,
        ending,
      };
    },
  });
</script>
<style scoped lang="scss">
  .holdFrame {
    width: 240px;
    height: 240px;
    border-style: solid;
    border-color: gray;
    border-radius: 5px;
    border-width: 10px;
    position: absolute;
    top: 80px;
    left: calc(50% - 40 * 13px + 20px);
  }
  .stockFrame {
    width: 240px;
    height: 520px;
    border-style: solid;
    border-color: gray;
    border-radius: 5px;
    border-width: 10px;
    position: absolute;
    top: 80px;
    left: calc(50% + 40 * 6px + 20px);
  }
  .title {
    -webkit-text-stroke: 1px #000;
    width: 240px;
    height: 100px;
    position: absolute;
    top: 30px;
    font-size: 40px;
    color: white;
  }
  .arrow {
    width: 240px;
    height: 100px;
    font-size: 30px;
    font-weight: bold;
    color: white;
    #first {
      position: absolute;
      left: calc(50% + 40 * 6px + 130px);
      top: 200px;
    }
    #second {
      position: absolute;
      left: calc(50% + 40 * 6px + 130px);
      top: 320px;
    }
    #third {
      position: absolute;
      left: calc(50% + 40 * 6px + 130px);
      top: 440px;
    }
  }
  #stock {
    left: calc(50% + 40 * 6px + 20px);
  }
  #hold {
    left: calc(50% - 40 * 13px + 20px);
  }

  .end {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(200, 75, 75, 0.5);
  }
</style>
