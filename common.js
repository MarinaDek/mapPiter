 $('svg path').hover(function(){
 var id = $(this).attr('id');
 $('#t-'+id).css('color','#FF7640');
},function(){
  $('p').css('color','#000');
});


$('p').hover(function(){
 var id = $(this).attr('id');
  var pathId = id.slice(2);
  console.log(pathId);
 $('#'+pathId).css('fill','#FF9B73');
},function(){ 
  $('p').css('color','#024C68');
 Grad();
});
	 	        
var regions=[
  {
  //1
  "region_code": "path1",
  "region_name": "Выборгский",
  "population": 201239,
  "area": 7546
  },
   {
  //2
  "region_code": "path2",
  "region_name": "Приозерский",
  "population": 62039,
  "area": 3597
  },
   {
  //3
  "region_code": "path3",
  "region_name": "Всеволжский",
  "population": 354723,
  "area": 2945 
  },
    {
  //4
  "region_code": "path4",
  "region_name": "Кировский",
  "population": 105698,
  "area": 2590
  },
   {
  //5
  "region_code": "path5",
  "region_name": "Санкт-Петербург",
  "population": 5351935,
  "area": 1403
  },
   {
  //6
  "region_code": "path6",
  "region_name": "Ломоносовский",
  "population": 69861,
  "area": 1919
  },
   {
  //7
  "region_code": "path7",
  "region_name": "Кингисеппский",
  "population": 78839,
  "area": 2907
  },
  {
  //7
  "region_code": "path8",
  "region_name": "Волосовский",
  "population": 51675,
  "area": 2680
  },
  
   {
  //8
  "region_code": "path9",
  "region_name": "Гатчинский",
  "population": 244252,
  "area": 2892
  },
   {
  //9
  "region_code": "path10",
  "region_name": "Лужский",
  "population": 74117,
  "area": 6006
  },
   {
  //10
  "region_code": "path11",
  "region_name": "Тосненский",
  "population": 129682,
  "area": 3656
  },
   {
  //11
  "region_code": "path12",
  "region_name": "Киришский",
  "population": 62456,
  "area": 3045
  },
   {
  //12
  "region_code": "path13",
  "region_name": "Волховский",
  "population": 90174,
  "area": 5124
  },
   {
  //14
  "region_code": "path14",
  "region_name": "Тихвинский",
  "population": 69800,
  "area": 7018
  },
  {
  //15
  "region_code": "path15",
  "region_name": "Бокситогорский",
  "population": 50019,
  "area": 7201
  },
  {
  //16
  "region_code": "path16",
  "region_name": "Сланцевский",
  "population": 43229,
  "area": 2191
  },
    {
  //17
  "region_code": "path17",
  "region_name": "Лодейнопольский",
  "population": 29223,
  "area": 4910
  },
    {
  //18
  "region_code": "path18",
  "region_name": "Подпорожский",
  "population": 29732,
  "area": 7705
  }];

  function Grad() {
  for(i=0; i<regions.length; i++) {
    var hoa = regions[i].population/regions[i].area;
    var rg = parseInt(255-hoa/0.2);
    $('#' + regions[i].region_code).css({"fill":"rgb("+rg+", "+rg+",255)"});
  }
}

window.onload = function() {
  Grad();
}

$(function() {

    for(i = 0; i < regions.length; i++) {
        
        $('#'+ regions[i].region_code)
        .data('region', regions[i]);
    }

    $('svg path').mouseover(function (e) {
      
        var region_data=$(this).data('region');
        $('<div class="info_panel">'+
            region_data.region_name + '<br>' +
            'Плотность населения: ' + (region_data.population/region_data.area).toLocaleString("en-UK") +
          	'</div>'
         )
        .appendTo('.map');
    })
    .mouseleave(function () {
        $('.info_panel').remove();
    })
    .mousemove(function(e) {
        var mouseX = e.pageX, //X coordinates of mouse
            mouseY = e.pageY; //Y coordinates of mouse

        $('.info_panel').css({
            top: mouseY-50,
            left: mouseX - ($('.info_panel').width()*4)
        });
    });

});


$(function() {

    for(i = 0; i < regions.length; i++) {
        
        $('#'+ regions[i].region_code)
        .data('region', regions[i]);
    }
$('path').click(function (e) {
        var region_data=$(this).data('region');
        $('<div class="block-info">'+
            region_data.region_name + '<br>' + 
            'Плотность населения: ' +  (region_data.population/region_data.area).toLocaleString("en-UK") +'<br>'+
          "Население: "+
          region_data.population+"<br>"+
          "Площадь: "+
          region_data.area+"<br>"+
            '</div>'
         )
        .appendTo('.conmap');
    })
    .mouseleave(function () {
        $('.block-info').remove();
    })

});