$(document).on('click', 'li', function(e){
    console.log(e.target.innerHTML);

    $('div.content').children().each(function (){
        this.classList.remove('display');
        this.classList.add('none');
});
    $('div.'+e.target.innerHTML).removeClass('none');
    $('div.'+e.target.innerHTML).addClass('display');
  
})
