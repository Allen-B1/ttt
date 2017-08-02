var r = 1
var l = 1
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        document.getElementById('r' + i + 'c' + j).onclick = function() {
            if (this.innerHTML == "")
            {
                this.innerHTML = 'X';
                r = 1
                checkWinner()
                computerTurn()
            }
        }
    }
}
function computerTurn()
{ 
    r = 1
    var result = Math.floor(Math.random() * 9 + 1)
    if (result == 1)
    {
        var box = document.getElementById("r1c1")
        if (box.innerHTML == "")
        {
            box.innerHTML = "O";
            checkWinner();
        }
        else
        {
            computerTurn()
        }
    }
    if (result == 2)
    {
        var box = document.getElementById("r2c1")
        if (box.innerHTML == "")
        {
            box.innerHTML = "O";
            checkWinner();
        }
        else
        {
            computerTurn()
        }
    }
    if (result == 3)
    {
        var box = document.getElementById("r3c1")
        if (box.innerHTML == "")
        {
            box.innerHTML = "O";
            checkWinner();
        }
        else
        {
            computerTurn()
        }
    }
    if (result == 4)
    {
        var box = document.getElementById("r1c2")
        if (box.innerHTML == "")
        {
            box.innerHTML = "O";
            checkWinner();
        }
        else
        {
            computerTurn()
        }
    }
    if (result == 5)
    {
        var box = document.getElementById("r2c2")
        if (box.innerHTML == "")
        {
            box.innerHTML = "O";
            checkWinner()
        }
        else
        {
            computerTurn()
        }
    }
    if (result == 6)
    {
        var box = document.getElementById("r3c2")
        if (box.innerHTML == "")
        {
            box.innerHTML = "O";
            checkWinner()
        }
        else
        {
            computerTurn()
        }
    }
    if (result == 7)
    {
        var box = document.getElementById("r1c3")
        if (box.innerHTML == "")
        {
            box.innerHTML = "O";
            checkWinner()
        }
        else
        {
            computerTurn()
        }
    }
    if (result == 8)
    {
        var box = document.getElementById("r2c3")
        if (box.innerHTML == "")
        {
            box.innerHTML = "O";
            checkWinner()
        }
        else
        {
            computerTurn()
        }
    }
    if (result == 9)
    {
        var box = document.getElementById("r3c3")
        if (box.innerHTML == "")
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
    var letterxr1 = 0;
    var letteror1 = 0;
    var letterxc1 = 0;
    var letteroc1 = 0;
    var letterxd1 = 0;
    var letterod1 = 0;
    var letterxd2 = 0;
    var letterod2 = 0;
    var winner = ""
    for (i = 1; i < 4; i++)
    {
       
        if (document.getElementById("r" + i + "c" + r).innerHTML == "X" || document.getElementById("r" + i + "c" + r).innerHTML == "O")
        {
            if (document.getElementById("r" + i + "c" + r).innerHTML == "X")
            {
                letterxr1 += 1
                if (letterxr1 == 3)
                {
                    console.log("X won!!!");
                    winner = "X"
                }
            }
            else
            {
                letteror1 += 1
                if (letteror1 == 3)
                {
                    console.log("O won!!!");
                    winner = "O"
                }
            }
        }
            if(document.getElementById("r" + r + "c" + i).innerHTML == "X" || document.getElementById("r" + r + "c" + i).innerHTML == "O")
            {
                 if (document.getElementById("r" + r + "c" + i).innerHTML == "X")
            {
                letterxc1 += 1
                if (letterxc1 == 3)
                {
                    console.log("X won!!!");
                    winner = "X"
                }
            }
            else
            {
                letteroc1 += 1
                if (letteroc1 == 3)
                {
                    console.log("O won!!!");
                    winner = "O"
                }
            }
        }
        
        if(document.getElementById("r" + i + "c" + i).innerHTML == "X" || document.getElementById("r" + i + "c" + i).innerHTML == "O")
        {
            if (document.getElementById("r" + i + "c" + i).innerHTML == "X")
            {
                letterxd1 += 1
                if (letterxd1 == 3)
                {
                    console.log("X won!!!");
                    winner = "X"
                }
            }
            else
            {
                letterod1 += 1
                if (letterod1 == 3)
                {
                    console.log("O won!!!");
                    winner = "O"
                }
            }
        }
     } 
   if(document.getElementById("r" + 3 + "c" + 1).innerHTML == "X" && document.getElementById("r" + 2 + "c" + 2).innerHTML == "X" && document.getElementById("r" + 1 + "c" + 3).innerHTML == "X" || document.getElementById("r" + 3 + "c" + 1).innerHTML == "O" && document.getElementById("r" + 2 + "c" + 2).innerHTML == "O" && document.getElementById("r" + 1 + "c" + 3).innerHTML == "O")
   {
       if(document.getElementById("r" + 3 + "c" + 1).innerHTML == "X")
       {
           winner = "X"
           console.log("X won!!!")
       }
       else
       {
           winner = "O"
           console.log("O won!!!");
       }
   }
       
   
    if(winner == "X")
    {
alert("X won!!!")
    }
    if(winner == "O")
    {
alert("O won!!!");
    }
     if(winner == "")
        {
            if(r != 3)
            {
                r += 1
                checkWinner()
            }
        } 
    else
    {

clearBoard()
        winner = ""
    }
}
function clearBoard()
{
    l = 1;
for(i=1; i<4; i++)
{
document.getElementById("r" + i + "c" + l).innerHTML = ""
}
        if(l != 3)
        {
        l += 1
        clearBoard()
        }
}
