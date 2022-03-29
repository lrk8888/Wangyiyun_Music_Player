let dt2 = document.querySelector(".dt2")
fetch("http://localhost:3000/personalized/djprogram",{
    method:"get",
    mode:"cors"
})
    .then(r=>{
        console.log(r.status)
        if (r.status == 200)
        {
            return r.json()
        }
    })
    .then(data=>{
        console.log(data)
        let output = "";
        data.result.forEach(value=>{
            output+=
                `
                    <li>
                    <img src="${value.program.blurCoverUrl}" id="dtig1" alt="">
                        <div id="dti">
                        <img src="${value.picUrl}" id="dtig2" alt="">
                        </div>
                        <p id="dti-icon1">${value.name}</p>
                    </li>
                    `
        }); // <p id="dti-icon2">${value.copywriter}</p>//
        console.log(output)
        dt2.innerHTML=output
    });
let dt = document.querySelector(".dt")
fetch("http://localhost:3000/program/recommend",{
    method:"get",
    mode:"cors"
})
    .then(r=>{
        console.log(r.status)
        if (r.status == 200)
        {
            return r.json()
        }
    })
    .then(data=>{
        console.log(data.programs[0].coverUrl)
        console.log(data.programs)
        let output = "";
        data.programs.forEach(value=>{
            output+=
                `
                    <li>
                    <img src="${value.blurCoverUrl}" id="dtig1" alt="">
                        <div id="dti">
                        <img src="${value.coverUrl}" id="dtig2" alt="">
                        </div>
                        <p id="dti-icon1">${value.reason}</p>
                    </li>
                    `
         });//<p id="dti-icon2">${value.description}</p>//
        // console.log(output)
        dt.innerHTML=output
    });