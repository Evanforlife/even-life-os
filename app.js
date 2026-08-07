// EVEN LIFE OS v4
// Image Archive System


const today = new Date()
.toISOString()
.split("T")[0];



document.getElementById("date").innerHTML =
today;





// =================
// Mood
// =================


function setMood(mood){

document.getElementById("mood").innerHTML=mood;

localStorage.setItem(
"mood",
mood
);

}






// =================
// Save Today
// =================


function saveData(){


let data={


date:today,


mood:
document.getElementById("mood").innerHTML,


ice:
document.getElementById("ice").checked,


posture:
document.getElementById("posture").checked,


stretch:
document.getElementById("stretch").checked,


walk:
document.getElementById("walk").checked,


sleep:
document.getElementById("sleep").value,


wake:
document.getElementById("wake").value,


quality:
document.getElementById("quality").value,


koreanTime:
document.getElementById("koreanTime").value,


koreanNote:
document.getElementById("koreanNote").value,


aiNote:
document.getElementById("aiNote").value,


note:
document.getElementById("note").value


};



localStorage.setItem(

today,

JSON.stringify(data)

);



alert(
"✨ 今日记录保存成功"
);


}








// =================
// Image Archive
// =================



function saveImage(){



let file =

document
.getElementById("imageUpload")
.files[0];



if(!file){

alert(
"请先选择图片"
);

return;

}



let reader = new FileReader();



reader.onload=function(e){



let image={


src:e.target.result,


title:
document.getElementById("imageTitle").value || "Untitled",


tag:
document.getElementById("imageTag").value,


note:
document.getElementById("imageNote").value,


date:today


};



let images =

JSON.parse(

localStorage.getItem("images")

|| "[]"

);



images.push(image);



localStorage.setItem(

"images",

JSON.stringify(images)

);



alert(
"📷 Memory saved!"
);



showImages();



};



reader.readAsDataURL(file);



}








// =================
// Display Images
// =================


function showImages(){


let gallery =

document.getElementById("gallery");



if(!gallery){

return;

}



let images =

JSON.parse(

localStorage.getItem("images")

|| "[]"

);



let html="";



images.reverse()
.forEach(function(item){



html += `


<div class="memory-card">


<img src="${item.src}">



<div class="memory-info">


<div class="memory-title">

${item.title}

</div>


<div class="memory-tag">

${item.tag}

</div>


<div class="memory-note">

${item.note || ""}

</div>


<small>

${item.date}

</small>


</div>


</div>


`;



});



gallery.innerHTML=html;



}








// =================
// Load
// =================


window.onload=function(){


let mood=

localStorage.getItem("mood");


if(mood){

document.getElementById("mood")
.innerHTML=mood;

}



showImages();


}
