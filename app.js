
const listing = document.querySelector(".left-col");

async function fetchhotelsDetails() {
    console.log(`${localStorage.getItem('location')} ${localStorage.getItem('CheckIn')}  ${localStorage.getItem('CheckOut')} ${localStorage.getItem('Guest')}`);
    // document.location='http://127.0.0.1:5501/listing.html';
    const url =`https://airbnb13.p.rapidapi.com/search-location?location=${localStorage.getItem('location')}&checkin=${localStorage.getItem('CheckIn')}&checkout=${localStorage.getItem('CheckOut')}&adults=${localStorage.getItem('Guest')}&children=0&infants=0&pets=0&page=1&currency=USD`;
   const options = {
               method: "GET",
               headers: {
                          "X-RapidAPI-Key": "29fc4e985dmsh78af3349592c277p15e619jsn7540099c1af8",
                           "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
                        },
                 };
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data.results);
    renderToUi(data.results);
  } catch (error) {
    console.error(error);
  }
}
fetchhotelsDetails();
function renderToUi(hotels) {
  hotels.forEach((element) => {
    const houseDiv = document.createElement("div");
    houseDiv.className = "house";
    houseDiv.innerHTML = `<div class="house-img">
        <img src="${element.images[0]}">
    </div>
    <div class="house-info">
        <p>${element.type}</p>
        <h3>${element.name}</h3>
        <p>${element.bedrooms} Bedroom /${element.bathrooms} Bathroom / ${element.previewAmenities[0]} / ${element.previewAmenities[1]}</p>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half-alt"></i>
        <i class="far fa-star"></i>
        <div class="house-price">
            <p>${element.persons} Guest</p>
            <h4>$ ${element.price.rate}<span>/ day</span></h4>
        </div>
    </div>`;

    listing.append(houseDiv);
  });
}
let map;
async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

initMap();
//  address
//  :
//  "New Delhi, Delhi, India"
//  amenityIds
//  :
//  (43) [1, 2, 3, 4, 132, 5, 133, 8, 9, 77, 79, 85, 89, 665, 91, 28, 93, 30, 94, 671, 96, 33, 34, 35, 611, 36, 100, 37, 39, 103, 167, 40, 104, 41, 44, 45, 46, 49, 50, 51, 55, 57, 61]
//  bathrooms
//  :
//  1
//  bedrooms
//  :
//  1
//  beds
//  :
//  1
//  cancelPolicy
//  :
//  "CANCEL_MODERATE"
//  city
//  :
//  "New Delhi"
//  deeplink
//  :
//  "https://www.airbnb.com/rooms/590041?check_in=2023-10-28&check_out=2023-10-29&adults=1&children=0&infants=0&pets=0"
//  hostThumbnail
//  :
//  "https://a0.muscache.com/im/pictures/user/e05ca607-cfef-4df7-b4a3-e0033f041ba7.jpg?aki_policy=profile_x_medium"
//  id
//  :
//  "590041"
//  images
//  :
//  (16) ['https://a0.muscache.com/im/pictures/7556096/32472304_original.jpg?im_w=720', 'https://a0.muscache.com/im/pictures/7556334/be744b50_original.jpg?im_w=720', 'https://a0.muscache.com/im/pictures/7556830/72503378_original.jpg?im_w=720', 'https://a0.muscache.com/im/pictures/7556948/049f1a67_original.jpg?im_w=720', 'https://a0.muscache.com/im/pictures/7556761/054bb197_original.jpg?im_w=720', 'https://a0.muscache.com/im/pictures/7556890/0bc8bd88_original.jpg?im_w=720', 'https://a0.muscache.com/im/pictures/7556723/f7b1e5f9_original.jpg?im_w=720', 'https://a0.muscache.com/im/pictures/7556242/9e0cb2b5_original.jpg?im_w=720', 'https://a0.muscache.com/im/pictures/7556300/8fc4fd51_original.jpg?im_w=720', 'https://a0.muscache.com/im/pictures/7556273/e076ad1d_original.jpg?im_w=720', 'https://a0.muscache.com/im/pictures/7556201/c6d7a0b5_original.jpg?im_w=720', 'https://a0.muscache.com/im/pictures/7556169/ba2cd99c_original.jpg?im_w=720', 'https://a0.muscache.com/im/pictures/7556670/94733211_original.jpg?im_w=720', 'https://a0.muscache.com/im/pictures/7556617/baf5f481_original.jpg?im_w=720', 'https://a0.muscache.com/im/pictures/7556021/34e12502_original.jpg?im_w=720', 'https://a0.muscache.com/im/pictures/7555968/a64e5a75_original.jpg?im_w=720']
//  isSuperhost
//  :
//  true
//  lat
//  :
//  28.5545
//  lng
//  :
//  77.19417
//  name
//  :
//  "Heritage Apt 3@ Hauz Khas Village"
//  persons
//  :
//  2
//  position
//  :
//  1
//  previewAmenities
//  :
//  (4) ['Air conditioning', 'Wifi', 'Kitchen', 'Washer']
//  price
//  :
//  {rate: 68, currency: 'USD', total: 68, priceItems: Array(3)}
//  rareFind
//  :
//  true
//  rating
//  :
//  4.89
//  reviewsCount
//  :
//  366
//  type
//  :
//  "Entire rental unit"
//  url
//  :
//  "https://www.airbnb.com/rooms/590041"
//  userId
//  :
//  2428122

/* <div class="house">
                <div class="house-img">
                    <img src="images/image-s3.png">
                </div>
                <div class="house-info">
                    <p>Private Villa in San Francisco</p>
                    <h3>Deluxe Queen Room With Street View</h3>
                    <p>1 Bedroom / 1 Bathroom / Wifi / Kitchen</p>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                    <i class="far fa-star"></i>
                    <div class="house-price">
                        <p>2 Guest</p>
                        <h4>$ 100 <span>/ day</span></h4>
                    </div>
                </div>
</div> */
