var colours = [];
var pickedColour = [];
var numSquare = 6;
var squares = [];
var lives = 3;

var click = new Audio();
click.src = "click.mp3";

function CreateColour()
{
    var colour = [];

    for(var i = 0; i < 3; i++)
    {
        colour[i] =  Math.floor(Math.random() * 255); 
    }
    return colour;
}

start();

function start()
{
    for(var i = 0; i < numSquare; i++)
    {
        colours[i] = CreateColour();
    }

    pickedColour = colours[Math.floor(Math.random() * 6)];

    document.getElementById('RGBcode').innerText = "RGB (" + pickedColour + ")";

    squares = setUpSquare();

}

function setUpSquare()
{
    for(var i = 0; i < numSquare; i++)
    {
        squares[i] = document.getElementById('s' + (i+1));
        squares[i].style.backgroundColor = "rgb(" + colours[i] + ")";
    }

    return squares;
}

function clickOnElement(num)
{
    var rgbPick = "rgb(" + pickedColour[0] + ", " + pickedColour[1] + ", " + pickedColour[2] + ")"

    if(squares[num].style.backgroundColor == rgbPick)
    {
        for(var i = 0; i < numSquare; i ++)
        {
            squares[i].style.backgroundColor =  "rgb(" + pickedColour + ")";
        }
        document.getElementById('win').innerText = "YOU WIN";

        document.getElementsByClassName('header').style.backgroundColor = "rgb(" + pickedColour + ")";
    }
    else
    {
        lives -= 1;
        squares[num].style.backgroundColor = document.body.style.backgroundColor;
    }
    
    document.getElementById('lives').innerText = "LIVES: " + lives;

    if(lives == 0)
    {
        document.getElementById('win').innerText = "YOU LOSE";
    }

}

function onClick(num)
{
    if(lives > 0)
    {
        click.play();
        clickOnElement(num);
    }

}