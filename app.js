

var inp=document.getElementById("inp");
var toDoList=document.getElementById("toDoList");
var ToDoData=[];

function add()
{
    ToDoData.push(inp.value);

    inp.value="";
    // console.log(ToDoData);
    // ToDoList.innerHTML =`<li> ${ToDoData[0]} </li>`

    render();


}

function render()
{
    ToDoList.innerHTML="";
    

    for(var i=0;i<ToDoData.length;i++)
    {
        ToDoList.innerHTML +=`<li class="list-items" > ${ToDoData[i]}  <button class="custom-btns" onclick="edit(${i})">EDIT </button>
        <button  class="custom-btns" onclick="delToDo(${i})">DELETE </button>  </li>`
    }
}

function edit(indexNumber)
{
    // console.log(indexNumber);
    ToDoData[indexNumber]=prompt("Enter new value");
    // console.log(ToDoData);
    render();
    edit.className="btn";
}

function delToDo(indexNumber)
{
    // console.log(indexNumber);
    ToDoData.splice(indexNumber,1);
    render();
}


// function deleteAllToDos()
// {
//     ToDoData=[];
//     toDoList.innerHTML="";
//     render(true);
// }