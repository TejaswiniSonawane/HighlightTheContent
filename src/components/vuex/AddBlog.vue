<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success">Add Blog</p>
        <p class="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium fuga impedit quae!
          Aspernatur cum,
          eveniet id iste minus provident quidem quo soluta? Amet blanditiis dicta enim, nostrum nulla quis sunt?</p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
       <form>
         <div class="mb-2">
           <input type="text" class="form-control" placeholder="Blog Title">
         </div>
         <div class="mb-2">
           <input type="text" class="form-control" placeholder="Blog Content">
         </div>
         <div class="mb-2">
           <input type="submit" class="btn btn-success" value="Create">
         </div>
       </form>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "AddBlog",
  components: {},
  methods: {
    clickIncrement: function () {
      this.$store.dispatch("counterModule/incrementCounter");
    },
    clickDecrement: function () {
      this.$store.dispatch("counterModule/decrementCounter");
    },
    clickIncrementBy: function (value) {
      this.$store.dispatch("counterModule/incrementCounterBy", {value: value});
    }
  },
  computed: mapGetters({
    counterState: "getCounterState"
  })
}
</script>

<style scoped>

</style>
