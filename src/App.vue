<template>
  <h2>Home page</h2>
  
  <div class="" style="text-align:left">
    <ul>
    <li v-for="(item, index) in getAllData" :key="index">
      <a href="" @click.prevent="myfunc(item.id)">
      {{item.id}} -- {{item.text}} -- {{item.done ? "done" : "Not done"}}
      </a>
     </li>
  </ul>
  </div>
  <h2>{{$store.state.count}}</h2>

  <button @click="myinc()">click for inc</button>

  <!-- {{get_id}}-->
<h2>this coming; </h2>
<ul>
  <li> {{getTodoById.id}} </li>
  <li> {{getTodoById.text}} </li>
  <li> {{getTodoById.done}} </li>
</ul>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'App',

  data(){
    return{
      get_id: 1
    }
  },
  
  computed: {
    getAllData() {
      return this.$store.state.todos
    },
    // ...mapGetters({getTodoById : getTodoById(this.get_id)}),
    getTodoById(){
      return this.$store.getters.getTodoById(this.get_id)
    }
  },

  methods: {
  myfunc(id){
    console.log(id);
    return this.get_id = id
  },
  ...mapActions({myinc : 'incrementAsync'})
  //  myinc(){
  //    return this.$store.dispatch('incrementAsync')
  // }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
