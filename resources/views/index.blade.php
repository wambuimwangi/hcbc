@extends('layouts.app')
@section('content')
    <div class="hero-wrap js-fullheight" style="background-image: url('{{asset('images/church-hall.jpg')}}');" data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true">
          <div class="col-md-10 text-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
            <h1 class="mb-0">Welcome to HCBC</h1>
            <h3 class="subheading mb-4 pb-1">Focusing upward. Nurturing inward. Engaging outward.</h3>
            <!-- <p><a href="#" class="btn btn-primary py-3 px-4">New here!</a> <a href="#" class="btn btn-white py-3 px-4"><span class="icon-play-circle"></span> Live Stream</a></p> -->
            <div class="mouse">
                            <a href="#" class="mouse-icon">
                                <div class="mouse-wheel"><span class="ion-ios-arrow-down"></span></div>
                            </a>
                        </div>
          </div>
        </div>
      </div>
    </div>

    <section class="ftco-intro py-5" style="background-image: url({{asset('images/bg_4.jpg')}});">
        <div class="overlay"></div>
        <div class="container">
            <div class="row d-flex align-items-center">
                <div class="col-md-6 ftco-animate">
                    <h2 class="subheading"><span class="icon-calendar"></span> Upcoming Events</h2>
                    <h2><a href="#">American Gospel Viewing Party</a></h2>
                </div>
                <div class="col-md-6 pl-md-5 ftco-animate">
                    <div id="timer" class="d-flex mb-3">
                          <div class="time" id="days"></div>
                          <div class="time pl-4" id="hours"></div>
                          <div class="time pl-4" id="minutes"></div>
                          <div class="time pl-4" id="seconds"></div>
                        </div>
                        <!-- <p><a href="#" class="btn btn-primary px-4 py-2">Join our event</a></p> -->
                </div>
            </div>
        </div>
    </section>

    <section class="ftco-daily-verse bg-light">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-10 daily-verse text-center p-5">
                    <span class="flaticon-bible"></span>
                    <h3 class="ftco-animate">"16 For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life."</h3>
                    <h4 class="h5 mt-4 font-weight-bold ftco-animate">&mdash; John 3:16 KJV</h4>
                </div>
            </div>
        </div>
    </section>

    <section class="ftco-section">
        <div class="container">
            <div class="row justify-content-center mb-5 pb-3">
          <div class="col-md-12 text-center heading-section ftco-animate">
            <h2 class="mb-2"><span class="px-4">Hope City Bible Church Services</span></h2>
            <!-- <span class="subheading">Church Services</span> -->
          </div>
        </div>
            <div class="row">
                <div class="col-lg-6">
                    
              <div class="d-flex services ftco-animate text-lg-right">
                <div class="icon order-lg-last d-flex align-items-center justify-content-center"><span class="flaticon-church"></span></div>
                <div class="media-body pr-lg-5">
                  <h3 class="heading mb-3">Sunday service</h3>
                  <p>Sundays from 10 am to 12 noon.</p>
                </div>
              </div>
              <div class="d-flex services ftco-animate text-lg-right">
                <div class="icon order-lg-last d-flex align-items-center justify-content-center"><span class="flaticon-bible"></span></div>
                <div class="media-body pr-lg-5">
                  <h3 class="heading mb-3">Juja </h3>
                  <p>Wednesdays from 6 pm to 7:30 pm</p>
                </div>
              </div>
                </div>

                <div class="col-lg-6">
                    <div class="d-flex services ftco-animate text-lg-left">
                <div class="icon d-flex align-items-center justify-content-center"><span class="flaticon-bible"></span></div>
                <div class="media-body pl-lg-5">
                  <h3 class="heading mb-3">K.U.</h3>
                  <p>Tuesdays from 7 pm to 8 pm (Ruiru campus).<br>Saturdays from 12:30 pm to 2 pm.(KM) </p>
                </div>
              </div>
              
              <div class="d-flex services ftco-animate text-lg-left">
                <div class="icon d-flex align-items-center justify-content-center"><span class="flaticon-bible"></span></div>
                <div class="media-body pl-lg-5">
                  <h3 class="heading mb-3">Kahawa West</h3>
                  <p>Thursdays from 6:30 pm to 8 pm.</p>
                </div>
              </div>
                </div>
            </div>
        </div>
    </section>

    <section class="ftco-section bg-light">
        <div class="container">
            <div class="row justify-content-center mb-5 pb-3">
          <div class="col-md-12 text-center heading-section heading-section-light ftco-animate">
            <h2 class="mb-2"><span class="px-4">Latest Sermon</span></h2>
            <!-- <span class="subheading">Experience God's Presence</span> -->
          </div>
        </div>
            <div class="row d-flex sermon-wrap">
                <div class="col-md-6 d-flex align-items-stretch ftco-animate">
                    <div class="img" style="background-image: url({{asset('images/even-in-darkness.jpg')}});"></div>
                </div>
                <div class="col-md-6 py-4 text ftco-animate">
                    <h2 class="mb-4"><a href="sermon.html">Even in darkness the light dawns</a></h2>
                    <div class="meta">
                        <p>
                            <span>Sermon from: <a href="#" class="ptr">Chandler Snyder</a></span>
                            <span>Categories: <a href="#">Hope</a>, <a href="#">Watchfulness</a></span>
                            <span><a href="#">On Sunday 12 July, 2020</a></span>
                        </p>
                    </div>
                        <p>Even in darkness light dawns for the upright, for those who are gracious and compassionate and righteous.</p>
                        <p class="mt-4 btn-customize">
                            <a href="https://vimeo.com/45830194" class="btn btn-primary px-4 py-3 mr-md-2 popup-vimeo"><span class="icon-play"></span> Watch Sermons</a> <a href="#" class="btn btn-black px-4 py-3 ml-lg-2"><span class="icon-download"></span> Download Sermons</a>
                        </p>
                </div>
            </div>
        </div>
    </section>

   

    <section class="ftco-section ftco-no-pt ftco-no-pb">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 py-5">
                    <div class="heading-section heading-section-no-line ftco-animate mb-5">
                <h2 class="mb-2">Upcoming Events</h2>
                <!-- <span class="subheading">Experience God's Presence</span> -->
              </div>
              <div class="event-wrap d-md-flex ftco-animate">
                <div class="img"style="background-image: url({{asset('images/american-gospel.jpg')}});"></div>
                <div class="text pl-md-5">
                    <h2 class="mb-3"><a href="sermons.html">American Gospel</a></h2>
                    <div class="meta">
                                <p>
                                    <span><i class="icon-calendar mr-2"></i> Saturday, July 25th August 4:00 pm - 6:00 pm</span>
                                    <span><i class="icon-my_location mr-2"></i> <a href="#">HCBC compound</a></span>
                                    <span><i class="icon-location_city mr-2"></i> Thika Road, Nairobi, Kenya</span>
                                </p>
                            </div>
                            <p><a href="sermons.html" class="btn btn-primary">Read more</a></p>
                </div>
              </div>


                </div>
                
            </div>
        </div>
    </section>

    <!-- Blog section -->
    <section class="ftco-section bg-light">
      <div class="container">
        <div class="row justify-content-center mb-5 pb-3">
          <div class="col-md-12 text-center heading-section heading-section-light ftco-animate">
            <h2 class="mb-2"><span class="px-4">Recent Blog</span></h2>
            <span class="subheading">Our Blog</span>
          </div>
        </div>
        <div class="row d-flex">
          <div class="col-lg-4 d-flex ftco-animate">
            <div class="blog-entry justify-content-end">
              <a href="blog-single.html" class="block-20" style="background-image: url('{{asset('images/corona-virus.jpg')}}');">
              </a>
              <div class="text d-flex float-right d-block">
                <div class="topper text-center pt-4 px-3">
                        <span class="day">10</span>
                        <span class="mos">August</span>
                        <span class="yr">2020</span>
                </div>
                <div class="desc p-4">
                    <h3 class="heading mt-2"><a href="#">Corona virus and Christ</a></h3>
                    <p>At a time when the whole world has been overturned by a pandemic, Christians need to remember that God is sovereign over all HIs creation, even the Corona microbe.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 d-flex ftco-animate">
            <div class="blog-entry justify-content-end">
              <a href="blog-single.html" class="block-20" style="background-image: url('{{asset('images/corona-virus.jpg')}}');">
              </a>
              <div class="text d-flex float-right d-block">
                <div class="topper text-center pt-4 px-3">
                        <span class="day">10</span>
                  <span class="mos">August</span>
                  <span class="yr">2020</span>
                </div>
                <div class="desc p-4">
                    <h3 class="heading mt-2"><a href="#">Corona virus and Christ</a></h3>
                  <p>At a time when the whole world has been overturned by a pandemic, Christians need to remember that God is sovereign over all HIs creation, even the Corona microbe.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 d-flex ftco-animate">
            <div class="blog-entry">
              <a href="blog-single.html" class="block-20" style="background-image: url('{{asset('images/corona-virus.jpg')}}');">
              </a>
              <div class="text d-flex float-right d-block">
                <div class="topper text-center pt-4 px-3">
                        <span class="day">10</span>
                  <span class="mos">August</span>
                  <span class="yr">2020</span>
                </div>
                <div class="desc p-4">
                    <h3 class="heading mt-2"><a href="#">Corona virus and Christ</a></h3>
                  <p>At a time when the whole world has been overturned by a pandemic, Christians need to remember that God is sovereign over all HIs creation, even the Corona microbe.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
@endsection