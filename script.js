var list = document.getElementsByClassName("new-item");

function createList() {
    var li = document.createElement(list);
    ul.appendChild(li);
}

function getFirstName() {
    var firstName = document.getElementById("first-name").value;
}


document.getElementById("list-button").onclick = function () {
    location.href = "createListing.html";
};

// Get the modal
var modal = document.getElementById('myModal');
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn = document.getElementById("list-button");
var btn2 = document.getElementById("signup-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

btn2.onclick = function () {
    modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

span2.onclick = function () {
    modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}
