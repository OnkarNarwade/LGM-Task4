


const result = document.getElementById("result");

const buttons = document.getElementsByClassName("button");

const Operation = (e) => {
  const valueOfArguments = e.target.value;
  if (
    valueOfArguments != "=" &&
    valueOfArguments != "AC" &&
    valueOfArguments != "CLEAN"
  ) {
    result.value += e.target.value.trim();
  }
  if (valueOfArguments == "=") {
    if (result.value == "2+2") {
      result.value = "🐠";
      return;
    }

    result.value = eval(result.value);
  }

  if (valueOfArguments == "AC") {
    result.value = "";
  }

  if (valueOfArguments == "CLEAN") {
    result.value = result.value.slice(0, -1);
  }
};

for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", Operation);
}


//ignore

   const redirect =confirm('view in full screen?')

if(redirect){
    window.open('https://codepen.io/nestormyrie/full/oNZWgVz')
}
