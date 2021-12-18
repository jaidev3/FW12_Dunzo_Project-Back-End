function navbar() {
  return ` 
    <div class="header_box">
            <div class="header_left">
                <a href="./index.html">
                    <img class="w-32 h-7" src="https://resources.dunzo.com/web-assets/prod/_next/static/images/logo-4d2d81aefcf296bc100d9edc114c2ea5.png" alt=""/>
                </a>
                <div class="svg_location_div">
                <div class="svg_location_box">
                <div class="svg_location_data" id="open-map-modal">
                    <svg viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg_location" ><path fill-rule="evenodd" clip-rule="evenodd" d="M16 10C16 14.4183 8 22 8 22C8 22 0 14.4183 0 10C0 5.58172 3.58172 2 8 2C12.4183 2 16 5.58172 16 10ZM11 10C11 11.6569 9.65685 13 8 13C6.34315 13 5 11.6569 5 10C5 8.34315 6.34315 7 8 7C9.65685 7 11 8.34315 11 10Z" fill="#00B37A"></path></svg>
                    <p class="svg_location_paragraph">Set Location</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" height="8px" width="36px" class="sc-64ptou-0 iKjNnb jqmf1i-22 eiozVK"><path d="M12.594 4L8 8.962 3.406 4 2 5.519 8 12l6-6.481L12.594 4z" class="svg_location_drop"></path></svg>
                </div>
            </div>
                </div>
            </div>
            <div class="header_middle">
            <a href="#" class="header_middle_anchor">
            <button class="partner_button">Dunzo for Partners</button>
        </a>
        <div class="header_middle_business">
            <button class="business_button">
                Business with Dunzo 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" height="12px" width="12px" class="sc-64ptou-0 jclYdo"><path d="M12.594 4L8 8.962 3.406 4 2 5.519 8 12l6-6.481L12.594 4z" class="business_button_svg"></path></svg>
            </button>
        </div>
            </div>
            <div class="header_right">
                    <a href="/search" class="search_button">
                        <div class="search_svg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="search_icon_svg">
                                <path d="M11 19.023a8 8 0 10.046-16 8 8 0 00-.046 16zM20.994 21.052l-4.337-4.363" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                             </svg>
                             <p class="search_paragraph">Search</p>
                        </div>
                    </a>
                    <a href="checkout.html" class="cart_button">
                        <div class="cart_svg">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22" height="24px" width="28px" stroke="none !important" class="sc-64ptou-0 hYXypH"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.63157 5.40623H21.8884L19.357 14.5507C19.2687 14.8695 18.9157 15.1454 18.6035 15.1454H9.58173C9.26462 15.1454 8.8854 14.865 8.7848 14.555L5.41478 4.16956C5.03411 2.99646 3.83391 1.77142 2.68401 1.38221L1.62819 1.02483C1.37735 0.939928 1.10694 1.07977 1.0242 1.33718C0.941461 1.59459 1.07773 1.87209 1.32857 1.95699L2.3844 2.31436C3.2477 2.60658 4.22223 3.60127 4.50727 4.47967L7.87729 14.8651C8.10804 15.5762 8.85293 16.1269 9.58173 16.1269H18.6035C19.3448 16.1269 20.0724 15.5584 20.2771 14.8189L22.9815 5.04956C23.0683 4.73621 22.8389 4.42467 22.5215 4.42467H8.63157C8.36744 4.42467 8.15332 4.6444 8.15332 4.91545C8.15332 5.1865 8.36744 5.40623 8.63157 5.40623ZM9.10644 21C8.05592 21 7.20358 20.1253 7.20358 19.0473C7.20358 17.9693 8.05592 17.0946 9.10644 17.0946C10.1569 17.0946 11.0093 17.9693 11.0093 19.0473C11.0093 20.1253 10.1569 21 9.10644 21ZM19.5535 21C18.503 21 17.6507 20.1253 17.6507 19.0473C17.6507 17.9693 18.503 17.0946 19.5535 17.0946C20.604 17.0946 21.4564 17.9693 21.4564 19.0473C21.4564 20.1253 20.604 21 19.5535 21ZM19.5535 20.0184C20.0758 20.0184 20.4999 19.5832 20.4999 19.0473C20.4999 18.5114 20.0758 18.0762 19.5535 18.0762C19.0313 18.0762 18.6072 18.5114 18.6072 19.0473C18.6072 19.5832 19.0313 20.0184 19.5535 20.0184ZM10.0528 19.0473C10.0528 19.5832 9.62869 20.0184 9.10644 20.0184C8.58419 20.0184 8.16008 19.5832 8.16008 19.0473C8.16008 18.5114 8.58419 18.0762 9.10644 18.0762C9.62869 18.0762 10.0528 18.5114 10.0528 19.0473Z"></path><path d="M21.8884 5.40623L22.1294 5.47293L22.217 5.15623H21.8884V5.40623ZM19.357 14.5507L19.1161 14.484V14.484L19.357 14.5507ZM8.7848 14.555L9.02259 14.4778L8.7848 14.555ZM5.41478 4.16956L5.65257 4.0924L5.41478 4.16956ZM2.68401 1.38221L2.60386 1.61901L2.68401 1.38221ZM1.62819 1.02483L1.70834 0.788029L1.62819 1.02483ZM1.0242 1.33718L1.26221 1.41368L1.0242 1.33718ZM1.32857 1.95699L1.40873 1.72019H1.40873L1.32857 1.95699ZM2.3844 2.31436L2.30424 2.55117L2.3844 2.31436ZM4.50727 4.47967L4.26947 4.55684L4.50727 4.47967ZM7.87729 14.8651L7.63949 14.9423L7.87729 14.8651ZM20.2771 14.8189L20.0362 14.7522L20.2771 14.8189ZM22.9815 5.04956L23.2224 5.11626V5.11626L22.9815 5.04956ZM21.8884 5.15623H8.63157V5.65623H21.8884V5.15623ZM19.5979 14.6174L22.1294 5.47293L21.6475 5.33953L19.1161 14.484L19.5979 14.6174ZM18.6035 15.3954C18.8295 15.3954 19.0487 15.2979 19.2188 15.1641C19.3897 15.0296 19.5367 14.8385 19.5979 14.6174L19.1161 14.484C19.089 14.5817 19.0154 14.6879 18.9096 14.7711C18.8032 14.8549 18.6897 14.8954 18.6035 14.8954V15.3954ZM9.58173 15.3954H18.6035V14.8954H9.58173V15.3954ZM8.547 14.6321C8.61743 14.8492 8.77643 15.0364 8.95331 15.1674C9.12972 15.298 9.3548 15.3954 9.58173 15.3954V14.8954C9.49155 14.8954 9.36846 14.8526 9.25083 14.7655C9.13368 14.6788 9.05277 14.5708 9.02259 14.4778L8.547 14.6321ZM5.17698 4.24673L8.547 14.6321L9.02259 14.4778L5.65257 4.0924L5.17698 4.24673ZM2.60386 1.61901C3.13253 1.79796 3.68781 2.17566 4.15928 2.65689C4.63058 3.13795 5.0013 3.70532 5.17698 4.24673L5.65257 4.0924C5.44759 3.4607 5.02788 2.82901 4.51644 2.30697C4.00516 1.7851 3.38539 1.35568 2.76417 1.1454L2.60386 1.61901ZM1.54804 1.26163L2.60386 1.61901L2.76417 1.1454L1.70834 0.788029L1.54804 1.26163ZM1.26221 1.41368C1.30377 1.28436 1.43413 1.22308 1.54804 1.26163L1.70834 0.788029C1.32057 0.656778 0.910097 0.875186 0.786191 1.26068L1.26221 1.41368ZM1.40873 1.72019C1.29176 1.6806 1.21979 1.54565 1.26221 1.41368L0.786191 1.26068C0.663134 1.64353 0.86371 2.06358 1.24842 2.19379L1.40873 1.72019ZM2.46455 2.07756L1.40873 1.72019L1.24842 2.19379L2.30424 2.55117L2.46455 2.07756ZM4.74506 4.40251C4.58718 3.91597 4.24639 3.41556 3.84122 3.0022C3.43624 2.58903 2.94459 2.24005 2.46455 2.07756L2.30424 2.55117C2.68751 2.68089 3.11478 2.97536 3.48415 3.3522C3.85333 3.72884 4.14232 4.16498 4.26947 4.55684L4.74506 4.40251ZM8.11508 14.7879L4.74506 4.40251L4.26947 4.55684L7.63949 14.9423L8.11508 14.7879ZM9.58173 15.8769C8.96479 15.8769 8.31349 15.3994 8.11508 14.7879L7.63949 14.9423C7.90258 15.753 8.74107 16.3769 9.58173 16.3769V15.8769ZM18.6035 15.8769H9.58173V16.3769H18.6035V15.8769ZM20.0362 14.7522C19.86 15.3887 19.227 15.8769 18.6035 15.8769V16.3769C19.4626 16.3769 20.2848 15.7281 20.518 14.8856L20.0362 14.7522ZM22.7406 4.98287L20.0362 14.7522L20.518 14.8856L23.2224 5.11626L22.7406 4.98287ZM22.5215 4.67467C22.665 4.67467 22.7856 4.82035 22.7406 4.98287L23.2224 5.11626C23.3509 4.65206 23.0128 4.17467 22.5215 4.17467V4.67467ZM8.63157 4.67467H22.5215V4.17467H8.63157V4.67467ZM8.40332 4.91545C8.40332 4.77634 8.51156 4.67467 8.63157 4.67467V4.17467C8.22331 4.17467 7.90332 4.51246 7.90332 4.91545H8.40332ZM8.63157 5.15623C8.51156 5.15623 8.40332 5.05456 8.40332 4.91545H7.90332C7.90332 5.31844 8.22331 5.65623 8.63157 5.65623V5.15623ZM6.95358 19.0473C6.95358 20.2573 7.9118 21.25 9.10644 21.25V20.75C8.20005 20.75 7.45358 19.9934 7.45358 19.0473H6.95358ZM9.10644 16.8446C7.9118 16.8446 6.95358 17.8373 6.95358 19.0473H7.45358C7.45358 18.1012 8.20005 17.3446 9.10644 17.3446V16.8446ZM11.2593 19.0473C11.2593 17.8373 10.3011 16.8446 9.10644 16.8446V17.3446C10.0128 17.3446 10.7593 18.1012 10.7593 19.0473H11.2593ZM9.10644 21.25C10.3011 21.25 11.2593 20.2573 11.2593 19.0473H10.7593C10.7593 19.9934 10.0128 20.75 9.10644 20.75V21.25ZM17.4007 19.0473C17.4007 20.2573 18.3589 21.25 19.5535 21.25V20.75C18.6471 20.75 17.9007 19.9934 17.9007 19.0473H17.4007ZM19.5535 16.8446C18.3589 16.8446 17.4007 17.8373 17.4007 19.0473H17.9007C17.9007 18.1012 18.6471 17.3446 19.5535 17.3446V16.8446ZM21.7064 19.0473C21.7064 17.8373 20.7482 16.8446 19.5535 16.8446V17.3446C20.4599 17.3446 21.2064 18.1012 21.2064 19.0473H21.7064ZM19.5535 21.25C20.7482 21.25 21.7064 20.2573 21.7064 19.0473H21.2064C21.2064 19.9934 20.4599 20.75 19.5535 20.75V21.25ZM20.2499 19.0473C20.2499 19.4513 19.9317 19.7684 19.5535 19.7684V20.2684C20.2199 20.2684 20.7499 19.7152 20.7499 19.0473H20.2499ZM19.5535 18.3262C19.9317 18.3262 20.2499 18.6433 20.2499 19.0473H20.7499C20.7499 18.3794 20.2199 17.8262 19.5535 17.8262V18.3262ZM18.8572 19.0473C18.8572 18.6433 19.1754 18.3262 19.5535 18.3262V17.8262C18.8872 17.8262 18.3572 18.3794 18.3572 19.0473H18.8572ZM19.5535 19.7684C19.1754 19.7684 18.8572 19.4513 18.8572 19.0473H18.3572C18.3572 19.7152 18.8872 20.2684 19.5535 20.2684V19.7684ZM9.10644 20.2684C9.77281 20.2684 10.3028 19.7152 10.3028 19.0473H9.80279C9.80279 19.4513 9.48456 19.7684 9.10644 19.7684V20.2684ZM7.91008 19.0473C7.91008 19.7152 8.44006 20.2684 9.10644 20.2684V19.7684C8.72831 19.7684 8.41008 19.4513 8.41008 19.0473H7.91008ZM9.10644 17.8262C8.44006 17.8262 7.91008 18.3794 7.91008 19.0473H8.41008C8.41008 18.6433 8.72831 18.3262 9.10644 18.3262V17.8262ZM10.3028 19.0473C10.3028 18.3794 9.77281 17.8262 9.10644 17.8262V18.3262C9.48456 18.3262 9.80279 18.6433 9.80279 19.0473H10.3028Z"></path></svg>
                             <p class="cart_paragraph">Cart</p>
                        </div>
                    </a>
                    <div class="signin">
                        <p id="open_modal" class="signin_button ">Sign in</p>
                    </div>
            </div>



           
            <div id="modal-container">
              <div id="modal">
                <div id="top-section">
                  <div id="close-modal">
                    <img class="h-1 w-1 place-self-end"
                      src="https://thumbs.dreamstime.com/b/basic-rgb-156262164.jpg"
                      alt="close-modal"
                    />
                  </div>
                 
                </div>

               <img class="h-16 w-16" src="https://resources.dunzo.com/web-assets/prod/_next/static/images/signin-icon-cb6e6a706f01b84896e60235a2392ac9.png"/>
                <h1 class="text-xl font-semibold font-['Open_Sans'] mt-6" >Sign in</h1>
                <p>Get started with Dunzo</p><br>
                <p class="text-gray-500 mb-2"><span class="text-red-500">*</span>Enter Your Mobile No.</p>
                <div class="flex flex-row border-solid border-gray-300 border rounded-lg"> <div class="w-10 text-center mt-3">+91</div>
                <input type="tel" placeholder="Mobile number" class="w-full h-12 rounded-lg" id="inpmob"/></div>
               
                <p id="otp"></p><br>
                <input type="tel" placeholder="Entre OTP" class="w-full border-solid rounded-xl w-12 border-gray-300 border invisible " id="inpotp"></input>
                <br><br>

                <button id="btnmob" class="w-full bg-green-400 h-14 rounded-full text-white">Send OTP</button>
                <button id="btnsignin" class="w-full bg-green-300 invisible">Continue</button>
                
                
              </div>
            </div>



        </div>
        <div id="map-modal-container">
            <div id="map-modal">
                <div id="map-top-section">
                <div><h2>Add your location</h2></div>
                <div id="map-close-modal">
                    <img
                    src="https://thumbs.dreamstime.com/b/basic-rgb-156262164.jpg"
                    alt="close-modal"
                    />
                </div>

                </div>
                <div id="search-box">
                <div id="search-icon">
                    <img
                    src="https://static.thenounproject.com/png/3134345-200.png"
                    alt=""
                    />
                </div>
                <div>
                    <input
                    id="area-name"
                    type="search"
                    placeholder="Search for an area, location name"
                    />
                </div>
                </div>
                <div id="current-location">
                <div id="gps-icon">
                    <img
                    src="https://icon-library.com/images/icon-gps/icon-gps-14.jpg"
                    alt=""
                    />
                </div>
                <div><h4>Use current location</h4></div>
                </div>
                <div style="width: 100%">
                <iframe
                    width="100%"
                    height="200"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    src="https://maps.google.com/maps?width=100%25&amp;height=200&amp;hl=en&amp;q=pune+(Your%20Business%20Name)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    ><a href="https://www.mapsdirections.info/en/measure-map-radius/"
                    >Radius distance map</a
                    ></iframe
                >
                </div>

                <div id="search-result">
                <div id="idle-img">
                    <!-- <img
                    src="https://resources.dunzo.com/web-assets/prod/_next/static/images/partner_placeholder-f479db944bcaa4a7cc8451f617179d82.png"
                    alt=""
                    /> -->
                </div>
                </div>
            </div>
        </div>`;
}

export default navbar;
