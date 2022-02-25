var counter = 0;
var sentence = ['The', 'quick', 'brown', 'fox']

/*
const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);
const element = document.getElementById("div1");
element.appendChild(para);
para.setAttribute('id', 'hi')
*/

for (var i = 0; i < 4; i++){
  const para = document.createElement("div");
  const node = document.createTextNode(sentence[i]);
  para.appendChild(node);
  const element = document.getElementById("p1");
  element.appendChild(para);
  para.setAttribute('id', sentence[i])
}
/*
tag = prompt()
elem = document.getElementById(tag)
elem.style.opacity = 0.5
*/

var imgIds = []

function wheel(){
  counter++
  for (var i = 0; i < sentence.length; i++){
    elem = document.getElementById(sentence[i])
    if (counter % sentence.length == i){
      elem.style.opacity = 1
    }
    else{
      elem.style.opacity = 0.5
    }
  }
  for (var i = 0; i < imgIds.length; i++){
    elem = document.getElementById(imgIds[i])
    if (counter % imgIds.length == i){
      elem.style.opacity = 1
    }
    else{
      elem.style.opacity = 0.5
    }
  }
}

var idCount = 0


document.querySelector('input[type="file"]').addEventListener('change', function() {
      if (this.files && this.files[0]) {
          var img = document.querySelector('img');
  
          const image = document.createElement("img");
          const element = document.getElementById("div1");
          element.appendChild(image);
          image.setAttribute('src', URL.createObjectURL(this.files[0]));
          image.setAttribute('width', '100px');
          image.setAttribute('id', idCount)
          imgIds.push(idCount)
          idCount++
      }
  });
