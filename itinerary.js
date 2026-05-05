// ============================================================
//  Singapore + Indonesia trip — itinerary data
//  group: "sg" = Singapore team only
//         "all" = full group
// ============================================================

const TRIP = {
  title: "Singapore + Indonesia",
  subtitle: "May 2026",
  startDate: "2026-05-07",
  endDate:   "2026-05-24",
  notes: [
    "Day 4 in Bali (originally Mount Abang OR East Bali) was replaced with Nusa Penida per the overview schedule. Abang ridge hike + East Bali / Virgin Beach / Ujung Palace remain great fallbacks if Penida is dropped.",
    "Jomblang Cave on 20 May is geographically near Yogyakarta, not Malang — confirm with the local operator whether the day-trip from Malang is realistic, or substitute a closer East Java cave.",
    "Tumpak Sewu can also be combined with the Bromo–Ijen circuit on 22 May; we kept it on 23 May to leave room for crossing back to Bali.",
    "Singapore → Bali flight on 9 May: 17:45 → 20:25 Denpasar. Confirm carrier and exact times once tickets are booked.",
    "Thuan & Samy land in Bali on 10 May at 16:35; the rest of the group will be back in Canggu around 18:00 — plan a group dinner that evening."
  ],
  days: [
    // ---------------- SINGAPORE ----------------
    {
      date: "2026-05-07",
      weekday: "Thursday",
      group: "sg",
      city: "Singapore",
      headline: "Arrival in Singapore",
      summary: "Land, check in, dinner, and a first walk to Marina Bay Sands.",
      hotel: { name: "CUBE SOCIAL BOUTIQUE CAPSULE HOTEL", area: "Singapore"},
      schedule: [
        { time: "17:00–18:00", activity: "Arrival in Singapore", location: "Changi Airport" },
        { time: "19:00", activity: "Check-in at the hotel", location: "Hotel" },
        { time: "20:00", activity: "Dinner", location: "Near hotel" },
        { time: "21:00", activity: "Walk to Marina Bay Sands via the Merlion and the Esplanade — Singapore skyline", location: "Marina Bay" }
      ]
    },
    {
      date: "2026-05-08",
      weekday: "Friday",
      group: "sg",
      city: "Singapore",
      headline: "Gardens by the Bay & East Coast",
      summary: "Lush gardens, coastal cycling, hawker feast at sundown.",
      hotel: { nname: "CUBE SOCIAL BOUTIQUE CAPSULE HOTEL", area: "Singapore" },
      schedule: [
        { time: "10:00", activity: "Gardens by the Bay — Supertree Grove & lush gardens", location: "Gardens by the Bay" },
        { time: "12:00", activity: "Parkland Green by Bike — coastal cycling along East Coast Park", location: "East Coast Park" },
        { time: "14:00", activity: "Lunch at East Coast Lagoon Food Village — satay, grilled prawns, sambal stingray", location: "East Coast Lagoon Food Village" },
        { time: "Afternoon", activity: "Sunset at the Lagoon — hawker stalls + seaside", location: "East Coast" },
        { time: "Evening", activity: "Optional alt route: Marine Parade MRT → 328 Katong Laksa", location: "Katong / Marine Parade" }
      ]
    },
    {
      date: "2026-05-09",
      weekday: "Saturday",
      group: "sg",
      city: "Singapore → Bali",
      headline: "Beach morning, then fly to Bali",
      summary: "Last beach hours in Singapore, evening flight to Denpasar.",
      hotel: { name: "SS Beach Villa", area: "Gg. Dharma, Canggu, Kec. Kuta Utara, Kabupaten Badung, Bali 80361", note: "Late check-in around 21:00." },
      schedule: [
        { time: "10:00", activity: "Beach and freestyle time", location: "Singapore beach (East Coast / Sentosa)" },
        { time: "15:00", activity: "Get ready for the airport — pack up, check out", location: "Hotel" },
        { time: "15:45", activity: "Depart for the airport", location: "→ Changi Airport" },
        { time: "17:45", activity: "Flight Singapore → Bali (Denpasar)", location: "Flight" },
        { time: "20:25", activity: "Arrival in Bali (Denpasar)", location: "Ngurah Rai Airport" },
        { time: "21:00", activity: "Check-in at hotel in Canggu", location: "Canggu" },
        { time: "22:00", activity: "Late dinner", location: "Canggu" }
      ]
    },

    // ---------------- BALI / INDONESIA — FULL GROUP ----------------
    {
      date: "2026-05-10",
      weekday: "Sunday",
      group: "all",
      city: "Canggu, Bali",
      headline: "West Bali Coast + Jatiluwih",
      summary: "Hidden black-sand beaches and the UNESCO rice terrace hike. Thuan & Samy land 19:00.",
      tag: "Thuan & Samy arrive 19:00",
      hotel: { name: "SS Beach Villa", area: "Canggu, Bali", note: "Base for the first 4 nights in Bali." },
      schedule: [
        { time: "08:00", activity: "Depart Canggu", location: "Canggu → West Bali" },
        { time: "09:00–12:00", activity: "Kedungu & Soka black-sand beaches → Balian Beach (cliffs, swim/surf, beachside cafés)", location: "West Bali coast" },
        { time: "13:00", activity: "Lunch at Jatiluwih Heaven or Gong Jatiluwih", location: "Jatiluwih" },
        { time: "14:00–16:30", activity: "Jatiluwih UNESCO rice terrace hike (2–3 hrs, multiple loop trails)", location: "Jatiluwih" },
        { time: "19:00", activity: "Back in Canggu — meet up with Thuan & Samy", location: "Canggu" },
        { time: "Evening", activity: "Group dinner — first night with the full team", location: "Canggu" }
      ],
      tour: "Suggested: “West Bali Coastal + Jatiluwih Trek Private Tour”"
    },
    {
      date: "2026-05-11",
      weekday: "Monday",
      group: "all",
      city: "Canggu, Bali",
      headline: "Munduk Highlands",
      summary: "Three waterfalls, jungle ridge walk and Twin Lakes — cool mountain air.",
      hotel: { name: "SS Beach Villa", area: "Canggu, Bali", note: "Same Canggu base — return for the night." },
      schedule: [
        { time: "07:00", activity: "Depart Canggu", location: "→ Munduk" },
        { time: "09:00–12:00", activity: "Munduk Waterfall Loop — Red Coral, Labuhan Kebo, Melanting (2–3 hrs, shaded jungle)", location: "Munduk" },
        { time: "12:30", activity: "Lunch at a local warung", location: "Munduk" },
        { time: "14:00–17:00", activity: "Twin Lakes Jungle Ridge Walk (Buyan–Tamblingan), optional canoe + coffee plantation stop", location: "Twin Lakes / Munduk Moding" },
        { time: "17:00", activity: "Drive back to Canggu", location: "→ Canggu" },
        { time: "Evening", activity: "Dinner & rest", location: "Canggu" }
      ],
      tour: "Suggested: “Munduk Waterfalls + Twin Lakes Private Trekking Day Tour”"
    },
    {
      date: "2026-05-12",
      weekday: "Tuesday",
      group: "all",
      city: "Canggu, Bali",
      headline: "FreeStyle -Nusa Penida, Snorkeling  ",
      summary: "Pure free style day.",
      hotel: { name: "CSS Beach Villa", area: "Canggu, Bali", note: "Same Canggu base." },
      schedule: [
        { time: "07:00", activity: "Depart Canggu", location: "→ Ubud area" },
        { time: "Morning", activity: "Freestyle", location: "Ayung / Telaga Waja" },
        { time: "Midday", activity: "Lunch", location: "Ubud area" },
        { time: "Afternoon", activity: "Freestyle" },
        { time: "Late PM", activity: "Optional Tibumana or Tukad Cepung Waterfall stop", location: "Bangli area" },
        { time: "Evening", activity: "Drive back to Canggu — dinner & rest", location: "Canggu" }
      ],
      tour: "Suggested: “Freestyle”"
    },
    {
      date: "2026-05-13",
      weekday: "Wednesday",
      group: "all",
      city: "Canggu, Bali",
      headline: "Last day in Bali",
      summary: "Ubud Art & Crafts",
      hotel: { name: "Canggu villa / hotel", area: "Canggu, Bali — TBC", note: "Last night in Canggu." },
      schedule: [
        { time: "07:30–08:30", activity: "Schedule not defined"}
      ]
    },
    {
      date: "2026-05-14",
      weekday: "Thursday",
      group: "all",
      city: "Gili (Lombok)",
      headline: "Boat to Gili Islands",
      summary: "Travel day. Padang Bai → Gili. Snorkel and bikes the rest of the day.",
      hotel: { name: "Gili Trawangan", area: "Gili Trawangan, Gili Trawangan, 83611", note: "1/2 in the Gilis." },
      schedule: [
        { time: "07:00", activity: "Check out, drive to Padang Bai harbour", location: "Canggu → Padang Bai" },
        { time: "10:30", activity: "Fast boat Padang Bai → Gili (~2-4hrs)", location: "→ Gili" },
        { time: "14:00", activity: "Arrival on Gili — check into accommodation", location: "Gili Islands" },
        { time: "15:00", activity: "Beach day", location: "Gili" },
        { time: "Evening", activity: "Sunset drinks + dinner on the beach", location: "Gili" }
      ]
    },
    {
      date: "2026-05-15",
      weekday: "Friday",
      group: "all",
      city: "Gili ",
      headline: "Gili Islands — full day",
      summary: "Snorkelling with turtles, beach time, sunset on the west side.",
      hotel: { name: "Gili Trawangan", area: "Gili Trawangan, Gili Trawangan, 83611", note: "2/2 in the Gilis." },
      schedule: [
        { time: "Morning", activity: "Snorkelling trip — Gili Meno turtles, statue dive site", location: "Around the three Gilis" },
        { time: "Afternoon", activity: "Beach time, paddleboard, optional freediving / scuba", location: "Gili" },
        { time: "Evening", activity: "Sunset on the west side + dinner", location: "Gili" }
      ]
    },
    {
      date: "2026-05-16",
      weekday: "Saturday",
      group: "all",
      city: "Lombok",
      headline: "Freestyle in Lombok",
      summary: "Optional mainland Lombok beaches + a beach party in the evening.",
      hotel: { name: "Lombok", area: "Jalan Bypass BIL km.2 - Praya, Praya, 83572", note: "1/1 in Lombok" },
      schedule: [
        { time: "Morning", activity: "Boat / transfer to mainland Lombok or extended Gili day", location: "Lombok" },
        { time: "Afternoon", activity: "Beach activities — swim, snorkel, surf at Selong Belanak (mainland)", location: "Lombok / Gili" },
        { time: "Evening", activity: "Beach Party — music, food, drinks on the sand", location: "Lombok" }
      ]
    },
    {
      date: "2026-05-17",
      weekday: "Sunday",
      group: "all",
      city: "Yogyakarta (Java)",
      headline: "Flight to Yogyakarta",
      summary: "Travel day. Land in Java in time for a gudeg dinner.",
      hotel: { name: "Nextdoor Rooms", area: "Jalan Parangtritis, Gang Timuran MG III/140, Mergangsan, Mergangsan, 55153 Yogyakarta, Indonesi", note: "1/2 in Yogyakarta." },
      schedule: [
        { time: "Morning", activity: "Flight", location: "→ airport" },
        { time: "Midday", activity: "Check-in to Yogyakarta", location: "Flight → YIA / JOG" },
        { time: "Afternoon", activity: "Rest in Yogyakarta", location: "Yogyakarta" },
        { time: "Evening", activity: "Dinner — try gudeg (jackfruit specialty)", location: "Yogyakarta" }
      ]
    },
    {
      date: "2026-05-18",
      weekday: "Monday",
      group: "all",
      city: "Yogyakarta (Java)",
      headline: "Cave in Yogi",
      summary: "Jomblang Cave Tour",
      hotel: {  name: "Nextdoor Rooms", area: "Jalan Parangtritis, Gang Timuran MG III/140, Mergangsan, Mergangsan, 55153 Yogyakarta, Indonesi", note: "2/2 in Yogyakarta."},
      schedule: [
        { time: "07:00–17:00", activity: "Jomblang Cave Tour", location: "Jomblang" },
        { time: "19:30", activity: "Dinner & return to Yogyakarta", location: "Yogyakarta" }
      ]
    },
    {
      date: "2026-05-19",
      weekday: "Tuesday",
      group: "all",
      city: "Malang (Java)",
      headline: "Prambanan + Train to Malang",
      summary: "Morning at the great Hindu temple, then a long scenic train ride east.",
      hotel: { name: "Rice Field Villa", area: "Tumpang", note: "1/2 in Malang." },
      schedule: [
        { time: "08:00–11:00", activity: "Prambanan Hindu Temple complex — UNESCO 9th-century temples", location: "Prambanan" },
        { time: "11:30", activity: "Lunch", location: "Yogyakarta area" },
        { time: "Afternoon", activity: "Train Yogyakarta → Malang (~7–8 hrs scenic)", location: "Train → Malang" },
        { time: "Evening", activity: "Arrival in Malang — check in & dinner", location: "Malang" }
      ]
    },
    {
      date: "2026-05-20",
      weekday: "Wednesday",
      group: "all",
      city: "Malang (Java)",
      headline: "Free Style",
      summary: "Vertical cave descent for the “heavenly light”, then a jungle waterfall.",
      tag: "Confirm Coban Palangi Waterfall",
      hotel: { name: "Rice Field Villa", area: "Tumpang, Indonesia", note: "2/2 in Tumpang." },
      schedule: [
        { time: "Early AM", activity: "Coban Palangi Waterfall", location: "Cave site" },
        { time: "Evening", activity: "Dinner in Malang", location: "Malang" }
      ]
    },
    {
      date: "2026-05-21",
      weekday: "Thursday",
      group: "all",
      city: "Bromo (Java)",
      headline: "Tumpak Sewu Waterfall",
      summary: "We explore the Tumpak nature",
      hotel: { name: "Tumpak", area: "Tumpak", note: "Stay in Bromo-tour starts." },
      schedule: [
        { time: "8:00-13:00", activity: "Wake up — 4WD jeep up to Tumpak Waterfall viewpoint", location: "Bromo" },
        { time: "04:30", activity: "Sunrise viewpoint at King Kong Hill / Penanjakan", location: "Bromo viewpoint" },
        { time: "06:30", activity: "Cross the Sea of Sand — walk/horse up to the crater rim", location: "Bromo crater" },
        { time: "09:00", activity: "Breakfast", location: "Bromo area" },
        { time: "Afternoon", activity: "Rest, optional Whispering Sands or Teletubbies Hill stop", location: "Bromo" },
        { time: "Evening", activity: "Dinner & sleep in Bromo (early start for Ijen)", location: "Bromo" }
      ]
    },
    {
      date: "2026-05-22",
      weekday: "Friday",
      group: "all",
      city: "Bromo (Java)",
      headline: "Bromo Hike",
      summary: "Bromo Guided Tour.",
      hotel: { name: "Bromo / East Java lodge", area: "Bromo / East Java — TBC", note: "Rest day after Ijen." },
      schedule: [
        { time: "04:30", activity: "Sunrise viewpoint at King Kong Hill / Penanjakan", location: "Bromo viewpoint" },
        { time: "06:30", activity: "Cross the Sea of Sand — walk/horse up to the crater rim", location: "Bromo crater" },
        { time: "09:00", activity: "Breakfast", location: "Bromo area" },
        { time: "Afternoon", activity: "Rest, optional Whispering Sands or Teletubbies Hill stop", location: "Bromo" },
        { time: "Evening", activity: "Dinner & sleep in Bromo (early start for Ijen)", location: "Bromo" }
      ]
    },
    {
      date: "2026-05-23",
      weekday: "Saturday",
      group: "all",
      city: "Denpasar (Bali)",
      headline: "Mount Ijen — Blue Fire & Crater Lake → Bali",
      summary: "Midnight hike, sulfur blue flames, sunrise over the turquoise acid lake., ferry back to Bali, final dinner.",
      hotel: { name: "Bali hotel (final night)", area: "Denpasar / Sanur — TBC", note: "Last night before flying home." },
      schedule: [
        { time: "00:30", activity: "Transfer Bromo → Ijen base camp (~4 hrs)", location: "Bromo → Ijen" },
        { time: "01:30", activity: "Start hike up Mount Ijen (~1.5–2 hrs)", location: "Ijen" },
        { time: "03:30", activity: "Descend into the crater for the blue fire (gas masks required)", location: "Ijen crater" },
        { time: "05:30", activity: "Sunrise over the turquoise acid lake", location: "Ijen rim" },
        { time: "07:30", activity: "Hike back down + breakfast", location: "Ijen base" },
         { time: "Afternoon", activity: "Ferry across to Bali (Gilimanuk) → Denpasar / Sanur", location: "Java → Bali" },
        { time: "Evening", activity: "Final dinner in Bali", location: "Denpasar / Sanur" }
  
      ]
    },
    {
      date: "2026-05-24",
      weekday: "Sunday",
      group: "all",
      city: "→ Singapore",
      headline: "Flight back to Singapore",
      summary: "Pack up and fly home. End of trip.",
      hotel: { name: "—", area: "Departure day", note: "No accommodation needed." },
      schedule: [
        { time: "Morning", activity: "Pack up, check out, leisurely breakfast", location: "Bali" },
        { time: "Midday", activity: "Transfer to Ngurah Rai Airport (DPS)", location: "→ Bali airport" },
        { time: "Afternoon", activity: "Flight Bali → Singapore", location: "Flight" },
        { time: "Evening", activity: "Arrival in Singapore — end of trip", location: "Singapore" }
      ]
    }
  ]
};