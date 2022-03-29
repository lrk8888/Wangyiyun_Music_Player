function $(e)
{
    return document.querySelector(e)
}
window.onload=function(){
    let hot1=document.querySelector(".gd");
    fetch("http://localhost:3000/personalized",{
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
            data.result.slice(0,6).forEach(v=>{
                output+=
                    `
                    <a href="gedanxiangqing.html?id=${v.id}" style="text-decoration : none;">
                    <li>
                    <div class="cc">
                        <img src="${v.picUrl}" alt="">
                        <p><img src="../static/erji%20(1).png" alt="">${v.playCount}</p>
                         <p>${v.name}</p>
                         </div>
                    </li>   
                    </a>
                    `
            });
            hot1.innerHTML=output
        })
    let hot2=document.querySelector(".zuixingd")
    fetch("http://localhost:3000/personalized/newsong",{
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
            data.result.forEach((v,i)=>{
                    output+=
                        `
                    <a href="../html/播放页面.html?id=${v.id}" style="text-decoration : none;">
                    <li>
                        <div>
                        <span>${i + 1}.${v.name}</span>
                        <div class="dd"></div>
                        <span>${v.song.artists[0].name}-${v.song.album.name}</span>
                        </div>
                        <img src="../static/播放.png">
                    </li>
                    </a>
                    `
            });
            hot2.innerHTML=output
        })

    let hot3=document.querySelector("#ban");
    fetch("http://localhost:3000/banner",{
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
            data.banners.forEach((value,index)=>{
                output+=
                    `
                    <li>
                        <img src="${value.imageUrl}" id="i${index}" alt="">
                    </li>
                    `
            });
            hot3.innerHTML=output
        })
}