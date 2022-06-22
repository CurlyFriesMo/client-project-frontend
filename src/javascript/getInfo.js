document.addEventListener("DOMContentLoaded", function(event) {
    fetch('http://localhost:8888/matchingData', {
    }).then((response) =>
        response.json()).then((data) => {
            if(data.length === 0){
                console.log("empty list")
            }else{
                let PTartistBlocks = document.getElementsByClassName('blokArtistPersonal')
                let FTartistBlocks = document.getElementsByClassName('blokArtistFull')

                let avg = 0
                data.forEach(data => {
                    avg += data.avgDistance
                })
                avg = (avg/data.length)

                for(let i = 0; i < PTartistBlocks.length; i++){
                    for (let j = 0; j < 7; j++) {
                        if(data[j].name === PTartistBlocks[i].children[1].innerHTML){
                            PTartistBlocks[i].style.display = 'block'
                            if(data[j].genres[0] != undefined){
                                PTartistBlocks[i].children[2].innerHTML = data[j].genres[0]
                            }else{
                                PTartistBlocks[i].children[2].innerHTML = ""
                            }
                            for (let i = 0; i < FTartistBlocks.length; i++) {
                                if(FTartistBlocks[i].children[0].innerHTML === data[j].name){
                                    FTartistBlocks[i].style.backgroundColor = "white"
                                }
                            }

                        }
                    }
                }


            }
        }
    )
});


