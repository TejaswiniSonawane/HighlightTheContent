<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success">View Blog</p>
        <p class="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium fuga impedit quae!
          Aspernatur cum,
          eveniet id iste minus provident quidem quo soluta? Amet blanditiis dicta enim, nostrum nulla quis sunt?</p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <img src="https://unsplash.com/s/photos/user" class="contact-img" alt="">
      </div>
      <div class="col-md-6">
        <ul class="list-group">
          <li class="list-group-item">Title: <span class="fw-bold">{{blogItem?.title}}</span></li>
          <li class="list-group-item">Content: <span class="fw-bold">{{blogItem?.content}}</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "ViewBlog",
  components: {},
  props: {
    blogItem:Object
  }
}
</script>

<style scoped>

</style>
