document.body.style.background="black";
document.body.style.fontSize="12px";
document.body.style.color="white";
document.body.style.lineHeight="18px";
document.body.style.boxSizing="border-box";
document.body.style.fontFamily="sans-serif";
let navi =document.createElement('nav');
document.body.append(navi);
navi.style.position="fixed";
//let divLeft=document.createElement('div');
//document.body.append(divLeft);
let divMain=document.createElement('div');
document.body.append(divMain);
let img=document.createElement('img');
img.src="avatar_smoke.jpg";
navi.append(img);
img.style.width="120px";
img.style.padding="0";
img.style.margin="0";

img.style.height="133.8";

let imgBig=document.createElement("img");
imgBig.src="man_smoke.jpg";
divMain.append(imgBig);
imgBig.style.position="absolute";
imgBig.style.left="300px"; 
let mainText=document.createElement("h1");
mainText.innerText="I'm John Doe";
mainText.style.color="white";
mainText.style.position="absolute";
mainText.style.fontSize="64px";
let smallText=document.createElement('h2');
smallText.innerText="Photographer and Web Designer.";
smallText.style.fontSize="15px";
//
let middle=document.createElement("div");
divMain.append(middle);
middle.append(mainText);
middle.append(smallText);
document.getElementsByTagName("h1")[0].style.left="40%"; 
document.getElementsByTagName("h2")[0].style.position="absolute"; 
document.getElementsByTagName("h2")[0].style.marginLeft="45%"; 
document.getElementsByTagName("h2")[0].style.marginTop="7%"; 

let home1=document.createElement("");
