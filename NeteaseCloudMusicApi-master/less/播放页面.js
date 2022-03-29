// function $(e){
//     return document.querySelector(e)
// }
// let myUrlId = location.search
// console.log(myUrlId)
// let reg1 = /(?<=[a-z?=])\d+/g;
// let myUrlId2=(myUrlId.match(reg1).toString());
// console.log(myUrlId2)
// fetch("http://localhost:3000/song/url"+myUrlId,{   //album
//     method:"get",
//     mode:"cors"
// })
//     .then(function(r) {
//         if (r.status==200){
//             return r.json()
//         }
//     })
//     .then(d=>{
//         let arr2 = []
//         for (let i in d) {
//             arr2.push(d[i]);
//         }
//         console.log(arr2[0])
//         let output=""
//         arr2[0].forEach(function (value) {
//             console.log(value.url)
//             output+=
//                 `
//                      <li>
//                         <audio id="au" controls loop src="${value.url}"></audio>
//                         <button id="pl">播放</button></li><br>
//                         <button id="pa">暂停</button></li><br>
//                         <input type="range" value="10"><br>
//                         <p>当前时间：</p><br>
//                         <p>总时间：</p>
//                      </li>
//                     `
//         })
//         // console.log(output)
//         $("#ymddj").innerHTML+= output
//     })
// fetch("http://localhost:3000/lyric?id="+myUrlId2,{
//     method:"get",
//     mode:"cors"
// })
//     .then(function(r) {
//         if (r.status==200){
//             return r.json()
//         }
//     })
//     .then(d=>{
//         // console.log(d.lrc.lyric)
//         let lrcJSON = d.lrc.lyric
//             // let reg2 =/[\d:].+/g;
//         // geci=(geci.match(reg2).toString());
//         console.log(lrcJSON)
//         let output = "";
//         output+=
//             `
//                         <div id="gc">
//                           <p>${lrcJSON}</p>
//                         </div>
//             `
//         $("#ymbfdj").innerHTML=output
//     })
// ////////////////////////////////////////////////////////
// // var lrcTime = [];
// // //接收数组时间
// // var ul = $("#lrclist")[0];
// // //获取ul
// //
// // var i = 0;
// // $.each(lrcJSON, function(key, value) {
// //     //遍历lrc
// //     lrcTime[i++] = parseFloat(key.substr(1,3)) * 60 + parseFloat(key.substring(4,10));
// //     //00:00.000转化为00.000格式
// //     ul.innerHTML += "<li><p>"+lrcJSON[key]+"</p></li>";
// //     //ul里填充歌词
// // });
// // lrcTime[lrcTime.length] = lrcTime[lrcTime.length-1] + 3;
// // //如不另加一个结束时间，到最后歌词滚动不到最后一句
// //
// //
// // var $li = $("#lrclist>li");
// // //获取所有li
// // var currentLine = 0;//当前播放到哪一  句了
// // var currentTime;//当前播放的时间
// // var audio = document.getElementById("audio");
// // var ppxx;//保存ul的translateY值
// //
// // audio.ontimeupdate = function() {//audio时间改变事件
// //     currentTime = audio.currentTime;
// //     for (j=currentLine, len=lrcTime.length; j<len; j++){
// //         if (currentTime<lrcTime[j+1] && currentTime>lrcTime[j]){
// //             currentLine =  j;
// //             ppxx = 250-(currentLine*32);
// //             ul.style.transform = "translateY("+ppxx+"px)";
// //             $li.get(currentLine-1).className="";
// //             $li.get(currentLine).className="on";
// //             break;
// //         }
// //     }
// // };
// //
// // audio.onseeked = function() {//audio进度更改后事件
// //     currentTime = audio.currentTime;
// //     console.log("  off"+currentLine);
// //     $li.get(currentLine).className="";
// //     for (k=0, len=lrcTime.length; k<len; k++){
// //         if (currentTime<lrcTime[k+1] && currentTime<lrcTime[k]){
// //             currentLine =  k;
// //             break;
// //         }
// //     }
// // };
// //////////////////////////////////////////////////////////////////
// fetch("http://localhost:3000/song/detail?ids="+myUrlId2,{   //album
//     method:"get",
//     mode:"cors"
// })
//     .then(function(r) {
//         if (r.status==200){
//             return r.json()
//         }
//     })
//     .then(d=>{
//         console.log(d)
//         console.log(d.songs[0].al. picUrl)
//         let output = "";
//         output+=
//             `
//                         <img src="${d.songs[0].al.picUrl}" id="bf1" alt="">
//                         <img src="../static/播放页面-20190815-114216.png" id="bf2" alt="">
//                         <img src="${d.songs[0].al.picUrl}" id="bf3" alt="">
//             `
//         $(".bfymdj").innerHTML=output
//     })
// ////////////////////////////////////////////////////////////////////////
function $(e){
    return document.querySelector(e)
}
function getDuration(second) {
    var minutes = Math.floor(((second % 86400) % 3600) / 60);
    var seconds = Math.floor(((second % 86400) % 3600) % 60);
    var duration = minutes + ":" + seconds ;
    return duration;
}
let myUrlId = location.search
let myUrlId2=(myUrlId.replace("?id=","?ids="))
//////////背景
fetch("http://localhost:3000/song/detail"+myUrlId2,{
    method:"GET",
    mode:"cors"
})
    .then(function(r) {
        if (r.status==200){
            return r.json()
        }
    })
    .then(d=>{
        let arr2 = []
        for (let i in d) {
            arr2.push(d[i]);
        }
        console.log(arr2[0])

        let output=""
        arr2[0].forEach(function (value,index) {
            output+=
                `
                        <p id="ha1">${value.al.name}</p>
                        <p id="ha2">${value.ar[0].name}</p>
                        <img id="hah1" src="../static/循环播放.png" alt="">
                        <img id="hah2" src="../static/音量.png" alt="">
                        <i id="haha1" class=\"fa fa-step-backward\" aria-hidden=\"true\"></i>
                        <img id="haha2" src="${value.al.picUrl}" alt="">
                       <i  id="haha3"class=\"fa fa-step-forward\" aria-hidden=\\"true\\"></i>

                 `
        })
        $(".setting").innerHTML+=output
    })
// <p>${value[0].al.name}</p>
// <p>${value[0].ar[0].name}</p>
///////碟片
fetch("http://localhost:3000/song/detail"+myUrlId2,{
    method:"GET",
    mode:"cors"
})
    .then(function(r) {
        if (r.status==200){
            return r.json()
        }
    })
    .then(d=>{
        let arr2 = []
        for (let i in d) {
            arr2.push(d[i]);
        }
        console.log(arr2[0])

        let output=""
        arr2[0].forEach(function (value,index) {
            output+=
                `
                     <div class="disc-b">
                     <div class="kac"></div>
                       <img id="run-img" src="${value.al.picUrl}" alt="">

                      </div>
                        `
        })
        $(".disc").innerHTML+=output
    })
///////音频
fetch("http://localhost:3000/song/url"+myUrlId,{   //album
    method:"get",
    mode:"cors"
})
    .then(function(r) {
        if (r.status==200){
            return r.json()
        }
    })
    .then(d=>{
        let arr2 = []
        for (let i in d) {
            arr2.push(d[i]);
        }
        let output=""
        arr2[0].forEach(function (value) {
            output+=
                `
       <li>
          <audio controls loop src="${value.url}" id="audio"></audio>

        </li>
                    `
        })
        $(".Aud").innerHTML+= output
    })
let num=0
$("#btn-2").onclick=function()
{
    num++
    if(num%2==1)
    {
        $("#btn-2").innerHTML="<i class=\"fa fa-pause\" aria-hidden=\"true\"></i>"
        $("#run-img").classList.add("run")
        $(".kac").classList.add("bo-wen")
        $("#audio").play()
        $("#audio").ontimeupdate=function(){
            $(".progress").value=100* $("#audio").currentTime/ $("#audio").duration
            $("#c").innerHTML=getDuration($("#audio").currentTime)
            $("#p").innerHTML=getDuration($("#audio").duration)
        }

        // $(".jin-du").ontimeupdate=function(){
        //     $("#audio").currentTime=this.value*$("#audio").duration/100
        // }
    }
    else
    {
        $("#btn-2").innerHTML="<i class=\"fa fa-play-circle\" aria-hidden=\"true\"></i>"
        $("#run-img").classList.remove("run")
        $(".kac").classList.remove("bo-wen")
        $("#audio").pause()

        // $("#audio").ontimeupdate=function(){
        //     $(".jin-du").value=100* $("#audio").currentTime/ $("#audio").duration
        //     $("#c").innerHTML=$("#audio").currentTime
        //     $("#p").innerHTML=$("#audio").duration
        // }
        // $(".jin-du").ontimeupdate=function(){
        //     $("#audio").currentTime=this.value*$("#audio").duration/100
        // }
    }
}
// ////////////////////////////////////歌词///////////////////////////////////////////////
fetch("http://localhost:3000/lyric"+myUrlId,{
    method:"GET",
    mode:"cors"
})
    .then(function(r) {
        if (r.status==200){
            return r.json()
        }
    })
    .then(d =>{
        console.log(d)
        let lrcJSON = d.lrc.lyric
        console.log(lrcJSON)
        let reg=/\[.+?\]/g
        let regx=/\[\d{2}:\d{2}\.\d{3}\]/g
        let regs= /(?<=\]).*/g
        let timeArrs=lrcJSON.match(reg)
        console.log(timeArrs)
        let lrcsArrs=lrcJSON.match(regs)
        let obj=new Object()
        let xcount=0
        for(let i=0;i<timeArrs.length;i++)
        {
            obj[timeArrs[i]]=lrcsArrs[i]
        }

        //渲染歌词
        let iner = $("#lrclist")
        let inerout = ""
        for (let i = 0; i < timeArrs.length ; i++) {

            inerout += obj[timeArrs[i]]!="" ? `    <span id=lrc${i}>${obj[timeArrs[i]]}</span>`:` <span ></span>`
        }
        iner.innerHTML = inerout
        //歌名
        let zuozhereg=/(?=:).*/g;
        let  s1="";
        console.log(obj[timeArrs[2]])
        s1=obj[timeArrs[0]].match(zuozhereg)!=null
            ?obj[timeArrs[0]].match(zuozhereg).toString():
            obj[timeArrs[0]].toString()
        console.log(s1)
        let play_sname = $("#lrclist")
        // play_sname.innerHTML=Namepic
        // $("#lrclist").innerHTML=sNamepic
        $("#lrclist").innerHTML+=s1.slice(2)

    })
// fetch("http://localhost:3000/lyric"+myUrlId,{
//     method:"GET",
//     mode:"cors"
// })
//     .then(function(r) {
//         if (r.status==200){
//             return r.json()
//         }
//     })
//     .then(d=>{
//         let op= `${d.lrc.lyric}`
//         let list =[op];
//         let str =list[0]
//         // let pattern = /\[.*?\]/g;
//         // let arr = str.match(pattern)//时间
//         // console.log(arr)
//          console.log(str) //歌词
//         let lrcJSON={str}
//         var lrcTime = [];
//         var ul = $("#lrclist")[0];
//         var i = 0;
//         $.each(lrcJSON, function(key, value) {
//             //遍历lrc
//             lrcTime[i++] = parseFloat(key.substr(1,3)) * 60 + parseFloat(key.substring(4,10));
//             //00:00.000转化为00.000格式
//             $("#lrclist").innerHTML += "<li><p>"+lrcJSON[key]+"</p></li>";
//             //ul里填充歌词
//         });
//         lrcTime[lrcTime.length] = lrcTime[lrcTime.length-1] + 3;
//         //如不另加一个结束时间，到最后歌词滚动不到最后一句
//         var $li = $("#lrclist>li");
//         //获取所有li
//         var currentLine = 0;//当前播放到哪一句了
//         var currentTime;//当前播放的时间
//         var audio = document.getElementById("audio");
//         var ppxx;//保存ul的translateY值
//         audio.ontimeupdate = function() {//audio时间改变事件
//             currentTime = audio.currentTime;
//             for (j=currentLine, len=lrcTime.length; j<len; j++){
//                 if (currentTime<lrcTime[j+1] && currentTime>lrcTime[j]){
//                     currentLine =  j;
//                     ppxx = 250-(currentLine*32);
//                     ul.style.transform = "translateY("+ppxx+"px)";
//                     $li.get(currentLine-1).className="";
//                     $li.get(currentLine).className="on";
//                     break;
//                 }
//             }
//         };
//         audio.onseeked = function() {//audio进度更改后事件
//             currentTime = audio.currentTime;
//             console.log("  off"+currentLine);
//             $li.get(currentLine).className="";
//             for (k=0, len=lrcTime.length; k<len; k++){
//                 if (currentTime<lrcTime[k+1] && currentTime<lrcTime[k]){
//                     currentLine =  k;
//                     break;
//                 }
//             }
//         };
//        })