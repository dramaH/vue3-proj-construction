<script setup lang="ts">
  import BitLogo from '/@/components/BitLogo/index.vue';
</script>

<template>
  <div class="header-wrapper">
    <section class="left-section">
      <BitLogo />
    </section>
    <section class="right-section"> 个人信息 </section>
  </div>
</template>

<style scoped lang="less">
  .header-wrapper {
    width: 100%;
    height: 90px;
    background-color: #22212e;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 60px;
    box-sizing: border-box;
  }
</style>
