const FirstDialog = document.querySelector("dialog#FirstDialog");
const SecondDialog = document.querySelector("dialog#SecondDialog");
const body = document.querySelector("body");

function openDialog() {
  if (!SecondDialog.open) {
    SecondDialog.show();
    FirstDialog.close();
  }
}

function OpenFirstDialog() {
  FirstDialog.show();
}

function OnlyEssential() {
  body.classList.remove("acceptedCookie");
  body.classList.add("essentialCookie");
}

function Accept() {
  // component inladen
  body.classList.add("acceptedCookie");
  body.classList.remove("essentialCookie");
}
