

export default {

    template: `
  <div>


  <div class="col  text-center ">
      <div id="client-testimonial-carousel" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner" role="listbox">

              <div v-for="info in infos"
                  class="carousel-item text-center p-4 row flex-row-reverse align-items-end" :class="{active: info.info_id == 1}">

                  ​<picture>
                      <source media="(min-width: 768px)" srcset="images/home_page/chat_bubble_desktop.svg"
                          type="image/svg+xml">
                      <img class="img-fluid " src="images/home_page/chat_bubble.svg" alt="chat bubble" />
                  </picture>


                  <img class="img-fluid col-md-7 float-right teens" :src="'images/home_page/'+ info.image"
                      alt="hero img 1" />
                  <div class="col-md-5 px-3">
                      <h3>{{info.name}}</h3>
                      <p class="text-lg-left">{{info.description}}</p>
                      <button class="blue-btn">
                          <router-link class="router-link" :to="info.link">More info</router-link>
                      </button>
                    
                  </div>


              </div>


          </div>
          <div class="carousel-indicators">
          <img v-for="(info,index) in infos" data-target="#client-testimonial-carousel" :data-slide-to="index" class="active m-2"
              src="images/home_page/slide_dot_bold.svg" />
          </div>
      </div>

  </div>



  

  <h1 class="title text-center m-4">HIV NUMBERS</h1>
  <div class="numbers  row">
      <div class="col-md-3">
          <h3>2 500 000</h3>
          <p>people were accessing antiretroviral therapy</p>
      </div>
      <div class="col-md-3">
          <h3>17 000 000</h3>
          <p>people became newly Infected with HIV</p>
      </div>
      <div class="col-md-3">
          <h3>37 900 000</h3>
          <p>people globally were living with HIV</p>
      </div>
  </div>

  <h1 class="title text-center m-4">Do you know...</h1>
  <div class="know text-center container">

      <div>
          <div class="m-2">
              <h2 class="m-2">What HIV/AIDS is?</h2>
              <p>HIV stands for Human Immunodeficiency Virus. It is a virus that attacks the
                  immune system. It attacks and destroys white blood cells and makes copies of
                  itself in these cells, which are our body’s natural defence against illness. </p>
              <button class="blue-btn">
                  <router-link class="router-link" to="/living_with_hiv">More info</router-link>
              </button>
          </div>

          <div class="m-2">
              <h2>... how are people living with HIV/AIDS?</h2>
              <p>Currently, over 30% of all new HIV infections globally are estimated to occur among youth ages 15 to
                  25
                  years. Also, increasingly, children infected at birth grow into adolescents who have to deal with
                  their
                  HIV positive status. Combining the two, there is 5 million youth living with HIV. </p>
              <button class="blue-btn">
                  <router-link class="router-link" to="/living_with_hiv">More info</router-link>
              </button>
          </div>

          <div class="presudo m-2">
              <h2>... about stigma?</h2>
              <p>HIV stands for Human Immunodeficiency Virus. It is a virus that attacks the
                  immune system. It attacks and destroys white blood cells and makes copies of
                  itself in these cells, which are our body’s natural defence against illness. </p>
              <button class="blue-btn">
                  <router-link class="router-link" to="/living_with_hiv">More info</router-link>
              </button>
          </div>
      </div>

  </div>


  <div class="protect d-flex row mb-5 ">

      <img class="img-fluid bg-img " src="images/protect_yourself.svg" alt="bg_image" />
      <h1 class="title col text-center m-4">PROTECT YOURSELF</h1>
      <div class="d-flex row justify-content-center ">

          <div class="col-md-6 align-middle ">
              <p class="p-5 align-items-center text-center text-lg-left pl-md-5 ">Protecting yourself from HIV begins with
                  understanding how the virus is spread.
                  The virus can be passed in only certain ways:
                  During sex with a person infected with HIV;
                  By sharing a contaminated needle, such as
                  through illicit drug use …</p>
              <div class="row d-flex justify-content-center ">
                  <button class="blue-btn mr-3">
                      <router-link class="router-link" to="/safe_sex">Safe sex</router-link>
                  </button>
                  <button class="blue-btn">
                      <router-link class="router-link" to="/drug_use">Safe drug use</router-link>
                  </button>

              </div>

          </div>
          <img class="img-fluid col-8  col-md-6 flex-sm-column-reverse p-2" src="images/protect_yourself_2.png" alt="people" />

      </div>
  </div>


  <div class="hiv-test text-center mt-5 ">
      <h1 class="title text-center m-4 p-4">UP TO TEST?</h1>
      <h2>What is an HIV test?</h2>
      <p class="text-center p-4"> The HIV test is a blood test. There are two ways this test can be done.
          Rapid tests, also known as “point-of-care” tests, offer results within minutes after blood is taken, usually
          from a fingerprick.
          Standard tests usually involve blood being taken from a vein in the arm. The blood is then sent to a lab for
          testing. The results take two weeks… </p>
      <button class="blue-btn">
          <router-link class="router-link" to="/safe_drug_use">More info</router-link>
      </button>

  </div>

  <div class="clinick-map">
      <h1 class="title text-center m-4 p-4">WHERE TO GO?</h1>
      <div id="floating-panel" class="text-center mb-4">
          <input id="address" type="textbox" value="" placeholder="City or postal code">
          <input id="submit" type="button" value="Go!">
      </div>
      <div id="map"></div>

      <div class="hover-div text-center p-3">
          <h4>Find a clinic near you </h4>
          <h4>Anonymous HIV/AIDS Testing </h4>
          <div>

          </div>
      </div>

      <div class="news">
          <h1 class="title text-center m-4 p-4">LATEST NEWS</h1>

          <div class="row justify-content-center m-4">
              <div class="text-center p-3 col-12 col-lg-6" v-for="article in articles">
                  <a :href='article.url'>
                      <img class="img-fluid  news-img" :src='article.urlToImage' alt="news icon" />
                      <h4 class="subtitle text-center">{{article.title}}</h4>
                      <p>{{article.publishedAt}}</p>
                  </a>
              </div>
          </div>


      </div>

  </div>
</div>

    `,

    data() {
        return {
            articles: null,
            infos: {

            },
            user: null
        }
    },


    mounted() {
        console.log('mounted')

        //news api
        let url = 'https://newsapi.org/v2/everything?qInTitle=hiv&apiKey=0b89d19105dc493bb2b0465a8152dec8&pageSize=4&sortBy=relevancy&fbclid=IwAR1OBl735Dd52VkjVPhSBe_tdsb6aUCIFx7o6JBmcmrVefni2vJ6NqEmSJs'
        fetch(url)
            .then(res => res.json())
            .then(data => this.articles = data.articles)

        //cms content
        fetch('./admin/get_json.php?info')
            .then(res => res.json())
            .then(data => this.infos = data.info)

        //get admin dashboard
        fetch('./admin/get_json.php?user')
            .then(res => res.json())
            .then(data => this.$emit("authenticated", data.toUpperCase()))




        //google map api
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 16,
            center: { lat: -34.397, lng: 150.644 }
        });
        var geocoder = new google.maps.Geocoder();

        document.getElementById('submit').addEventListener('click', function () {
            geocodeAddress(geocoder, map);
        });


        function geocodeAddress(geocoder, resultsMap) {
            var address = document.getElementById('address').value;
            geocoder.geocode({ 'address': address }, function (results, status) {
                if (status === 'OK') {
                    resultsMap.setCenter(results[0].geometry.location);
                    var marker = new google.maps.Marker({
                        map: resultsMap,
                        position: results[0].geometry.location
                    });

                    console.log(results[0].geometry.location)
                    var request = {
                        location: results[0].geometry.location,
                        radius: 1000,
                        query: 'medical center'
                    };

                    var service = new google.maps.places.PlacesService(map);

                    service.textSearch(request, function (type_results, status) {
                        if (status === google.maps.places.PlacesServiceStatus.OK) {
                            for (var i = 0; i < type_results.length; i++) {
                                createMarker(type_results[i]);
                            }

                            map.setCenter(results[0].geometry.location);
                        }
                    });

                } else {
                    alert('Geocode was not successful for the following reason: ' + status);
                }
            });
        }

        function createMarker(place) {
            var marker = new google.maps.Marker({
                map: map,
                position: place.geometry.location
            });

            google.maps.event.addListener(marker, 'click', function () {
                infowindow.setContent(place.name);
                infowindow.open(map, this);
            });
        }




    }




}