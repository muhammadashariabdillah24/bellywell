function getInitialWidth() {
  let currentWidth = window.innerWidth;
  navigationResponsive(currentWidth);
  mostFavoriteMenu(currentWidth);
}

function getResizeWidth() {
  window.addEventListener("resize", function () {
    let currentWidth = window.innerWidth;
    navigationResponsive(currentWidth);
    mostFavoriteMenu(currentWidth);
  });
}

function isFieldFilled(inputElement, fieldName) {
  if (inputElement.value.trim() === "") {
    alert(`${fieldName} tidak boleh kosong!`);
    return false;
  }
  return true;
}
function dropdown(event) {
  event.preventDefault(); // Mencegah navigasi default
}

function mostFavoriteMenu(currentWidth) {
  const productPreview4AllProduct = document.getElementById(
    "product-preview-4-all-product-home"
  );

  if (productPreview4AllProduct) {
    console.log(currentWidth);

    if (currentWidth >= 600) {
      // Unslick jika sudah di-inisialisasi
      if ($(".product-preview-4-all-product").hasClass("slick-initialized")) {
        $(".product-preview-4-all-product").slick("unslick");
      }
    } else {
      // Inisialisasi Slick hanya jika belum di-inisialisasi
      if (!$(".product-preview-4-all-product").hasClass("slick-initialized")) {
        $(".product-preview-4-all-product").slick({
          swipe: true,
          arrows: false,
          touchMove: true,
          slidesToShow: 6,
          slidesToScroll: 3,
          autoplay: true,
          autoplaySpeed: 2000,
          edgeFriction: 0.15,
          responsive: [
            {
              breakpoint: 600,
              settings: {
                arrows: false,
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 300,
              settings: {
                arrows: false,
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        });
      }
    }
  }
}
function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
}

// function formatText(text, maxLineLength = 500) {
//   // # = UNTUK MEMBUAT TITLE
//   // Jika bertemu dengan titik maka teks akan dibuatkan baris baru

//   const words = text.split("");
//   let title = "";
//   let desc = "";
//   let formattedText = "";
//   let currentLine = "";

//   words.forEach((word, index) => {
//     if (title === word) {
//       formattedText += currentLine.trim() + "\n";
//       currentLine = "";
//       title = "";
//     }

//     if (desc === word) {
//       formattedText += currentLine.trim() + "\n\n";
//       currentLine = "";
//       desc = "";
//     }

//     if ((currentLine + word).length > maxLineLength) {
//       formattedText += currentLine.trim() + "\n";
//       currentLine = "";
//     }

//     if (currentLine[currentLine.length - 1] === ".") {
//       formattedText += currentLine.trim() + "\n";
//       currentLine = "";
//     }

//     if (word === "#") {
//       title = "#";
//     }

//     if (word === "&") {
//       desc = "&";
//     }

//     if (word !== "#" && word !== "&") {
//       currentLine += word + "";
//     }
//   });

//   formattedText += currentLine.trim();
//   return formattedText;
// }

function formatText(text, maxLineLength = 500) {
  // # = UNTUK MEMBUAT TITLE
  // Jika bertemu dengan titik maka teks akan dibuatkan baris baru

  const words = text.split("");
  let formattedText = "";
  let currentLine = "";

  words.forEach((word) => {
    if ((currentLine + word).length > maxLineLength) {
      formattedText += currentLine.trim() + "\n";
      currentLine = "";
    }

    currentLine += word + "";
  });

  formattedText += currentLine.trim();
  return formattedText;
}

function navigationResponsive(currentWidth) {
  const navbarLeftWrapperMobile = document.getElementById(
    "navbar-left-wrapper-mobile"
  );
  const navbarCenterWrapperMobile = document.getElementById(
    "navbar-center-wrapper-mobile"
  );
  const navbarRightWrapperMobile = document.getElementById(
    "navbar-right-wrapper-mobile"
  );

  const navbarLeftWrapper = document.getElementById("navbar-left-wrapper");
  const navbarCenterWrapper = document.getElementById("navbar-center-wrapper");
  const navbarRightWrapper = document.getElementById("navbar-right-wrapper");

  if (currentWidth <= 1000) {
    navbarLeftWrapperMobile.style.display = "flex";
    navbarCenterWrapperMobile.style.display = "flex";
    navbarRightWrapperMobile.style.display = "flex";

    navbarLeftWrapper.style.display = "none";
    navbarCenterWrapper.style.display = "none";
    navbarRightWrapper.style.display = "none";
  } else {
    navbarLeftWrapperMobile.style.display = "none";
    navbarCenterWrapperMobile.style.display = "none";
    navbarRightWrapperMobile.style.display = "none";

    navbarLeftWrapper.style.display = "flex";
    navbarCenterWrapper.style.display = "flex";
    navbarRightWrapper.style.display = "flex";
  }
}

function toggleFaqsContent(element) {
  const note = element;
  const noteContent = element.nextElementSibling;
  if (noteContent.style.maxHeight) {
    noteContent.style.maxHeight = null;
    note.classList.remove("open");
  } else {
    noteContent.style.maxHeight = noteContent.scrollHeight + "px";
    note.classList.add("open");
  }
}

function toggleDrawerMenuContent(element) {
  const itemContent = element;
  const drawerContent = element.nextElementSibling;
  if (drawerContent.style.maxHeight) {
    drawerContent.style.maxHeight = null;
    itemContent.classList.remove("open");
  } else {
    drawerContent.style.maxHeight = drawerContent.scrollHeight + "px";
    itemContent.classList.add("open");
  }
}

function navbarSticky() {
  const navbarContainer = document.getElementById("navbar-container");

  window.addEventListener("scroll", () => {
    console.log("TINGGI : " + window.scrollY);

    if (window.scrollY > 70) {
      navbarContainer.classList.add("sticky");
    } else {
      navbarContainer.classList.remove("sticky");
    }
  });
}

function toggleDrawer() {
  const drawer = document.getElementById("drawer-menu-wrapper");

  if (drawer.style.width === "250px") {
    drawer.style.width = "0";
  } else {
    drawer.style.width = "250px";
  }
}

function toggleDrawerCart() {
  const drawer = document.getElementById("cart-drawer");

  if (drawer.style.width === "500px") {
    drawer.style.width = "0";
  } else {
    drawer.style.width = "500px";
  }
}

function showSuitableForDescription(i) {
  const suitableDescriptionShow = document.querySelectorAll(
    ".product-preview-2 .product-preview-2-description-show-suitablefor-wrapper"
  );

  if (suitableDescriptionShow.length > 0) {
    suitableDescriptionShow.forEach((_, index) => {
      suitableDescriptionShow[index].classList.remove(
        "product-preview-2-description-show-suitablefor-wrapper"
      );

      suitableDescriptionShow[index].classList.add(
        "product-preview-2-description-hide-suitablefor-wrapper"
      );
    });
  }

  const suitableDescriptionHide = document.querySelectorAll(
    ".product-preview-2 .product-preview-2-description-hide-suitablefor-wrapper"
  );

  suitableDescriptionHide[i].classList.remove(
    "product-preview-2-description-hide-suitablefor-wrapper"
  );

  suitableDescriptionHide[i].classList.add(
    "product-preview-2-description-show-suitablefor-wrapper"
  );
}

function formatRupiah(amount) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
}

document.addEventListener("DOMContentLoaded", () => {
  const noWa = "6289529630122";
  // Proteksi karakter yang tidak diperbolehkan untuk semua inputan bertipe number
  document.addEventListener("input", (event) => {
    if (event.target.type === "number") {
      const value = event.target.value;
      event.target.value = value.replace(/[^0-9]/g, "");
    }
  });

  // Get the button element
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // Show the button when scrolling past 100px
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
  });

  // Scroll to the top when the button is clicked
  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  const cartTotalContainer = document.getElementById("cart-total-container");
  const badgeId = document.getElementById("badge");
  const priceTagId = document.getElementById("price-tag");
  if (cartTotalContainer) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    badgeId.textContent = cart.length;

    const subtotal = cart.reduce((acc, durr) => acc + durr.totalPrice, 0);
    priceTagId.textContent = formatRupiah(subtotal);

    const shoppingCart = document.getElementById("shopping-cart");

    cartTotalContainer.addEventListener("click", () => {
      shoppingCart.classList.add("open");

      const cartFooter = document.getElementById("cart-footer");
      const cartItems = document.getElementById("cart-items");

      cartItems.innerHTML = "";
      cartFooter.innerHTML = "";

      if (cart && cart.length > 0) {
        // Buat elemen paragraf untuk subtotal
        const subtotalParagraph = document.createElement("p");
        const strongSubtotal = document.createElement("strong");
        strongSubtotal.textContent = "Subtotal: ";
        const finalSubtotal = document.createElement("span");
        finalSubtotal.id = "subtotal";
        finalSubtotal.className = "subtotal";

        // Tambahkan elemen strong dan span ke paragraf
        subtotalParagraph.appendChild(strongSubtotal);
        subtotalParagraph.appendChild(finalSubtotal);

        // Tambahkan elemen paragraf ke cart-footer
        cartFooter.appendChild(subtotalParagraph);

        // Buat elemen div untuk action-buttons
        const actionButtonsDiv = document.createElement("div");
        actionButtonsDiv.className = "action-buttons";

        // Buat tombol "View Cart"
        const viewCartButton = document.createElement("button");
        viewCartButton.id = "view-cart";
        viewCartButton.className = "view-cart";
        const viewCartText = document.createElement("span");
        viewCartText.className = "view-cart-text";
        viewCartText.textContent = "View Cart";

        // Tambahkan span ke tombol "View Cart"
        viewCartButton.appendChild(viewCartText);

        // Tambahkan tombol "View Cart" ke action-buttons
        actionButtonsDiv.appendChild(viewCartButton);

        // Buat tombol "Checkout"
        const checkoutButton = document.createElement("button");
        checkoutButton.id = "checkout";
        checkoutButton.className = "checkout";
        const checkoutText = document.createElement("span");
        checkoutText.className = "checkout-text";
        checkoutText.textContent = "Checkout";
        const buttonLoaderDiv = document.createElement("div");
        buttonLoaderDiv.className = "button-loader";
        buttonLoaderDiv.style.display = "none";

        // Tambahkan span dan loader ke tombol "Checkout"
        checkoutButton.appendChild(checkoutText);
        checkoutButton.appendChild(buttonLoaderDiv);

        // Tambahkan tombol "Checkout" ke action-buttons
        actionButtonsDiv.appendChild(checkoutButton);

        // Tambahkan action-buttons ke cart-footer
        cartFooter.appendChild(actionButtonsDiv);

        let filterCart = [];

        // Menggabungkan produk berdasarkan key unik (termasuk duration)
        filterCart = cart.reduce((acc, item) => {
          // Cari apakah item dengan key yang sama sudah ada
          if (item && item.duration) {
            const existingItem = acc.find(
              (product) =>
                product.title === item.title &&
                product.image === item.image &&
                product.mealType === item.mealType &&
                product.duration === item.duration
            );

            if (existingItem) {
              console.log("ADA");
              // Jika sudah ada, tambahkan kuantitas dan totalPrice
              existingItem.quantity += item.quantity;
              existingItem.totalPrice += item.quantity * item.price;
            } else {
              console.log("GA ADA");
              // Jika belum ada, tambahkan item baru
              acc.push({
                title: item.title,
                image: item.image,
                mealType: item.mealType,
                duration: item.duration,
                price: item.price,
                quantity: item.quantity,
                totalPrice: item.quantity * item.price,
              });
            }

            return acc;
          } else {
            const existingItem = acc.find(
              (product) =>
                product.title === item.title &&
                product.image === item.image &&
                product.mealType === item.mealType
            );

            if (existingItem) {
              console.log("ADA");

              // Jika sudah ada, tambahkan kuantitas dan totalPrice
              existingItem.quantity += item.quantity;
              existingItem.totalPrice += item.quantity * item.price;
            } else {
              console.log("GA ADA");

              // Jika belum ada, tambahkan item baru
              acc.push({
                title: item.title,
                image: item.image,
                mealType: item.mealType,
                price: item.price,
                quantity: item.quantity,
                totalPrice: item.quantity * item.price,
              });
            }

            return acc;
          }
        }, []);

        localStorage.setItem("cart", JSON.stringify(filterCart));

        filterCart.forEach((item) => {
          const cartItem = document.createElement("div");
          cartItem.classList.add("cart-item");

          const itemImg = document.createElement("img");
          itemImg.src = item.image;

          const itemDetails = document.createElement("div");
          itemDetails.classList.add("item-details");

          const itemTitle = document.createElement("h3");
          itemTitle.textContent = item.title;

          console.log(item.mealType);

          itemDetails.appendChild(itemTitle);
          if (
            item &&
            item.mealType &&
            (item.mealType.toLocaleLowerCase() === "lunch" ||
              item.mealType.toLocaleLowerCase() === "dinner")
          ) {
            const mealTypeParagraph = document.createElement("p");
            mealTypeParagraph.innerHTML = `
              <strong>Lunch / Dinner :</strong> ${item.mealType}
              `;

            itemDetails.appendChild(mealTypeParagraph);
          }

          if (
            item &&
            item.mealType &&
            item.mealType.toLocaleLowerCase() === "duration"
          ) {
            const durationParagraph = document.createElement("p");
            durationParagraph.innerHTML = `
            <strong>Duration :</strong> ${item.duration}
            `;
            itemDetails.appendChild(durationParagraph);
          }

          if (
            item &&
            item.mealType &&
            item.mealType.toLocaleLowerCase().includes("packages")
          ) {
            const durationParagraph = document.createElement("p");
            durationParagraph.innerHTML = `
            <strong>Packages :</strong> ${item.mealType}
            `;
            itemDetails.appendChild(durationParagraph);
          }

          if (item && item.price && item.quantity) {
            const durationParagraph = document.createElement("p");
            durationParagraph.innerHTML = `
            <strong>${item.quantity}</strong> x <strong>${formatRupiah(
              item.price
            )}</strong>
            `;
            itemDetails.appendChild(durationParagraph);
          }

          if (item && item.totalPrice) {
            const durationParagraph = document.createElement("p");
            durationParagraph.innerHTML = `
            <strong>${formatRupiah(item.totalPrice)}</strong>
            `;
            itemDetails.appendChild(durationParagraph);
          }

          const itemRemove = document.createElement("button");
          itemRemove.classList.add("remove-btn");
          itemRemove.textContent = "×";

          cartItem.appendChild(itemImg);
          cartItem.appendChild(itemDetails);
          cartItem.appendChild(itemRemove);

          cartItems.appendChild(cartItem);
        });

        const subtotal = filterCart.reduce(
          (acc, durr) => acc + durr.totalPrice,
          0
        );
        finalSubtotal.textContent = formatRupiah(subtotal);

        // const checkoutButton = document.getElementById("checkout");

        checkoutButton.addEventListener("click", () => {
          window.location.href =
            "https://muhammadashariabdillah24.github.io/checkout";
        });
      } else {
        cartItems.innerHTML = `
        <p class='lato-regular' style='font-size: 20px;text-align:center;'><strong>Your shopping cart is empty!</strong></p>`;
      }
    });

    const closeDrawersButton = document.getElementById("close-btn");

    closeDrawersButton.addEventListener("click", () => {
      shoppingCart.classList.remove("open");
    });
  }

  const productCateringPackages = [
    {
      title: "1. Paket Healthy Catering",
      image: "healthy_catering_packages.jpeg",
      description: `
        Healthy package adalah  
Katering sehat yang cocok untuk semua orang yang ingin menjalani gaya hidup sehat.\nDengan variasi menu lezat yang rendah lemak.\nPaket dari Bellywell memberikan makanan yang tinggi protein, rendah lemak, dan moderat karbohidrat dengan total kalori sekitar 400 – 500 calories.\n\nCatatan Mengenai Delivery\n1. WEEKDAY (Monday to Friday) delivery ONLY. No delivery on weekends.\n2. FREE Delivery untuk Wilayah Jakarta, Depok, Tangerang, dan Bekasi.\n3. Pengiriman Lunch AND Dinner dilakukan bersamaan di jam 11-12.30.\n4. Penundaan pengiriman dan perubahan alamat pengiriman dapat dilakukan H-1 max jam 2 siang (setelah jam tsb tidak dapat melakukan perubahan).\n5. Apabila tidak langsung dikonsumi, makanan HARUS disimpan di dalam kulkas / fridge.\n\nCara Berlangganan\n1. Beli paket yang diinginkan.\n2. Setelah payment dilakukan, maka anda akan dihubungi oleh admin kami untuk konfirmasi tanggal dan detail pengiriman.\n3. Apabila payment dilakukan di atas jam 2 siang, maka anda akan dihubungi di hari berikutnya.\n4. Apabila anda tidak mendapatkan konfirmasi dari admin kami, mohon menghubungi admin kami di IG atau nomer whatsapp kami (ada di link bio di Instagram).

        `,
      options: [
        {
          options: [
            {
              name: "Meal Type",
              data: [{ type: "Lunch" }, { type: "Dinner" }],
            },
            {
              name: "Duration",
              data: [
                { name: "Lunch", type: "1 Minggu", price: 400000 },
                {
                  name: "Lunch",
                  type: "2 Minggu",
                  price: 725000,
                  discount: 30,
                },
                {
                  name: "Lunch",
                  type: "1 Bulan",
                  price: 1400000,
                  discount: 30,
                },
                { name: "Dinner", type: "1 Minggu", price: 600000 },
                {
                  name: "Dinner",
                  type: "2 Minggu",
                  price: 995000,
                  discount: 30,
                },
                {
                  name: "Dinner",
                  type: "1 Bulan",
                  price: 16900000,
                  discount: 30,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "2. Paket Slimming",
      image: "sliming_catering_packages.jpeg",
      description: `
        Paket Slimming adalah paket yang diperuntukkan untuk menurunkan kadar lemak dalam tubuh atau menurunkan berat badan.\n\nPaket Slimming dari Bellywell memberikan makanan yang tinggi protein, rendah lemak, dan rendah karbohidrat dengan total kalori sekitar 350 – 450 calories.\n\nCatatan Mengenai Delivery\n\n1. WEEKDAY (Monday to Friday) delivery ONLY. No delivery on weekends.\n2. FREE Delivery untuk Wilayah Jakarta, Depok, Tangerang, dan Bekasi.\n3. Pengiriman Lunch AND Dinner dilakukan bersamaan di jam 11-12.30.\n4. Penundaan pengiriman dan perubahan alamat pengiriman dapat dilakukan H-1 max jam 2 siang (setelah jam tsb tidak dapat melakukan perubahan).\n5. Apabila tidak langsung dikonsumi, makanan HARUS disimpan di dalam kulkas / fridge.\n\nCara Berlangganan\n\n1. Beli paket yang diinginkan.\n2. Setelah payment dilakukan, maka anda akan dihubungi oleh admin kami untuk konfirmasi tanggal dan detail pengiriman.\n3. Apabila payment dilakukan di atas jam 2 siang, maka anda akan dihubungi di hari berikutnya.\n4. Apabila anda tidak mendapatkan konfirmasi dari admin kami, mohon menghubungi admin kami di IG atau nomer whatsapp kami (ada di link bio di Instagram).

        `,
      options: [
        {
          options: [
            {
              name: "Meal Type",
              data: [{ type: "Lunch" }, { type: "Dinner" }],
            },
            {
              name: "Duration",
              data: [
                { name: "Lunch", type: "1 Minggu", price: 400000 },
                {
                  name: "Lunch",
                  type: "2 Minggu",
                  price: 725000,
                  discount: 30,
                },
                {
                  name: "Lunch",
                  type: "1 Bulan",
                  price: 1400000,
                  discount: 30,
                },
                { name: "Dinner", type: "1 Minggu", price: 600000 },
                {
                  name: "Dinner",
                  type: "2 Minggu",
                  price: 995000,
                  discount: 30,
                },
                {
                  name: "Dinner",
                  type: "1 Bulan",
                  price: 16900000,
                  discount: 30,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "3. Paket Muscle Growth",
      image: "muscle_growth_catering_packages.jpeg",
      description: `Muscle Growth Package dari Bellywell\n* Bellywell catering adalah catering rendah lemak dan rendah kalori yang tetap mempertahankan citarasa makanan yang sesungguhnya.\nBellywell menggunakan bahan – bahan pilihan dan mengolahnya tanpa mengurangi rasa namun rendah kalori dan lemak.\n* Paket Muscle Growth adalah paket yang diperuntukkan untuk menaikkan lean massa otot tanpa menambah kadar lemak dalam tubuh.\n
* Paket Muscle Growth dari Bellywell memberikan makanan yang sangat tinggi protein, rendah lemak, dan moderat karbohidrat dengan total kalori sekitar 550 – 700 calories.\n\n
Catatan Mengenai Delivery :\n
1. WEEKDAY (Monday to Friday) delivery ONLY. No delivery on weekends.\n
2. FREE Delivery untuk Wilayah Jakarta, Depok, Tangerang, dan Bekasi.\n
3. Pengiriman Lunch AND Dinner dilakukan bersamaan di jam 11-12.30.\n
4. Penundaan pengiriman dan perubahan alamat pengiriman dapat dilakukan H-1 max jam 2 siang (setelah jam tsb tidak dapat melakukan perubahan).\n
5. Apabila tidak langsung dikonsumi, makanan HARUS disimpan di dalam kulkas / fridge.\n\n
Cara Berlangganan :\n
1. Beli paket yang diinginkan.\n
2. Setelah payment dilakukan, maka anda akan dihubungi oleh admin kami untuk konfirmasi tanggal dan detail pengiriman.\n
3. Apabila payment dilakukan di atas jam 2 siang, maka anda akan dihubungi di hari berikutnya.\n
4. Apabila anda tidak mendapatkan konfirmasi dari admin kami, mohon menghubungi admin kami di IG atau nomer whatsapp kami (ada di link bio di Instagram).

        `,
      options: [
        {
          options: [
            {
              name: "Meal Type",
              data: [{ type: "Lunch" }, { type: "Dinner" }],
            },
            {
              name: "Duration",
              data: [
                { name: "Lunch", type: "1 Minggu", price: 400000 },
                {
                  name: "Lunch",
                  type: "2 Minggu",
                  price: 725000,
                  discount: 30,
                },
                {
                  name: "Lunch",
                  type: "1 Bulan",
                  price: 1400000,
                  discount: 30,
                },
                { name: "Dinner", type: "1 Minggu", price: 600000 },
                {
                  name: "Dinner",
                  type: "2 Minggu",
                  price: 995000,
                  discount: 30,
                },
                {
                  name: "Dinner",
                  type: "1 Bulan",
                  price: 16900000,
                  discount: 30,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "4. Paket GERD",
      image: "gerd_catering_packages.jpeg",
      description: `
        GERD Package dari Bellywell\n
* Bellywell catering adalah catering sehat, rendah lemak dan rendah kalori yang tetap mempertahankan citarasa makanan yang sesungguhnya. Bellywell menggunakan bahan – bahan pilihan dan mengolahnya tanpa mengurangi rasa namun rendah kalori dan lemak.\n
* Paket GERD adalah paket yang diperuntukkan untuk membantu meredakan dan mencegah gejala GERD dengan pilihan extra bone broth yang sangat ampuh dalam mengobati dan mencegah masalah GERD.\n
* GERD meals adalah meals yang tinggi protein, rendah lemak, dan moderat karbohidrat dengan total kalori sekitar 400 – 500 calories.\n\n
Catatan Mengenai Delivery\n
1. WEEKDAY (Monday to Friday) delivery ONLY. No delivery on weekends.\n
2. FREE Delivery untuk Wilayah Jakarta, Depok, Tangerang, dan Bekasi.\n
3. Pengiriman Lunch AND Dinner dilakukan bersamaan di jam 11:00-13:00.\n
4. Penundaan pengiriman dan perubahan alamat pengiriman dapat dilakukan H-1 max jam 2 siang (setelah jam tsb tidak dapat melakukan perubahan).\n
5. Apabila tidak langsung dikonsumi, makanan HARUS disimpan di dalam kulkas / fridge.\n\n
Cara Berlangganan\n
1. Beli paket yang diinginkan.\n
2. Setelah payment dilakukan, maka anda akan dihubungi oleh admin kami untuk konfirmasi tanggal dan detail pengiriman.\n
3. Apabila payment dilakukan di atas jam 2 siang, maka anda akan dihubungi di hari berikutnya.\n
4. Apabila anda tidak mendapatkan konfirmasi dari admin kami, mohon menghubungi admin kami di IG atau nomer whatsapp kami (ada di link bio di Instagram).

        `,
      options: [
        {
          options: [
            {
              name: "Meal Type",
              data: [{ type: "Lunch" }, { type: "Dinner" }],
            },
            {
              name: "Duration",
              data: [
                { name: "Lunch", type: "1 Minggu", price: 400000 },
                {
                  name: "Lunch",
                  type: "2 Minggu",
                  price: 725000,
                  discount: 30,
                },
                {
                  name: "Lunch",
                  type: "1 Bulan",
                  price: 1400000,
                  discount: 30,
                },
                { name: "Dinner", type: "1 Minggu", price: 600000 },
                {
                  name: "Dinner",
                  type: "2 Minggu",
                  price: 995000,
                  discount: 30,
                },
                {
                  name: "Dinner",
                  type: "1 Bulan",
                  price: 16900000,
                  discount: 30,
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  const productMealPrepPackages = [
    {
      title: "A New Mealprep Packages",
      image: "A_New_Mealprep_Packages.jpg",
      description: `New Mealprep Packages\n
Tersedia dalam paket Healthy, Slimming, Gerd Friendly, dan Breakfast Mealprep!\n
- Dikirim dalam paket 5 dalam keadaan FROZEN.\n
- Tahan 1 bulan di dalam FREEZER.\n
- Harga termasuk IDR 20,000 ongkir ke seluruh Jadetabek.\n\n
Menu:\n\n
**Healthy**\n
- Sumac Butter Rice with Chicken Herbs\n
- Spicy Korean Chicken\n
- Chicken Nanban\n
- Nasi Goreng Thailand (Khao Pad)\n
- Thai Beef Basil\n\n
**Slimming**\n
- Sumac Butter Rice with Chicken Herbs\n
- Spicy Korean Chicken\n
- Chicken Nanban\n
- Nasi Goreng Thailand (Khao Pad)\n
- Thai Beef Basil\n\n
**Protein**\n
- Sumac Butter Rice with Chicken Herbs\n
- Spicy Korean Chicken\n
- Chicken Nanban\n
- Nasi Goreng Thailand (Khao Pad)\n
- Thai Beef Basil
`,
      options: [
        {
          options: [
            {
              name: "Meal Type",
              data: [{ type: "Lunch" }, { type: "Dinner" }],
            },
            {
              name: "Packages",
              data: [
                { name: "Packages 1", type: "Packages 1", price: 400000 },
                {
                  name: "Packages 2",
                  type: "Packages 2",
                  price: 725000,
                  discount: 30,
                },
                {
                  name: "Packages 3",
                  type: "Packages 3",
                  price: 1400000,
                  discount: 30,
                },
                { name: "Packages 4", type: "Packages 4", price: 600000 },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Slimming Mealprep Packages",
      image: "Slimming_Mealprep_Packages.jpg",
      description: `**Slimming Meal Prep Packages**\n
Harga termasuk IDR 20,000 ongkir Jadetabek\n
\n
- Paket 5 meals / 10 meals\n
- Menggunakan Shirataki Rice\n
- Dirancang untuk membantu menurunkan berat badan\n
\n
**Apa itu Meal Prep?**\n
Meal Prep adalah konsep merencanakan dan menyiapkan makanan dalam jumlah banyak untuk disimpan dan dikonsumsi dalam kurun waktu biasanya seminggu. Tujuannya adalah menghemat waktu dan tenaga, terutama untuk meal prep makanan sehat yang terkontrol porsi dan kalorinya. Hal ini membantu mencapai goal tertentu seperti hidup sehat, weight loss, atau muscle growth.\n
\n
**Apa yang dimaksud dengan Slimming Meal Prep dari Bellywell?**\n
Slimming Meal Prep adalah makanan sehat siap saji dari Bellywell yang dirancang khusus untuk membantu menurunkan berat badan. Makanan ini dipaket agar aman disimpan dalam jangka waktu tertentu di freezer dan hanya perlu dihangatkan selama 4 menit di microwave atau steamer.\n
\n
**Apa benefits dari Bellywell Meal Prep?**\n
1. Meal prep dari Bellywell terkontrol porsi dan kalori, serta tentunya super yummy.\n
2. Semua bahan makanan dimasak menggunakan fresh ingredients tanpa bahan pengawet dan perasa buatan.\n
3. Menghindari cheating makan junk food ketika tidak ada waktu untuk prep dan masak.\n
4. Dapat dikonsumsi kapanpun karena sudah ada stok dan hanya perlu dihangatkan di microwave atau steamer selama 4 menit.\n
5. Tidak perlu repot menunggu kurir kirim makanan setiap hari karena pengiriman hanya dilakukan seminggu sekali.\n
\n
**INFO NUTRITION FACTS**\n
Untuk informasi lebih lanjut, cek Nutrition Facts di IG @Bellywell.id atau website: [www.bellywell.id](http://www.bellywell.id).\n
\n
**INFO PENGIRIMAN**\n
Pengiriman daerah Jadetabek menggunakan Gosend / Grabsend untuk menjaga kesegaran makanan.\n
`,
      options: [
        {
          options: [
            {
              name: "Packages",
              data: [
                { name: "Packages 1", type: "Packages 1", price: 400000 },
                {
                  name: "Packages 2",
                  type: "Packages 2",
                  price: 725000,
                  discount: 30,
                },
                {
                  name: "Packages 3",
                  type: "Packages 3",
                  price: 1400000,
                  discount: 30,
                },
                { name: "Packages 4", type: "Packages 4", price: 600000 },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Healthy Mealprep Packages",
      image: "Healthy_Mealprep_Packages.jpg",
      description: `Bellywell Healthy Meal Prep Packages

Harga termasuk IDR 20K untuk Jadetabek

– Paket 5 meals (1 minggu lunch)
– Paket 10 meals (1 minggu lunch dinner)

Apa itu Meal Prep?
Meal Prep adalah konsep merencanakan dan menyiapkan makanan dalam jumlah banyak untuk disimpan dan dikonsumsi dalam kurun waktu biasanya seminggu untuk menghemat waktu dan tenaga. Dalam hal ini adalah meal prep makanan sehat yang terkontrol porsi dan kalorinya untuk mencapai goal tertentu seperti hidup sehat, weight loss, atau muscle growth.

Apakah yang dimaksud Meal Prep dari Bellywell?
Makanan sehat siap saji dari Bellywell yang dirancang khusus agar aman untuk disimpan dalam jangka waktu tertentu di freezer dan hanya perlu dihangatkan selama 4 menit di microwave atau steamer.

Apa benefits dari Bellywell Meal prep?
1. Meal prep dari Bellywell terkontrol porsi dan kalori dan tentunya super yummy.
2. Semua bahan makanan dimasak dengan menggunakan fresh ingredients tanpa menggunakan bahan pengawet dan perasa buatan.
3. Menghindari cheating makan junk food ketika tidak ada waktu untuk prep dan masak.
4. Dapat dikonsumsi kapanpun karena sudah ada stock dan hanya perlu dihangatkan di microwave atau steamer selama 4 menit.
5. Tidak perlu repot tunggu kurir kirim makanan setiap hari karena pengiriman hanya seminggu sekali

INFO NUTRITION FACTS:
Untuk info Nutrition facts bisa dicek di IG @Bellywell.id atau website: www.bellywell.id

INFO PENGIRIMAN:
Untuk pengiriman daerah Jadetabek hanya menggunakan Gosend / Grabsend untuk menjaga kesegaran makanan.`,
      options: [
        {
          options: [
            {
              name: "Packages",
              data: [
                { name: "Packages 1", type: "Packages 1", price: 400000 },
                {
                  name: "Packages 2",
                  type: "Packages 2",
                  price: 725000,
                  discount: 30,
                },
                {
                  name: "Packages 3",
                  type: "Packages 3",
                  price: 1400000,
                  discount: 30,
                },
                { name: "Packages 4", type: "Packages 4", price: 600000 },
              ],
            },
          ],
        },
      ],
    },
  ];

  // HOME
  const productContainer = document.querySelector(
    ".product-preview-4-all-product"
  );

  if (productContainer) {
    productCateringPackages.forEach((product, index) => {
      // Kumpulkan semua harga dari semua opsi dalam data
      const allPrices = product.options.flatMap((optionGroup) =>
        optionGroup.options.flatMap(
          (option) =>
            option.data
              .filter((item) => item.price) // Pastikan hanya item dengan properti price
              .map((item) => item.price) // Ambil nilai price
        )
      );

      // Hitung harga terkecil dan terbesar
      const minPrice = Math.min(...allPrices);
      const maxPrice = Math.max(...allPrices);

      // Buat elemen produk
      const productElement = document.createElement("div");
      productElement.classList.add("product-preview-4-img-product");

      // Tambahkan detail ke elemen produk
      productElement.innerHTML = `
      <img src="https://muhammadashariabdillah24.github.io/image/${
        product.image
      }" alt="Img Product" />
      <div class="product-preview-4-img-desc-product">
        <p class="lato-regular title-product">${product.title}</p>
        <p class="lato-regular desc-product">${formatText(
          truncateText(product.description, 200)
        )}</p>
        <p class="lato-bold price-product">${formatRupiah(
          minPrice
        )} – ${formatRupiah(maxPrice)}</p>
        <a href="https://wa.me/628111559898?text=Halo saya dari website dan ingin pesan paket makanan sehat Bellywell. Mohon informasinya lebih lanjut. terima kasih." 
           class="contact-wa-us-button lato-regular" target="_blank">Pesan sekarang</a>
      </div>
    `;

      // Tambahkan event listener untuk klik
      productElement.addEventListener("click", () => {
        const options = product.options[0].options;
        const detailProduct = {
          typeProduct: "Favorites",
          indexOfTypeProduct: index,
          title: product.title,
          image: `https://muhammadashariabdillah24.github.io/image/${product.image}`,
          description: product.description,
          minPrice: minPrice,
          maxPrice: maxPrice,
          options: options,
        };

        localStorage.setItem("detailProduct", JSON.stringify(detailProduct));
        window.location.href =
          "https://muhammadashariabdillah24.github.io/shop/detailproduct/";
      });

      // Tambahkan elemen ke container
      productContainer.appendChild(productElement);
    });
  }

  // SHOP => CATERING PACKAGES
  const cateringPackagesContainer = document.querySelector(
    ".catering-packages-0-all-product"
  );

  if (cateringPackagesContainer) {
    productCateringPackages.forEach((product, index) => {
      const allPrices = product.options.flatMap((optionGroup) =>
        optionGroup.options.flatMap((option) =>
          option.data.filter((item) => item.price).map((item) => item.price)
        )
      );

      const minPrice = Math.min(...allPrices);
      const maxPrice = Math.max(...allPrices);

      const cateringPackagesElement = document.createElement("div");
      cateringPackagesElement.classList.add("catering-packages-0-img-product");

      cateringPackagesElement.innerHTML = `
      <img src="https://muhammadashariabdillah24.github.io/image/${
        product.image
      }" alt="Img Product" />
      <div class="catering-packages-0-img-desc-product">
        <p class="lato-regular title-product">${product.title}</p>
        <p class="lato-regular desc-product">${formatText(
          truncateText(product.description, 200)
        )}</p>
        <p class="lato-bold price-product">${formatRupiah(
          minPrice
        )} – ${formatRupiah(maxPrice)}</p>
        <a href="https://wa.me/628111559898?text=Halo saya dari website dan ingin pesan paket makanan sehat Bellywell. Mohon informasinya lebih lanjut. terima kasih." 
           class="contact-wa-us-button lato-regular" target="_blank">Pesan sekarang</a>
      </div>
    `;

      cateringPackagesElement.addEventListener("click", () => {
        const options = product.options[0].options;
        const detailProduct = {
          typeProduct: "Catering Packages",
          indexOfTypeProduct: index,
          title: product.title,
          image: `https://muhammadashariabdillah24.github.io/image/${product.image}`,
          description: product.description,
          minPrice: minPrice,
          maxPrice: maxPrice,
          options: options,
        };

        localStorage.setItem("detailProduct", JSON.stringify(detailProduct));
        window.location.href =
          "https://muhammadashariabdillah24.github.io/shop/detailproduct/";
      });

      cateringPackagesContainer.appendChild(cateringPackagesElement);
    });
  }

  const mealprepPackagesContainer = document.querySelector(
    ".mealprep-packages-0-all-product"
  );

  if (mealprepPackagesContainer) {
    productMealPrepPackages.forEach((product, index) => {
      const allPrices = product.options.flatMap((optionGroup) =>
        optionGroup.options.flatMap((option) =>
          option.data.filter((item) => item.price).map((item) => item.price)
        )
      );

      const minPrice = Math.min(...allPrices);
      const maxPrice = Math.max(...allPrices);

      const mealprepPackagesElement = document.createElement("div");
      mealprepPackagesElement.classList.add("mealprep-packages-0-img-product");

      mealprepPackagesElement.innerHTML = `
      <img src="https://muhammadashariabdillah24.github.io/image/${
        product.image
      }" alt="Img Product" />
      <div class="mealprep-packages-0-img-desc-product">
        <p class="lato-regular title-product">${product.title}</p>
        <p class="lato-regular desc-product">${formatText(
          truncateText(product.description, 200)
        )}</p>
        <p class="lato-bold price-product">${formatRupiah(
          minPrice
        )} – ${formatRupiah(maxPrice)}</p>
        <a href="https://wa.me/628111559898?text=Halo saya dari website dan ingin pesan paket makanan sehat Bellywell. Mohon informasinya lebih lanjut. terima kasih." 
           class="contact-wa-us-button lato-regular" target="_blank">Pesan sekarang</a>
      </div>
    `;

      mealprepPackagesElement.addEventListener("click", () => {
        const options = product.options[0].options;
        const detailProduct = {
          typeProduct: "Mealprep Packages",
          indexOfTypeProduct: index,
          title: product.title,
          image: `https://muhammadashariabdillah24.github.io/image/${product.image}`,
          description: product.description,
          minPrice: minPrice,
          maxPrice: maxPrice,
          options: options,
        };

        localStorage.setItem("detailProduct", JSON.stringify(detailProduct));
        window.location.href =
          "https://muhammadashariabdillah24.github.io/shop/detailproduct/";
      });

      mealprepPackagesContainer.appendChild(mealprepPackagesElement);
    });
  }

  const detailProduct = JSON.parse(localStorage.getItem("detailProduct"));

  // SHOP => DETAIL PRODUCTS
  const detailProductsContainer = document.querySelector(
    ".detail-products-4-all-product"
  );

  if (detailProductsContainer) {
    let newDataProdutcs = [];
    let indexOfTypeProduct = 0;

    if (detailProduct && detailProduct.typeProduct === "Mealprep Packages") {
      newDataProdutcs = productCateringPackages;
      indexOfTypeProduct = detailProduct.indexOfTypeProduct;
    } else if (
      detailProduct &&
      detailProduct.typeProduct === "Catering Packages"
    ) {
      newDataProdutcs = productCateringPackages;
      indexOfTypeProduct = detailProduct.indexOfTypeProduct;
    } else if (detailProduct && detailProduct.typeProduct === "Favorites") {
      newDataProdutcs = productCateringPackages;
      indexOfTypeProduct = detailProduct.indexOfTypeProduct;
    }

    if (newDataProdutcs.length > 0) {
      newDataProdutcs
        .filter((_, idx) => idx != indexOfTypeProduct)
        .forEach((product, index) => {
          const allPrices = product.options.flatMap((optionGroup) =>
            optionGroup.options.flatMap((option) =>
              option.data.filter((item) => item.price).map((item) => item.price)
            )
          );

          const minPrice = Math.min(...allPrices);
          const maxPrice = Math.max(...allPrices);

          const detailProductsElement = document.createElement("div");
          detailProductsElement.classList.add("detail-products-4-img-product");

          detailProductsElement.innerHTML = `
      <img src="https://muhammadashariabdillah24.github.io/image/${
        product.image
      }" alt="Img Product" />
      <div class="detail-products-4-img-desc-product">
        <p class="lato-regular title-product">${product.title}</p>
        <p class="lato-regular desc-product">${formatText(
          truncateText(product.description, 200)
        )}</p>
        <p class="lato-bold price-product">${formatRupiah(
          minPrice
        )} – ${formatRupiah(maxPrice)}</p>
        <a href="https://wa.me/628111559898?text=Halo saya dari website dan ingin pesan paket makanan sehat Bellywell. Mohon informasinya lebih lanjut. terima kasih." 
           class="contact-wa-us-button lato-regular" target="_blank">Pesan sekarang</a>
      </div>
    `;

          detailProductsElement.addEventListener("click", () => {
            const options = product.options[0].options;
            const sameDetailProduct = {
              typeProduct: detailProduct.typeProduct,
              indexOfTypeProduct: index,
              title: product.title,
              image: `https://muhammadashariabdillah24.github.io/image/${product.image}`,
              description: product.description,
              minPrice: minPrice,
              maxPrice: maxPrice,
              options: options,
            };

            localStorage.setItem(
              "detailProduct",
              JSON.stringify(sameDetailProduct)
            );
            window.location.href =
              "https://muhammadashariabdillah24.github.io/shop/detailproduct/";
          });

          detailProductsContainer.appendChild(detailProductsElement);
        });
    }
  }

  const sectionOneDetailProduct = document.getElementById(
    "section-one-detail-product"
  );

  if (sectionOneDetailProduct) {
    if (detailProduct) {
      const zoomableImage = document.createElement("img");
      zoomableImage.className = "zoomable-image"; // Gunakan assignment untuk className
      zoomableImage.src = detailProduct.image; // Pastikan image tersedia
      zoomableImage.alt = "Catering Packages Banner";

      sectionOneDetailProduct.appendChild(zoomableImage);

      // Membuat tombol untuk memperlebar gambar
      const expandButton = document.createElement("button");
      expandButton.className = "expand-button";
      expandButton.innerText = "Zoom"; // Tombol akan diberi teks "Zoom"
      expandButton.style.display = "none"; // Sembunyikan tombol sampai mouse berada di gambar

      sectionOneDetailProduct.appendChild(expandButton);

      // Menampilkan tombol saat mouse berada di atas gambar
      zoomableImage.addEventListener("mouseenter", () => {
        expandButton.style.display = "block"; // Tampilkan tombol saat mouse di atas gambar
      });

      // Menyembunyikan tombol saat mouse keluar dari gambar
      zoomableImage.addEventListener("mouseleave", () => {
        expandButton.style.display = "none"; // Sembunyikan tombol saat mouse keluar
      });

      // Membuat backdrop untuk mode zoom
      const backdrop = document.createElement("div");
      backdrop.className = "backdrop";
      backdrop.style.display = "none"; // Sembunyikan backdrop secara default
      sectionOneDetailProduct.appendChild(backdrop);

      // Fungsi untuk memperbesar gambar saat tombol ditekan
      expandButton.addEventListener("click", () => {
        zoomableImage.style.position = "fixed"; // Menggunakan posisi fixed agar gambar tetap di layar
        zoomableImage.style.top = "50%"; // Tempatkan gambar di tengah layar
        zoomableImage.style.left = "50%";
        zoomableImage.style.zIndex = 9999;
        zoomableImage.style.transform = "translate(-50%, -50%)"; // Menyelaraskan gambar ke tengah
        zoomableImage.style.width = "100%"; // Ukuran gambar tidak terlalu besar (80% dari lebar layar)
        zoomableImage.style.height = "100%"; // Ukuran gambar tidak terlalu besar (80% dari tinggi layar)
        zoomableImage.style.objectFit = "contain"; // Pastikan gambar tidak terdistorsi
        zoomableImage.style.cursor = "zoom-out"; // Ubah cursor untuk indikasi zoom-out

        // Tampilkan backdrop
        backdrop.style.display = "block";

        // Menyembunyikan tombol zoom setelah gambar diperbesar
        expandButton.style.display = "none";

        // Menambahkan event untuk mengembalikan gambar ke ukuran semula
        backdrop.addEventListener("click", () => {
          zoomableImage.style.position = "static"; // Mengembalikan posisi gambar ke semula
          zoomableImage.style.width = "100%"; // Ukuran semula gambar
          zoomableImage.style.height = "100%";
          zoomableImage.style.cursor = "grab"; // Ubah cursor kembali ke grab
          expandButton.style.display = "block"; // Tampilkan tombol zoom kembali

          // Menyembunyikan backdrop
          backdrop.style.display = "none";
        });

        // Event listener untuk menyesuaikan posisi gambar saat mouse bergerak di atas gambar
      });
    }
  }

  const sectionTwoDetailProduct = document.getElementById(
    "section-two-detail-product"
  );

  if (sectionTwoDetailProduct) {
    if (detailProduct) {
      const productTitleElement = document.querySelector(
        "#section-two-detail-product h2"
      );
      const productPriceElement = document.querySelector(
        "#section-two-detail-product h3"
      );
      const productDescriptionElement = document.querySelector(
        "#description-product-text"
      );

      productTitleElement.textContent = detailProduct.title;
      productPriceElement.textContent = `${formatRupiah(
        detailProduct.minPrice
      )} - ${formatRupiah(detailProduct.maxPrice)}`;
      productDescriptionElement.textContent = detailProduct.description;

      const optionsWrapperContainer =
        document.querySelector("#wrapper-product");

      let mealTypeDropdown = null;
      let durationDropdown = null;
      let packagesDropdown = null;
      let quantityInput;
      let totalPriceElement;
      let totalDiscontElement;

      detailProduct.options.forEach((optionGroup) => {
        const optionsWrapper = document.createElement("div");
        optionsWrapper.className = "options-wrapper";

        const titleWrapper = document.createElement("div");
        titleWrapper.className = "title-option-wrapper";
        const titleElement = document.createElement("p");
        titleElement.className = "lato-semi-bold";
        titleElement.textContent = `${optionGroup.name} : `;
        titleWrapper.appendChild(titleElement);

        const selectWrapper = document.createElement("div");
        selectWrapper.id = "section-two-options-product";
        const selectElement = document.createElement("select");
        selectElement.className = "option-wrapper lato-regular";

        optionGroup.data.forEach((option) => {
          const optionElement = document.createElement("option");
          optionElement.value = option.type || option.name;
          optionElement.textContent = option.type || option.name;
          selectElement.appendChild(optionElement);
        });

        if (optionGroup.name.toLocaleLowerCase() === "meal type") {
          mealTypeDropdown = selectElement;
        } else if (optionGroup.name.toLocaleLowerCase() === "duration") {
          durationDropdown = selectElement;
        } else if (optionGroup.name.toLocaleLowerCase() === "packages") {
          packagesDropdown = selectElement;
        }

        selectWrapper.appendChild(selectElement);
        optionsWrapper.appendChild(titleWrapper);
        optionsWrapper.appendChild(selectWrapper);
        optionsWrapperContainer.appendChild(optionsWrapper);
      });

      const sectionTwoDiscontAndPriceProduct = document.getElementById(
        "section-two-discont-and-price-product"
      );

      const priceProduct = document.createElement("h5");
      priceProduct.className = "lato-regular";

      sectionTwoDiscontAndPriceProduct.appendChild(priceProduct);

      // // Mengambil elemen yang sudah ada di DOM
      // const sectionTwoMinusAndPlusAndAddToCartProuduct =
      //   document.getElementById("section-two-minus-and-plus-product");

      // // Membuat wrapper total produk
      // const totalProductWrapper = document.createElement("div");
      // totalProductWrapper.className = "total-product-wrapper"; // Perbaikan penulisan className

      // // Membuat tombol minus
      // const minusButton = document.createElement("div");
      // minusButton.id = "minus";
      // minusButton.className = "button-plus-or-minus lato-regular";
      // minusButton.textContent = "-";

      // // Membuat elemen quantity
      // const quantitysWrapper = document.createElement("div");
      // quantitysWrapper.id = "quantity";
      // quantitysWrapper.className = "total lato-regular";

      // const quantityText = document.createElement("p");
      // quantityText.textContent = "1";

      // // Membuat tombol add
      // const addButton = document.createElement("div");
      // addButton.id = "add";
      // addButton.className = "button-plus-or-minus lato-regular";
      // addButton.textContent = "+";

      // // Membuat tombol add to cart
      // const addToCartsButton = document.createElement("button");
      // addToCartsButton.id = "add-to-cart";
      // addToCartsButton.className = "button-add-product lato-regular";
      // addToCartsButton.textContent = "ADD TO CART";

      // // Menambahkan elemen-elemen ke dalam wrapper
      // totalProductWrapper.appendChild(minusButton);
      // totalProductWrapper.appendChild(quantitysWrapper);
      // quantitysWrapper.appendChild(quantityText);
      // totalProductWrapper.appendChild(addButton);

      // // Menambahkan wrapper dan tombol "Add to Cart" ke dalam elemen utama
      // sectionTwoMinusAndPlusAndAddToCartProuduct.appendChild(
      //   totalProductWrapper
      // );
      // sectionTwoMinusAndPlusAndAddToCartProuduct.appendChild(addToCartsButton);

      const quantityWrapper = document.createElement("div");
      quantityWrapper.className = "options-wrapper";

      const quantityLabelWrapper = document.createElement("div");
      quantityLabelWrapper.className = "title-option-wrapper";
      const quantityLabel = document.createElement("p");
      quantityLabel.className = "lato-semi-bold";
      quantityLabel.textContent = "Quantity : ";
      quantityLabelWrapper.appendChild(quantityLabel);

      const quantityInputWrapper = document.createElement("div");
      const quantityInputElement = document.createElement("input");
      quantityInputElement.type = "number";
      quantityInputElement.value = 1;
      quantityInputElement.min = 1;
      quantityInputElement.className = "option-wrapper lato-regular";
      quantityInput = quantityInputElement;

      quantityInputWrapper.appendChild(quantityInputElement);
      quantityWrapper.appendChild(quantityLabelWrapper);
      quantityWrapper.appendChild(quantityInputWrapper);
      optionsWrapperContainer.appendChild(quantityWrapper);

      const discontAndPriceWrapper = document.createElement("div");
      discontAndPriceWrapper.className = "discont-and-price";

      const totalDiscontValue = document.createElement("h5");
      totalDiscontValue.className = "discont lato-semi-bold";
      totalDiscontElement = totalDiscontValue;

      const totalPriceValue = document.createElement("h5");
      totalPriceValue.className = "lato-semi-bold";
      totalPriceElement = totalPriceValue;

      // totalPriceWrapper.appendChild(totalPriceLabel);
      discontAndPriceWrapper.appendChild(totalDiscontValue);
      discontAndPriceWrapper.appendChild(totalPriceValue);
      optionsWrapperContainer.appendChild(discontAndPriceWrapper);

      const addToCartButton = document.createElement("button");
      addToCartButton.textContent = "Add to Cart";
      addToCartButton.className = "button-add-product lato-semi-bold";
      optionsWrapperContainer.appendChild(addToCartButton);

      const packagesListener = () => {
        const updatePackagesOptions = () => {
          const packagesData = detailProduct.options
            .find((group) => group.name.toLocaleLowerCase() === "packages")
            .data.filter((option) =>
              option.name.toLocaleLowerCase().includes("packages")
            );

          packagesDropdown.innerHTML = "";

          packagesData.forEach((option) => {
            const optionElement = document.createElement("option");
            optionElement.value = option.type;
            optionElement.textContent = option.type;
            packagesDropdown.appendChild(optionElement);
          });

          updatePackagesOptionsTotalPrice();
        };

        const updatePackagesOptionsTotalPrice = () => {
          const selectedPackages = packagesDropdown.value.toLocaleLowerCase();
          console.log("SELECTED PACKAGES : " + selectedPackages);

          const quantity =
            quantityInput.value === "" || quantityInput.value == "0"
              ? 1
              : quantityInput.value;

          const finalQuantity = parseInt(quantity);

          const finalData = detailProduct.options
            .find((group) => group.name.toLocaleLowerCase() === "packages")
            .data.find(
              (option) =>
                option.name.toLocaleLowerCase() === selectedPackages ||
                option.type.toLocaleLowerCase() === selectedPackages
            );

          if (finalData) {
            const totalPrice = finalData.price * finalQuantity;
            if (finalData.discount) {
              const priceAfterDiscount =
                totalPrice * (1 - finalData.discount / 100);
              totalDiscontElement.textContent = formatRupiah(totalPrice);
              totalPriceElement.textContent = formatRupiah(priceAfterDiscount);
            } else {
              totalPriceElement.textContent = formatRupiah(totalPrice);
            }
          }
        };

        packagesDropdown.addEventListener(
          "change",
          updatePackagesOptionsTotalPrice
        );

        quantityInput.addEventListener(
          "input",
          updatePackagesOptionsTotalPrice
        );

        updatePackagesOptions();
      };

      const durationListener = () => {
        const updateDurationOptions = () => {
          const selectedMealType = mealTypeDropdown.value.toLocaleLowerCase();

          const durationData = detailProduct.options
            .find((group) => group.name.toLocaleLowerCase() === "duration")
            .data.filter(
              (option) => option.name.toLocaleLowerCase() === selectedMealType
            );

          durationDropdown.innerHTML = "";

          durationData.forEach((option) => {
            const optionElement = document.createElement("option");
            optionElement.value = option.type;
            optionElement.textContent = option.type;
            durationDropdown.appendChild(optionElement);
          });

          updateDurationOptionsTotalPrice();
        };

        const updateDurationOptionsTotalPrice = () => {
          const selectedMealType = mealTypeDropdown.value.toLocaleLowerCase();
          const selectedDuration = durationDropdown.value.toLocaleLowerCase();

          const quantity =
            quantityInput.value === "" || quantityInput.value == "0"
              ? 1
              : quantityInput.value;
          const finalQuantity = parseInt(quantity);

          const finalData = detailProduct.options
            .find((group) => group.name.toLocaleLowerCase() === "duration")
            .data.find(
              (option) =>
                option.name.toLocaleLowerCase() === selectedMealType &&
                option.type.toLocaleLowerCase() === selectedDuration
            );

          if (finalData) {
            const totalPrice = finalData.price * finalQuantity;
            if (finalData.discount) {
              const priceAfterDiscount =
                totalPrice * (1 - finalData.discount / 100);
              totalDiscontElement.textContent = formatRupiah(totalPrice);
              totalPriceElement.textContent = formatRupiah(priceAfterDiscount);
            } else {
              totalPriceElement.textContent = formatRupiah(totalPrice);
            }
          }
        };

        mealTypeDropdown.addEventListener("change", updateDurationOptions);

        durationDropdown.addEventListener(
          "change",
          updateDurationOptionsTotalPrice
        );

        quantityInput.addEventListener(
          "input",
          updateDurationOptionsTotalPrice
        );

        updateDurationOptions();
      };

      // Init Listener
      if (packagesDropdown) {
        packagesListener();
      } else {
        durationListener();
      }

      const shoppingCart = document.getElementById("shopping-cart");

      addToCartButton.addEventListener("click", () => {
        // Create Shopping Cart
        const addCartProductDurationOptions = () => {
          const selectedMealType = mealTypeDropdown.value.toLocaleLowerCase();
          const selectedDuration = durationDropdown.value.toLocaleLowerCase();

          const quantity = parseInt(quantityInput.value, 10);

          const finalData = detailProduct.options
            .find((group) => group.name.toLocaleLowerCase() === "duration")
            .data.find(
              (option) =>
                option.name.toLocaleLowerCase() === selectedMealType &&
                option.type.toLocaleLowerCase() === selectedDuration
            );

          if (!finalData) {
            alert("Silakan pilih opsi yang valid.");
            return;
          }

          if (finalData) {
            const totalPrice = finalData.price * quantity;
            if (finalData.discount) {
              const priceAfterDiscount =
                totalPrice * (1 - finalData.discount / 100);

              const cartItem = {
                title: detailProduct.title,
                image: detailProduct.image,
                mealType: selectedMealType,
                duration: selectedDuration,
                price: totalPrice,
                quantity: quantity,
                totalPrice: priceAfterDiscount,
              };

              return cartItem;
            } else {
              const cartItem = {
                title: detailProduct.title,
                image: detailProduct.image,
                mealType: selectedMealType,
                duration: selectedDuration,
                price: finalData.price,
                quantity: quantity,
                totalPrice: totalPrice,
              };

              return cartItem;
            }
          }
        };

        const addCartProductPackagesOptions = () => {
          const selectedPackages = packagesDropdown.value.toLocaleLowerCase();

          const quantity = parseInt(quantityInput.value, 10);

          const finalData = detailProduct.options
            .find((group) => group.name.toLocaleLowerCase() === "packages")
            .data.find(
              (option) =>
                option.name.toLocaleLowerCase() === selectedPackages &&
                option.type.toLocaleLowerCase() === selectedPackages
            );

          if (!finalData) {
            alert("Silakan pilih opsi yang valid.");
            return;
          }

          if (finalData) {
            const totalPrice = finalData.price * quantity;
            if (finalData.discount) {
              const priceAfterDiscount =
                totalPrice * (1 - finalData.discount / 100);

              const cartItem = {
                title: detailProduct.title,
                image: detailProduct.image,
                mealType: selectedPackages,
                price: totalPrice,
                quantity: quantity,
                totalPrice: priceAfterDiscount,
              };

              return cartItem;
            } else {
              const cartItem = {
                title: detailProduct.title,
                image: detailProduct.image,
                mealType: selectedPackages,
                price: finalData.price,
                quantity: quantity,
                totalPrice: totalPrice,
              };

              return cartItem;
            }
          }
        };

        const finalAddCartProduct = packagesDropdown
          ? addCartProductPackagesOptions()
          : addCartProductDurationOptions();

        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(finalAddCartProduct);

        alert("Pesanan berhasil ditambahkan ke keranjang!");

        shoppingCart.classList.add("open");

        const finalSubtotal = document.getElementById("subtotal");
        const cartItems = document.getElementById("cart-items");

        finalSubtotal.innerHTML = "";
        cartItems.innerHTML = "";

        if (cart && cart.length > 0) {
          let filterCart = [];

          // Menggabungkan produk berdasarkan key unik (termasuk duration)
          filterCart = cart.reduce((acc, item) => {
            // Cari apakah item dengan key yang sama sudah ada
            if (item && item.duration) {
              const existingItem = acc.find(
                (product) =>
                  product.title === item.title &&
                  product.image === item.image &&
                  product.mealType === item.mealType &&
                  product.duration === item.duration
              );

              if (existingItem) {
                console.log("ADA");
                // Jika sudah ada, tambahkan kuantitas dan totalPrice
                existingItem.quantity += item.quantity;
                existingItem.totalPrice += item.quantity * item.price;
              } else {
                console.log("GA ADA");
                // Jika belum ada, tambahkan item baru
                acc.push({
                  title: item.title,
                  image: item.image,
                  mealType: item.mealType,
                  duration: item.duration,
                  price: item.price,
                  quantity: item.quantity,
                  totalPrice: item.quantity * item.price,
                });
              }

              return acc;
            } else {
              const existingItem = acc.find(
                (product) =>
                  product.title === item.title &&
                  product.image === item.image &&
                  product.mealType === item.mealType
              );

              if (existingItem) {
                console.log("ADA");

                // Jika sudah ada, tambahkan kuantitas dan totalPrice
                existingItem.quantity += item.quantity;
                existingItem.totalPrice += item.quantity * item.price;
              } else {
                console.log("GA ADA");

                // Jika belum ada, tambahkan item baru
                acc.push({
                  title: item.title,
                  image: item.image,
                  mealType: item.mealType,
                  price: item.price,
                  quantity: item.quantity,
                  totalPrice: item.quantity * item.price,
                });
              }

              return acc;
            }
          }, []);

          localStorage.setItem("cart", JSON.stringify(filterCart));

          filterCart.forEach((item) => {
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");

            const itemImg = document.createElement("img");
            itemImg.src = item.image;

            const itemDetails = document.createElement("div");
            itemDetails.classList.add("item-details");

            const itemTitle = document.createElement("h3");
            itemTitle.textContent = item.title;

            console.log(item.mealType);

            itemDetails.appendChild(itemTitle);
            if (
              item &&
              item.mealType &&
              (item.mealType.toLocaleLowerCase() === "lunch" ||
                item.mealType.toLocaleLowerCase() === "dinner")
            ) {
              const mealTypeParagraph = document.createElement("p");
              mealTypeParagraph.innerHTML = `
              <strong>Lunch / Dinner :</strong> ${item.mealType}
              `;

              itemDetails.appendChild(mealTypeParagraph);
            }

            if (
              item &&
              item.mealType &&
              item.mealType.toLocaleLowerCase() === "duration"
            ) {
              const durationParagraph = document.createElement("p");
              durationParagraph.innerHTML = `
            <strong>Duration :</strong> ${item.duration}
            `;
              itemDetails.appendChild(durationParagraph);
            }

            if (
              item &&
              item.mealType &&
              item.mealType.toLocaleLowerCase().includes("packages")
            ) {
              const durationParagraph = document.createElement("p");
              durationParagraph.innerHTML = `
            <strong>Packages :</strong> ${item.mealType}
            `;
              itemDetails.appendChild(durationParagraph);
            }

            if (item && item.price && item.quantity) {
              const durationParagraph = document.createElement("p");
              durationParagraph.innerHTML = `
            <strong>${item.quantity}</strong> x <strong>${formatRupiah(
                item.price
              )}</strong>
            `;
              itemDetails.appendChild(durationParagraph);
            }

            if (item && item.totalPrice) {
              const durationParagraph = document.createElement("p");
              durationParagraph.innerHTML = `
            <strong>${formatRupiah(item.totalPrice)}</strong>
            `;
              itemDetails.appendChild(durationParagraph);
            }

            const itemRemove = document.createElement("button");
            itemRemove.classList.add("remove-btn");
            itemRemove.textContent = "×";

            cartItem.appendChild(itemImg);
            cartItem.appendChild(itemDetails);
            cartItem.appendChild(itemRemove);

            cartItems.appendChild(cartItem);
          });

          const subtotal = filterCart.reduce(
            (acc, durr) => acc + durr.totalPrice,
            0
          );
          finalSubtotal.textContent = formatRupiah(subtotal);

          const checkoutButton = document.getElementById("checkout");

          checkoutButton.addEventListener("click", () => {
            window.location.href =
              "https://muhammadashariabdillah24.github.io/checkout";
          });
        } else {
          cartItems.innerHTML = `
        <p class='lato-regular' style='font-size: 20px;text-align:center;'><strong>Your shopping cart is empty!</strong></p>`;
        }
      });

      const closeDrawersButton = document.getElementById("close-btn");

      closeDrawersButton.addEventListener("click", () => {
        shoppingCart.classList.remove("open");
      });
    }
  }

  // HOME => CHECKOUT
  const checkoutContainer = document.getElementById("checkout-container");
  console.log(checkoutContainer);

  if (checkoutContainer) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const orderItems = document.getElementById("order-items");

    if (cart && cart.length > 0) {
      let filterCart = [];

      // Menggabungkan produk berdasarkan key unik (termasuk duration)
      filterCart = cart.reduce((acc, item) => {
        // Cari apakah item dengan key yang sama sudah ada
        if (item && item.duration) {
          const existingItem = acc.find(
            (product) =>
              product.title === item.title &&
              product.image === item.image &&
              product.mealType === item.mealType &&
              product.duration === item.duration
          );

          if (existingItem) {
            // Jika sudah ada, tambahkan kuantitas dan totalPrice
            existingItem.quantity += item.quantity;
            existingItem.totalPrice += item.quantity * item.price;
          } else {
            // Jika belum ada, tambahkan item baru
            acc.push({
              title: item.title,
              image: item.image,
              mealType: item.mealType,
              duration: item.duration,
              price: item.price,
              quantity: item.quantity,
              totalPrice: item.quantity * item.price,
            });
          }

          return acc;
        } else {
          const existingItem = acc.find(
            (product) =>
              product.title === item.title &&
              product.image === item.image &&
              product.mealType === item.mealType
          );

          if (existingItem) {
            // Jika sudah ada, tambahkan kuantitas dan totalPrice
            existingItem.quantity += item.quantity;
            existingItem.totalPrice += item.quantity * item.price;
          } else {
            // Jika belum ada, tambahkan item baru
            acc.push({
              title: item.title,
              image: item.image,
              mealType: item.mealType,
              price: item.price,
              quantity: item.quantity,
              totalPrice: item.quantity * item.price,
            });
          }

          return acc;
        }
      }, []);

      localStorage.setItem("cart", JSON.stringify(filterCart));

      filterCart.forEach((item) => {
        const orderItem = document.createElement("div");
        orderItem.classList.add("order-item");

        const itemTitle = document.createElement("h3");
        itemTitle.classList.add("lato-bold");
        itemTitle.textContent = item.title;

        orderItem.appendChild(itemTitle);

        if (
          item &&
          item.mealType &&
          (item.mealType.toLocaleLowerCase() === "lunch" ||
            item.mealType.toLocaleLowerCase() === "dinner")
        ) {
          const mealTypeParagraph = document.createElement("p");
          mealTypeParagraph.classList.add("lato-regular");
          mealTypeParagraph.innerHTML = `
                Lunch / Dinner : ${item.mealType}
                `;

          orderItem.appendChild(mealTypeParagraph);
        }

        if (
          item &&
          item.mealType &&
          item.mealType.toLocaleLowerCase().includes("packages")
        ) {
          const mealTypeParagraph = document.createElement("p");
          mealTypeParagraph.classList.add("lato-regular");
          mealTypeParagraph.innerHTML = `
                Packages : ${item.mealType}
                `;

          orderItem.appendChild(mealTypeParagraph);
        }

        if (
          item &&
          item.mealType &&
          item.mealType.toLocaleLowerCase() === "duration"
        ) {
          const durationParagraph = document.createElement("p");
          durationParagraph.classList.add("lato-regular");
          durationParagraph.innerHTML = `
              <strong>Duration :</strong> ${item.duration}
              `;
          orderItem.appendChild(durationParagraph);
        }

        if (item && item.price && item.quantity) {
          const durationParagraph = document.createElement("p");
          durationParagraph.classList.add("lato-regular");
          durationParagraph.innerHTML = `
              <strong>${item.quantity}</strong> x <strong>${formatRupiah(
            item.price
          )}</strong>
              `;
          orderItem.appendChild(durationParagraph);
        }

        if (item && item.totalPrice) {
          const durationParagraph = document.createElement("p");
          durationParagraph.classList.add("lato-regular");
          durationParagraph.innerHTML = `
              <strong>${formatRupiah(item.totalPrice)}</strong>
              `;
          orderItem.appendChild(durationParagraph);
        }

        const hrElement = document.createElement("hr");
        orderItem.appendChild(hrElement);
        orderItems.appendChild(orderItem);
      });

      const finalSubtotal = document.getElementById("subtotal");
      finalSubtotal.classList.add("lato-bold");
      const subtotal = filterCart.reduce(
        (acc, durr) => acc + durr.totalPrice,
        0
      );

      finalSubtotal.textContent = formatRupiah(subtotal);

      const checkoutButton = document.getElementById("place-order");
      const checkoutButtonText =
        checkoutButton.querySelector(".place-order-text");
      const buttonLoader = checkoutButton.querySelector(".place-order-loader");

      checkoutButton.addEventListener("click", () => {
        const nameInput = document.getElementById("name");
        const addressInput = document.getElementById("address");
        const citySelect = document.getElementById("city");
        const postcodeInput = document.getElementById("postcode");
        const phoneInput = document.getElementById("phone");
        const emailInput = document.getElementById("email");
        const orderNotesTextArea = document.getElementById("order-notes");

        // Pengecekan dan memberikan peringatan jika kosong
        if (!isFieldFilled(nameInput, "Nama")) {
          nameInput.focus(); // Fokus pada inputan yang kosong
        } else if (!isFieldFilled(addressInput, "Alamat")) {
          addressInput.focus();
        } else if (!isFieldFilled(citySelect, "Kota")) {
          citySelect.focus();
        } else if (!isFieldFilled(postcodeInput, "Kode Pos")) {
          postcodeInput.focus();
        } else if (!isFieldFilled(phoneInput, "Nomor Telepon")) {
          phoneInput.focus();
        } else if (!isFieldFilled(emailInput, "Email")) {
          emailInput.focus();
        } else if (!isFieldFilled(orderNotesTextArea, "Catatan Pesanan")) {
          orderNotesTextArea.focus();
        } else {
          // Tampilkan loader di dalam tombol
          checkoutButtonText.style.opacity = "0"; // Sembunyikan teks
          buttonLoader.style.display = "block"; // Tampilkan loader

          try {
            setTimeout(() => {
              let message =
                `Halo, saya ingin memesan paket makanan sehat Bellywell.\n` +
                `Berikut adalah detail pesanan saya:\n\n` +
                `- Nama: ${nameInput.value}\n` +
                `- Alamat: ${addressInput.value}\n` +
                `- Kota: ${citySelect.value}\n` +
                `- Kode Pos: ${postcodeInput.value}\n` +
                `- Nomor Telepon: ${phoneInput.value}\n` +
                `- Email: ${emailInput.value}\n` +
                `- Catatan Pesanan: ${
                  orderNotesTextArea.value || "Tidak ada catatan."
                }\n\n`;

              filterCart.forEach((item, index) => {
                message += `*Produk ${index + 1}:*\n`;
                message += `- Nama: ${item.title}\n`;
                if (item.mealType) message += `- Tipe: ${item.mealType}\n`;
                if (item.duration) message += `- Durasi: ${item.duration}\n`;
                message += `- Harga: ${formatRupiah(item.price)}\n`;
                message += `- Jumlah: ${item.quantity}\n`;
                message += `- Total: ${formatRupiah(item.totalPrice)}\n\n`;
              });

              const subtotal = cart.reduce(
                (acc, item) => acc + item.totalPrice,
                0
              );
              message += `*Subtotal: ${formatRupiah(subtotal)}*\n\n`;
              message += "Mohon informasinya lebih lanjut. Terima kasih.";

              const whatsappUrl = `https://wa.me/${noWa}?text=${encodeURIComponent(
                message
              )}`;

              window.open(whatsappUrl, "_blank");
            }, 500);
          } catch (error) {
            console.error("Error during checkout:", error);
            alert("Terjadi kesalahan. Silakan coba lagi.");
          } finally {
            checkoutButtonText.style.opacity = "1";
            buttonLoader.style.display = "none";
          }
        }
      });
    }
  }

  getInitialWidth();
  getResizeWidth();
  navbarSticky();
});
