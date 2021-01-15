var playerWord = "";
var words = [];
var wordToGuess = "";

string = 'angle ant apple arch arm army baby bag ball band basin basket bath bed bee bell berry bird blade board boat bone book boot bottle box boy brain brake branch brick bridge brush bucket bulb button cake camera card carriage cart cat chain cheese chess chin church circle clock cloud coat collar comb cord cow cup curtain cushion dog door drain drawer dress drop ear egg engine eye face farm feather finger fish flag floor fly foot fork fowl frame garden girl glove goat gun hair hammer hand hat head heart hook horn horse hospital house island jewel kettle key knee knife knot leaf leg library line lip lock map match monkey moon mouth muscle nail neck needle nerve net nose nut office orange oven parcel pen pencil picture pig pin pipe plane plate plough pocket pot potato prison pump rail rat receipt ring rod roof root sail school scissors screw seed sheep shelf ship shirt shoe skin skirt snake sock spade sponge spoon spring square stamp star station stem stick stocking stomach store street sun table tail thread throat thumb ticket toe tongue tooth town train tray tree trousers umbrella wall watch wheel whip whistle window wing wire worm account act adjustment advertisement agreement air amount amusement animal answer apparatus approval argument art attack attempt attention attraction authority back balance base behavior belief birth bit bite blood blow body brass bread breath brother building burn burst business butter canvas care cause chalk chance change cloth coal color comfort committee company comparison competition condition connection control cook copper copy cork copy cough country cover crack credit crime crush cry current curve damage danger daughter day death debt decision degree design desire destruction detail development digestion direction discovery discussion disease disgust distance distribution division doubt drink driving dust earth edge education effect end error event example exchange existence expansion experience expert fact fall family father fear feeling fiction field fight fire flame flight flower fold food force form friend front fruit glass gold government grain grass grip group growth guide harbor harmony hate hearing heat help history hole hope hour humor ice idea impulse increase industry ink insect instrument insurance interest invention iron jelly join journey judge jump kick kiss knowledge land language laugh low lead learning leather letter level lift light limit linen liquid list look loss love machine man manager mark market mass meal measure meat meeting memory metal middle milk mind mine minute mist money month morning mother motion mountain move music name nation need news night noise note number observation offer oil operation opinion order organization ornament owner page pain paint paper part paste payment peace person place plant play pleasure point poison polish porter position powder power price print process produce profit property prose protest pull punishment purpose push quality question rain range rate ray reaction reading reason record regret relation religion representative request respect rest reward rhythm rice river road roll room rub rule run salt sand scale science sea seat secretary selection self sense servant sex shade shake shame shock side sign silk silver sister size sky sleep slip slope smash smell smile smoke sneeze snow soap society son song sort sound soup space stage start statement steam steel step stitch stone stop story stretch structure substance sugar suggestion summer support surprise swim system talk taste tax teaching tendency test theory thing thought thunder time tin top touch trade transport trick trouble turn twist unit use value verse vessel view voice walk war wash waste water wave wax way weather week weight wind wine winter woman wood wool word work wound writing year Aardvark Abyssinian Adelie Penguin Affenpinscher Afghan Hound African Bush Elephant African Civet African Clawed Frog African Forest Elephant African Palm Civet African Penguin African Tree Toad African Wild Dog Ainu Dog Airedale Terrier Akbash Akita Alaskan Malamute Albatross Aldabra Giant Tortoise Alligator Alpaca Alpine Dachsbracke Amazon River Dolphin (Pink Dolphin) American Alsatian American Bulldog American Cocker Spaniel American Coonhound American Eskimo Dog American Foxhound American Pit Bull Terrier American Staffordshire Terrier American Water Spaniel Amur Leopard Anatolian Shepherd Dog Anchovies Angelfish Ant Anteater Antelope Appenzeller Dog Arapaima Arctic Fox Arctic Hare Arctic Wolf Armadillo Asian Elephant Asian Giant Hornet Asian Palm Civet Asiatic Black Bear Aurochs Australian Cattle Dog Australian Kelpie Dog Australian Mist Australian Shepherd Australian Terrier Avocet Axolotl Aye Aye mother father baby child toddler teenager grandmother student teacher minister businessperson salesclerk woman man abruptly absurd abyss affix askew avenue awkward axiom azure bagpipes bandwagon banjo bayou beekeeper bikini blitz blizzard boggle bookworm boxcar boxful buckaroo buffalo buffoon buxom buzzard buzzing buzzwords caliph cobweb cockiness croquet crypt curacao cycle daiquiri dirndl disavow dizzying duplex dwarves embezzle equip espionage euouae exodus faking fishhook fixable fjord flapjack flopping fluffiness flyby foxglove frazzled frizzled fuchsia funny gabby galaxy galvanize gazebo giaour gizmo glowworm glyph gnarly gnostic gossip grogginess haiku haphazard hyphen iatrogenic icebox injury ivory ivy jackpot jaundice jawbreaker jaywalk jazziest jazzy jelly jigsaw jinx jiujitsu jockey jogging joking jovial joyful juicy jukebox jumbo kayak kazoo keyhole khaki kilobyte kiosk kitsch kiwifruit klutz knapsack larynx lengths lucky luxury lymph marquis matrix megahertz microwave mnemonic mystify naphtha nightclub nowadays numbskull nymph onyx ovary oxidize oxygen pajama peekaboo phlegm pixel pizazz pneumonia polka pshaw psyche puppy puzzling quartz queue quips quixotic quiz quizzes quorum razzmatazz rhubarb rhythm rickshaw schnapps scratch shiv snazzy sphinx spritz squawk staff strength strengths stretch stronghold stymied subway swivel syndrome thriftless thumbscrew topaz transcript transgress transplant triphthong twelfth twelfths unknown unworthy unzip uptown vaporize vixen vodka voodoo vortex voyeurism walkway waltz wave wavy waxy wellspring wheezy whiskey whizzing whomever wimpy witchcraft wizard woozy wrist watch wyvern xylophone yachtsman yippee yoked youthful yummy zephyr zigzag zigzagging zilch zipper zodiac zombie';
string = string.toLowerCase();
words = string.split(" ");

console.log(words);

var lettersUsed = "";

var strike = 8;

var word = [];

wordToGuess = words[ Math.floor((Math.random() * words.length))].split('');


var currentWord = document.getElementById('word');
for(var element = 0; element < wordToGuess.length; element++)
{
    playerWord += " _ ";
    word[element] = " _ ";
}

console.log(wordToGuess);

currentWord.innerText = playerWord;

var gameFin = false;

function clickOn(letter)
{
    if(!gameFin)
    {
        document.getElementById(letter).style.backgroundColor = 'rgb(120, 138, 236)';
    
        var bool = false;
        for(var element = 0; element < wordToGuess.length; element++)
        {
            if(wordToGuess[element] == letter)
            {
                word[element] = letter;
                console.log(playerWord);
                bool = true;
            }
        }
    
        lettersUsed += letter + " ";
    
        if(!bool)
        {
            strike--;
        }

        if(strike < 1)
        {
            gameFin = true;
        }
        
        document.getElementById('strike').innerText = "Lives: " + strike;
    
        playerWord = "";
    
        playerWord = String(word);
        
        for(var element = 0; element < wordToGuess.length; element++)
        {
            playerWord = playerWord.replace(',',' ');
        }
    
        console.log(playerWord)
    
        currentWord.innerText = playerWord;
    
        //document.getElementById('used').innerText = "Letters Used: " + lettersUsed;
        
    
    }
    
    if(gameFin){
        playerWord = String(wordToGuess);
        
        for(var element = 0; element < wordToGuess.length; element++)
        {
            playerWord = playerWord.replace(',',' ');
        }
    
        console.log(playerWord)
    
        currentWord.innerText = playerWord;

        document.getElementById('a').style.backgroundColor = 'rgb(120, 138, 236)';
        document.getElementById('b').style.backgroundColor = 'rgb(120, 138, 236)';
        document.getElementById('c').style.backgroundColor = 'rgb(120, 138, 236)';
        document.getElementById('d').style.backgroundColor = 'rgb(120, 138, 236)';
        document.getElementById('e').style.backgroundColor = 'rgb(120, 138, 236)';
        document.getElementById('f').style.backgroundColor = 'rgb(120, 138, 236)';
        document.getElementById('g').style.backgroundColor = 'rgb(120, 138, 236)';
        document.getElementById('h').style.backgroundColor = 'rgb(120, 138, 236)';
        document.getElementById('i').style.backgroundColor = 'rgb(120, 138, 236)';
        document.getElementById('j').style.backgroundColor = 'rgb(120, 138, 236)';
        document.getElementById('k').style.backgroundColor = 'rgb(120, 138, 236)';
        document.getElementById('l').style.backgroundColor = 'rgb(120, 138, 236)';
        document.getElementById('m').style.backgroundColor = 'rgb(120, 138, 236)';
        document.getElementById('n').style.backgroundColor = 'rgb(120, 138, 236)';
        document.getElementById('o').style.backgroundColor = 'rgb(120, 138, 236)';
        document.getElementById('p').style.backgroundColor = 'rgb(120, 138, 236)';
        document.getElementById('q').style.backgroundColor = 'rgb(120, 138, 236)';
        document.getElementById('r').style.backgroundColor = 'rgb(120, 138, 236)';
        document.getElementById('s').style.backgroundColor = 'rgb(120, 138, 236)';
        document.getElementById('t').style.backgroundColor = 'rgb(120, 138, 236)';
        document.getElementById('u').style.backgroundColor = 'rgb(120, 138, 236)';
        document.getElementById('v').style.backgroundColor = 'rgb(120, 138, 236)';
        document.getElementById('w').style.backgroundColor = 'rgb(120, 138, 236)';
        document.getElementById('x').style.backgroundColor = 'rgb(120, 138, 236)';
        document.getElementById('y').style.backgroundColor = 'rgb(120, 138, 236)';
        document.getElementById('z').style.backgroundColor = 'rgb(120, 138, 236)';
    }
    

}

