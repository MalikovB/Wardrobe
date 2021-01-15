var clock = function()
{
    var d = new Date();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var seconds = d.getSeconds();

    time = hour + ":" + minute + ":" + seconds;

    document.getElementById('time').innerText = time;
}

clock();

setInterval(clock, 1000);

var dogs = [`https://post.greatist.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg`, 
`https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*`,
`https://images.theconversation.com/files/319375/original/file-20200309-118956-1cqvm6j.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop`,
`https://www.thesprucepets.com/thmb/sfuyyLvyUx636_Oq3Fw5_mt-PIc=/3760x2820/smart/filters:no_upscale()/adorable-white-pomeranian-puppy-spitz-921029690-5c8be25d46e0fb000172effe.jpg`,
`https://media.nature.com/lw800/magazine-assets/d41586-020-01430-5/d41586-020-01430-5_17977552.jpg`,
`https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg`,
`https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HB4AT3D3IMI6TMPTWIZ74WAR54.jpg`,
`https://www.cesarsway.com/wp-content/uploads/2019/10/AdobeStock_190562703.jpeg`];

var dogPre = null;

function giveCat()
{
    console.log("Haha!");



    var catPic = document.getElementById("cat-pic");

    var dog = Math.floor((Math.random() * dogs.length));

    if(dog == dogPre)
    {
        var dog = Math.floor((Math.random() * dogs.length));
    }

    catPic.src = dogs[dog];
    dogPre = dog;
    //document.body.appendChild(catPic);
}