const app = new Vue({
  el: "#app",
  data: {
    message: "Введите новое дело!",
    button: "button",
    tasks: [
      { text: "Развернуть окружение в Codepen", done: true },
      { text: "Пройти курс по Vue", done: false },
      { text: "Сделать интернет-магазин на Vue", done: false },
    ],
    doneTasks: ["Покушать", "Поспать"],
  },
  methods: {
    addTaks() {
      this.tasks.push({ text: this.message, done: false });
      this.message = "";
    },
    count() {
      return this.tasks.filter((task) => !task.done).length;
    },
  },
});
