function calcBill()
{
    let initialBill = document.getElementById('bill').value;
    var finalBill = initialBill;

    let percent = document.getElementById('service').value;

    let people = document.getElementById('people').value;
    var customTip = document.getElementById('customTip').value;


    if (people == "")
    {
        people = 1;
    }
    if(customTip == "")
    {
        customTip = 0;
    }

    finalBill = (finalBill * percent)/people;

    finalBill = parseInt(finalBill, 10);
    ct = parseInt(customTip, 10);

    finalBill = finalBill + ct;

    document.getElementById('finalBill').innerText = finalBill;
}