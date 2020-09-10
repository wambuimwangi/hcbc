@extends('layouts.app')
@section('content')
<section class="ftco-section bg-light">
      <div class="container">
        <div class="row justify-content-center mb-5 pb-3">
          <div class="col-md-12 text-center heading-section heading-section-light ftco-animate">
            <h2 class="mb-2"><span class="px-4">Our pastors</span></h2>
            <!-- <span class="subheading">Our Blog</span> -->
          </div>
        </div>
        <div class="row d-flex">
          <div class="col-lg-6 d-flex ftco-animate">
            <div class="blog-entry justify-content-end">
              <a href="blog-single.html" class="block-20" style="background-image: url('{{asset('images/chandler.jpeg')}}');">
              </a>
              <div class="text d-flex float-right d-block">
                <div class="topper text-center pt-4 px-3">
                        <span class="day"></span>
                        <span class="mos"></span>
                        <span class="yr"></span>
                </div>
                <div class="desc p-4">
                    <h3 class="heading mt-2"><a href="#">Chandler Snyder</a></h3>
                    <p>​-Chandler Snyder is married to Kelli (his best friend) for the last 13 years, together they have three children. They have lived in different parts of Africa for the last 8 years, working to see healthy churches planted and disciple-making disciples made. Chandler has a Bachelor’s Degree in Political Science from the University of Kentucky; a Masters of Divinity from The Southern Baptist Theological Seminary; and is currently pursuing a Ph.D in Missions and Pastoral Ministry from Southwestern Baptist Theological Seminary.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 d-flex ftco-animate">
            <div class="blog-entry justify-content-end">
              <a href="blog-single.html" class="block-20" style="background-image: url('{{asset('images/solomon.jpeg')}}');">
              </a>
              <div class="text d-flex float-right d-block">
                <div class="topper text-center pt-4 px-3">
                        <span class="day"></span>
                  <span class="mos"></span>
                  <span class="yr"></span>
                </div>
                <div class="desc p-4">
                    <h3 class="heading mt-2"><a href="#">Solomon Mbuthia</a></h3>
                    <h4></h4>
                  <p>​- Mbuthia S. Muigai was born and grew up in Nairobi, Kenya. Having grown up in a thriving Baptist church in Nairobi, Mbuthia was aware of the gospel tenets at an early age, but the Lord saved him just before joining the Kenya Medical Training College in the year 2006 where he pursued Medical Laboratory Sciences, specializing in Cytology and Histopathology. Upon graduating Mbuthia remained active in his local congregation serving in evangelism, young-adults and discipleship ministries, where he’d later serve as a pastor for 5years. In June 2015, he received his Bachelor’s degree in Theology from the Africa International University (AIU). He is currently pursuing an M.A in Biblical Studies from AIU, Nairobi.He loves to disciple young men, train pastors in rural Kenya, defend the Christian Faith and reach out to the lost with the powerful gospel of Christ Jesus. He also serves as a visiting lecturer in different Bible colleges. Mbuthia and his wife Annabel got married in April 2016 and they have two sons, Nathan and Neilan.</p>
                </div>
              </div>
            </div>
          </div>
          <!-- Z -->
        </div>
        <div class="row justify-content-center mb-5 pb-3">
          <div class="col-md-12 text-center heading-section heading-section-light ftco-animate">
            <h2 class="mb-2"><span class="px-4">Our statement of faith</span></h2>
            <!-- <span class="subheading">Our Blog</span> -->
          </div>
        </div>
      </div>
    </section>
@endsection