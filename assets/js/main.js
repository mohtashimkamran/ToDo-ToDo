
// When delete tasks button is clicked, the following event handler will detect it

var delete_tasks_btn = document.getElementById('delete-tasks-btn');
delete_tasks_btn.addEventListener('click', function(event){
    let checked_boxes = document.querySelectorAll('input[type = checkbox]:checked');
    let check_boxes_arr = Array.from(checked_boxes);
    let checked_ids = check_boxes_arr.map(box => {
        return box.getAttribute('value');
    });
    console.log(checked_ids);
    $.post('/delete-tasks', {checked: checked_ids}, function(){
        window.location.href = '/';
    });
});