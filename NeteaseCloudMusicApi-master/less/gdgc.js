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
        data.result.slice(0,30).forEach(v=>{
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
        console.log(output)
        hot1.innerHTML=output
    })