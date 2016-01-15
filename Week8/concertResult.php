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
	                <a class="navbar-brand page-scroll" href="concert.php#page-top">
	                    <i class="fa fa-angellist "></i>  <span class="light">Buy</span> a ticket!
	                </a>
	            </div>
	        </div>
	        <!-- /.container -->
	    </nav>	  

	    <section id="about" class="container content-section text-center">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2">          	
				<?php
					

					if (isset($_POST["seats"])) {
						$selectedSeats = $_POST["seats"];

						if (count($selectedSeats) > 4) {
							echo "<h2>Sorry...</h2><p>You cannot buy more than 4 seats</p>";
						}
						else {
							echo "
								<h2>You have bought " . count($selectedSeats) . " ticket(s)</h2><br>
								<p>Your Seat(s):</p>
							";

							$totalPrice = 0;
							foreach ($selectedSeats as $selectedSeat) {
								$price = 0;
								
								if ($selectedSeat == "A-4") {
									$price = 1500;
									echo "
										<h2>" . $selectedSeat . ": <strike>3000</strike> " . $price . " THB</h2>
										<script type='text/javascript'>
    										alert('Congratulations! You won the lucky ticket! 50% discount!');	 
 										</script>
									";
									
								}
								else {
									if ($selectedSeat[0] == "A") {
										$price = 3000;
									}
									else if ($selectedSeat[0] == "B") {
										$price = 2000;	
									}
									else {
										$price = 1000;
									}

									echo "
										<h2>" . $selectedSeat . ": " . $price . " THB</h2>
									";
								}
								$totalPrice += $price;
							}
							echo "<p>Total price: </p><h2>" . $totalPrice . " THB</h2>";
						}
					}
					else {
						echo "<h2>Sorry...</h2><p>You cannot buy if you didn't choose the seats</p>";
					}

					echo "<a href='concert.php'><button class='btn btn-default'>Back</button></a>";
					
				?>
            	
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

