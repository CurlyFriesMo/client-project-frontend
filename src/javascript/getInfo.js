document.addEventListener("DOMContentLoaded", function(event) {
    fetch('http://localhost:8888/matchingData', {
    }).then((response) =>
        response.json()).then((data) => {
            if(data.length === 0){
                console.log("empty list")
            }else{
                console.log("list length: " + data.length)
                document.getElementsByClassName("artistname1")[0].textContent = data[0].name
                document.getElementById("genre1").textContent = data[1].genres[0]

                document.getElementsByClassName("artistname2")[0].textContent = data[1].name
                document.getElementById("genre2").textContent = data[1].genres[0]

                document.getElementsByClassName("artistname3")[0].textContent = data[2].name
                document.getElementById("genre3").textContent = data[2].genres[0]

                document.getElementsByClassName("artistname4")[0].textContent = data[3].name
                document.getElementById("genre4").textContent = data[3].genres[0]
            }
        }
    )
});


