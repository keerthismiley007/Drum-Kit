document.addEventListener("keypress", function(event) {
    sound(event.key)
});

function sound(key){
    
   switch(key){
    case 'A','a':
        audio1=new Audio('./sounds/clap.wav')
        audio1.play()
        break;
    case 'S','s':
        audio2=new Audio('./sounds/hihat.wav')
        audio2.play()
        break;
    case 'D','d':
        audio3=new Audio('./sounds/kick.wav')
        audio3.play()
        break;
    case 'F','f':
        audio4=new Audio('./sounds/openhat.wav')
        audio4.play()
        break;
    case 'G','g':
        audio5=new Audio('./sounds/boom.wav')
        audio5.play()
        break;
    case 'H','h':
        audio6=new Audio('./sounds/ride.wav')
        audio6.play()
        break;
    case 'J','j':
        audio7=new Audio('./sounds/snare.wav')
        audio7.play()
        break;
    case 'K','k':
        audio8=new Audio('./sounds/tom.wav')
        audio8.play()
        break;
    case 'L','l':
        audio9=new Audio('./sounds/tink.wav')
        audio9.play()
        break;
   }

}