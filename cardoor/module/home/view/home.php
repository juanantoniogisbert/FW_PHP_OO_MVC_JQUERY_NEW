<div id="contenido">
<section id="home" class="text-center">

        <!-- == Preloader Area Start == -->
        <div class="preloader">
            <div class="preloader-spinner">
                <div class="loader-content">
                    <img src="<?php echo IMG_PATH ?>preloader.gif" alt="JSOFT">
                </div>
            </div>
        </div>
        <!--== Preloader Area End ==--> 

        <!--== Slider Area Start ==-->
        <section id="home-slider-area">
            <div class="home-slider-item slider-bg-1 overlay">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="slideshowcontent">
                                <h1>BOOK A CAR TODAY!</h1>
                                <p>FOR AS LOW AS $10 A DAY PLUS 15% DISCOUNT <br> FOR OUR RETURNING CUSTOMERS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="home-slider-item slider-bg-2 overlay">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="slideshowcontent">
                                <h1>SAVE YOUR MONEY</h1>
                                <p>FOR AS LOW AS $10 A DAY PLUS 15% DISCOUNT <br> FOR OUR RETURNING CUSTOMERS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="home-slider-item slider-bg-3 overlay">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="slideshowcontent">
                                <h1>ENJOY YOUR JOURNEY</h1>
                                <p>FOR AS LOW AS $10 A DAY PLUS 15% DISCOUNT <br> FOR OUR RETURNING CUSTOMERS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--== Slider Area End ==-->

        <!--== Book A Car Area Start ==-->
        <div id="book-a-car">
            <div class="container" style="align: center;">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="booka-car-content">
                            <form action="index3.html">
                                <!-- <div class="pick-location bookinput-item">
                                    <select class="custom-select" id="cboTipos">
                                        <option value="0">Seleccione un tipo</option>
                                    </select>
                                </div>

                                <div class="car-choose bookinput-item">
                                    <select class="custom-select" id="cboGamas">
                                        <option value="0">Seleccione una gama</option>
                                    </select>
                                </div> -->

                                <div class="contact-form">
                                    <form action="index.html">
                                        <div class="row">
                                            <div class="col-lg-6 col-md-6">
                                                <div class="name-input">
                                                    <input type="text" id="service" name="service">
                                                    <div id="suggestions"></div>
                                                    <div id="vistaauto"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                                <!-- <div class="bookcar-btn bookinput-item">
                                    <button type="submit" id="send">Book Car</button>
                                </div> -->

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--== Book A Car Area End ==-->

        <!--== Our Cars Area Start ==-->
        <form name="search_breed" id="search_breed" class="search_breed">
	        <input type="text" value="" placeholder="Buscar nombre..." class="input_search" id="keyword" list="datalist">
	        <input name="Submit" id="Submit" class="button_search" type="button" value="Buscar nombre" />
	    </form>
        <div id="list_auto_car"></div>
        
        <section id="our-cars" class="section-padding">
            <div class="container">
                <div class="row">
                    <!-- Section Title Start -->
                    <div class="col-lg-12">
                        <div class="section-title  text-center">
                            <h2>Nuestros coches</h2>
                            <span class="title-line"><i class="fa fa-car"></i></span>
                            <p>Los coches mas votasdos por la gente</p>
                        </div>
                    </div>
                    <!-- Section Title End -->
                </div>
            </div>
        </section>
        <div id="list_cars_home" class="columna"></div>
        <div id="cars_scroll" class="columna"></div>
        <button class="scroll" id="scroll_more" style="text-align: center; display: inline-block;">Mostrar más</button>
</section>
</div>