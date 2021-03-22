function generateTable(table, data) {
  var thead = table.createTHead();
  var row1 = thead.insertRow();
  for (let i = 0; i < data[0].length; i++) {
    var th = document.createElement("th");
    var text = document.createTextNode(data[0][i]);
    th.appendChild(text);
    row1.appendChild(th);
  }

	var tbody = document.createElement('tbody');
	table.appendChild(tbody);
  for (let i = 1; i < data.length; i++) {
    let row2 = tbody.insertRow();
    for (let k = 0; k < data[i].length; k++) {
      let cell = row2.insertCell();
      let text = document.createTextNode(data[i][k]);
      cell.appendChild(text);
    }
  }
}

var table = document.getElementsByClassName("table-dinamic")[0];
var data;
$.ajax({
  type: "GET",
  url: "data/Clasificacion.csv",
  dataType: "text",
  success: function(response) {
    data = $.csv.toArrays(response);
    generateTable(table, data);
  }
});
