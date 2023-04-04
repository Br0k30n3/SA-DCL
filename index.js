

var key = document.getElementById("search__input");


key.addEventListener("input", e => {
  const value = e.target.value;
  console.log(value)
})
$.getJSON("license-db.json", function (data){
for (let i in data.licenses) {
  let fName = data.licenses[i].fName;
  let lName = data.licenses[i].lName;
  
}

})








function myFunction() {
    var x = document.getElementById("nav-menu");
    if (x.className === "nav-menu") {
      x.className += " responsive";
    } else {
      x.className = "nav-menu";
    }
}