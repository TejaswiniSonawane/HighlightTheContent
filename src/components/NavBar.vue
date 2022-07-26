<template>
  <nav class="navbar navbar-dark bg-success navbar-expand-sm">
    <div class="container">
      <router-link class="navbar-brand" to="/">Blog List</router-link>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/bloglist/add">Add</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/bloglist/edit/:blogId">Edit</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/bloglist/view/:blogId">View</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>

</style>
