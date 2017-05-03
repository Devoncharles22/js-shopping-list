//do delete - remove <li>
$('body').on('click', '.shopping-item-delete', function(event) {
	var clicked = $(event.target)
	clicked.closest('li').remove( )
} )
//do check
$('body').on('click', '.shopping-item-toggle', function(event) {
	var clicked = $(event.target)
	clicked.closest('li').find('.shopping-item').toggleClass('shopping-item__checked')
})
//do create last
$('#js-shopping-list-form').on('submit', function(event) {
	event.preventDefault( );
	var input = $('#shopping-list-entry').val( );
	var inputTemplate = $('<li><span class="shopping-item">apples</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>')
	inputTemplate.find('.shopping-item').text(input)
	$('.shopping-list').prepend(inputTemplate)
})

//with any application you can only do 4 things: 1. create 2. read 3. update 4. delete
//function addItem = create
//function getItem = read
//function deleteItem = delete
//function updateItem = update

//render item converts JS info into HTML info