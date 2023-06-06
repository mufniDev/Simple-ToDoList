const newText = document.querySelector(".input");
const list = document.querySelector(".list");

function todo() {
  if(!newText.value) {
    alert("input masih kosong woi!!");
    return;
  }

  let newTodo = `<li class="listItem">
      <div class="text">
        <p contentEditable="false" class="textContent" onclick="toggle(this)"> ${newText.value} </p>
      </div>
      
      <div class="containerButton">
        <button onclick="editText(this)" class="editButton" type="button">✏️</button>
        <button onclick="submit(this)" class="submitButton">✅</button>
        <button onclick="removeItem(this)" class="removeButton" type="button">🗑️</button>
      </div>
    </li>`;
  
  
  list.insertAdjacentHTML('afterbegin', newTodo)
  
  var elem = document.querySelector(".listItem");
      elem.style.display = "flex";
      
        setTimeout(function() {
            elem.style.opacity = 1;
            elem.style.transform = "translateX(0)";
         }, 10);
  
  newText.value="";
}
const textMain = document.querySelector(".textContent")

var x = 1;

function toggle(el)
{
  x++
 if(x == 3) {
    x=0
    el.classList.add("done");
  } else {
    el.classList.remove("done");
  }
  console.log(x)
  
}

function removeItem(el)
{
  const containerButton = document.querySelector(".containerButton");
  el.parentElement.parentElement.style="";
  el.parentElement.parentElement.classList.add("ilang")
  setTimeout(function() {
    el.parentElement.parentElement.remove();
  }, 1000);
  
}

function editText(el) {
  let elem = el.parentElement.parentElement.firstElementChild.firstElementChild;
  let confirm = el.parentElement.firstElementChild.nextElementSibling;
 
  const submitBtn = document.querySelector(".submitButton");
  const textContent = document.querySelector(".textContent");
  
  x=1;
  elem.classList.remove('done');
  elem.style="border:1px solid #643cff"
  
  if(!elem.textContent) {
    elem.innerHTML="-";
  }
  
  el.style.display="none";
  confirm.style.display="block";
  elem.setAttribute("contentEditable", true);
}

function submit(el) {
  let elem = el.parentElement.parentElement.firstElementChild.firstElementChild;
  let editBtn = el.parentElement.firstElementChild;
  const submitBtn = document.querySelector(".submitButton");
  const textContent = document.querySelector(".textContent");
  
  x=1;
  elem.style="border:none"
  
  el.style="display:none";
  editBtn.style="display:block";
  elem.setAttribute("contentEditable", false);
}

 