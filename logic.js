function displayFiction() {
    var mainList = document.getElementsByClassName("Main-List")[0];
    //hideSection(mainList);
    mainList.style.visibility = "collapse";

    console.log(typeof (mainList));

    var bestsellerInformation = document.getElementsByClassName("Bestseller")[0];
    bestsellerInformation.style.visibility = "collapse";

    var fictionInformation = document.getElementsByClassName("Fiction")[0];
    fictionInformation.style.visibility = "visible";


}
function displayBestseller() {
    var mainList = document.getElementsByClassName("Main-List")[0];
    mainList.style.visibility = "collapse";

    var fictionInformation = document.getElementsByClassName("Fiction")[0];
    fictionInformation.style.visibility = "collapse";


    var bestsellerInformation = document.getElementsByClassName("Bestseller")[0];
    bestsellerInformation.style.visibility = "visible";
}

function displayMainList() {
    var fictionInformation = document.getElementsByClassName("Fiction")[0];
    fictionInformation.style.visibility = "collapse";

    var bestsellerInformation = document.getElementsByClassName("Bestseller")[0];
    bestsellerInformation.style.visibility = "collapse";

    var mainList = document.getElementsByClassName("Main-List")[0];
    mainList.style.visibility = "visible";
}




function autopopulate(inpForm, ListOfItems){
    //console.log("Preparing the autopopulate lust.")
    inpForm.addEventListener("input", function(e){
        var typedValue = inpForm.value;

        var arrOfSuggestions = [];

            for (var i = 0; i < ListOfItems.length; i++) {
                if (typedValue.length > 0 &&  ListOfItems[i].includes(typedValue)) {
                    arrOfSuggestions.push(ListOfItems[i]);
                    console.log("Matched! The item matched is:")
                    console.log(ListOfItems[i])
                }
            }

        //addToList(arrOfSuggestions);
    });
}



var countries = ["Afghanistan", "Bangladesh", "Canada"];

//autopopulate(document.getElementById('searchBarInput'), countries);

function createRow() {
    var row = document.createElement('tr'); // create row node
    var col = document.createElement('td'); // create column node
    var col2 = document.createElement('td'); // create second column node
    row.appendChild(col); // append first column to row
    row.appendChild(col2); // append second column to row
    var serialNo = table.rows.length.toString();
    var searchBarText = document.getElementById('searchBarInput').value;

    col.innerHTML = serialNo; // put data in first column
    col2.innerHTML = searchBarText; // put data in second column
    var table = document.getElementById("listTable"); // find table to append to
    table.appendChild(row); // append row to table
}

function addToList(){
    console.log("Adding to the list...")

    var table = document.getElementById("listTable");
    // new_row = table.rows[1].cloneNode(true);
    var len = table.rows.length;


    var NewRow = table.insertRow(len);
    var serialNo = NewRow.insertCell(0);
    var info = NewRow.insertCell(1);

    var searchBarText = document.getElementById('searchBarInput').value;
    serialNo.innerHTML = len.toString();
    info.innerHTML = searchBarText;


}

function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        //closeAllLists();
        if (!val) {
            return false;
        }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        console.log(this);
        /*append the DIV element as a child of the autocomplete container:*/

        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function (e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    //closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
};
    autocomplete(document.getElementById("searchBarInput"), countries);

function deleteRowById(buttonId)
{
    let rowId = "r" + buttonId;
    let row = document.getElementById(rowId);
    row.parentNode.removeChild(row);
}

    function deleteThisRow(button) {
        debugger;
        console.log("Trying to delete......");

        var table = document.getElementById('listTable');

        deleteRowById(button.id)

        /*var rowToDeleteIndex = parseInt(button.id);
        console.log(typeof(rowToDeleteIndex));
        table.deleteRow(rowToDeleteIndex);*/
        //rowToDelete.deleteRo(rowToDeleteIndex);
    }

    function editThisRow(button){
        var new_input = prompt("What is the new input?");
        var rowId = "r" + button.id;


        var row = document.getElementById(rowId);
        console.log(typeof(row));
       row["cells"][1].innerHTML = "<td>" + new_input +  "</td>";
       console.log(row.cells[1]);
        //row.cells[1] = new_input;
    }