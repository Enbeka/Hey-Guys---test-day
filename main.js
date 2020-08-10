
const radios = document.getElementsByName('check');


document.querySelector(".btn").addEventListener('click', function(){
    for (i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {

            if(i===0) {
                console.log(`Picked answer ${i+1} - Buwegung`)
            }else if(i===1){
                console.log(`Picked answer ${i+1} - Gesunde Ernährung`)
            }else if(i===2){
                console.log(`Picked answer ${i+1} - Rauchen und Alkoholkonsum`)
            }else if(i===3){
                console.log(`Picked answer ${i+1} - Nein danke`)
            }
        }
      }
    })







