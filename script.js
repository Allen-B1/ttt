for(let i = 1; i <= 3; i++) {
  for(let j = 1; j <= 3; j++) {
    document.getElementById('r' + i + 'c' + j).onclick = function() {
      if(this.innerHTML == "")
      {
      this.innerHTML = 'X';
        checkWinner()
        computerTurn()
      }
    }
  }
}
function computerTurn()
{
var result = Math.floor(Math.random() * 9 + 1)
if(result == 1)
{
  var box = document.getElementById("r1c1")
    if(box.innerHTML == "")
    {
box.innerHTML = "O";
      checkWinner();
    }
  else
  {
   computerTurn() 
  }
  }
    if(result == 2)
  {
    var box = document.getElementById("r2c1")
    if(box.innerHTML == "")
    {
box.innerHTML = "O";
      checkWinner();
    }
    else
    {
     computerTurn()
    }
  }
  if(result == 3)
  {
var box = document.getElementById("r3c1")
    if(box.innerHTML == "")
    {
box.innerHTML = "O";
      checkWinner();
    }
    else
    {
     computerTurn() 
    }
  }
  if(result == 4)
{
  var box = document.getElementById("r1c2")
    if(box.innerHTML == "")
    {
box.innerHTML = "O";
      checkWinner();
    }
  else
  {
   computerTurn() 
  }
  }
  if(result == 5)
{
  var box = document.getElementById("r2c2")
    if(box.innerHTML == "")
    {
box.innerHTML = "O";
      checkWinner()
    }
  else
  {
   computerTurn() 
  }
  }
  if(result == 6)
{
  var box = document.getElementById("r3c2")
    if(box.innerHTML == "")
    {
box.innerHTML = "O";
      checkWinner()
    }
  else
  {
   computerTurn() 
  }
  }
  if(result == 7)
{
  var box = document.getElementById("r1c3")
    if(box.innerHTML == "")
    {
box.innerHTML = "O";
      checkWinner()
    }
  else
  {
   computerTurn() 
  }
  }
  if(result == 8)
{
  var box = document.getElementById("r2c3")
    if(box.innerHTML == "")
    {
box.innerHTML = "O";
      checkWinner()
    }
  else
  {
   computerTurn() 
  }
  }
  if(result == 9)
{
  var box = document.getElementById("r3c3")
    if(box.innerHTML == "")
    {
box.innerHTML = "O";
      checkWinner();
    }
  else
  {
   computerTurn() 
  }
  }

}
function checkWinner()
{
for(i=1;i<3;i++)
{
  var r = 1;
  console.log(i)
if(document.getElementById("r" + i + "c" + r).innerHTML == "X" || document.getElementById("r" + 1 + "c" + r).innerHTML == "O")
   {
   console.log("Someone won")
}
}
}
