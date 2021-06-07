var playerForm = document.getElementById('player-form');

playerForm.onsubmit = function(e) {
    e.preventDefault();

    var pname = document.getElementById('pname');
    var pprice = document.getElementById("pprice");

    console.log(pname + pprice);
}