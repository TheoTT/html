window.onload = function(){
    var imgData = {"data":[
        {
            "src": "1.jpg"

        },
        {
            "src": "2.jpg"

        },
        {
            "src": "3.jpg"

        },
        {
            "src": "4.jpg"

        },
        {
            "src": "5.jpg"

        },
        {
            "src": "6.jpg"

        },
        {
            "src": "7.jpg"

        },
        {
            "src": "8.jpg"

        },
        {
            "src": "9.jpg"

        },
        {
            "src": "10.jpg"

        }
    ]}
    imgLocation("container", "box");
    window.onscroll = function(){
        if (checkFlag()){
            var cparent = document.getElementById("container");
            for (var i=0; i<imgData.data.length; i++){
                var content = document.createElement('div');
                content.className = "box";
                cparent.appendChild(content);
                var boxImg = document.createElement("div");
                boxImg.className = "box_img";
                content.appendChild(boxImg);
                var img = document.createElement("img");
                img.src = "image/" + imgData["data"][i].src;
                boxImg.appendChild(img);

            }
        }
        imgLocation("container", "box");
    }
}

function checkFlag(){
    var cparent = document.getElementById("container");
    var ccontents = getChildElement(cparent, "box");
    var lastContentHeight = ccontents[ccontents.length -1].offsetTop;
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var winHeight = document.documentElement.clientHeight || document.body.clientHeight;
    console.log(lastContentHeight, scrollTop, winHeight);
    if (lastContentHeight <= scrollTop + winHeight){
        return true;
    }
}

function imgLocation(parent, content){
    //取出所有img
    var cparent = document.getElementById(parent);
    var ccontents = getChildElement(cparent, content);
    console.log(ccontents);
    var imgWidth = ccontents[0].offsetWidth;
    var num = Math.floor(document.documentElement.clientWidth / imgWidth);
    cparent.style.cssText = "width:" + imgWidth*num + "px;margin:0px auto;"

    var boxHeightArr = [];
    for (var i=0; i<ccontents.length; i++){
        if (i<num){
            boxHeightArr[i] = ccontents[i].offsetHeight;
        }else{
            var minHeight = Math.min.apply(null, boxHeightArr);
            ccontents[i].style.position = "absolute";
            var minHeightIndex = getMinHeightIndex(boxHeightArr, minHeight);
            ccontents[i].style.top = minHeight + "px";
            ccontents[i].style.left = ccontents[minHeightIndex].offsetLeft + "px";
            boxHeightArr[minHeightIndex] = boxHeightArr[minHeightIndex] + ccontents[i].offsetHeight;
        }
    console.log(boxHeightArr);
   }
}

function getChildElement(parent, content){
    // var contentArr = [];
    // var allContent = document.getElementsByTagName("*");
    // for (i=0; i<allContent.length; i++){
    //     if (allContent[i].className === content){
    //         contentArr.push(allContent[i]);
    //     }
    // }
    var contentArr = parent.getElementsByClassName(content);
    return contentArr;
}

function getMinHeightIndex(boxHeightArr, minHeight){
    for (var i in boxHeightArr){
    // for (i=0; i<boxHeightArr.length; i++){
        console.log("minHeightIndex:"+i);
        if (boxHeightArr[i] == minHeight){
            return i;
        }
    }
}