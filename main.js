//create the first table
table_creator(10)
//this is a function table creator
function table_creator(table_max) {
  let table;
  let max = table_max;
  //creating a table
  table = "<table>"
  for (let J = -1; J <= max; J++) {
    //creating the row
    table += "<tr>";
    if (J === -1) {
      //adding the x cell
      table += "<td class = 'x'>"
      table += "x"
      table += "</td>"
    }else{

      table += "<td class = 'first-col'>"
      table += J;
      table += "</td>"
    }
    //adding a numberd cell
    for (let i = 0; i <= max; i++){
      if (J === -1){
        //adding the first-row
        table += "<td class ='first-row'>"
        table += i;
        table += "</td>"
      } else if (i == J){
        table += "<td class ='squre'>"
        table += i * J;
        table += "</td>"
      }else {
         table += "<td >"
        table += i * J;
        table += "</td>"
      } 
    }
    //closing the
    table += "</tr>";
  }
  //closing the table
    table +=  "</table>";
  //adding the created table into  the html document
  document.getElementById("table").innerHTML = table
  //playing sfx
  sfx();
}
//controller
  function update_value(value){
   //updating the selected value
  document.getElementById("selectedvalue").innerHTML =
  "selected value :" + value;
   //updating the table
  table_creator(value);
  }
   //sfx function
   function sfx(){
    const audio = document.getElementById("sfx");
    audio.pause();
    audio.currentTime = 0;
    audio.play();
   }


