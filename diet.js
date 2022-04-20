var foodPlate = [];
document.getElementById('plateCount').textContent = localStorage.length;

document.body.addEventListener('load',function(){

  if(localStorage.length !=0){
    localStorage.length++;
  }
  else{
    localStorage.clear();
    sessionStorage.clear();
  }
});

  var foodStorage = document.getElementsByClassName('food');
  for (var i = 0; i < foodStorage.length; i++) {
    var r =sessionStorage.setItem(i,foodStorage[i].textContent);
  }





function check(food){

  for (var i = 0; i < localStorage.length; i++) {
    if(food == localStorage.getItem(i)){
      return false;
    }
  }
  return true;
}

function search(){
  var foodItem = document.getElementById('search').value;
  console.log(foodItem)
  if(foodItem!=""){
    var food = document.getElementsByClassName('food');
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
    var food1 = foodItem.toLowerCase();
    for (var i = 0; i < food.length; i++) {
      var food2 = food[i].textContent;
      food2 = food2.toLowerCase()
      if(food1 == food2){
        count++;
        var foodClass = document.getElementsByClassName('card')[i]
        var classFood = foodClass.cloneNode(true)
        classFood.className="searchResult";
        result.appendChild(classFood)
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

}


function hideResult(){
  var searchedItem = document.getElementById('showResult');
  var foodClass = document.getElementsByClassName('card');
  var hideFoodItem = document.getElementById('cards-container');
  var itemSearched = searchedItem.childNodes[3];
  searchedItem.remove(itemSearched)
  hideFoodItem.style.display="grid";
}

function add(x){
var food = x.parentNode.childNodes[1].textContent;
var foodItem = document.getElementsByClassName('food');

if(check(food)){
  localStorage.setItem(localStorage.length,food);
}
document.getElementById('plateCount').textContent = localStorage.length;

}
