var foodPlate = [];
for(var i=0;i<localStorage.length;i++){
  foodPlate.push(localStorage.getItem(i))
}

if(localStorage.length>0){
  var plateTable = document.createElement('table');
  var plateId = document.createAttribute('id');
  plateId.value = "plateTable";
  plateTable.setAttributeNode(plateId);
  document.getElementsByClassName('selections')[0].appendChild(plateTable);
}
else{
  var plateEmpty = document.createElement('h2');
  var empty = document.createTextNode("You Haven't started your workout!")
  plateEmpty.appendChild(empty);
    document.getElementsByClassName('selections')[0].appendChild(plateEmpty);
}





document.body.addEventListener("load", add());

function add(){
  var quantityCounter=1;

  for (var i = 0; i < localStorage.length; i++) {
      var food = localStorage.getItem(i);
if(food!=undefined ){


  // making class for tbody:start
    var foodBody = document.createElement("tbody");
    var itemClass = document.createAttribute("class");
    itemClass.value="newItem"
    foodBody.setAttributeNode(itemClass)
  // making class for tbody:end

    var foodTemplate = document.createElement("tr");
    var foodColumn =  document.createElement("td");
    var quantityColumn =  document.createElement("td");
    var addColumn =  document.createElement("td");
    var removeColumn =  document.createElement("td");
    var calorieColumn =  document.createElement("td");
    var deleteRowColumn =  document.createElement("td");

  // create newFoodItem class:start

    var foodNode = document.createTextNode(food);
    var foodClass = document.createAttribute("class");
    foodClass.value="newFoodItem"
    foodColumn.setAttributeNode(foodClass);
    foodColumn.appendChild(foodNode);
  // create newFoodItem class:end

  // quantity of the item:start
    var quantityNode = document.createTextNode(quantityCounter);
    var quantityClass = document.createAttribute("class");
    quantityClass.value = "quantity";
    quantityColumn.setAttributeNode(quantityClass);
    quantityColumn.appendChild(quantityNode);
  //  quantity of the item:end

  // add item to the list:start
    var addFood = document.createElement("button");
    var addNode = document.createTextNode("+");
    addFood.appendChild(addNode);
    var addClick = document.createAttribute("onclick");
    addClick.value = "addItem(this)";
    addFood.setAttributeNode(addClick);
    addColumn.appendChild(addFood);
  // add item to the list:end

  // remove item from the list:start
    var removeFood = document.createElement("button");
    var removeNode = document.createTextNode("-");
    removeFood.appendChild(removeNode);
    var removeClick = document.createAttribute("onclick");
    removeClick.value = "removeFood(this)";
    removeFood.setAttributeNode(removeClick);
    removeColumn.appendChild(removeFood);
  // remove item from the lsit:end

  // remove item from plate: start
    var deleteButton = document.createElement("button");
    var buttonClass = document.createAttribute("class");
    buttonClass.value="removeItem";
    deleteButton.setAttributeNode(buttonClass);
    var click = document.createAttribute("onclick");
    click.value="cancel(this)";
    deleteButton.setAttributeNode(click);
    var deleteNode = document.createTextNode("Remove from my workout");
    deleteButton.appendChild(deleteNode);
    deleteRowColumn.appendChild(deleteButton);
  // remove item from plate: end

    var caloriesConsumed = document.createTextNode(100);
    var calorieClass = document.createAttribute("class");
    calorieClass.value = "calorie";
    calorieColumn.appendChild(caloriesConsumed);
    calorieColumn.setAttributeNode(calorieClass);

  // adding to the table:start
    foodTemplate.appendChild(foodColumn);
    foodTemplate.appendChild(quantityColumn);
    foodTemplate.appendChild(addColumn);
    foodTemplate.appendChild(removeColumn);
    foodTemplate.appendChild(calorieColumn);
    foodTemplate.appendChild(deleteRowColumn);
    foodBody.appendChild(foodTemplate)
  // adding to the table:end

    var select = document.getElementById('plateTable');
    select.appendChild(foodBody)
}
}
calculateCaloriesConsumed()
}

function calculateCaloriesConsumed(){
  var calorieConsumed = document.getElementsByClassName('calorie');
  var sum = 0 ;
  for (var i = 0; i < calorieConsumed.length; i++) {
    sum = sum + parseInt(calorieConsumed[i].textContent);
  }
  var caloriesDiv =  document.createElement('div');
  var caloriesId = document.createAttribute('id');
  caloriesId.value = "calculate";
  caloriesDiv.setAttributeNode(caloriesId);
  var total = "Total Calories Burnt:";
  var calorieh4 = document.createElement('h3');
  var calorieText = document.createTextNode(total+""+sum+"calories");
  calorieh4.appendChild(calorieText);
  caloriesDiv.appendChild(calorieh4);
  document.body.appendChild(caloriesDiv);
}

function addItem(t){
console.log(t)
  var index = t.parentNode.parentNode.rowIndex;
  console.log(index)
  var foodItem = document.getElementsByClassName('newFoodItem');
  var foodQuantity = document.getElementsByClassName('quantity');
  for (var i = 0; i <= foodQuantity.length; i++) {
    if(i==index){
        break;
    }
  }

    var count = parseInt(foodQuantity[i].textContent)
    var calories = document.getElementsByClassName('calorie');
    var calorieCount = parseInt(calories[i].textContent)
    var cal = calorieCount/count;
    count++;
    document.getElementsByClassName('quantity')[i].textContent=count;
    document.getElementsByClassName('calorie')[i].textContent=cal*count;
    document.getElementById('calculate').remove();

calculateCaloriesConsumed()
}




function removeFood(t){
  var foodItem = document.getElementsByClassName('newFoodItem');
  var index = t.parentNode.parentNode.rowIndex;
  var foodQuantity = document.getElementsByClassName('quantity');
  for (var i = 0; i <= foodQuantity.length; i++) {
    if(i==index){
        var count = parseInt(foodQuantity[i].textContent);
        break;
    }
  }

  if(count<=1){
        document.getElementById("plateTable").deleteRow(index);
        changeIndex()
  }
  else{
    var calories = document.getElementsByClassName('calorie');
    var calorieCount = parseInt(calories[i].textContent)
    var cal = calorieCount/count;
    count--;
        document.getElementsByClassName('calorie')[i].textContent=cal*count;
    foodQuantity[i].textContent = count;
  }
  document.getElementById('calculate').remove();

calculateCaloriesConsumed()
}

function cancel(r){

  var index = r.parentNode.parentNode.rowIndex;
  var food =   document.getElementsByClassName("newFoodItem")[index].textContent;
  for(var i=0;i<localStorage.length;i++){
    if(food == localStorage.getItem(i)){
          document.getElementById("plateTable").deleteRow(index);

          localStorage.removeItem(i)

          changeIndex();
          break;
    }
  }

}

function changeIndex(){
var plateFood = [] ;
for (var i = 0; i <localStorage.length+1; i++) {
  if(localStorage.getItem(i)!=undefined){
    plateFood.push(localStorage.getItem(i))
  }
}
localStorage.clear();
for(var j=0;j<plateFood.length;j++){
localStorage.setItem(j,plateFood[j]);
}

}
