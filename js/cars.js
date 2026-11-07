/* ============================================================
   MalayaSelfDrive — Car Catalogue
   Add a new car by copying one object below and editing it.
   Required fields:
     name          : "Brand Model"
     year          : 2026
     pricePerDay   : 1416            (number, INR)
     priceExclFees : 1416            (number, INR — shown as "excluding fees")
     transmission  : "Automatic" | "Manual"
     fuel          : "Petrol" | "Diesel" | "Electric" | "CNG"
     seats         : 5
     image         : "assets/cars/your-image.svg" (or .jpg/.png/.webp)
     city          : "Bangalore" | "Bhubaneswar" | "Cuttack" | any Odisha city
   ============================================================ */

const CARS = [
  {
    name: "Honda Amaze",
    year: 2026,
    pricePerDay: 1416,
    priceExclFees: 1416,
    transmission: "Automatic",
    fuel: "Petrol",
    seats: 5,
    image: "assets/cars/honda-amaze.svg",
    city: "Bangalore"
  },
  {
    name: "Maruti Suzuki Swift",
    year: 2025,
    pricePerDay: 1199,
    priceExclFees: 1199,
    transmission: "Manual",
    fuel: "Petrol",
    seats: 5,
    image: "assets/cars/maruti-swift.svg",
    city: "Bangalore"
  },
  {
    name: "Tata Nexon",
    year: 2026,
    pricePerDay: 1899,
    priceExclFees: 1899,
    transmission: "Automatic",
    fuel: "Petrol",
    seats: 5,
    image: "assets/cars/tata-nexon.svg",
    city: "Bangalore"
  },
  {
    name: "Hyundai Creta",
    year: 2025,
    pricePerDay: 2499,
    priceExclFees: 2499,
    transmission: "Automatic",
    fuel: "Diesel",
    seats: 5,
    image: "assets/cars/hyundai-creta.svg",
    city: "Bhubaneswar"
  },
  {
    name: "Mahindra Thar",
    year: 2025,
    pricePerDay: 2999,
    priceExclFees: 2999,
    transmission: "Manual",
    fuel: "Diesel",
    seats: 4,
    image: "assets/cars/mahindra-thar.svg",
    city: "Bhubaneswar"
  },
  {
    name: "Toyota Innova Crysta",
    year: 2024,
    pricePerDay: 3299,
    priceExclFees: 3299,
    transmission: "Manual",
    fuel: "Diesel",
    seats: 7,
    image: "assets/cars/toyota-innova.svg",
    city: "Cuttack"
  }
];
