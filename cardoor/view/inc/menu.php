<div id="header-bottom">
                <div class="container">
                    <div class="row">
                        <!--== Logo Start ==-->

                        <div class="col-lg-4">
                            <a href="index3.html" class="logo">
                                <img src="<?php echo IMG_PATH ?>logo.png" alt="JSOFT">
                            </a>
                        </div>
                        <!--== Logo End ==-->

                        <!--== Main Menu Start ==-->
                        <div class="col-lg-8 d-none d-xl-block">
                            <nav class="mainmenu alignright">
                                <ul>
                                    <li class="
                                        <?php if($_GET['module'] === 'home')
                                                echo'active';
                                            else
                                                echo 'deactivate';
                                        ?>"><a href="<?php amigable('?module=home&function=view_home'); ?>">Home</a>
                                    </li>
                                    <li class="
                                        <?php if($_GET['module'] === 'contact')
                                                echo'active';
                                            else
                                                echo 'deactivate';
                                        ?>"><a href="<?php amigable('?module=contact&function=list_contact'); ?>">Contact</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <!--== Main Menu End ==-->
                    </div>
                </div>
            </div>