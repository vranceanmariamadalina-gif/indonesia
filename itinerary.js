// Edit dates, locations, and schedules here — the calendar and modal regenerate from this.
const TRIP_START = new Date(2026, 5, 1); // June 1, 2026 — change month index (0=Jan) and day to your trip start

const itinerary = [
  {
    day: 1,
    location: "Jakarta",
    type: "travel",
    highlight: "Arrival & old town stroll",
    schedule: [
      { time: "Afternoon", title: "Land at Soekarno-Hatta (CGK)", desc: "Grab eSIM, take Grab/Bluebird to hotel in Menteng or Kota Tua area." },
      { time: "16:00", title: "Check in & freshen up", desc: "Rest, then head out before sunset." },
      { time: "17:30", title: "Kota Tua (Old Town)", desc: "Dutch colonial square — Fatahillah Museum exterior, vintage bicycles." },
      { time: "19:00", title: "Dinner at Café Batavia", desc: "Iconic colonial-era café. Try nasi goreng or rijsttafel." },
      { time: "21:00", title: "Early night", desc: "Beat the jet lag — tomorrow is a full day." },
    ],
  },
  {
    day: 2,
    location: "Jakarta",
    type: "explore",
    highlight: "National Monument & Istiqlal",
    schedule: [
      { time: "07:30", title: "Hotel breakfast", desc: "Fuel up before the heat." },
      { time: "09:00", title: "National Monument (Monas)", desc: "Ride the elevator to the observation deck for a city panorama." },
      { time: "11:00", title: "Istiqlal Mosque", desc: "SE Asia's largest. Free guided tours; modest dress required." },
      { time: "12:30", title: "Lunch in Menteng", desc: "Try Plataran Menteng or street-side warung." },
      { time: "14:30", title: "National Museum", desc: "Indonesian history, batik, ancient kris collection." },
      { time: "17:00", title: "Coffee break", desc: "Specialty coffee at Tanamera or Kopi Tuku." },
      { time: "19:00", title: "Dinner: Lara Djonggrang", desc: "Atmospheric heritage restaurant — book ahead." },
    ],
  },
  {
    day: 3,
    location: "Yogyakarta",
    type: "travel",
    highlight: "Fly to Yogya, Kraton & Malioboro",
    schedule: [
      { time: "07:00", title: "Flight CGK → JOG", desc: "1h15m. Garuda or Citilink — book in advance." },
      { time: "10:00", title: "Check in to hotel", desc: "Stay near Prawirotaman or Tirtodipuran for cafés & galleries." },
      { time: "11:30", title: "Sultan's Palace (Kraton)", desc: "Active royal palace; gamelan performances most mornings." },
      { time: "13:30", title: "Lunch: Gudeg Yu Djum", desc: "Yogya's signature jackfruit stew — local institution." },
      { time: "15:00", title: "Taman Sari Water Castle", desc: "Old royal bathing complex with photogenic underground tunnels." },
      { time: "17:30", title: "Malioboro Street", desc: "Batik shopping, becak rides, street food stalls." },
      { time: "20:00", title: "Dinner & lesehan", desc: "Sit on mats with locals at Malioboro's evening warungs." },
    ],
  },
  {
    day: 4,
    location: "Yogyakarta",
    type: "adventure",
    highlight: "Borobudur sunrise & Prambanan",
    schedule: [
      { time: "03:30", title: "Pickup for Borobudur", desc: "Driver from hotel; bring layers, it's cool at dawn." },
      { time: "05:00", title: "Sunrise from Setumbu Hill", desc: "Best view of Borobudur emerging from the mist." },
      { time: "07:00", title: "Borobudur temple complex", desc: "Climb the 9th-century Buddhist stupa. Sarong required." },
      { time: "10:30", title: "Breakfast/brunch nearby", desc: "Plenty of cafés with rice paddy views." },
      { time: "13:00", title: "Pawon & Mendut temples", desc: "Smaller temples on the route back." },
      { time: "15:30", title: "Prambanan Hindu temple", desc: "9th-century Shiva temple complex — UNESCO site." },
      { time: "19:00", title: "Ramayana Ballet (open-air)", desc: "Performed against the lit Prambanan backdrop. Reserve seats." },
    ],
  },
  {
    day: 5,
    location: "Mt. Bromo",
    type: "travel",
    highlight: "Train to Probolinggo, transfer to Cemoro Lawang",
    schedule: [
      { time: "08:00", title: "Train JOG → Probolinggo", desc: "~7h scenic ride through Java's interior. Book executive class." },
      { time: "13:00", title: "Lunch on board / at station", desc: "Pack snacks; food carts pass through." },
      { time: "15:30", title: "Arrive Probolinggo", desc: "Pre-arranged minivan transfer up to Cemoro Lawang (~2h)." },
      { time: "18:00", title: "Check in: Cemoro Lawang", desc: "Cafe Lava Hostel or Bromo Permai — basic but warm." },
      { time: "19:00", title: "Hot dinner & rest", desc: "Layer up — it gets near freezing. Sleep early." },
    ],
  },
  {
    day: 6,
    location: "Mt. Bromo",
    type: "adventure",
    highlight: "Sunrise jeep + crater rim",
    schedule: [
      { time: "03:00", title: "Jeep pickup", desc: "Sturdy 4x4 climbs to King Kong Hill viewpoint." },
      { time: "04:30", title: "Sunrise over the caldera", desc: "Bromo, Batok, and Semeru smoking in the distance." },
      { time: "06:00", title: "Cross the Sea of Sand", desc: "Jeep drops you near the base; horse or walk to crater stairs." },
      { time: "07:00", title: "Climb the crater rim", desc: "245 steps up. Sulfur smell, stunning views inside." },
      { time: "09:00", title: "Back to hotel breakfast", desc: "Hearty nasi goreng + sweet ginger tea." },
      { time: "11:00", title: "Drive to Surabaya/Malang", desc: "Overnight in Surabaya for tomorrow's flight." },
      { time: "19:00", title: "Dinner in Surabaya", desc: "Try rawon (black beef soup) at Rawon Setan." },
    ],
  },
  {
    day: 7,
    location: "Ubud, Bali",
    type: "travel",
    highlight: "Fly to Bali, settle in Ubud",
    schedule: [
      { time: "08:00", title: "Flight SUB → DPS", desc: "1h hop to Denpasar." },
      { time: "11:00", title: "Drive to Ubud", desc: "1h30m through coastal then jungle terrain." },
      { time: "13:00", title: "Check in: Ubud villa", desc: "Stay in Penestanan, Sayan, or central Ubud." },
      { time: "14:30", title: "Lunch at Locavore To Go", desc: "Or Hujan Locale for a more upscale Indonesian tasting." },
      { time: "16:00", title: "Sacred Monkey Forest", desc: "Walk among 700+ macaques — secure your sunglasses." },
      { time: "18:00", title: "Ubud Palace area stroll", desc: "Galleries, batik shops, art market." },
      { time: "20:00", title: "Kecak fire dance", desc: "At Ubud Palace. Hypnotic chanting, no instruments." },
    ],
  },
  {
    day: 8,
    location: "Ubud, Bali",
    type: "adventure",
    highlight: "Tegallalang rice terraces + waterfalls",
    schedule: [
      { time: "06:30", title: "Sunrise yoga", desc: "Yoga Barn or Radiantly Alive." },
      { time: "08:30", title: "Breakfast: Clear Café or Sayuri", desc: "Smoothie bowls with a view." },
      { time: "10:00", title: "Tegallalang rice terraces", desc: "The classic ridges. Go early before tour buses arrive." },
      { time: "12:00", title: "Tegenungan Waterfall", desc: "Easy access, swimmable pool at the base." },
      { time: "14:00", title: "Lunch: Naughty Nuri's", desc: "Famous BBQ ribs since 1995." },
      { time: "16:00", title: "Tirta Empul water temple", desc: "Holy spring purification ritual — bring a sarong." },
      { time: "19:30", title: "Dinner: Locavore or Mosaic", desc: "Tasting menu featuring Balinese ingredients." },
    ],
  },
  {
    day: 9,
    location: "Ubud, Bali",
    type: "explore",
    highlight: "Campuhan Ridge, cooking class, spa",
    schedule: [
      { time: "06:00", title: "Campuhan Ridge Walk", desc: "1h easy walk along a green ridge — golden light at dawn." },
      { time: "08:00", title: "Breakfast: Cinta Café", desc: "Affordable Balinese plates with a paddy view." },
      { time: "10:00", title: "Cooking class: Paon Bali", desc: "Market visit + 8-dish hands-on lesson. Book ahead." },
      { time: "14:30", title: "Lunch (your own creation!)", desc: "Eat what you cooked at the class." },
      { time: "16:30", title: "Traditional Balinese spa", desc: "Karsa Spa or Fivelements — 2h package." },
      { time: "19:00", title: "Dinner: Pomegranate or Bridges", desc: "Open-air dining over the Campuhan gorge." },
    ],
  },
  {
    day: 10,
    location: "Nusa Penida",
    type: "beach",
    highlight: "Kelingking + Diamond Beach day trip",
    schedule: [
      { time: "06:00", title: "Drive to Sanur port", desc: "1h drive from Ubud." },
      { time: "07:30", title: "Fast boat to Nusa Penida", desc: "30 min crossing. Can be choppy." },
      { time: "09:00", title: "Kelingking Beach viewpoint", desc: "The 'T-Rex' cliff. Hike down only if you're fit." },
      { time: "11:30", title: "Broken Beach & Angel's Billabong", desc: "Natural infinity pool — only safe at low tide." },
      { time: "13:30", title: "Lunch at Penida Colada", desc: "Beachfront warung with cold drinks." },
      { time: "15:00", title: "Diamond Beach", desc: "White sand cove with steep stair access." },
      { time: "17:30", title: "Boat back to Sanur", desc: "Sunset on the crossing." },
      { time: "20:00", title: "Late dinner in Ubud", desc: "Something light — long day." },
    ],
  },
  {
    day: 11,
    location: "Labuan Bajo",
    type: "travel",
    highlight: "Fly to Flores, harbor sunset",
    schedule: [
      { time: "09:00", title: "Drive to Denpasar airport", desc: "1h30m from Ubud." },
      { time: "12:30", title: "Flight DPS → LBJ", desc: "1h15m to Komodo Airport." },
      { time: "14:30", title: "Check in: Labuan Bajo", desc: "Plataran, Sudamala, or Seaesta Komodo." },
      { time: "16:00", title: "Confirm boat tour", desc: "Re-confirm tomorrow's pickup, snorkel gear, life vests." },
      { time: "17:30", title: "Sunset at Paradise Bar", desc: "Hilltop bar with full harbor view." },
      { time: "19:30", title: "Dinner: Mediterraneo or Tree Top", desc: "Fresh-caught grilled fish with rice." },
    ],
  },
  {
    day: 12,
    location: "Komodo NP",
    type: "adventure",
    highlight: "Padar, Komodo dragons, Pink Beach",
    schedule: [
      { time: "05:30", title: "Boat departure", desc: "Full-day private or shared boat through the islands." },
      { time: "07:30", title: "Padar Island hike", desc: "30-min climb for the iconic three-bay viewpoint." },
      { time: "10:00", title: "Komodo Island ranger walk", desc: "1.5h guided trek. Stay close to your ranger." },
      { time: "12:30", title: "Lunch on the boat", desc: "Grilled fish, rice, sambal." },
      { time: "14:00", title: "Pink Beach snorkel", desc: "Coral garden + the famous rosy sand." },
      { time: "16:00", title: "Manta Point", desc: "Drift snorkel with manta rays (seasonal — Apr–Oct best)." },
      { time: "18:30", title: "Sunset return to harbor", desc: "Watch fruit bats fly out from Kalong Island." },
      { time: "20:30", title: "Dinner & early night", desc: "Long day — rest up." },
    ],
  },
  {
    day: 13,
    location: "Labuan Bajo",
    type: "beach",
    highlight: "Rinca dragons or rest day",
    schedule: [
      { time: "08:00", title: "Slow breakfast", desc: "You earned it." },
      { time: "10:00", title: "Rinca Island half-day (option A)", desc: "Smaller crowds, more dragons. ~3h boat round trip." },
      { time: "10:00", title: "Beach + spa day (option B)", desc: "Pool day at the resort + traditional massage." },
      { time: "14:00", title: "Lunch in town", desc: "Bajo Bakery for sandwiches, or fresh sashimi at the harbor." },
      { time: "16:00", title: "Souvenir shopping", desc: "Pearl jewelry and handwoven Manggarai textiles." },
      { time: "18:00", title: "Farewell sunset cruise", desc: "Optional 2h harbor cruise with snacks & drinks." },
      { time: "20:00", title: "Final dinner: Kaba Lounge", desc: "Indonesian tasting menu, harbor views." },
    ],
  },
  {
    day: 14,
    location: "Departure",
    type: "travel",
    highlight: "Fly home via Bali",
    schedule: [
      { time: "07:00", title: "Last breakfast", desc: "Coffee, sambal eggs, papaya." },
      { time: "09:00", title: "Pack & check out", desc: "Double-check passports, chargers, sarongs." },
      { time: "10:30", title: "Flight LBJ → DPS", desc: "1h15m." },
      { time: "14:00", title: "Lunch at DPS lounge", desc: "Long enough layover for a proper meal." },
      { time: "16:00+", title: "International flight home", desc: "Selamat tinggal, Indonesia." },
    ],
  },
];

const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function dayDate(dayNum) {
  const d = new Date(TRIP_START);
  d.setDate(d.getDate() + (dayNum - 1));
  return d;
}

function formatDate(date) {
  return `${DAY_NAMES[date.getDay()]}, ${MONTH_NAMES[date.getMonth()]} ${date.getDate()}`;
}
