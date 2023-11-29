$(document).ready(function(){


    $('ul').on('click', 'li', function (event) {
        
        console.log(event.target)
        if ($(event.target).is('li')) {
            var backgroundColor = $(this).css('background-color');
    
            if (backgroundColor === 'rgb(248, 215, 218)') {
                $(this).css('background-color', 'rgb(215, 248, 228)');
            } else {
                $(this).css('background-color', 'rgb(248, 215, 218)');
            }
    
            console.log($(this).css('background-color'));
        }
    });
    

    $('#task-list').on("submit", function (e) {
        e.preventDefault();
        const taskTxt = $('#task-text').val();
    
        if (/\S/.test(taskTxt)) {
            console.log(taskTxt);
    
            const newItem = $(`<li id='${taskTxt}' style="display:none;">${taskTxt}</li>`);
            
            newItem.appendTo('ul');
            newItem.fadeIn(500);
    
            $('#task-text').val("");
        } else {
            alert("Campo Vazio!");
        }
    });
    


    
});



