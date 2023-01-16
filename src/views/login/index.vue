<template>
  <div class="container">
    <div class="content">
      <div class="content-inner">
        <LoginForm />
      </div>
      <div class="footer">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Footer from '/@/components/Footer/index.vue'; // 注意/@/路径
  import LoginForm from './components/login-form.vue';

  const theme = localStorage.getItem('theme');

  if (theme == 'dark') {
    document.documentElement.classList.add('dark');
    document.body.setAttribute('arco-theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    document.body.removeAttribute('arco-theme');
  }
</script>

<style lang="less" scoped>
  .container {
    display: flex;
    height: 100vh;
    .content {
      position: relative;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;
      padding-bottom: 40px;
    }

    .footer {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 100%;
      align-items: center;
    }
  }
</style>
