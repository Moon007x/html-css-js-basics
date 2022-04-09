window.addEventListener("load", function ()
{
  let counter = 0;

  function buttonClicked()
  {
    counter++;

    let clickCounterElement = document.getElementById("clickcounter");

    clickCounterElement.innerHTML = "Clicked " + counter + " times."
  }

  let clickedButtonElement = document.getElementById("clickbutton");

  clickedButtonElement.addEventListener("click", buttonClicked);
});