@extends('layouts.app')
@section('content')
    	
	<section class="hero-wrap js-fullheight">
		<div class="home-slider js-fullheight owl-carousel">
			<div class="slider-item js-fullheight" style="background-image:url(images/group-photo.jpg);">
				<div class="overlay"></div>
				<div class="container">
					<div class="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
						<div class="col-md-8 ftco-animate">
							<div class="text mt-md-5 w-100 text-center">
								<h2>Welcome to</h2>
								<h1 class="mb-3">HOPE CITY BIBLE CHURCH</h1>
								<p class="mb-4 pb-3">FOCUSING UPWARD. NURTURING INWARD. ENGAGING OUTWARD.</p>
								{{-- <p class="mb-0"><a href="#" class="btn btn-primary py-3 px-2 px-md-4">Become A Volunteer</a></p> --}}
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="slider-item js-fullheight" style="background-image:url(images/church-hall.jpg);">
				<div class="overlay"></div>
				<div class="container">
					<div class="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
						<div class="col-md-8 ftco-animate">
							<div class="text mt-md-5 w-100 text-center">
								<h2>Welcome to</h2>
								<h1 class="mb-3">HOPE CITY BIBLE CHURCH</h1>
								<p class="mb-4 pb-3">FOCUSING UPWARD. NURTURING INWARD. ENGAGING OUTWARD.</p>
								{{-- <p class="mb-0"><a href="#" class="btn btn-primary py-3 px-2 px-md-4">Become A Volunteer</a></p> --}}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="ftco-section ftco-no-pb ftco-no-pt">
		<div class="container">
			<div class="row no-gutters">
				<div class="col-md-8 d-flex">
					<div class="row no-gutters">
						<div class="col-md-4">
							<div class="services-2">
								<div class="icon"><span class="flaticon-pray"></span></div>
								<div class="text">
									<h4>Focusing upward</h4>
									<span class="subheading">Hebrews 12:2</span>
									<p>..let us run with endurance the race that is set before us, fixing our eyes on Jesus, the author and perfecter of faith.</p>
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="services-2">
								<div class="icon"><span class="flaticon-church"></span></div>
								<div class="text">
									<h4>Nurturing inwards</h4>
									<span class="subheading">Ephesians 4:12-16</span>
									<p>..to equip the saints for the work of ministry, for building up the body of Christ, until we all attain to the unity of the faith and of the knowledge of the Son of God, to mature manhood..</p>
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="services-2">
								<div class="icon"><span class="flaticon-love"></span></div>
								<div class="text">
									<h4>Engaging outward</h4>
									<span class="subheading">Matthew 28:18-20
                  </span>
									<p>Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you..”</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-4 d-flex">
					<div class="services-2 services-block">
						<div class="text">
							<h4><i>"Man's chief end is to glorify God and enjoy Him forever."</i></h4>
							{{-- <p></p> --}}
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="ftco-section ftco-no-pt ftco-no-pb bg-light">
		<div class="container">
			<div class="row d-flex">
				<div class="col-md-6 d-flex">
					<div class="img img-video d-flex align-self-stretch align-items-center justify-content-center justify-content-md-center mb-4 mb-sm-0" style="background-image:url(images/fellowship.jpg);">
					</div>
				</div>
				<div class="col-md-6 pl-md-5 py-md-5">
					<div class="heading-section pt-md-5 mb-4">
						<span class="subheading">Our fellowships</span>
						{{-- <h2 class="mb-5">Plug in to any of the fellowships below:</h2> --}}
						<p>We gather together for mutual encouragement in accordance to God's word in Hebrews 10:25. Join us for:</p>
            <p><b>Sunday morning service at 10:00 am to 12:00 pm in the main church hall.</b> </p>
            <p><b>Juja Bible study on Wednesdays: 6:00 pm to 7:30 pm</b></p>
            <p><b>Kahawa West Bible study on Thursdays: 6:30 pm to 8:00 pm</b></p>
            <p><b>K.U Ruiru Campus Bible study on Tuesdays : 7:00 pm to 8:00 pm</b></p>
            <p><b>K.U. Kenyatta Market Bible study on Saturdays: 12:30 pm to 2:00 pm</b></p>
						{{-- <p><a href="#" class="btn btn-primary">Learn More</a></p> --}}
					</div>
				</div>
			</div>
		</div>
	</section>

{{-- Counter div was here --}}
	<section class="ftco-section">
		<div class="container">
			<div class="row justify-content-center pb-5 mb-3">
				<div class="col-md-7 heading-section text-center ftco-animate">
					<span class="subheading">Our Sermons</span>
					<h3>Latest Sermon</h3>
				</div>
			</div>
			<div class="row no-gutters d-flex sermon-wrap ftco-animate bg-light">
				<div class="col-md-6 d-flex align-items-stretch js-fullheight ftco-animate">
					<a href="#" class="img" style="background-image: url(images/12Sep.jpg);"></a>
				</div>
				<div class="col-md-6 py-4 py-md-5 ftco-animate d-flex align-items-center">
					<div class="text p-md-5">
						<h2 class="mb-4"><a href="sermon.html">Christ's Extensive Work</a></h2>
						<div class="meta">
							<p>
								<span>Speaker: <a href="#" class="ptr">Pst Solomon Mbuthia</a></span>
								<span>Categories: <a href="#">God</a>, <a href="#">Pray</a>, <a href="#">Faith</a></span>
								<span><a href="#">On Sunday 12th Sep, 2020</a></span>
							</p>
						</div>
						<p>We continue our journey through the book of Ephesians.</p>
						<p class="mt-4 btn-customize">
							<a href="https://vimeo.com/45830194" class="btn btn-primary px-4 py-3 mr-md-2 popup-vimeo"><span class="fa fa-play"></span> Watch Sermons</a> <a href="#" class="btn btn-primary btn-outline-primary px-4 py-3 ml-lg-2"><span class="fa fa-download"></span> Download Sermons</a>
						</p>
					</div>
				</div>
			</div>

		</div>
	</section>


	<section class="ftco-section">
		<div class="container">
			<div class="row justify-content-center pb-5 mb-3">
				<div class="col-md-7 heading-section text-center ftco-animate">
					<span class="subheading">Our Blog</span>
					<h3>Coming soon</h3>
				</div>
			</div>
			{{-- <div class="row d-flex">
				<div class="col-md-6 col-lg-4 d-flex ftco-animate">
					<div class="blog-entry align-self-stretch">
						<a href="blog-single.html" class="block-20" style="background-image: url('images/image_1.jpg');">
						</a>
						<div class="text p-4">
							<div class="meta mb-2">
								<div><a href="#">July 20, 2020</a></div>
								<div><a href="#">Admin</a></div>
								<div><a href="#" class="meta-chat"><span class="fa fa-comment"></span> 3</a></div>
							</div>
							<h3 class="heading"><a href="#">Building Holy &amp; Healthy Lives God’s</a></h3>
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
							<p><a href="#" class="btn btn-primary">Read more</a></p>
						</div>
					</div>
				</div>
				<div class="col-md-6 col-lg-4 d-flex ftco-animate">
					<div class="blog-entry align-self-stretch">
						<a href="blog-single.html" class="block-20" style="background-image: url('images/image_2.jpg');">
						</a>
						<div class="text p-4">
							<div class="meta mb-2">
								<div><a href="#">July 20, 2020</a></div>
								<div><a href="#">Admin</a></div>
								<div><a href="#" class="meta-chat"><span class="fa fa-comment"></span> 3</a></div>
							</div>
							<h3 class="heading"><a href="#">Building Holy &amp; Healthy Lives God’s</a></h3>
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
							<p><a href="#" class="btn btn-primary">Read more</a></p>
						</div>
					</div>
				</div>
				<div class="col-md-6 col-lg-4 d-flex ftco-animate">
					<div class="blog-entry align-self-stretch">
						<a href="blog-single.html" class="block-20" style="background-image: url('images/image_3.jpg');">
						</a>
						<div class="text p-4">
							<div class="meta mb-2">
								<div><a href="#">July 20, 2020</a></div>
								<div><a href="#">Admin</a></div>
								<div><a href="#" class="meta-chat"><span class="fa fa-comment"></span> 3</a></div>
							</div>
							<h3 class="heading"><a href="#">Building Holy &amp; Healthy Lives God’s</a></h3>
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
							<p><a href="#" class="btn btn-primary">Read more</a></p>
						</div>
					</div>
				</div>
			</div> --}}
		</div>
	</section>


@endsection