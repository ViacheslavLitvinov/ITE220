<!-- Viacheslav Litvinov
	Bootstap theme is used -->
<html>
	<head>
		<title>Buy a Ticket!</title>

		<!-- Bootstrap Core CSS -->
    	<link href="css/bootstrap.min.css" rel="stylesheet">

    	<!-- Custom CSS -->
	    <link href="css/concert.css" rel="stylesheet">

	    <!-- Custom Fonts -->
	    <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
	    <link href="http://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic" rel="stylesheet" type="text/css">
	    <link href="http://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
	    <link href="css/awesome-bootstrap-checkbox.css" rel="stylesheet">
	</head>
	
	<body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
		<!-- Navigation -->
	    <nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
	        <div class="container">
	            <div class="navbar-header">
	                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
	                    <i class="fa fa-bars"></i>
	                </button>
	                <a class="navbar-brand page-scroll" href="#page-top">
	                    <i class="fa fa-angellist "></i>  <span class="light">Buy</span> a ticket!
	                </a>
	            </div>

	            <!-- Collect the nav links, forms, and other content for toggling -->
	            <div class="collapse navbar-collapse navbar-right navbar-main-collapse">
	                <ul class="nav navbar-nav">
	                    <!-- Hidden li included to remove active class from about link when scrolled up past about section -->
	                    <li class="hidden">
	                        <a href="#page-top"></a>
	                    </li>
	                    <li>
	                        <a class="page-scroll" href="#buy">Buy</a>
	                    </li>
	                    
	                    <li>
	                        <a class="page-scroll" href="#contact">Contacts</a>
	                    </li>
	                </ul>
	            </div>
	            <!-- /.navbar-collapse -->
	        </div>
	        <!-- /.container -->
	    </nav>
		
		<!-- Intro Header -->
	    <header class="intro">
	        <div class="intro-body">
	            <div class="container">
	                <div class="row">
	                    <div class="col-md-8 col-md-offset-2">
	                        <h1 class="brand-heading">Girl’s Generation</h1>
	                        <p class="intro-text">Easily buy a ticket for the concert! <br>Win a 50% discount!</p>
	                        <a href="#buy" class="btn btn-circle page-scroll">
	                            <i class="fa fa-angle-double-down animated"></i>
	                        </a>
	                    </div>
	                </div>
	            </div>
	        </div>
	    </header>

	    <section id="buy" class="container content-section text-center">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
            	<?php
					//echo "hello world";
					$seats = ['A-1','A-2','A-3','A-4','A-5', 'B-1', 'B-2', 'B-3', 'B-4', 'B-5',
						'C-1', 'C-2', 'C-3', 'C-4', 'C-5'];
					$counter = 1;

					echo "<form action='concertResult.php' method='POST'>";

					foreach($seats as $seat) {
						if ($counter == 1) {
							echo ("<div><span style='font-size: 2em'>Row " . $seat[0] . ":</span><div>");
						}

						echo "
							<div id='seat-div'>
								<span style='font-size: 4em'>" . $counter . "</span>
								<br>
								<div class='checkbox checkbox-success'>
        							<input type='checkbox' id='main-checkbox' name='seats[]' value='". $seat . "'>
        							<label>
        							</label>
        						</div>
        					</div>
        					
						";
						
						if ($counter % 5 == 0) {
							echo "
							<br>
							<br>
							<br>
							<br>
							<br>
							";
							$counter = 0;
						} 
						++$counter;
					}

					echo "<br><br><button class='btn btn-default' type='submit' id='button-buy'>Buy Now</button></form>";
				?>
            </div>
        </div>
    	</section>
	
    	<!-- Contact Section -->
	    <section id="contact" class="container content-section text-center">
	        <div class="row">
	            <div class="col-lg-8 col-lg-offset-2">
	                <h2>Contact us if you have any problem</h2>
	                <p>Feel free to email us or to just say hello!</p>
	                <p><a href="mailto:viacheslavlitvinov@gmail.com.com">viacheslavlitvinov@gmail.com</a>
	                </p>
	                <ul class="list-inline banner-social-buttons">
	                    <li>
	                        <a href="https://twitter.com/the_litvinoff" class="btn btn-default btn-lg"><i class="fa fa-twitter fa-fw"></i> <span class="network-name">Twitter</span></a>
	                    </li>
	                    <li>
	                        <a href="https://www.facebook.com/profile.php?id=100004291500381" class="btn btn-default btn-lg"><i class="fa fa-facebook fa-fw"></i> <span class="network-name">Facebook</span></a>
	                    </li>
	                    <li>
	                        <a href="https://plus.google.com/u/0/102909250638397386959" class="btn btn-default btn-lg"><i class="fa fa-google-plus fa-fw"></i> <span class="network-name">Google+</span></a>
	                    </li>
	                </ul>
	            </div>
	        </div>
	    </section>

	    <footer>
	        <div class="container text-center">
	            <p>Copyright &copy; Viacheslav Litvinov 2016</p>
	        </div>
	    </footer>

	    <!-- jQuery -->
	    <script src="js/jquery.js"></script>

	    <!-- Bootstrap Core JavaScript -->
	    <script src="js/bootstrap.min.js"></script>

	    <!-- Plugin JavaScript -->
	    <script src="js/jquery.easing.min.js"></script>

	    <!-- Custom Theme JavaScript -->
    	<script src="js/grayscale.js"></script>

	</body>
</html>