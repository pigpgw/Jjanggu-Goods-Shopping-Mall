const LocalStorageData = localStorage.getItem("cartItems");

const orderItemList = document.querySelector(".order-item-list");

let data = JSON.parse(LocalStorageData);

console.log("data", data);

function addCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

let totalPrice = 0;

if (data) {
    data.forEach(data => {
        const itemPriceWithCommas = addCommas(data.price * data.quantity);
        totalPrice += data.price * data.quantity;
        orderItemList.innerHTML += `<div class="item-container">
            <div class = "item-info">
                    <img class="item-img" src="${data.thumbnail}" alt="">
                    <p class="item-name">${data.name}</p>
            </div>
            <p class="item-count info">${data.quantity}</p>
            <p class="item-delval info">3,000</p>
            <p class="item-price hide info">${data.price}</p>
            <p class="item-price info">${itemPriceWithCommas}</p>
        </div>`
    });
}

const paymentBtn = document.querySelector(".payment-btn");
let printTotalPrice = addCommas(totalPrice + 3000);
console.log(printTotalPrice);
paymentBtn.innerHTML += `${printTotalPrice}원 결제하기`;


paymentBtn.addEventListener('click',() => {
    // const serverUrl = "http://localhost:3000/api/orders";

    // const token = "accessToken";

    // const requestOptions = {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Authorization": `Bearer ${token}`, // Set the Authorization header with the token
    //     },
    //     body: JSON.stringify(data), // Convert data to JSON format
    // };

    // fetch(serverUrl, requestOptions)
    //     .then((response) => {
    //         if (response.ok) {
    //             return response.json(); // Parse the response as JSON if necessary
    //         } else {
    //             throw new Error("Request failed");
    //         }
    //     })
    //     .then((data) => {
    //         // Handle the server's response data (if needed)
    //         console.log("Server response:", data);
    //     })
    //     .catch((error) => {
    //         // Handle any errors that occurred during the request
    //         console.error("Error:", error);
    //     });
    alert("구매가 완료되었습니다.");
})
document.addEventListener(
    "DOMContentLoaded",
    (window.onload = function (e) {
      const isLoggedIn = localStorage.getItem("isLoggedIn");
      if (isLoggedIn) {
        document.getElementById("loginBtn").style.display = "none";
        document.getElementById("logoutBtn").style.display = "unset";
        document.getElementById("mypage").style.display = "unset";
        document.getElementById("signupBtn").style.display = "none";
      }
    })
  );
