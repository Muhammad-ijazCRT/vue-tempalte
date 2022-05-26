import App from './App.vue'
import { createApp } from 'vue'
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 0,
      todos: [
        { id: 1, text: 'ijazkhan', done: true },
        { id: 2, text: 'ijazkhan', done: true },
        { id: 3, text: 'ijazkhan', done: true },
        { id: 4, text: 'adnan', done: false },
        { id: 5, text: 'adnan', done: false },
        { id: 6, text: 'adnan', done: false }
      ]
    }
  },
  mutations: {
    increment (state) {
      state.count += 1
    }
  },
  actions: {
    incrementAsync (context) {
      console.log(context)
      setTimeout(() => {
        context.commit('increment')
      }, 1000)
    }
  },
  getters: {
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    },
    doneTodos (state) {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount (state, getters) {
      return getters.doneTodos.length
    }
  }
})

const app = createApp(App)
app.use(store)
app.mount('#app')
