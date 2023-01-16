<script lang="ts" setup></script>
<template>
  <div class="logo-wrapper">
    <div class="logo-badge one"></div>
    <div class="logo-badge two"></div>
    <div class="logo-text"> BitUnix </div>
  </div>
</template>
<style lang="less" scoped>
  .logo-wrapper {
    padding-left: 50px;
    position: relative;
    .logo-badge {
      position: absolute;
      transform: skew(-15deg);
      width: 27px;
      height: 20px;
      &.one {
        left: 8px;
        top: 3px;
        background: radial-gradient(92.73% 142.31% at 90% 5.68%, #d591fe 0%, #91fef1 85.86%);
        border-top-right-radius: 2px;
        border-bottom-left-radius: 2px;
        border-bottom-right-radius: 6px;
        border-top-left-radius: 6px;
      }
      &.two {
        left: 1px;
        top: 8px;
        background: radial-gradient(88.68% 108.18% at 88.68% 6.82%, rgba(213, 237, 134, 0.9) 53.82%, #19fca2 100%);
        border-radius: 6px;
        border-bottom-left-radius: 2px;
        backdrop-filter: 0.7;
      }
    }
    .logo-text {
      font-size: 24px;
      transform: skew(-8deg);
      letter-spacing: 1px;
      font-weight: bold;
      background-color: #fff;
      background-image: -webkit-linear-gradient(left, #d5ed86 10%, #d5ed86);
      background-size: 20% 100%;
      background-repeat: no-repeat;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: scratchy 3s linear infinite;
    }
  }

  @keyframes scratchy {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 100% 0;
    }
  }
</style>
