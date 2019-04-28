var count=0;
$(document).ready(function () {
    var track_click = 0;  
    $("#list_dogs_error").hide();
    var position = track_click;

    $(document).on('click','#scroll_more',function(){
      track_click++;
      position = track_click * 3;
  
      if (position <= 9) {
        if (position === 9) {
          $("#scroll_more").hide();
        }
        $.post(amigable("?module=home&function=more_cars"), {'more_cars':true,'position':position},function(data) {
          json = JSON.parse(data);
          console.log(json);
          $.each(json, function(index, list) {
            count++;
            var ElementDiv = document.createElement('div');
            ElementDiv.id = "cars_scroll";
            ElementDiv.innerHTML = 	"<section id='driver-page-wrap' class='section-padding'>"
                                    +"<div class='container'>"
                                      +"<div class='row'>"
                                        +"<div class='col-lg-12 col-md-6'>"
                                          +"<div class='single-driver-member'>"
                                            +"<img src='../../"+list.imagen+"'>"
                                              +"<div class='driver-mem-info'>"
                                                +"<div class='driver-mem-sicons'>"
                                                  +"<a id="+list.id+" class='btn-details'><i class='fa fa-plus'></i></a>"
                                                  +"<a id='"+list.id+"' class='addToCart' ><i class='fa fa-shopping-cart'></i></a>"
                                                +"</div>"
                                                +"<h4 id='marca'>" + list.marca + " <span id='modelo'> " + list.modelo+"</span></h4>"
                                              +"</div>"
                                              +"<a>"
                                                +"<div class='marca' id="+list.marca+" style='display: none;'></div>"
                                                +"<div class='modelo' id="+list.modelo+" style='display: none;'></div>"
                                                +"<div class='precio' id="+list.precio+" style='display: none;'></div></a>"
                                          +"</div>"
                                        +"</div>"
                                      +"</div>"
                                    +"</div>"
                                  +"</section>"
            document.getElementById("cars_scroll").appendChild(ElementDiv);
          });
        });
      }
    });

    if (document.getElementById('list_cars_home')) {
        $.post("../../home/list_cars/", function(data,status) {
            var json = JSON.parse(data);
               $.each(json, function(index, list) {
                var ElementDiv = document.createElement('div');
                ElementDiv.id = "list_cars_home";
                ElementDiv.innerHTML =  "<section id='driver-page-wrap' class='section-padding'>"
                                          +"<div class='container'>"
                                            +"<div class='row'>"
                                              +"<div class='col-lg-12 col-md-6'>"
                                                +"<div class='single-driver-member'>"
                                                  +"<img src='../../"+list.imagen+"'>"
                                                    +"<div class='driver-mem-info'>"
                                                      +"<div class='driver-mem-sicons'>"
                                                        +"<a id="+list.id+" class='btn-details'><i class='fa fa-plus'></i></a>"
                                                        +"<a id='"+list.id+"' class='addToCart' ><i class='fa fa-shopping-cart'></i></a>"
                                                      +"</div>"
                                                      +"<h4 id='marca'>" + list.marca + " <span id='modelo'> " + list.modelo+"</span></h4>"
                                                    +"</div>"
                                                    +"<a>"
                                                      +"<div class='marca' id="+list.marca+" style='display: none;'></div>"
                                                      +"<div class='modelo' id="+list.modelo+" style='display: none;'></div>"
                                                      +"<div class='precio' id="+list.precio+" style='display: none;'></div></a>"
                                                +"</div>"
                                              +"</div>"
                                            +"</div>"
                                          +"</div>"
                                        +"</section>"
                document.getElementById("list_cars_home").appendChild(ElementDiv);
          });
        });
    }

    $.post(amigable("?module=home&function=load_car_name"), {"load_car_name":true}, function( data ) {
      var arrname = [];
      json = JSON.parse(data);
      for (var i = 0; i < json.length; i++) {
        arrname.push(json[i].marca);
      }
      $("#keyword").autocomplete({
        source: arrname,
        minLength: 1,
        select: function (event, ui) {
          var keyword = ui.item.label;
          select_name_car_auto(keyword);
        }
      });
    });
  
    $(document).on('click','.button_search',function(){
      var keyword = document.getElementById('keyword').value;
      if (keyword < 1) {
        $("#list_home").empty();
        $("#list_dogs_error").show();
      }else{
        select_name_car_auto(keyword);	
      }
    });

    function select_name_car_auto(keyword){
      $("#list_dogs_error").hide();
      $.post(amigable("?module=home&function=select_name_car_auto"),{"select_name_car_auto":true,"keyword":keyword}, function( data ) {
        json = JSON.parse(data);
        console.log(json);
        $("#list_auto_car").empty();
        if (json.length < 1 ) {
          $("#list_auto_car").append("Ningun perro coincide con la busqueda");
        }else{
          $.each(json, function(index, list) {
            var ElementDiv = document.createElement('div');
            ElementDiv.id = "list_auto_car";
            ElementDiv.innerHTML = +"<section id='car-list-area' class='section-padding'>"
                              +"<div class='container'>"
                                  +"<div class='row'>"
                                      +"<div class='col-lg-8'>"+
                                          +"<div class='car-details-content'>"
                                              +"<h2>"+ list.marca + "<span class='price'>Price: <b>"+list.precio+"</b></span></h2>"
                                              +"<div class='car-preview-crousel'>"
                                                  +"<div class='single-car-preview'>"
                                                      +"<img src='"+list.imagen+"'>"
                                                  +"</div>"
                                                  +"<div class='single-car-preview'>"
                                                      +"<img src='"+list.imagen2+"'>"
                                                  +"</div>"
                                                  +"<div class='single-car-preview'>"
                                                      +"<img src='"+list.imagen3+"'>"
                                                  +"</div>"
                                              +"</div>"
                                              +"<div class='car-details-info'>"
                                                  +"<h4>Additional Info</h4>"
                                                  +"<p>The Aventador LPER 720-4 50° ise a limited a new specific engine calibration,plitter.</p>"
                                                  +"<div class='technical-info'>"
                                                      +"<div class='row'>"
                                                          +"<div class='col-lg-6'>"
                                                              +"<div class='tech-info-table'>"
                                                                  +"<table class='table table-bordered'>"
                                                                      +"<tr>"
                                                                          +"<th>Maker</th>"
                                                                          +"<td>"+list.fabricante+"</td>"
                                                                      +"</tr>"
                                                                      +"<tr>"
                                                                          +"<th>Fuel</th>"
                                                                          +"<td>"+list.combus+"</td>"
                                                                      +"</tr>"
                                                                      +"<tr>"
                                                                          +"<th>Doors</th>"
                                                                          +"<td>"+list.puertas+"</td>"
                                                                      +"</tr>"
                                                                      +"<tr>"
                                                                          +"<th>Date fabric</th>"
                                                                          +"<td>"+list.date_fabric+"</td>"
                                                                      +"</tr>"
                                                                  +"</table>"
                                                              +"</div>"
                                                          +"</div>"
                      
                                                          +"<div class='col-lg-6'>"
                                                              +"<div class='tech-info-list'>"
                                                                  +"<ul>"
                                                                      +"<li>"+list.extra+"</li>"
                                                                  +"</ul>"
                                                              +"</div>"
                                                          +"</div>"
                                                      +"</div>"
                                                  +"</div>"
                                              +"</div>"
                                          +"</div>"
                                      +"</div>"
                                  +"</div>"
                              +"</div>"
                          +"</section>"
            document.getElementById("list_auto_car").appendChild(ElementDiv);
          });
        }
      });
    }

    // $(document).on('click','.btn-details',function () {
    //     var id = this.getAttribute('id');
    //     window.location.href = 'index.php?page=controller_home&op=details2&id=' + id;
    // });
});