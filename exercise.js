var workPlate = [];
// document.getElementById('workoutCount').textContent = localStorage.length;

document.body.addEventListener('load',function(){

  if(localStorage.length !=0){
    localStorage.length++;
  }
  else{
    localStorage.clear();
    sessionStorage.clear();
  }
});

  var workStorage = document.getElementsByClassName('exercise');
  for (var i = 0; i < workStorage.length; i++) {
    var r =sessionStorage.setItem(i,workStorage[i].textContent);
  }





function check(work){

  for (var i = 0; i < localStorage.length; i++) {
    if(work == localStorage.getItem(i)){
      return false;
    }
  }
  return true;
}

function search(){
  var workItem = document.getElementById('search').value;
  var work = document.getElementsByClassName('exercise');
  var searchedItem = document.getElementById('showResult');
  document.getElementById('cards-container').style.display = "none"




var result = document.createElement('div');
var resultId = document.createAttribute('id');
resultId.value = "showResult";
result.setAttributeNode(resultId)

var backButton = document.createElement("button");
var backText = document.createTextNode("Back");
backButton.appendChild(backText);
var backClick = document.createAttribute("onclick");
backClick.value = "hideResult()"
backButton.setAttributeNode(backClick)
var backId = document.createAttribute('id');
backId.value = "back";

backButton.setAttributeNode(backId)
result.appendChild(backButton)


document.getElementById('item-display').appendChild(result);
var count = 0;
  var work1 = workItem.toLowerCase();
  for (var i = 0; i < work.length; i++) {
    var work2 = work[i].textContent;
    work2 = work2.toLowerCase()
    if(work1 == work2){
      count++;
      var workClass = document.getElementsByClassName('card')[i]
      var classwork = workClass.cloneNode(true)
      classwork.className="searchResult";
      result.appendChild(classwork)
      break;
    }
  }
  if(count==0){
    var resultH3 = document.createElement('h2');
    var resultText = document.createTextNode("No results found");
    var resultId = document.createAttribute('id');
    resultId.value = "noResult";
    resultH3.setAttributeNode(resultId)
    resultH3.appendChild(resultText);
    result.appendChild(resultH3)
  }

}


function hideResult(){
  var searchedItem = document.getElementById('showResult');
  var workClass = document.getElementsByClassName('card');
  var hideworkItem = document.getElementById('cards-container');
  var itemSearched = searchedItem.childNodes[3];
  searchedItem.remove(itemSearched)
  hideworkItem.style.display="grid";
}

function add(x){
var work = x.parentNode.childNodes[1].textContent;
var workItem = document.getElementsByClassName('work');

if(check(work)){
  localStorage.setItem(localStorage.length,work);
}
document.getElementById('workoutCount').textContent = localStorage.length;

}
