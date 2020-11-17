let task = [];
let chk = [];
$('#bttn').addClass('btn-xs');
$('.btn-danger').addClass('btn-xs');

function addTask() {

    task.push(document.getElementById("task").value);
    show();
 
    document.getElementById("task").value = "";
  }
function show() {

    if (task.length>0) {
        $("#alltasks").removeClass("hide");
        let html = "";
        for(let i = 0; i<task.length; i++ ){
            html += "<li id='li"+i+"'><input type='checkbox' id='task"+i+"' onclick='check("+i+")' class='chkd'>"+ task[i] + "<button type='button' class='btn btn-success btn-xs' onclick='edit("+i+")'>Edit</button><button type='button' class='btn btn-xs' onclick='del("+i+")'>Delete</button></li>";
        }
        document.getElementById("ToDo").innerHTML = html;
    } else {
        $("#alltasks").addClass("hide");
    }

}
function edit(id) {

    document.getElementById('form').innerHTML = "<div class='text-center'><p>Update Task</p></div><input type='text' id='task'  class='form-control' value='"+task[id]+"'><input type='button' class='form-control btn btn-success' onclick='update("+id+")' id='submit' value='Update'>"
}
function update(id) {

    task[id] = document.getElementById("task").value;
    show();
    document.getElementById('form').innerHTML = "<div class='text-center'><p>Add Task</p></div><input type='text' id='task' class='form-control' ><input type='button' class='form-control btn btn-success' onclick='addTask()' id='submit' value='Submit'>"
}
function del(id) {
   task.splice(id,1);
   show();
}
function check(id){
    chk.push(task[id]);
    task.splice(id,1);
    show();
    display_checked();
}
function uncheck(value) {
    task.push(chk[value]);
    show();
    chk.splice(value,1);
    display_checked();
}
function dlt(id) {
    chk.splice(id,1);
    display_checked();
}
function edt(id) {
    document.getElementById('form').innerHTML = "<p>Update Task</p></div><input type='text' id='task'  class='form-control' value='"+chk[id]+"'><input type='button' class='form-control btn btn-success' onclick='updt("+id+")' id='submit' value='Update'>"
}
function updt(id) {
    chk[id] = document.getElementById("task").value;
    display_checked();
    document.getElementById('form').innerHTML = "<p>Add Task</p></div><input type='text' id='task' class='form-control' ><input type='button' class='form-control btn btn-success' onclick='addTask()' id='submit' value='Submit'>"
}
function display_checked() {
    if(chk.length>0) {
        $("#completed").removeClass('hide');
        let html = "";
        for(let i = 0; i<chk.length; i++){
            html += "<li><input type='checkbox' id='"+ i +"' class='chkd' onclick='uncheck("+ i +")' checked>"+ chk[i] + "<button type='button' class='btn btn-success btn-xs' onclick='edt("+i+")'>Edit</button><button type='button' class='btn btn-xs' onclick='dlt("+i+")'>Delete</button></li>";
        }
        document.getElementById("cmplt").innerHTML = html;
    }
    else {
        $("#completed").addClass('hide');
    }
}
    