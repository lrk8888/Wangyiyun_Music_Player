let xd = document.querySelector(".xd")
fetch("http://localhost:3000/top/album?offset=0&limit=30",{
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
        console.log(data.albums[0].blurPicUrl)
        let output = "";
        data.albums.forEach(value=>{
            output+=
                `
                <a href="xdbf.tml" style="text-decoration : none;">
                    <li>
                        <div id="xd">
                            <div id="xdimg1">
                                <img src="${value.blurPicUrl}" alt="">
                            </div>
                            <div id="xdimg2">
                                <img src="../static/新碟.png" alt="">
                            </div>
                            <p>${value.name}</p>
                            <span>${value.artist.name}</span>
                        </div>
                    </li>
                 </a>
                    `
        });
        console.log(output)
        xd.innerHTML=output
    });