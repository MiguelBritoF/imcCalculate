function calculateIMC() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    const alturaEmMetros = height/100;

    if (!weight || !height) {
        document.getElementById("result").innerHTML = "Fill in the weight and height correctly.";
        return;
      }

    if (height.includes(".")) {
      var imc = weight / (height * height);
    } else {
      var imc = weight / (alturaEmMetros * alturaEmMetros);
    }

    document.getElementById("result").innerHTML = "Your IMC is: " + imc.toFixed(2);
}