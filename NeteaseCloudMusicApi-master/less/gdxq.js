let  myUrlId = location.search
console.log(myUrlId)
let gdxqtp=document.querySelector(".gdxq_top");
fetch("http://localhost:3000/playlist/detail"+myUrlId,{
    method:"get",
    mode:"cors"
})
    .then(r=>{
        if (r.status == 200)
        {
            return r.json()
        }
    })
    .then(data=>{
        let output = "";
        output+=
            `
                    <li id="t1">
                    <img src="${data.playlist.coverImgUrl}" id="ig1" alt="">
                        <div id="t2">
                            <div id="t3">
                            <p><img src="../static/erji%20(1).png" id="i1" alt="">${data.playlist.playCount}</p>
                            </div>
                            <button>歌单</button>
                            <img src="${data.playlist.coverImgUrl}" id="ig2" alt="">
                        </div>
                        <span>${data.playlist.name}</span>
                        <div id="t4">
                        <img src=${data.playlist.creator.avatarUrl} id="ig3" alt="">
                        <img src="../static/星星.png" id="ig4" alt="">
                        </div>
                        <span id="sp0">${data.playlist.creator.nickname}</span>
                    </li>
                    `
        console.log(output)
        gdxqtp.innerHTML=output
    })
fetch("http://localhost:3000/playlist/detail?id=2765529914",{
    method:"get",
    mode:"cors"
})
    .then(r=>{
        if (r.status == 200)
        {
            return r.json()
        }
    })
    .then(data=>{
        console.log(data)
        console.log(data.playlist)
        console.log(data.playlist.coverImgUrl)
    })
let tg1=document.querySelector(".tg1");
fetch("http://localhost:3000/playlist/detail"+myUrlId,{
    method:"get",
    mode:"cors"
})
    .then(r=>{
        if (r.status == 200)
        {
            return r.json()
        }
    })
    .then(data=> {
        let output = "";
        data.playlist.tags.forEach(v=>
        {
            console.log(v)
            output+=
                `

                        <button>${v}</button>

            `
        })
        console.log(output)
        tg1.innerHTML=output
    })
let tg2=document.querySelector(".tg2");
fetch("http://localhost:3000/playlist/detail"+myUrlId,{
    method:"get",
    mode:"cors"
})
    .then(r=>{
        if (r.status == 200)
        {
            return r.json()
        }
    })
    .then(data=> {
        let output = "";
        let string1 = data.playlist.description
        let myarr1 = string1.split(/[\n]/g)
        console.log(myarr1)
        myarr1.forEach(v=>{
            output+=
                `
                        <p id="jj">${v}</p>
            `
        })
        console.log(output)
        tg2.innerHTML=output
    })
let jianjie = document.querySelector("#jianjie")
let gdxq_jj = document.querySelector(".gdxq_jj")
let num=0

    jianjie.onclick = function ()
    {
        num++
        if (num % 2 == 1)
        {
            gdxq_jj.style.height = "auto"
        }
        else
        {
            gdxq_jj.style.height = "125px"
        }
    };

let gdxq_gq=document.querySelector(".gdxq_gq")
fetch("http://localhost:3000/playlist/detail"+myUrlId,{
    method:"get",
    mode:"cors"
})
    .then(r=>
    {
        if (r.status == 200)
        {
            return r.json()
        }
    })
    .then(data=>{
        let output = "";
        data.playlist.tracks.forEach((v,i)=>{
            output+=
                `
                    <a href="../html/播放页面.html?id=${v.id}" style="text-decoration : none;">
                    <li>
                        <div>
                        <span>${i + 1}.${v.name}</span>
                        <div class="dd"></div>
                        <span>${v.ar[0].name}-${v.al.name}</span>
                        </div>
                        <img src="../static/播放.png">
                    </li>
                    </a>
                    `
        });
        console.log(output)
        gdxq_gq.innerHTML=output
    })
