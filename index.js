const inputElement=document.getElementById('form');
const LocationEle = document.getElementById('location');
const checkin= document.getElementById('check-in');
const checkout=document.getElementById('check-out');
const guest =document.getElementById('Guest');


inputElement.addEventListener("submit",(event)=>{
    event.preventDefault();
    document.location='http://127.0.0.1:5501/listing.html';
        localStorage.setItem('location',LocationEle.value)
        localStorage.setItem('CheckIn',checkin.value)
        localStorage.setItem('CheckOut',checkout.value)
        localStorage.setItem('Guest',guest.value)
})
