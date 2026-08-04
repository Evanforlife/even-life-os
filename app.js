// EVEN LIFE OS DATA SYSTEM


// 今天日期

const today = new Date()
.toISOString()
.split("T")[0];


document.getElementById("date").innerHTML =
today;




// 心情记录

function setMood(mood){

document.getElementById("mood")
.innerHTML = mood;


localStorage.setItem(
"mood",
mood
);

}




// 页面打开读取数据

window.onload=function(){


let mood =
localStorage.getItem("mood");


if(mood){

document.getElementById("mood")
.innerHTML=mood;

}




let old =
localStorage.getItem(today);


if(old){

let data =
JSON.parse(old);



document.getElementById("ice")
.checked=data.ice;


document.getElementById("posture")
.checked=data.posture;


document.getElementById("stretch")
.checked=data.stretch;


document.getElementById("walk")
.checked=data.walk;



document.getElementById("sleep")
.value=data.sleep;


document.getElementById("wake")
.value=data.wake;


document.getElementById("quality")
.value=data.quality;



document.getElementById("koreanTime")
.value=data.koreanTime;


document.getElementById("koreanNote")
.value=data.koreanNote;


document.getElementById("aiNote")
.value=data.aiNote;


document.getElementById("idea")
.value=data.idea;


document.getElementById("note")
.value=data.note;



}



showRecords();


}






// 保存今天


function saveData(){



let data={


date:today,


mood:
document.getElementById("mood")
.innerHTML,



ice:
document.getElementById("ice")
.checked,


posture:
document.getElementById("posture")
.checked,


stretch:
document.getElementById("stretch")
.checked,


walk:
document.getElementById("walk")
.checked,



sleep:
document.getElementById("sleep")
.value,


wake:
document.getElementById("wake")
.value,


quality:
document.getElementById("quality")
.value,



koreanTime:
document.getElementById("koreanTime")
.value,


koreanNote:
document.getElementById("koreanNote")
.value,



aiNote:
document.getElementById("aiNote")
.value,



idea:
document.getElementById("idea")
.value,



note:
document.getElementById("note")
.value


};



// 保存到手机浏览器

localStorage.setItem(

today,

JSON.stringify(data)

);



alert(
"✨ 今日记录保存成功"
);



showRecords();


}







// 显示历史记录


function showRecords(){


let box =
document.getElementById("records");



let html="";



for(let i=0;i<localStorage.length;i++){


let key =
localStorage.key(i);



if(key.match(/\d{4}-\d{2}-\d{2}/)){



let data =
JSON.parse(
localStorage.getItem(key)
);



html += `

<div class="record-item">

<b>
${data.date}
</b>

<br>

心情：
${data.mood || "-"}


<br>

🧊 不喝冰：
${data.ice?"✅":"❌"}


<br>

🪑 不翘腿：
${data.posture?"✅":"❌"}


<br>

🇰🇷 韩语：
${data.koreanTime || 0}分钟


<br>

🤖 AI：
${data.aiNote || "-"}


</div>

`;



}


}


if(html){

box.innerHTML=html;

}


}
