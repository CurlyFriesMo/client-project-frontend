fetch('http://localhost:8888/matchingData', {
}).then((response) =>
        response.json()).then((data) => {
            if(data.length === 0){
                console.log("empty list")
            }else{
                console.log("list length: " + data.length)

                document.getElementById("artistname1").textContent = data[1].name
                document.getElementById("genre1").textContent = data[1].genres[0]
            }
    }
)
