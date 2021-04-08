var data = {
  inputValue: "ここに入力内容が表示される",
};

var vm = new Vue({
  el: "#app",
  data: data,
});

function inputAction(event) {
  data.inputValue = event.target.value;
}
