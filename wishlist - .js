<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+material-icons+outlined"
    />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
      rel="stylesheet"
    />
<<<<
    <style>
      body {
        font-family: AdihausDIN, Helvetica, Arial, sans-serif;
      }

      /* ------------------------------------nav bar indegration--------start------------------ */
      * {
        padding: 0;
        margin: 0;
        /* font-family: AdihausDIN, Helvetica, Arial, sans-serif; */
      }
      nav {
        display: flex;
        flex-direction: column;
      }
      a > p:hover {
        color: black;
      }
      a:hover {
        cursor: pointer;
        text-decoration: underline;
        background-color: rgb(236, 235, 235);
        transition: 0.266s;
        /* padding-right: 1.5px; */
        /* padding-left: .5px; */
        color: black;
      }
      a {
        text-decoration-line: none;
        color: black;
        /* padding: 2.5px; */
        /* background-color: white; */
      }

      header {
        z-index: 99;
        position: fixed;
        width: 101%;
        background-color: white;
        margin: 0;
        padding: 0;
        margin-left: -0.5%;
        margin-bottom: 300px;
        border-radius: 10px;

        transition: top 0.8s;
        box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
          rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
      }
      #navDiv1 > a:hover {
        text-decoration-line: underline;
      }
      #navDiv1 > a {
        text-decoration-style: none;
        color: white;
        text-decoration-line: none;
        padding: 4px;
        font-size: smaller;
        font-weight: bolder;
        letter-spacing: 2px;
        font-size: 11px;
      }
      #navDiv1 {
        padding: 4.5px;
        display: flex;
        flex-direction: row;
        background-color: black;
        color: white;
        justify-content: space-around;
      }
      #navDiv2 {
        width: 100%;
        margin: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      #navDiv2 > a > img {
        width: 70px;
        height: 47px;
        padding: 16px;
      }
      /* #fav1 {
  display: inline-block;
  vertical-align: top;
} */
      #fav {
        display: flex;
        flex-direction: row;
        margin-top: 50px;
        gap: 45px;
        margin-left: 50px;
        transition: top 1s;
      }
      #bag {
        display: flex;
        flex-direction: column;
        margin-left: 50px;
      }
      #bag1,
      #bag2 {
        display: flex;
        flex-direction: row;
        gap: 10px;
      }

      #bag1 {
        margin-top: 5px;
      }
      #bag2 {
        margin-top: 20px;
      }
      #mainContent {
        /* margin-top: 300px; */
        padding-top: 200px;
        width: 20%;
      }
      #secNav {
        z-index: 99;
        height: 300px;
        width: 100%;
        position: fixed;
        background-color: rgb(255, 255, 255);
        margin-top: 110px;
        display: none;
        /* display: block; */
        transition: top 0.8s;
      }
      #navdiva {
        padding: 30px;
        grid-area: a;
        border: rgb(235, 235, 235) solid 0.5px;
        padding-left: 150px;
        background-color: white;
      }
      #navdivb {
        padding: 30px;
        grid-area: b;
        display: flex;
        gap: 140px;
        border: rgb(228, 228, 228) solid 0.5px;
        padding-left: 100px;
        background-color: white;
      }
      #navdivc {
        grid-area: c;
        border: rgb(231, 231, 231) solid 0.5px;
        padding-left: 150px;
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px,
          rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px,
          rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
      }
      #navdivd {
        grid-area: d;
        border: rgb(231, 231, 231) solid 0.5px;
        padding-left: 96px;
        display: flex;
        gap: 175px;
        background-color: white;
        row-gap: 40px;
        box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px,
          rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px,
          rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
      }

      #secNav {
        /* transition: 2s; */
        display: grid;
        grid-template-areas: "a b b b b" "a b b b b" "a b b b b" "a b b b b" "c d d d d";
        display: none;
        /* border: blue solid; */
      }
      .navhighlight {
        /* font-size: 20px; */
        font-weight: bolder;
        margin: 10px;
        margin-left: 0;
      }
      #navdiva > div {
        padding: 4px;
      }
      #navdivb > div > div {
        padding: 4px;
      }

      input {
        vertical-align: top;
      }
      /* ------------------------------------nav bar indegration--------end------------------ */

      .outerdiv {
        width: 85%;
        margin: auto;
        display: flex;
        font-family: AdihausDIN, Helvetica, Arial, sans-serif;
      }
      .div1 {
        width: 75%;
        height: 100%;
        padding-left: 10px;
      }
      .div2 {
        width: 24%;
        height: 100%;
      }
      .div2_1 {
        width: 90%;
        height: 45%;
        margin: auto;
        text-align: left;
      }
      .div2_1 > a {
        color: black;
        background-color: white;
        font-size: 16px;
        line-height: 15px;
      }
      .a {
        height: 20px;
        margin-bottom: 10px;
      }
      .a:hover {
        background-color: black;
        color: white;
        text-decoration: underline;
      }
      h3 {
        font-weight: bolder;
        font-size: 20px;
        margin-top: -1px;
        margin-bottom: 20px;
      }
      h1 {
        font-family: AdineuePRO, Helvetica, Arial, sans-serif;
      }
      #items {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
      }
      #box3 {
        width: 100%;
        height: 300px;
        margin: auto;
      }
      .box3-1 {
        width: 80%;
        height: 100%;
        margin: auto;
        display: flex;
      }
      .tablebox {
        width: 17%;
        height: 80%;
        margin-left: 20px;
        margin-top: 30px;
      }
      ul {
        list-style-type: none;
      }
      ul > li:nth-child(1) {
        font-weight: bolder;
        font-size: 18px;
        margin-bottom: 10px;
      }
      li > a {
        font-size: 12px;
        text-decoration: none;
      }
      li > a:hover {
        text-decoration: underline;
      }
      .a1 {
        height: 20px;
        font-size: 12px;
        margin-bottom: 5px;
      }
      .a1:hover {
        text-decoration: underline;
      }
      #box4 {
        width: 100%;
        height: 120px;
        margin: auto;
        background-color: #363738;
      }
      .box4-1 {
        width: 70%;
        height: 100%;
        margin: auto;
      }
      .box4-2a,
      .box4-2b {
        width: 100%;
        height: 48%;
      }
      .box4-2a {
        display: flex;
      }
      .box4-2a-1 {
        width: 10%;
        height: 40%;
        text-align: center;
        margin-top: 20px;
        display: flex;
      }
      .box4-2a-1 > button {
        border: 0;
        color: #bdbec1;
        font-size: 12px;
        background-color: #363738;
      }
      .box4-2a-2 {
        width: 40%;
        height: 20%;
        justify-content: right;
        display: flex;
        margin-top: 20px;
        /* float: right; */
        margin-left: 48%;
        gap: 20px;
        font-size: 12px;
        color: #bdbec1;
      }
      .img > img {
        width: 15px;
        margin-left: 10px;
      }
      .box4-2b-a {
        width: 30%;
        font-size: 12px;
        margin-top: 20px;
        margin-left: 10px;
        color: #bdbec1;
      }
      .line {
        width: 1px;
        height: 15px;
        background-color: #bdbec1;
      }
      .box4-2a-2 > div > a {
        font-size: 12px;
        color: grey;
        text-decoration: none;
      }
      #imgbox {
        width: 70%;
        height: 65%;
      }
      #img {
        width: 100%;
        height: 100%;
      }
      #imgdiv {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        width: 90%;
        /* margin-left: 10px; */
        /* border: 1px solid red; */
      }
      #maindiv {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        width: 30%;
        font-size: 13px;
        line-height: 17px;
      }
      #btn {
        background-color: aqua;
        /* width: 30px; */
        font-size: 16px;
        height: 30px;
        border: none;
        background-color: rgb(0, 0, 0);
        color: white;
        margin-top: -20px;
        margin-bottom: 10px;
      }
      /* @media screen and (min-width: 0px) and (max-width: 499px) {
        .div1 {
          width: 75%;
          height: 100%;
          padding-left: 10px;
        }
        .div2 {
          width: 24%;
          height: 100%;
        }
      } */
    </style>
  </head>
  <body>
    <!-- ------------------------------------------------------------------------------------------------ -->
    <header id="header">
      <nav id="navbar">
        <div id="navDiv1">
          <a href="#"><p>EXTRA 15% OFF*</p></a
          ><a href="#"><p>10% CASHBACK ON HDFC CREDIT/DEBIT CARDS</p></a
          ><a href="#"><p>FREE RETURNS</p></a>
        </div>
        <div id="navDiv2">
          <a href=""><img src="Adidas_Logo.svg.png" alt="" /></a>
          <div id="fav">
            <a id="men"><p>MEN</p></a>
            <a id="women"><p>WOMEN</p></a>
            <a id="kid"><p>KIDS</p></a>
            <a id="sports"><p>SPORTS</p></a>
            <a id="brands"><p>BRANDS</p></a>
            <a id="colle"><p>COLLECTIONS</p></a>
            <a id="outlet"><p>OUTLET</p></a>
          </div>
          <div id="bag">
            <div id="bag1">
              <a href=""><p>help</p></a>
              <a href=""><p>return</p></a>
              <a href=""><p>order tracking</p></a>
              <a href=""><p>sign up</p></a>
              <a href=""><p>log in</p></a>
            </div>
            <div id="bag2">
              <input type="text" />
              <a href=""><span class="material-icons-outlined">search</span></a>
              <a href=""
                ><span class="material-icons-outlined"> favorite </span></a
              >
              <!-- <a href=""
              ><span id="fav" class="material-icons-outlined">
                favorite_border
              </span></a
            > -->
              <a href=""
                ><span class="material-icons-outlined"> shopping_bag </span></a
              >
            </div>
          </div>
        </div>
      </nav>
    </header>
    <div id="secNav">
      <div id="navdiva">
        <div class="navhighlight">Featured</div>
        <div class="nava"><a href="#">New Arrival</a></div>
        <div class="nava"><a href="#">Best Seller</a></div>
        <div class="nava"><a href="#">Original</a></div>
        <div class="nava"><a href="#">Manchester Utd</a></div>
        <div class="nava"><a href="#">Ulta Boost</a></div>
        <div class="nava"><a href="#">4DFWD</a></div>
        <div class="nava"><a href="#">Stan Smith</a></div>
        <div class="nava"><a href="#">Outlet</a></div>
        <!-- <div class="nava">FootBall</div> -->
        <!-- <div class="nava">FootBall</div> -->
        <!-- <div class="nava">FootBall</div> -->
      </div>
      <div id="navdivb">
        <div>
          <div class="navhighlight">Footwear</div>
          <div class="navb"><a href="#">Running</a></div>
          <div class="navb"><a href="#">Sneakers</a></div>
          <div class="navb"><a href="#">Originals</a></div>
          <div class="navb"><a href="#">Slides and Sandals</a></div>
          <div class="navb"><a href="#">FootBall</a></div>
          <div class="navb"><a href="#">Gym & Training</a></div>
          <div class="navb"><a href="#">Basket Ball</a></div>
          <div class="navb"><a href="#">Tennis</a></div>
          <div class="navb"><a href="#">Skates</a></div>
          <div class="navb"><a href="#">Swim</a></div>
          <div class="navb"><a href="#">Cricket</a></div>
          <!-- <div class="navb"><a href="#"></a></div> -->
        </div>
        <div>
          <div class="navhighlight">Clothing</div>
          <div class="navb2"><a href="#">T-shirts</a></div>
          <div class="navb2"><a href="#">Joggers & Track Pants</a></div>
          <div class="navb2"><a href="#">Hoodies</a></div>
          <div class="navb2"><a href="#">Jackets</a></div>
          <div class="navb2"><a href="#">Football Jersy</a></div>
          <div class="navb2"><a href="#">Originals</a></div>
          <div class="navb2"><a href="#">Tracksuit</a></div>
          <div class="navb2"><a href="#">Shorts</a></div>
          <div class="navb2"><a href="#">Swimmers</a></div>
          <!-- <div class="navb2"><a href="#"></a></div> -->
          <!-- <div class="navb2"><a href="#"></a></div> -->
        </div>
        <div>
          <div class="navhighlight">Accessories</div>
          <div class="navb3"><a href="#">Face Cover</a></div>
          <div class="navb3"><a href="#">Socks</a></div>
          <div class="navb3"><a href="#">All Bags</a></div>
          <div class="navb3"><a href="#">BackPacks</a></div>
          <div class="navb3"><a href="#">Gym & Training</a></div>
          <div class="navb3"><a href="#">Head Wear</a></div>
          <div class="navb3"><a href="#">Gloves</a></div>
          <!-- <div class="navb3"><a href="#"></a></div>
          <div class="navb3"><a href="#"></a></div>
          <div class="navb3"><a href="#"></a></div>
          <div class="navb3"><a href="#"></a></div> -->
        </div>
        <div>
          <div class="navhighlight">Sports</div>
          <div class="navb4"><a href="#">Running</a></div>
          <div class="navb4"><a href="#">Gym & Training</a></div>
          <div class="navb4"><a href="#">Football</a></div>
          <div class="navb4"><a href="#">Tennis</a></div>
          <div class="navb4"><a href="#">Basket Ball</a></div>
          <div class="navb4"><a href="#">Hiking & outdoor</a></div>
          <div class="navb4"><a href="#">Swim</a></div>
          <div class="navb4"><a href="#">Skate Boarding</a></div>
          <!-- <div class="navb4"><a href="#"></a></div>
          <div class="navb4"><a href="#"></a></div>
          <div class="navb4"><a href="#"></a></div> -->
        </div>
      </div>
      <div id="navdivc">
        <div class="navhighlight"><a href="#">All Featured</a></div>
      </div>
      <div id="navdivd">
        <div class="navhighlight"><a href="#">All Footwear</a></div>
        <div class="navhighlight"><a href="#">All Clothing</a></div>
        <div class="navhighlight"><a href="#">All Accessories</a></div>
        <div class="navhighlight"><a href="#">All Products</a></div>
      </div>
    </div>

    <!-- ------------------------------------------------------------------------------------------------ -->
    <div style="padding-top: 120px" class="outerdiv">
      <div class="div1">
        <h1>MY WISHLIST</h1>
        <div id="total"></div>
        <div id="p"></div>
        <div id="items"></div>
      </div>
      <div class="div2">
        <div class="div2_1">
          <h3>NEED HELP?</h3>
          <a href=""> <div class="a">Products</div></a>
          <a href=""><div class="a">Ordiring & Payments</div></a>
          <a href=""> <div class="a">Delivery</div></a>
          <a href=""> <div class="a">Promotions & Vochers</div></a>
          <a href=""> <div class="a">Return & Refund</div></a>
          <a href=""> <div class="a">Account & Newsletter</div></a>
          <a href=""> <div class="a">Company information</div></a>
        </div>
      </div>
    </div>
    <div id="box3">
      <div class="box3-1">
        <div class="tablebox">
          <ul>
            <li>PRODUCTS</li>
            <li>
              <a> <div class="a1">Foot Wear</div></a>
            </li>
            <li>
              <a> <div class="a1">Clothing</div></a>
            </li>
            <li>
              <a> <div class="a1">Accessories</div></a>
            </li>
            <li>&ensp;</li>
            <li>
              <a> <div class="a1">Outlet-sales</div></a>
            </li>
            <li>
              <a> <div class="a1">New Arrivals</div></a>
            </li>
            <li>
              <a> <div class="a1">Top Sellers</div></a>
            </li>
          </ul>
        </div>
        <div class="tablebox">
          <ul>
            <li>SPORTS</li>
            <li>
              <a> <div class="a1">Running</div></a>
            </li>
            <li>
              <a> <div class="a1">Football</div></a>
            </li>
            <li>
              <a> <div class="a1">Gym/Training</div></a>
            </li>
            <li>
              <a> <div class="a1">Tennis</div></a>
            </li>
            <li>
              <a> <div class="a1">Outdoor</div></a>
            </li>
            <li>
              <a> <div class="a1">Basketball</div></a>
            </li>
            <li>
              <a> <div class="a1">Swimming</div></a>
            </li>
            <li>
              <a> <div class="a1">Skateboarding</div></a>
            </li>
          </ul>
        </div>
        <div class="tablebox">
          <ul>
            <li>COLLECTIONS</li>
            <li>
              <a> <div class="a1">Ultraboost</div></a>
            </li>
            <li>
              <a> <div class="a1">Superstar</div></a>
            </li>
            <li>
              <a> <div class="a1">NMD</div></a>
            </li>
            <li>
              <a> <div class="a1">Stan Smith</div></a>
            </li>
            <li>
              <a> <div class="a1">Sustainability</div></a>
            </li>
            <li>
              <a> <div class="a1">Predator</div></a>
            </li>
            <li>
              <a> <div class="a1">Parley</div></a>
            </li>
            <li>
              <a> <div class="a1">adicolor</div></a>
            </li>
          </ul>
        </div>
        <div class="tablebox">
          <ul>
            <li>SUPPORT</li>
            <li>
              <a> <div class="a1">Help</div></a>
            </li>
            <li>
              <a> <div class="a1">Customer Services</div></a>
            </li>
            <li>
              <a> <div class="a1">Returns & Exchanges</div></a>
            </li>
            <li>
              <a> <div class="a1">Shipping</div></a>
            </li>
            <li>
              <a> <div class="a1">Order Tracker</div></a>
            </li>
            <li>
              <a> <div class="a1">Store Locator</div></a>
            </li>
            <li>
              <a> <div class="a1">Running Shoe Finder</div></a>
            </li>
            <li>
              <a> <div class="a1">Bra Fit Guide</div></a>
            </li>
          </ul>
        </div>
        <div class="tablebox">
          <ul>
            <li>COMPANY INFO</li>
            <li>
              <a> <div class="a1">About Us</div></a>
            </li>
            <li>
              <a> <div class="a1">adidas stories</div></a>
            </li>
            <li>
              <a> <div class="a1">adidas Apps</div></a>
            </li>
            <li>
              <a> <div class="a1">Entity Details</div></a>
            </li>
            <li>
              <a> <div class="a1">Press</div></a>
            </li>
            <li>
              <a> <div class="a1">Careers</div></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div id="box4">
      <div class="box4-1">
        <div class="box4-2a">
          <div class="box4-2a-1">
            <div class="img">
              <img
                src="https://adl-foundation.adidas.com/flags/1-0-0/in.svg"
                alt=""
              />
            </div>

            <button>India</button>
          </div>
          <div class="box4-2a-2">
            <div>
              <a href="">Privacy Policy</a>
            </div>
            <div class="line"></div>
            <div>
              <a href="">Terms and Conditions</a>
            </div>
            <div class="line"></div>
            <div>
              <a href="">Coockies</a>
            </div>
          </div>
        </div>
        <div class="box4-2b">
          <div class="box4-2b-a">©2021 adidas India Marketing Pvt. Ltd</div>
        </div>
      </div>
    </div>
  </body>
</html>
<script>
  var wishlist = JSON.parse(localStorage.getItem("favlocaldata")) || [];
  var pro2data = [];
  if (!pro2data) {
    localStorage.setItem("localdataaa", JSON.stringify(pro2data));
  }
  var wish = document.getElementById("items");
  console.log(wishlist);
  displayItems(wishlist);
  function displayItems(wishlist) {
    wish.innerHTML = "";
    wishlist.map(function (item, index) {
      var maindiv = document.createElement("div");
      maindiv.setAttribute("id", "maindiv");
      var imgdiv = document.createElement("div");
      imgdiv.setAttribute("id", "imgdiv");
      var imgbox = document.createElement("div");
      imgbox.setAttribute("id", "imgbox");
      var img = document.createElement("img");
      img.setAttribute("src", item.img);
      img.setAttribute("id", "img");
      console.log(item.img);
      var p1 = document.createElement("span");
      p1.textContent = item.mrp;
      var p2 = document.createElement("span");
      p2.textContent = item.brand;
      var p3 = document.createElement("span");
      p3.textContent = item.type;
      var btn = document.createElement("button");
      btn.textContent = "Remove";
      btn.setAttribute("id", "btn");
      btn.addEventListener("click", fav);

      imgbox.append(img);
      imgdiv.append(imgbox, p1, p2, p3);
      maindiv.append(imgdiv, btn);
      wish.append(maindiv);

      img.addEventListener("click", function (index) {
        console.log("maindiv", item);
        pro2data.push(item);
        localStorage.setItem("localdataaa", JSON.stringify(pro2data));
        //alert("")
        window.location.href = "product2Page.html";
      });
    });
  }
  // function fav(event) {
  //   event.target.parentNode.remove();
  // }
  //------------------------------------------------
  function fav(item, index) {
    console.log("fav");
    wishlist.splice(index, 1);
    //sum = sum - item.mrp;
    //count = count - 1;
    //bill();
    // document.getElementById(
    //  "Total"
    // ).innerHTML = `TOTAL (${count} items) <b>₹${sum}<b/>`;
    localStorage.setItem("favlocaldata", JSON.stringify(wishlist));
    //display(cartList);
    // console.log(cartList);
    displayItems(wishlist);
    // event.target.parentNode.remove();
  }

  //---------------------------------------------

  if (wishlist.length > 1 || wishlist.length == 0) {
    document.querySelector(
      "#total"
    ).innerHTML = `<p>${wishlist.length} ITEMS</p>`;
  } else {
    document.querySelector(
      "#total"
    ).innerHTML = `<p>${wishlist.length} ITEM</p>`;
  }
  if (wishlist.length == 0) {
    document.querySelector(
      "#p"
    ).innerHTML = `<p>You haven't saved any items to your wishlist yet. Start shopping and add your favorite items to your wishlist.</p>`;
    console.log("here");
  }

  //-----------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------
  // mouse enter and exit event
  var secnav = document.getElementById("secNav");
  var men = document.getElementById("men");
  var women = document.getElementById("women");
  var kids = document.getElementById("kid");
  var sports = document.getElementById("sports");
  var coll = document.getElementById("colle");
  var brand = document.getElementById("brands");
  var outlet = document.getElementById("outlet");

  women.addEventListener("mouseleave", function () {
    // var change = document.getElementById("navdivc");
    // change.innerHTML =
    //   '<div class="navhighlight"><a href="">All Men</a> </div>';
    secnav.style.display = "none";
  });
  kids.addEventListener("mouseleave", function () {
    secnav.style.display = "none";
  });
  sports.addEventListener("mouseleave", function () {
    secnav.style.display = "none";
  });
  coll.addEventListener("mouseleave", function () {
    secnav.style.display = "none";
  });
  brand.addEventListener("mouseleave", function () {
    secnav.style.display = "none";
  });
  outlet.addEventListener("mouseleave", function () {
    secnav.style.display = "none";
  });
  women.addEventListener("mouseenter", function () {
    var change = document.getElementById("navdivc");
    change.innerHTML =
      '<div class="navhighlight"><a href="#">All products</a> </div>';
    secnav.style.display = "grid";
  });
  kids.addEventListener("mouseenter", function () {
    secnav.style.display = "grid";
  });
  sports.addEventListener("mouseenter", function () {
    secnav.style.display = "grid";
  });
  coll.addEventListener("mouseenter", function () {
    secnav.style.display = "grid";
  });
  brand.addEventListener("mouseenter", function () {
    secnav.style.display = "grid";
  });
  outlet.addEventListener("mouseenter", function () {
    secnav.style.display = "grid";
  });
  men.addEventListener("mouseenter", function () {
    showmenu();
  });
  men.addEventListener("mouseleave", function () {
    secnav.style.display = "none";
  });
  function showmenu() {
    //console.log("here");
    secnav.style.display = "grid";
  }
  secnav.addEventListener("mouseenter", function () {
    secnav.style.display = "grid";
  });
  secnav.addEventListener("mouseleave", function () {
    secnav.style.display = "none";
  });
  // ------------------------------------------------------------------------------------

  //   var prevScrollpos = window.pageYOffset;
  //   window.onscroll = function () {
  //     var currentScrollPos = window.pageYOffset;
  //     if (prevScrollpos > currentScrollPos) {
  //       document.getElementById("secNav").style.top = "0";
  //     } else {
  //       document.getElementById("secNav").style.top = "-130px";
  //     }
  //     prevScrollpos = currentScrollPos;
  //   };

  var prevScrollpo = window.pageYOffset;
  // var prevScrollpo = 33.599998474121094;
  console.log(window.pageYOffset);
  console.log(prevScrollpo);
  window.onscroll = function () {
    console.log(window.pageYOffset);
    console.log(prevScrollpo);
    var currentScrollPo = window.pageYOffset;
    if (prevScrollpo > 37) {
      if (prevScrollpo > currentScrollPo) {
        document.getElementById("header").style.top = "0";
        document.getElementById("secNav").style.top = "0";
      } else {
        document.getElementById("header").style.top = "-115px";
        document.getElementById("secNav").style.top = "-115px";
      }
    }
    prevScrollpo = currentScrollPo;
  };
</script>
