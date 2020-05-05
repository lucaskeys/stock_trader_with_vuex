<template>
    <div class="container">
      <app-header></app-header>
      <br>
      <div class="row">
        <div class="col-md-12">
      <router-view></router-view>
        </div>
      </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue'
    export default {
      components: {
        appHeader: Header
      }
    }
</script>

<style>

</style>
