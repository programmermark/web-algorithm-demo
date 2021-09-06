function fn1() {
  console.log("fn1 run start");
  fn2();
  console.log("fn1 run end");
}

function fn2() {
  console.log("fn2 run start");
  fn3();
  console.log("fn2 run end");
}

function fn3() {
  console.log("fn3 run start");
  console.log("fn3 run end");
}

fn1();
