<template>
  <div id="app">
    <Map/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Map from './components/Map'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Map
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

</style>
