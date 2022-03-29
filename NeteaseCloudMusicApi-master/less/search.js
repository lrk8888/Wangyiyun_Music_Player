// function $(e)
// {
//     return  document.querySelector(e)
// }
// window.onload=function() {
//     let hot = document.querySelector(".li_list");
//     fetch("http://localhost:3000/search/hot", {
//         method: "GET",
//         mode: "cors"
//     })
//         .then(response => {
//             if (response.status === 200) {
//                 return response.json()
//             }
//         })
//         .then(data => {
//             let output = "";
//             data.result.hots.forEach(value => {
//                 output +=
//                     `
//                     <li>${value.first}</li>
//                     `
//             });
//             hot.innerHTML = output
//         });
// };
window.onload=function() {
    let hot = document.querySelector(".li_list");
    let mybtn=document.querySelector(".OK");
    let input=document.querySelector(".input");
    let gdxq3_gq=document.querySelector(".gdxq3_gq");
    let search_my=document.querySelector(".search_my");
    // let search_new=document.querySelector(".search_new");
    // let clear=document.querySelector(".clear");
    fetch("http://localhost:3000/search/hot", {
        method: "GET",
        mode: "cors"
    })
        .then(response => {
            if (response.status === 200) {
                return response.json()
            }
        })
        .then(data => {
            let output = "";
            data.result.hots.forEach(value=> {
                output +=
                    `
                        <li>${value.first}</li>
                    `
            });
            hot.innerHTML = output
        });
    // 歌曲
    mybtn.onclick=function()
    {
        let input2=input.value;
        localStorage.setItem("",input2);
        fetch("http://localhost:3000/search?keywords="+input2,{
            method:"get",
            mode:"cors"
        })
            .then(r=>
            {
                if (r.status===200)
                {
                    return r.json()
                }
            })
            .then(data=>{
                let output2= "";
                data.result.songs.forEach(v=>{
                    output2+=
                        `
                    <a href="播放页面.html?id=${v.id}" style="text-decoration : none;">
                        <li>
                            <div>
                            <span>${v.name}</span>
                            <div class="dd"></div>
                            <span>${v.artists[0].name} - ${v.album.name}</span>
                            </div>
                            <img src="../static/播放.png">
                        </li>
                    </a>
                    `
                });
                gdxq3_gq.innerHTML=output2
            });
    };
    let ls=localStorage.getItem(name);
    if(ls===null)
    {

    }
    else
    {
        let output3="";
        output3+=
            `
         <img src="../static/时间.png" alt="">
    <div class="search_my2">
        <span class="search_new">${localStorage.getItem(name)}</span>
        <img src="../static/差.png" alt="" class="clear">
    </div>
        `;
        search_my.innerHTML=output3
    }
    // clear.onclick=function () {
    //     localStorage.clear()
    // };

    // search_new.onclick=function()
    // {
    //     let input3=localStorage.getItem(name);
    //     fetch("http://localhost:3000/search?keywords="+input3,{
    //         method:"get",
    //         mode:"cors"
    //     })
    //         .then(r=>
    //         {
    //             if (r.status===200)
    //             {
    //                 return r.json()
    //             }
    //         })
    //         .then(data=>{
    //             let output2= "";
    //             data.result.songs.forEach(v=>{
    //                 output2+=
    //                     `
    //                 <a href="Play_song.html?id=${v.id}">
    //                     <li>
    //                         <div>
    //                         <span>${v.name}</span>
    //                         <div class="dd"></div>
    //                         <span>${v.artists[0].name} - ${v.album.name}</span>
    //                         </div>
    //                         <img src="../images/播放.png">
    //                     </li>
    //                 </a>
    //                 `
    //             });
    //             gdxq3_gq.innerHTML=output2
    //         });
    // };
};