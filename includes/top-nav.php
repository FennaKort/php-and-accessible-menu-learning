<header id="top-nav">
		<a href="<?php echo ROOT_PATH?>/index.php" id="site-name" class="current-page">
			<img src="<?php echo ROOT_PATH?>/images/logo-50x50.png" alt="" height="32" width="32">
			<h2>PHP test</h2>
		</a>
		<button id="topnavOpen" class="top-nav-open" aria-label="Open Navigation" aria-expanded="false">
			<span class="hamburger" aria-hidden="true"></span>
			<span class="hamburger" aria-hidden="true"></span>
			<span class="hamburger" aria-hidden="true"></span>
		</button>
		<nav id="topnavMenu" aria-label="Main">
			<button id="topnavClose" class="top-nav-close" aria-label="Close Navigation">
				<span aria-hidden="true">×</span>
				  </button>
			</button>
			<ul id="top-nav-items">
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
							aria-expanded="false" 
							aria-controls="dropdown-1">
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