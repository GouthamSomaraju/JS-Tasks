let op = document.getElementById("ip1");
let form = document.getElementById("form1");

function input(event) {
    op.value += event.target.value;
  }

  function evaluation(event) {
    event.preventDefault();

    let result = eval(op.value);

    op.value = result;
  }
  function Clear() {
    op.value=""
  }
  function del() {
    op.value=op.value.slice(0,-1)
  }