const app = new Vue({
  el: "#app",
  data: {
    message: "Введите новое дело!",
    button: "button",
    tasks: [
      "Развернуть окружение в Codepen",
      "Пройти курс по Vue",
      "Сделать интернет-магазин на Vue",
    ],
    doneTasks: ["Покушать", "Поспать"],
  },
});
