let tuijian = document.querySelector(".tuijian")
fetch("http://localhost:3000/toplist",{
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
        let output1 = "";
            output1+=
                `
                    <li>
                        <div id="bd">
                        <img src="${data.artistToplist.coverUrl}" alt="">
                        <p id="bd-i">${data.artistToplist.upateFrequency}</p>
                        </div>
                        <p id="bd-icon">${data.artistToplist.name}</p>
                    </li>
                    `
        console.log(output1)
        tuijian.innerHTML=output1
    });
let phb_bd = document.querySelector(".phb_bd")
fetch("http://localhost:3000/toplist",{
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
        data.list.forEach(value=>{
            output+=
                `
                <a href="">
                    <li>
                        <div id="bd">
                        <img src="${value.coverImgUrl}" alt="">
                        <p id="bd-i">${value.description}</p>
                        </div>
                        <p id="bd-icon">${value.name}</p>
                    </li>
                </a>
                    `
        });
        console.log(output)
        phb_bd.innerHTML=output
    });