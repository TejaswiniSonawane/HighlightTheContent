<template>
  <div class="container">
    <div v-for="item in blogList" :key="item.id">
      <div class="card">
              <div class="card-header flex-row">
                <span class="flex-start"> {{ item.title }}</span>
                <div class="card-controls flex-end">
                  <router-link to="/bloglist/view/:item.id" :blogItem={item} class="btn btn-warning" >
                    View
                  </router-link>
                  <router-link to="/bloglist/edit/:item.id"  :blogItem={item} class="btn btn-primary">
                    Edit
                  </router-link>
<!--                  <router-link to="/" class="btn btn-danger">-->
<!--                    Delete-->
<!--                  </router-link>-->
                </div>
              </div>
              <div class="card-body">
                <span> {{ item.content }}</span>
              </div>
            </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      blogList: [{
        id: 1,
        title: 'Lorem ipsum',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      }, {
        id: 2,
        title: 'positive vibes',
        content: 'all positive vibes'
      }]
    }
  }
}
</script>
<style scoped>
.card {
  background: #fff;
  font-size: 16px;
  width: 75%;
  min-width: 286px;
  margin: 2em auto;
  padding: 1.25em;
  border-radius: 4px;
  box-shadow: 0 3px 1px -2px rgba(0,0,0,0.2), 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12);
}
.card-header{
  display: inline-flex;
  justify-content: space-between;
}
</style>