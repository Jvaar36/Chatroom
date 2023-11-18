document.getElementById("signIn").addEventListener("click", () => {

    let uName = document.getElementById("uname").value

    let serverIP = document.getElementById("sIP").value

    if ((uName != "") && (serverIP != "")) {

        localStorage.setItem("uname", uName)

        localStorage.setItem("serverIP", serverIP)

        fetch("http://" + serverIP + "/chatroom/get.php")
        .then((response) => response.json())
        .then((data) => {

            window.arrTest = data

            if (arrTest[0].uname != undefined) 

            {

    document.getElementById("signin").style.visibility = "hidden"

    document.getElementById("type").style.visibility = "visible"

    document.getElementById("name").innerHTML = "Username: " + uName

    document.getElementById("main").innerHTML = ""

    
    fetch("http://" + serverIP + "/chatroom/get.php")
        .then((response) => response.json())
        .then((data) => {



                let arr = data

                let size = arr.length

                let disp = ""

                for (x = 0; x < size; x++) {

                    let user = localStorage.getItem("uname")
                
                if (arr[x].uname == user) {
        
                    disp += "<div class='display'><p>" + arr[x].uname + ": <br/>" + arr[x].msg + "</p></div><br/>"

                }

                else if (arr[x].uname != user) {

                    disp += "<div class='display2'><p>" + arr[x].uname + ": <br/>" + arr[x].msg + "</p></div><br/>"

                }
        
            }
        
            document.getElementById("main").innerHTML = disp

        })
         
    }

    })

}

else {

    document.getElementById("main").innerHTML = "-- No username or IP set."

}

})

document.getElementById("sendMsg").addEventListener("click", () => {

    let Msg = document.getElementById("msg").value

    let uname = localStorage.getItem("uname")

    let serverIP = localStorage.getItem("serverIP")

    const data = new FormData()
    data.append('uname', uname)
    data.append('msg', Msg)

    fetch("http://" + serverIP + "/chatroom/enter.php", {
      method: "POST",
      body: data
    }).then(
    
    fetch("http://" + serverIP + "/chatroom/get.php")
        .then((response) => response.json())
        .then((data) => {


                let arr = data

                let size = arr.length

                let disp = ""

                for (x = 0; x < size; x++) {

                    let user = localStorage.getItem("uname")
                
                if (arr[x].uname == user) {
        
                    disp += "<div class='display'><p>" + arr[x].uname + ": <br/>" + arr[x].msg + "</p></div><br/>"

                }

                else if (arr[x].uname != user) {

                    disp += "<div class='display2'><p>" + arr[x].uname + ": <br/>" + arr[x].msg + "</p></div><br/>"

                }
        
            }
        
            document.getElementById("main").innerHTML = disp

            document.getElementById("msg").value = ""

              
        }))

    })

document.getElementById("signout").addEventListener("click", () => {

    localStorage.setItem("uname", "")

    localStorage.setItem("serverIP", "")

    document.getElementById("type").style.visibility = "hidden"

    document.getElementById("signin").style.visibility = "visible"

    document.getElementById("main").innerHTML = "-- Signed out."


})

document.getElementById("refresh").addEventListener("click", () => {

    let serverIP = localStorage.getItem("serverIP")

    fetch("http://" + serverIP + "/chatroom/get.php")
    .then((response) => response.json())
    .then((data) => {

            let arr = data

            let size = arr.length

            let disp = ""

            for (x = 0; x < size; x++) {

                let user = localStorage.getItem("uname")
            
            if (arr[x].uname == user) {
    
                disp += "<div class='display'><p>" + arr[x].uname + ": <br/>" + arr[x].msg + "</p></div><br/>"

            }

            else if (arr[x].uname != user) {

                disp += "<div class='display2'><p>" + arr[x].uname + ": <br/>" + arr[x].msg + "</p></div><br/>"

            }
    
        }
    
        document.getElementById("main").innerHTML = disp

          
    })



})