const cities = [
    { name: "New York, NY", latitude: 40.7128, longitude: -74.0060 },
    { name: "Los Angeles, CA", latitude: 34.0522, longitude: -118.2437 },
    { name: "Chicago, IL", latitude: 41.8781, longitude: -87.6298 },
    { name: "Houston, TX", latitude: 29.7604, longitude: -95.3698 },
    { name: "Phoenix, AZ", latitude: 33.4484, longitude: -112.0740 },
    { name: "Philadelphia, PA", latitude: 39.9526, longitude: -75.1652 },
    { name: "San Antonio, TX", latitude: 29.4241, longitude: -98.4936 },
    { name: "San Diego, CA", latitude: 32.7157, longitude: -117.1611 },
    { name: "Dallas, TX", latitude: 32.7767, longitude: -96.7970 },
    { name: "San Jose, CA", latitude: 37.3382, longitude: -121.8863 },
    { name: "Austin, TX", latitude: 30.2672, longitude: -97.7431 },
    { name: "Jacksonville, FL", latitude: 30.3322, longitude: -81.6557 },
    { name: "Fort Worth, TX", latitude: 32.7555, longitude: -97.3308 },
    { name: "Columbus, OH", latitude: 39.9612, longitude: -82.9988 },
    { name: "Charlotte, NC", latitude: 35.2271, longitude: -80.8431 },
    { name: "San Francisco, CA", latitude: 37.7749, longitude: -122.4194 },
    { name: "Indianapolis, IN", latitude: 39.7684, longitude: -86.1581 },
    { name: "Seattle, WA", latitude: 47.6062, longitude: -122.3321 },
    { name: "Denver, CO", latitude: 39.7392, longitude: -104.9903 },
    { name: "Washington, DC", latitude: 38.9072, longitude: -77.0369 },
    { name: "Boston, MA", latitude: 42.3601, longitude: -71.0589 },
    { name: "El Paso, TX", latitude: 31.7619, longitude: -106.4850 },
    { name: "Nashville, TN", latitude: 36.1627, longitude: -86.7816 },
    { name: "Detroit, MI", latitude: 42.3314, longitude: -83.0458 },
    { name: "Oklahoma City, OK", latitude: 35.4676, longitude: -97.5164 },
    { name: "Las Vegas, NV", latitude: 36.1699, longitude: -115.1398 },
    { name: "Louisville, KY", latitude: 38.2527, longitude: -85.7585 },
    { name: "Baltimore, MD", latitude: 39.2904, longitude: -76.6122 },
    { name: "Milwaukee, WI", latitude: 43.0389, longitude: -87.9065 },
    { name: "Albuquerque, NM", latitude: 35.0844, longitude: -106.6504 },
    { name: "Tucson, AZ", latitude: 32.2226, longitude: -110.9747 },
    { name: "Fresno, CA", latitude: 36.7378, longitude: -119.7871 },
    { name: "Sacramento, CA", latitude: 38.5816, longitude: -121.4944 },
    { name: "Mesa, AZ", latitude: 33.4152, longitude: -111.8315 },
    { name: "Kansas City, MO", latitude: 39.0997, longitude: -94.5786 },
    { name: "Atlanta, GA", latitude: 33.7490, longitude: -84.3880 },
    { name: "Omaha, NE", latitude: 41.2565, longitude: -95.9345 },
    { name: "Raleigh, NC", latitude: 35.7796, longitude: -78.6382 },
    { name: "Miami, FL", latitude: 25.7617, longitude: -80.1918 },
    { name: "Long Beach, CA", latitude: 33.7701, longitude: -118.1937 },
    { name: "Virginia Beach, VA", latitude: 36.8529, longitude: -75.9780 },
    { name: "Oakland, CA", latitude: 37.8044, longitude: -122.2711 },
    { name: "Minneapolis, MN", latitude: 44.9778, longitude: -93.2650 },
    { name: "Tulsa, OK", latitude: 36.1539, longitude: -95.9928 },
    { name: "Arlington, TX", latitude: 32.7357, longitude: -97.1081 },
    { name: "New Orleans, LA", latitude: 29.9511, longitude: -90.0715 },
    { name: "Wichita, KS", latitude: 37.6872, longitude: -97.3301 },
    { name: "Cleveland, OH", latitude: 41.4993, longitude: -81.6944 },
    { name: "Tampa, FL", latitude: 27.9506, longitude: -82.4572 },
    { name: "Bakersfield, CA", latitude: 35.3733, longitude: -119.0187 },
    { name: "Aurora, CO", latitude: 39.7294, longitude: -104.8319 },
    { name: "Honolulu, HI", latitude: 21.3069, longitude: -157.8583 },
    { name: "Anaheim, CA", latitude: 33.8366, longitude: -117.9143 },
    { name: "Santa Ana, CA", latitude: 33.7455, longitude: -117.8677 },
    { name: "Corpus Christi, TX", latitude: 27.8006, longitude: -97.3964 },
    { name: "Riverside, CA", latitude: 33.9806, longitude: -117.3755 },
    { name: "Lexington, KY", latitude: 38.0406, longitude: -84.5037 },
    { name: "St. Louis, MO", latitude: 38.6270, longitude: -90.1994 },
    { name: "Stockton, CA", latitude: 37.9577, longitude: -121.2908 },
    { name: "Pittsburgh, PA", latitude: 40.4406, longitude: -79.9959 },
    { name: "St. Paul, MN", latitude: 44.9537, longitude: -93.0900 },
    { name: "Cincinnati, OH", latitude: 39.1031, longitude: -84.5120 },
    { name: "Anchorage, AK", latitude: 61.2181, longitude: -149.9003 },
    { name: "Henderson, NV", latitude: 36.0395, longitude: -114.9817 },
    { name: "Greensboro, NC", latitude: 36.0726, longitude: -79.7920 },
    { name: "Plano, TX", latitude: 33.0198, longitude: -96.6989 },
    { name: "Newark, NJ", latitude: 40.7357, longitude: -74.1724 },
    { name: "Lincoln, NE", latitude: 40.8136, longitude: -96.7026 },
    { name: "Orlando, FL", latitude: 28.5383, longitude: -81.3792 },
    { name: "Irvine, CA", latitude: 33.6846, longitude: -117.8265 },
    { name: "Toledo, OH", latitude: 41.6528, longitude: -83.5379 },
    { name: "Durham, NC", latitude: 35.9940, longitude: -78.8986 },
    { name: "Chula Vista, CA", latitude: 32.6401, longitude: -117.0842 },
    { name: "Fort Wayne, IN", latitude: 41.0793, longitude: -85.1394 },
    { name: "Jersey City, NJ", latitude: 40.7178, longitude: -74.0431 },
    { name: "St. Petersburg, FL", latitude: 27.7676, longitude: -82.6403 },
    { name: "Laredo, TX", latitude: 27.5036, longitude: -99.5075 },
    { name: "Madison, WI", latitude: 43.0731, longitude: -89.4012 },
    { name: "Chandler, AZ", latitude: 33.3062, longitude: -111.8413 },
    { name: "Buffalo, NY", latitude: 42.8864, longitude: -78.8784 },
    { name: "Lubbock, TX", latitude: 33.5779, longitude: -101.8552 },
    { name: "Scottsdale, AZ", latitude: 33.4942, longitude: -111.9261 },
    { name: "Reno, NV", latitude: 39.5296, longitude: -119.8138 },
    { name: "Glendale, AZ", latitude: 33.5387, longitude: -112.1860 },
    { name: "Gilbert, AZ", latitude: 33.3528, longitude: -111.7890 },
    { name: "Winston-Salem, NC", latitude: 36.0999, longitude: -80.2442 },
    { name: "North Las Vegas, NV", latitude: 36.1989, longitude: -115.1175 },
    { name: "Norfolk, VA", latitude: 36.8508, longitude: -76.2859 },
    { name: "Chesapeake, VA", latitude: 36.7682, longitude: -76.2875 },
    { name: "Garland, TX", latitude: 32.9126, longitude: -96.6389 },
    { name: "Irving, TX", latitude: 32.8140, longitude: -96.9489 },
    { name: "Hialeah, FL", latitude: 25.8576, longitude: -80.2781 }
];
