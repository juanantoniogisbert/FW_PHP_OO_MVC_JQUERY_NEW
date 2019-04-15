$(document).ready(function () {

    // //1r combo
    // $.get("module/home/controller/controller_home.php?op=dropdown", function (data, status) {
    //     var tipo = JSON.parse(data);
    //     var $comboTipos = $("#cboTipos");
    //     $comboTipos.empty();
    //     $comboTipos.append("<option>Seleccione un tipo</option>");
    //     $.each(tipo, function(index, coches) {
    //         $comboTipos.append("<option>" + coches.tipo + "</option>");
    //     });
    // });
    
    // // 2n combo
    // $("#cboTipos").change(function() {
    //     var tipo = $(this).val();
    //     $.get("module/home/controller/controller_home.php?op=dropdown2&tipo=" + tipo, function(data, status) {
    //         var gamas = JSON.parse(data);
    //         var $comboGamas = $("#cboGamas");
    //         $comboGamas.empty();
    //         $.each(gamas, function(index, coches) {
    //             $comboGamas.append("<option>" + coches.gama + "</option>");
    //         });
    //     });
    //     // /autocomplete
    //     $('#service').keyup(function(){
    //         var gama = document.getElementById('cboGamas').value;
    //         var service = $(this).val();
    //         var dataString = {service: service};
    //         $.ajax({
    //             type: "POST",
    //             url: "module/home/controller/controller_home.php?op=autocomplete&tipo=" + tipo + '&gama=' + gama,
    //             data: dataString,
    //             success: function(data) {
    //                 $('#suggestions').fadeIn(1000).html(data);

    //                 $('.suggest-element').on('click', function(){
    //                     var id = $(this).attr('id');
    //                     $('#service').val($('#'+id).attr('data'));
    //                     var marca = document.getElementById(id).text;
    //                     document.getElementById("service").value = marca;
    //                 });

    //                 $('#send').on('click', function(){
    //                     console.log("tevuic");
    //                     var id = $(this).attr('id');
    //                     $('#service').val($('#'+id).attr('data'));
    //                     $('#suggestions').fadeOut(1000);
    //                     var marca = document.getElementById("service").value;
    //                     window.location.href = 'index.php?page=controller_home&op=red&tipo=' + tipo + '&gama=' + gama + '&marca=' + marca;
    //                 });
    //             }
    //         });
    //     });
    // });

    // if (document.getElementById('list_details_cars')){
    //     $.get("module/home/controller/controller_home.php?&op=details", function(data, status) {
    //         var list = JSON.parse(data);
    //         console.log(data);
    //         var ElementDiv = document.createElement('div');
    //         ElementDiv.id = "list_details_cars";
    //         ElementDiv.innerHTML =  +"<section id='car-list-area' class='section-padding'>"
    //                                     +"<div class='container'>"
    //                                         +"<div class='row'>"
    //                                             +"<div class='col-lg-8'>"+
    //                                                 +"<div class='car-details-content'>"
    //                                                     +"<h2>"+ list.marca + "<span class='price'>Price: <b>"+list.precio+"</b></span></h2>"
    //                                                     +"<div class='car-preview-crousel'>"
    //                                                         +"<div class='single-car-preview'>"
    //                                                             +"<img src='"+list.imagen+"'>"
    //                                                         +"</div>"
    //                                                         +"<div class='single-car-preview'>"
    //                                                             +"<img src='"+list.imagen2+"'>"
    //                                                         +"</div>"
    //                                                         +"<div class='single-car-preview'>"
    //                                                             +"<img src='"+list.imagen3+"'>"
    //                                                         +"</div>"
    //                                                     +"</div>"
    //                                                     +"<div class='car-details-info'>"
    //                                                         +"<h4>Additional Info</h4>"
    //                                                         +"<p>The Aventador LPER 720-4 50° ise a limited a new specific engine calibration,plitter.</p>"
    //                                                         +"<div class='technical-info'>"
    //                                                             +"<div class='row'>"
    //                                                                 +"<div class='col-lg-6'>"
    //                                                                     +"<div class='tech-info-table'>"
    //                                                                         +"<table class='table table-bordered'>"
    //                                                                             +"<tr>"
    //                                                                                 +"<th>Maker</th>"
    //                                                                                 +"<td>"+list.fabricante+"</td>"
    //                                                                             +"</tr>"
    //                                                                             +"<tr>"
    //                                                                                 +"<th>Fuel</th>"
    //                                                                                 +"<td>"+list.combus+"</td>"
    //                                                                             +"</tr>"
    //                                                                             +"<tr>"
    //                                                                                 +"<th>Doors</th>"
    //                                                                                 +"<td>"+list.puertas+"</td>"
    //                                                                             +"</tr>"
    //                                                                             +"<tr>"
    //                                                                                 +"<th>Date fabric</th>"
    //                                                                                 +"<td>"+list.date_fabric+"</td>"
    //                                                                             +"</tr>"
    //                                                                         +"</table>"
    //                                                                     +"</div>"
    //                                                                 +"</div>"
                                
    //                                                                 +"<div class='col-lg-6'>"
    //                                                                     +"<div class='tech-info-list'>"
    //                                                                         +"<ul>"
    //                                                                             +"<li>"+list.extra+"</li>"
    //                                                                         +"</ul>"
    //                                                                     +"</div>"
    //                                                                 +"</div>"
    //                                                             +"</div>"
    //                                                         +"</div>"
    //                                                     +"</div>"
    //                                                 +"</div>"
    //                                             +"</div>"
    //                                         +"</div>"
    //                                     +"</div>"
    //                                 +"</section>"

    //         document.getElementById("list_details_cars").appendChild(ElementDiv);
    //     });
    // }

    if (document.getElementById('list_cars_home')) {
        // $.post("module/home/controller/controller_home.php?&op=list_cars", function(data,status) {
        $.post("../../home/list_cars/", function(data,status) {
            var json = JSON.parse(data);
            console.log(json);
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

    // $(document).on('click','.btn-details',function () {
    //     var id = this.getAttribute('id');
    //     window.location.href = 'index.php?page=controller_home&op=details2&id=' + id;
    // });
});