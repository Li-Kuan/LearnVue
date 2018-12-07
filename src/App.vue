<template>
  <div id="app">
    <header>  
      <nav id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/learn">Learn</router-link>
      </nav>
    </header>
    <section>
      <router-view/>
    </section>
    <footer class="footer">
      This is Footer
    </footer>
  </div>
</template>

<style>
html, body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
ul {
  padding: 0;
  margin: 0;
}
li {
  list-style-position: inside;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1a75cf;
  margin-top: 60px;
}
.footer {
  width: 100%;
  background: #ccc;
  text-align: center;
  padding: 10px;
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>
