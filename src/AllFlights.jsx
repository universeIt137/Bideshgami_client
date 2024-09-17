export const flights = [
  {
    airline: "Biman Bangladesh Airlines",
    flightNumber: 617,
    aircraft: "DHC8 Dash 8",
    operatedBy: "BG",
    fareType: "Economy (G)",
    availableSeats: 9,
    depart: {
      time: "22:30",
      date: "Mon, 16 Sep 2024",
      airport: "Hazrat Shahjalal International Airport (DAC)",
      terminal: "Terminal D",
      city: "Dhaka, Bangladesh"
    },
    duration: 55, // in minutes
    arrival: {
      time: "12:30",
      date: "Mon, 17 Sep 2024",
      airport: "Patenga Terminal (CGP)",
      city: "Chittagong, Bangladesh"
    },
    price: 4266, // in BDT
    refundable: "Partially Refundable",
    baggage: {
      checkIn: { unit: 20, type: "Kg" },
      cabin: { unit: 7, type: "Kg" }
    }
  },
  {
    airline: "Biman Bangladesh Airlines",
    flightNumber: 620,
    aircraft: "Boeing 737",
    operatedBy: "BG",
    fareType: "Economy (H)",
    availableSeats: 5,
    depart: {
      time: "08:45",
      date: "Tue, 17 Sep 2024",
      airport: "Hazrat Shahjalal International Airport (DAC)",
      terminal: "Terminal B",
      city: "Dhaka, Bangladesh"
    },
    duration: 60, // in minutes
    arrival: {
      time: "09:59",
      date: "Tue, 17 Sep 2024",
      airport: "Patenga Terminal (CGP)",
      city: "Chittagong, Bangladesh"
    },
    price: 4350, // in BDT
    refundable: "Fully Refundable",
    baggage: {
      checkIn: { unit: 25, type: "Kg" },
      cabin: { unit: 8, type: "Kg" }
    }
  },
  {
    airline: "Biman Bangladesh Airlines",
    flightNumber: 625,
    aircraft: "Boeing 787 Dreamliner",
    operatedBy: "BG",
    fareType: "Economy (J)",
    availableSeats: 3,
    depart: {
      time: "14:15",
      date: "Wed, 18 Sep 2024",
      airport: "Hazrat Shahjalal International Airport (DAC)",
      terminal: "Terminal A",
      city: "Dhaka, Bangladesh"
    },
    duration: 50, // in minutes
    arrival: {
      time: "15:05",
      date: "Wed, 18 Sep 2024",
      airport: "Patenga Terminal (CGP)",
      city: "Chittagong, Bangladesh"
    },
    price: 4490, // in BDT
    refundable: "Non-Refundable",
    baggage: {
      checkIn: { unit: 30, type: "Kg" },
      cabin: { unit: 10, type: "Kg" }
    }
  }
];
