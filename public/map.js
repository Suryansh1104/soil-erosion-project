// Initialize the map and set its view to a specific location and zoom level
const map = L.map('map').setView([20.5937, 78.9629], 5); // Centered on India

// Add an OpenStreetMap tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Sample soil erosion data (location, severity, erosion rate)
const soilErosionData = [
    { location: [28.6139, 77.2090], severity: "high", erosionRate: 15 },   // New Delhi
    { location: [19.0760, 72.8777], severity: "medium", erosionRate: 10 }, // Mumbai
    { location: [13.0827, 80.2707], severity: "low", erosionRate: 5 },     // Chennai
    { location: [22.5726, 88.3639], severity: "high", erosionRate: 12 },   // Kolkata
    { location: [23.2599, 77.4126], severity: "medium", erosionRate: 8 },   // Bhopal
    { location: [17.3850, 78.4867], severity: "high", erosionRate: 14 },   // Hyderabad
    { location: [25.5948, 85.1376], severity: "medium", erosionRate: 9 },   // Patna
    { location: [27.1751, 78.0421], severity: "low", erosionRate: 4 },     // Agra
    { location: [18.5204, 73.8567], severity: "high", erosionRate: 13 },   // Pune
    { location: [12.9716, 77.5946], severity: "medium", erosionRate: 7 },   // Bangalore
    { location: [31.1048, 77.1734], severity: "low", erosionRate: 6 },     // Shimla
    { location: [29.0588, 76.0856], severity: "high", erosionRate: 16 },   // Chandigarh
    { location: [10.8505, 76.2711], severity: "medium", erosionRate: 10 },  // Kochi
    { location: [26.9124, 75.7873], severity: "low", erosionRate: 3 },     // Jaipur
    { location: [28.6139, 77.2090], severity: "medium", erosionRate: 9 },   // Delhi NCR
    { location: [19.9975, 73.7898], severity: "high", erosionRate: 11 },   // Nashik
    { location: [22.7196, 75.8577], severity: "medium", erosionRate: 10 },  // Indore
    { location: [20.2951, 85.8189], severity: "high", erosionRate: 18 },   // Bhubaneswar
    { location: [28.7041, 77.1025], severity: "low", erosionRate: 5 },     // Gurgaon
    { location: [26.2183, 91.7482], severity: "medium", erosionRate: 8 },   // Guwahati
    { location: [19.1500, 72.9830], severity: "high", erosionRate: 14 },   // Thane
    { location: [15.2993, 74.1240], severity: "medium", erosionRate: 9 },   // Goa
    { location: [10.3647, 77.7428], severity: "low", erosionRate: 4 },     // Coimbatore
    { location: [32.0736, 74.7438], severity: "high", erosionRate: 13 },   // Jammu
    { location: [19.7983, 85.8314], severity: "medium", erosionRate: 7 },   // Rourkela
    { location: [21.1458, 79.0882], severity: "low", erosionRate: 6 },     // Nagpur
    { location: [23.4227, 85.3304], severity: "medium", erosionRate: 9 },   // Ranchi
    { location: [28.4358, 77.0398], severity: "high", erosionRate: 16 },   // Faridabad
    { location: [20.7967, 85.8138], severity: "medium", erosionRate: 10 }   // Cuttack
];

// Function to determine color based on severity
function getColor(severity) {
    switch (severity) {
        case "high": return "red";
        case "medium": return "orange";
        case "low": return "green";
        default: return "blue";
    }
}

// Function to add circles representing soil erosion on the map
soilErosionData.forEach((data) => {
    const { location, severity, erosionRate } = data;

    // Add a circle to represent soil erosion severity
    L.circle(location, {
        color: getColor(severity),
        fillColor: getColor(severity),
        fillOpacity: 0.5,
        radius: erosionRate * 1000 // Scale the circle radius by erosion rate
    })
    .bindPopup(`<b>Location:</b> ${location}<br><b>Severity:</b> ${severity}<br><b>Erosion Rate:</b> ${erosionRate}`)
    .addTo(map);
});
