const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increasBtn = document.getElementById("increaseBtn");
const countLable = document.getElementById("countLabel");
let count = 0;

increasBtn.onclick = function(){
  count++;
  countLable.textContent = count;

}

decreaseBtn.onclick = function(){
  count--;
  countLable.textContent = count;

}

resetBtn.onclick = function(){
  count = 0;
  countLable.textContent = count;

}



