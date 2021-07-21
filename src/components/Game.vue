<template>
  <div id="game-container" />
</template>

<script>
require("../game/game");
export default {
  name: "Game",
};
</script>

<style lang="scss" scoped>
#game-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
</style>
