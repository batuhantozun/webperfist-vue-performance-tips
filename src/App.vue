<template>
  <div id="nav">
    <router-link to="/">Reactivty</router-link> |
    <router-link to="/list-rendering">List Rendering</router-link> |
    <router-link to="/functional-components">Functional Components</router-link>
    |
    <router-link to="/async-components">Async Component</router-link> |
    <router-link to="/keeping-alive">Keep Alive</router-link> |
    <router-link to="/lazy-routing">Lazy Router</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
