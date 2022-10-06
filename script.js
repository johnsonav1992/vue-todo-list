const app = Vue.createApp({
	data() {
		return {
			todoList: [],
			textInput: ''
		}
	},
    methods: {
        addTodo(e) {
            e.preventDefault()
            this.todoList.push(this.textInput)
            this.textInput = ''
        },
        deleteTodo(todo) {
            const todoIndex = this.todoList.indexOf(todo)
            this.todoList.splice(todoIndex, 1)
        }
    }
})

app.mount('#app')
