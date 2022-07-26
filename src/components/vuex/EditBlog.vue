<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success">Edit Blog</p>
        <p class="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium fuga impedit quae!
          Aspernatur cum,
          eveniet id iste minus provident quidem quo soluta? Amet blanditiis dicta enim, nostrum nulla quis sunt?</p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <form @submit="onSubmit">
          <div class="mb-2">
            <input type="text" v-model="title" name="title" class="form-control" placeholder="Blog Title">
          </div>
          <div class="mb-2">
            <input type="text" v-model="content" name="content" class="form-control" placeholder="Blog Content">
          </div>
          <div class="mb-2">
            <input type="submit" class="btn btn-success" value="Update">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "EditBlog",
  props: {
    blogItem:Object
  },
  methods:{
    onSubmit(e){
      e.preventDefault()
      if(!this.title){
        alert('Please Add a title')
        return
      }
      const NewInfo = {
        id: Math.floor(Math.random() * 100000),
        title : this.title,
        content : this.content
      }
      console.log("NewInfo=", NewInfo);
      // this.$emit('add-information', newInfo(NewInfo))
      this.title = ' ', this.content = ' '
    }
  }
}
</script>

<style scoped>

</style>
