$(document).ready(function () {

  $('button').on('click', function(){

    $.ajax({
      method: 'GET',
      url: 'http://bitkittens.herokuapp.com/cats.json',
      dataType: 'JSON'
    }).done(function(data){
      var catList = data['cats'];
      for (var i = 0; i < catList.length; i++) {
        $('<img>').attr('src', catList[i]['photo']).attr('alt', 'Photo of ' + catList[i]['name'])
        .appendTo('#cat' + (i+1));
      };

    });

  });
});
