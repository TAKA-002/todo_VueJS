var vm = new Vue({
  el: "#app",
  data: {
    newTodo: "",
    todos: ["仕事をする", "朝起きる", "ゲームをする"],
  },

  methods: {
    addItem: function () {
      this.todos.push(this.newTodo);
      this.newTodo = "";
    },

    deleteItem: function (index) {
      if (confirm("削除してよろしいですか？")) {
        this.todos.splice(index, 1);
      }
      return;
    },
  },
});
