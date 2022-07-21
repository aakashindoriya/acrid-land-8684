

// /Best SEllers
let bestSellerData = [
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/SDgpHbPyumHJkqeM5ehAh6Gh",
      "company": "fitkit",
      "title": "FITKIT 10K 2.5HP DC Motorized Treadmill",
      "price": "₹ 23699",
      "offer": "₹ 69999  66 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/FsezbKx6Tyj3DAXyHa7bL6hu",
      "company": "fitkit",
      "title": "FT200S 4.5HP DC Motorized Treadmill",
      "price": "₹ 29699",
      "offer": "75000  60 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/AqGDxJejHHHFrpVo46VHz4hD",
      "company": "fitkit",
      "title": "FT100M, 3.25HP DC Motorized Treadmill",
      "price": "27699",
      "offer": "55000  50 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/J4NyobsjLcF5DuYvTdeWXkTr",
      "company": "ONEFITPLUS",
      "title": "OFP-1000, 8 Level Magnetic Resistance Spin Bike",
      "price": "16699",
      "offer": "39999  58 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/x4H5oZvc2DVoVQ7QzPeF38Ww",
      "company": "ONEFITPLUS",
      "title": "OFP-M1, 100 Level Magnetic Resistance Spin Bike",
      "price": "20699",
      "offer": "59999  66 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/Thbifm3mmLLx3pWffTY8vTMV",
      "company": "URBAN TERRAIN",
      "title": "UT2000, Red, Steel MTB 27.5 T Shimano Geared Mountain Cycle (21 Gear)",
      "price": "₹ 12999",
      "offer": "₹ 49990 74 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/s47Jf9KyWB1BAZHzWqN5cdiA",
      "company": "Urban Terrain",
      "title": "UT3001A27.5, Black, Alloy MTB 27.5 T Shimano Geared Mountain Cycle",
      "price": "₹ 13999",
      "offer": "₹ 47990 71 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/91o5kH6fEvNrKFHAe7S42tey",
      "company": "Urban Terrain",
      "title": "UT3013S27.5, Black, Steel MTB 27.5 T Shimano Geared Mountain Cycle",
      "price": "₹ 12999",
      "offer": "₹ 45990 72 % Off"
    }
  ]

  bestSellerData.forEach((el) => {
    let container = document.getElementById("container")

    let box = document.createElement("div");

    let img = document.createElement("img");
    img.src = el.image;
    console.log('img:', img)

    let comp = document.createElement("p");
    comp.innerText = el.company;

    let title = document.createElement("h3");
    title.innerText = el.title;

    let price = document.createElement("p");
    price.innerText = el.price;
    let offer = document.createElement("p");
    offer.innerText = el.offer;

    box.append(img,comp,title,price,offer);

    container.append(box);
})

//   just lauch
let justLauched = [
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/DHjJcDyA9cmpAJqFt954L5kB",
      "company": "CULTSPORT",
      "title": "Cultsport Liquid L-Carnitine, 450ml",
      "price": "₹ 1399",
      "offer": ""
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/fwi2jmJph517We1h3R1xcdvw",
      "company": "CULTSPORT",
      "title": "Cultsport Raw Whey 80%, 908g",
      "price": "₹ 2699",
      "offer": ""
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/cfDadvHHySps9QduNkLSeaqv",
      "company": "CULTSPORT",
      "title": "Cultsport Elite 100% Whey, 1 Kg",
      "price": "₹ 3499",
      "offer": ""
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/L5fKq5BFJGzsMrSuqDNnqqWy",
      "company": "CULTSPORT",
      "title": "Smartrow c1: Smart Bluetooth enabled Rowing Machine",
      "price": "₹ 39900",
      "offer": "60 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/KF46i4r6G5posz6tthrs68Vn",
      "company": "CULTSPORT",
      "title": "Smartcross b1: Bluetooth enabled elliptical cross trainer",
      "price": "₹ 20999",
      "offer": "46 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/vX1Vgko9H9n3Nn3rdyQnNkrb",
      "company": "CULTSPORT",
      "title": "Smartbike c1: Bluetooth enabled spin bike with 8-level magnetic resistance",
      "price": "₹ 24999",
      "offer": "39 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/nTvMdcZi5B2MzrXZJicv7acr",
      "company": "CULTSPORT",
      "title": "Smartbike c2: Bluetooth enabled spin bike with stepless magnetic resistance",
      "price": "₹ 26499",
      "offer": "41 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/ZJBYsrvTZKUc9QzYK6fh4f8n",
      "company": "CULTSPORT",
      "title": "Rimo 27.5\" 21-speed steel MTB (Shimano gears)",
      "price": "₹ 16999",
      "offer": "58 % Off"
    }
  ]

// treadmills
let TREADMILLS = [
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/SDgpHbPyumHJkqeM5ehAh6Gh",
      "company": "Fitkit",
      "title": "FITKIT 10K 2.5HP DC Motorized Treadmill",
      "price": "₹ 23699",
      "offer": "66 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/FsezbKx6Tyj3DAXyHa7bL6hu",
      "company": "Fitkit",
      "title": "FT200S 4.5HP DC Motorized Treadmill",
      "price": "₹ 29699",
      "offer": "60 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/AqGDxJejHHHFrpVo46VHz4hD",
      "company": "Fitkit",
      "title": "FT100M, 3.25HP DC Motorized Treadmill",
      "price": "₹ 27699",
      "offer": "50 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/J4NyobsjLcF5DuYvTdeWXkTr",
      "company": "OneFitplus",
      "title": "OFP-1000, 8 Level Magnetic Resistance Spin Bike",
      "price": "₹ 16699",
      "offer": "58 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/s6PK4YzbgEndEtng22EyRZSk",
      "company": "Fitkit",
      "title": "FT100S, 3.25HP DC Motorized Treadmill",
      "price": "₹ 26199",
      "offer": "48 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/1BfNqT4T2KATPdT49LHJA67G",
      "company": "RPM Fitness",
      "title": "RPM 10K 4.5 HP, CE Certified DC Motorized Treadmill",
      "price": "₹ 33199",
      "offer": "59 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/fmLdSA6A9LnGt87evVESC2i9",
      "company": "RPM Fitness",
      "title": "RPM747SI 3.5 HP DC Motorized Treadmill",
      "price": "₹ 30699",
      "offer": "62 % Off"
    }
]

// TREADMILLS.forEach((el) => {
//     let container = document.createElement("div");
//     let img = document.createElement('img');
//     img.src = el.image;
// })


// spinbikes
let Spinbikes = [
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/vX1Vgko9H9n3Nn3rdyQnNkrb",
      "company": "CULTSPORT",
      "title": "Smartbike c1: Bluetooth enabled spin bike with 8-level magnetic resistance",
      "price": "₹ 24999",
      "offer": "39 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/nTvMdcZi5B2MzrXZJicv7acr",
      "company": "CULTSPORT",
      "title": "Smartbike c2: Bluetooth enabled spin bike with stepless magnetic resistance",
      "price": "₹ 26499",
      "offer": "41 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/J4NyobsjLcF5DuYvTdeWXkTr",
      "company": "OneFitplus",
      "title": "OFP-1000, 8 Level Magnetic Resistance Spin Bike",
      "price": "₹ 16699",
      "offer": "58 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/kTssBkQouVdBHn446kZPn5bG",
      "company": "CULTSPORT",
      "title": "smartbike x1 with 22\" HD touchscreen",
      "price": "₹ 46999",
      "offer": "61 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/x4H5oZvc2DVoVQ7QzPeF38Ww",
      "company": "OneFitplus",
      "title": "OFP-M1, 100 Level Magnetic Resistance Spin Bike",
      "price": "₹ 20699",
      "offer": "66 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/FLjqHDVThFb4Sb5MHfch5FHv",
      "company": "OneFitplus",
      "title": "OFP-1001 Static Handle with Backrest Upright Stationary Exercise Bike",
      "price": "₹ 6299",
      "offer": "48 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/HqCSWS9jkkdQcuEg9Ebz6s1h",
      "company": "OneFitplus",
      "title": "OFP-1004 Moving Handle w/o Backrest Upright Stationary Exercise Bike",
      "price": "₹ 6299",
      "offer": "43 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/ew2TSnqdtYkxMoyjo1r2r1Vg",
      "company": "RPM Fitness",
      "title": "RPM1001 with Backrest &  Free Intallation Upright Stationary Exercise Bike",
      "price": "₹ 6199",
      "offer": "48 % Off"
    }
  ]

//   cycle
let cycle = [
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/4Jwdn1u2RcKw9xYBM6cZtNBD",
      "company": "Urban Terrain",
      "title": "UT3003A26, Black, Alloy MTB 26 T Shimano Geared Mountain Cycle (21 Gear)",
      "price": "₹ 13999",
      "offer": "68 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/Thbifm3mmLLx3pWffTY8vTMV",
      "company": "Urban Terrain",
      "title": "UT2000, Red, Steel MTB 27.5 T Shimano Geared Mountain Cycle (21 Gear)",
      "price": "₹ 12999",
      "offer": "74 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/gPwaekWjEnjBg1q3thWowfjV",
      "company": "Urban Terrain",
      "title": "UT6000S29, Green, Steel MTB 29 T Shimano Geared Mountain Cycle",
      "price": "₹ 13999",
      "offer": "72 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/7ZgbJ1Aj2pvN34SJQKhkQdcE",
      "company": "Urban Terrain",
      "title": "BOLT UT5000S26, Green, Steel MTB Disc Brakes, 26 T Mountain Cycle (Single Speed)",
      "price": "₹ 9199",
      "offer": "49 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/s47Jf9KyWB1BAZHzWqN5cdiA",
      "company": "Urban Terrain",
      "title": "UT3001A27.5, Black, Alloy MTB 27.5 T Shimano Geared Mountain Cycle",
      "price": "₹ 13999",
      "offer": "71 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/91o5kH6fEvNrKFHAe7S42tey",
      "company": "Urban Terrain",
      "title": "UT3013S27.5, Black, Steel MTB 27.5 T Shimano Geared Mountain Cycle",
      "price": "₹ 12999",
      "offer": "72 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/YnaRDF2jE5Tu7eL23T7gascr",
      "company": "Urban Terrain",
      "title": "UT7000S26, (Black, Red) Steel, Wire Brake, 26T City Bike (Single Speed)",
      "price": "₹ 7099",
      "offer": "41 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/c7XhqwsA6bDpazyU1DLzF22Y",
      "company": "Urban Terrain",
      "title": "UT7002S26, (Yellow, Black) Steel, Wire Brake, 26T City Bike (Single Speed)",
      "price": "₹ 7099",
      "offer": "41 % Off"
    }
  ]
// Accessories
let accessories = [
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/rqFrmhQat5ajC62f7rKCPU6m",
      "company": "CULTSPORT",
      "title": "Signature Boxing Hand Wraps",
      "price": "₹ 359",
      "offer": "40 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/TtKkztyhA84pRRQb6SstMJSP",
      "company": "CULTSPORT",
      "title": "Yoga Strap",
      "price": "₹ 359",
      "offer": "40 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/TCnGF1WquCn1iV4VyMbRK6q7",
      "company": "CULTSPORT",
      "title": "EVA Foam Yoga Block",
      "price": "₹ 539",
      "offer": "40 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/dYff3qUPgwn5y93aqH8XPoem",
      "company": "CULTSPORT",
      "title": "Eco-Friendly Cork Yoga Block",
      "price": "₹ 719",
      "offer": "40 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/FD7LBsHMX74CdagPgh5Y6FBW",
      "company": "CULTSPORT",
      "title": "Dark Grey Yoga Mat",
      "price": "₹ 1319",
      "offer": "40 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/VLSrJS6rNY2wmNgdjcT7Rz9J",
      "company": "CULTSPORT",
      "title": "Rubber Workout Mat",
      "price": "₹ 3779",
      "offer": "40 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/rKzWygyVzKcbGdF3vUj1mR6m",
      "company": "CULTSPORT",
      "title": "2 in 1 Workout/Yoga Cork (Eco Friendly) Mat (3mm) With Stance Marking",
      "price": "₹ 1799",
      "offer": "40 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/UHCtJ6PL5gTBLpfp3k1ximq7",
      "company": "CULTSPORT",
      "title": "Eco Friendly Cork Yoga Block",
      "price": "₹ 719",
      "offer": "40 % Off"
    }
  ]
// topwear
let topWear = [
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/xfyTUvSwRaKGThjzqH54yNHB",
      "company": "CULTSPORT",
      "title": "Cleo Slip-on Sports Bra",
      "price": "₹ 1180",
      "offer": "38 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/LEE997UW5WoFdSdjAzdrD2ZT",
      "company": "CULTSPORT",
      "title": "Seamless Diane Medium Impact Sports Bra",
      "price": "₹ 1180",
      "offer": "49 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/DxRCqkWJjsZGQ2mUhWBtsD11",
      "company": "CULTSPORT",
      "title": "Seamless Ira Medium Impact Sports Bra",
      "price": "₹ 899",
      "offer": "50 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/BSiu1tUZrfLeCitwG36pwce6",
      "company": "CULTSPORT",
      "title": "Halftone Print Sports Bra",
      "price": "₹ 1429",
      "offer": "45 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/Va5gn1P8ZPCumwMpkfKawCwN",
      "company": "CULTSPORT",
      "title": "Graphic Print Workout Tshirt",
      "price": "₹ 879",
      "offer": "45 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/XwfuJdgJChgfkeyUQeueZH2f",
      "company": "CULTSPORT",
      "title": "FormFit Training Sports Bra",
      "price": "₹ 1180",
      "offer": "38 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/p1j762x7B1u7KR9kgUEVUAzC",
      "company": "CULTSPORT",
      "title": "FormFit Training Sports Bra",
      "price": "₹ 1049",
      "offer": "50 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/nxHssmzDkfV3gYbuYzMFCnMA",
      "company": "CULTSPORT",
      "title": "FormFit Training Sports Bra",
      "price": "₹ 1049",
      "offer": "50 % Off"
    }
  ]
// bottomwear
let BOTTOMWEAR = [
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/QsooiXHKUycwsG88BZvho57Z",
      "company": "CULTSPORT",
      "title": "Do It All Ombre Prism Tights",
      "price": "₹ 2404",
      "offer": "35 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/cX1VFobPDHuDze82jZMMcMNJ",
      "company": "CULTSPORT",
      "title": "Solid Workout Shorts",
      "price": "₹ 769",
      "offer": "45 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/pTbBfD6mNcBnXAr3uAqqLnwn",
      "company": "CULTSPORT",
      "title": "Knockout Compression Leggings",
      "price": "₹ 1539",
      "offer": "45 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/qc8BDpHombowhQfc8C5MhVZJ",
      "company": "CULTSPORT",
      "title": "Tonal Print High Waist Tights",
      "price": "₹ 1549",
      "offer": "50 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/whqLrtzJTRtgPEDZLc7u41Gk",
      "company": "CULTSPORT",
      "title": "AbsoluteFit Solid Tights",
      "price": "₹ 1374",
      "offer": "45 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/QAaddgc8ZHPbG5WjTrn6APPm",
      "company": "CULTSPORT",
      "title": "AbsoluteFit Solid Tights",
      "price": "₹ 1249",
      "offer": "50 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/NtZ5j632dVdaADtvhvSUR4cj",
      "company": "CULTSPORT",
      "title": "Brushstroke Logo Active Shorts",
      "price": "₹ 1299",
      "offer": "35 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/HatNb7mmputnndvudERar7Hb",
      "company": "CULTSPORT",
      "title": "AbsoluteFit Camo Tights",
      "price": "₹ 1264",
      "offer": "45 % Off"
    }
  ]
// health
let health = [
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/DHjJcDyA9cmpAJqFt954L5kB",
      "company": "CULTSPORT",
      "title": "Cultsport Liquid L-Carnitine, 450ml",
      "price": "₹ 1399",
      "offer": ""
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/fwi2jmJph517We1h3R1xcdvw",
      "company": "CULTSPORT",
      "title": "Cultsport Raw Whey 80%, 908g",
      "price": "₹ 2699",
      "offer": ""
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/cfDadvHHySps9QduNkLSeaqv",
      "company": "CULTSPORT",
      "title": "Cultsport Elite 100% Whey, 1 Kg",
      "price": "₹ 3499",
      "offer": ""
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/96T9f13kUMuksgadqCbZC1Ys",
      "company": "Azani",
      "title": "Azani Calcium & Vitamin D Bone Support Gummies for Adults & Kids |Healthy diet supplement for strong bones (Mango & Strawberry Flavour), 30 Gummies",
      "price": "₹ 284",
      "offer": "48 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/7NDUqVUrKSMkeULoXQSptLs6",
      "company": "Azani",
      "title": "Azani Plant Mass Gainer 1kg | 1083 Kcal, 45g Vegan Protein, 225g Carbohydrates, 0.5g Chlorella, 0.3g Ashwagandha | Intense Muscle Recovery, Weight Gainer, No Bloating-Natural",
      "price": "₹ 807",
      "offer": "33 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/6avFYgdSxkj3AKJiS6nbXLU1",
      "company": "Azani",
      "title": "Azani Biotin Hair Gummies with Zinc, Iodine, Vitamin A, B, C, D & E & Folic Acid | Hair Vitamins for Hair Growth, 30 Gummies",
      "price": "₹ 360",
      "offer": "40 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/4gUCtbuHsPaUtCem2uqZZDUZ",
      "company": "Azani",
      "title": "Azani Pure & Ultra-Strong Omega 3 Fish Oil | Omega 3(1000mg)+Omega 6,7 & 9 + Vitamin D3, 60 Capsules",
      "price": "₹ 474",
      "offer": "53 % Off"
    },
    {
      "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/CQMnnTY657LQBC4geGybhAb5",
      "company": "Azani",
      "title": "Azani Muscle Fuel | Ashwagandha, Shatavari| Muscle Building, Stamina, Strength, 30 Capsules",
      "price": "₹ 284",
      "offer": "29 % Off"
    }
  ]
