<header>
		<a href="<?php echo ROOT_PATH?>/index.php" id="site-name" class="current-page">
			<img src="<?php echo ROOT_PATH?>/images/logo-50x50.png" alt="" height="32" width="32">
			<h2>PHP test</h2>
		</a>
		<nav aria-label="Main">
			<button id="topnavOpen" class="top-nav-open" aria-label="Menu" aria-controls="topnav" aria-expanded="false">
			</button>
			<ul id="topnav">
				<li id="site-name-mobile">
					<a class="top-nav-item" href="<?php echo ROOT_PATH?>/index.php">Home</a>
				</li>
				<li>
					<a class="top-nav-item" href="<?php echo ROOT_PATH?>/pages/about-us.php">About Us</a>
				</li>
				<!--make sure to increment number in id's if using more than one dropdown per page-->
				<li class="dropdown"
					role="dialog" aria-labelledby="dropdown-button-1">
					<button type="button" 
							id="dropdown-button-1" 
							class="top-nav-item dropdown-control" 
							aria-expanded="false">
						Dropdown
					</button>
					<ul class="dropdown-content" id="dropdown-1"> 
						<li>
							<a href="<?php echo ROOT_PATH?>/pages/sample.php" class="top-nav-item dropdown-item">Dropdown Item</a>
						</li>
						<li>
							<a href="<?php echo ROOT_PATH?>/pages/sample.php" class="top-nav-item dropdown-item">Dropdown Item</a>
						</li>
					</ul>
				</li>
				<li>
				<a class="top-nav-item" href="<?php echo ROOT_PATH?>/pages/contact.php">Contact</a>
				</li>
			</ul>
		</nav>
	</header> 	