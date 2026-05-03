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
      hotel: { name: "Singapore hotel", area: "Singapore — TBC", note: "Confirm hotel name once booked." },
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
      hotel: { name: "Singapore hotel", area: "Singapore — TBC", note: "Same hotel, second night." },
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
      hotel: { name: "Canggu villa / hotel", area: "Canggu, Bali — TBC", note: "Late check-in around 21:00." },
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
      summary: "Hidden black-sand beaches and the UNESCO rice terrace hike. Thuan & Samy land 16:35.",
      tag: "Thuan & Samy arrive 16:35",
      hotel: { name: "Canggu villa / hotel", area: "Canggu, Bali — TBC", note: "Base for the first 4 nights in Bali." },
      schedule: [
        { time: "08:00", activity: "Depart Canggu", location: "Canggu → West Bali" },
        { time: "09:00–12:00", activity: "Kedungu & Soka black-sand beaches → Balian Beach (cliffs, swim/surf, beachside cafés)", location: "West Bali coast" },
        { time: "13:00", activity: "Lunch at Jatiluwih Heaven or Gong Jatiluwih", location: "Jatiluwih" },
        { time: "14:00–16:30", activity: "Jatiluwih UNESCO rice terrace hike (2–3 hrs, multiple loop trails)", location: "Jatiluwih" },
        { time: "16:35", activity: "Thuan & Samy arrive at Bali airport (Denpasar)", location: "Ngurah Rai → Canggu" },
        { time: "18:00", activity: "Back in Canggu — meet up with Thuan & Samy", location: "Canggu" },
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
      hotel: { name: "Canggu villa / hotel", area: "Canggu, Bali — TBC", note: "Same Canggu base — return for the night." },
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
      headline: "Ubud Adventure — Rafting + ATV",
      summary: "Pure action day. Rafting, jungle ATV and a quiet waterfall.",
      hotel: { name: "Canggu villa / hotel", area: "Canggu, Bali — TBC", note: "Same Canggu base." },
      schedule: [
        { time: "07:00", activity: "Depart Canggu", location: "→ Ubud area" },
        { time: "Morning", activity: "White-water rafting — Ayung (scenic) or Telaga Waja (more adrenaline)", location: "Ayung / Telaga Waja" },
        { time: "Midday", activity: "Lunch", location: "Ubud area" },
        { time: "Afternoon", activity: "Jungle ATV (1.5–2 hrs) — mud tracks, river crossings, cave tunnels", location: "Outskirts of Ubud" },
        { time: "Late PM", activity: "Optional Tibumana or Tukad Cepung Waterfall stop", location: "Bangli area" },
        { time: "Evening", activity: "Drive back to Canggu — dinner & rest", location: "Canggu" }
      ],
      tour: "Suggested: “Private Rafting + ATV Combo Ubud Adventure Day”"
    },
    {
      date: "2026-05-13",
      weekday: "Wednesday",
      group: "all",
      city: "Canggu, Bali",
      headline: "Nusa Penida — Hiking & Handcrafts",
      summary: "Day trip to Penida: Kelingking viewpoint, cliff trails, village crafts.",
      hotel: { name: "Canggu villa / hotel", area: "Canggu, Bali — TBC", note: "Last night in Canggu." },
      schedule: [
        { time: "06:30", activity: "Early departure to Sanur harbour", location: "Canggu → Sanur" },
        { time: "07:30–08:30", activity: "Fast boat to Nusa Penida (~30–45 min)", location: "Sanur → Nusa Penida" },
        { time: "09:00–13:00", activity: "Hiking — Kelingking Beach viewpoint, cliff trails, Broken Beach / Angel’s Billabong", location: "West Nusa Penida" },
        { time: "13:00–14:00", activity: "Lunch at a clifftop warung", location: "Nusa Penida" },
        { time: "14:00–17:00", activity: "Local handcrafts / village visit — weaving demos", location: "Nusa Penida village" },
        { time: "17:30", activity: "Fast boat back to Sanur", location: "Nusa Penida → Sanur" },
        { time: "19:00", activity: "Back in Canggu — dinner", location: "Canggu" }
      ]
    },
    {
      date: "2026-05-14",
      weekday: "Thursday",
      group: "all",
      city: "Gili (Lombok)",
      headline: "Boat to Gili Islands",
      summary: "Travel day. Padang Bai → Gili. Snorkel and bikes the rest of the day.",
      hotel: { name: "Gili Islands stay", area: "Gili Trawangan / Air / Meno — TBC", note: "First of three nights in the Gilis." },
      schedule: [
        { time: "07:00", activity: "Check out, drive to Padang Bai harbour", location: "Canggu → Padang Bai" },
        { time: "09:30", activity: "Fast boat Padang Bai → Gili (~1.5–2 hrs)", location: "→ Gili" },
        { time: "12:00", activity: "Arrival on Gili — check into accommodation", location: "Gili Islands" },
        { time: "13:00", activity: "Lunch by the beach", location: "Gili" },
        { time: "14:00–18:00", activity: "Snorkelling, swimming, bikes around the island (no motors allowed)", location: "Gili" },
        { time: "Evening", activity: "Sunset drinks + dinner on the beach", location: "Gili" }
      ]
    },
    {
      date: "2026-05-15",
      weekday: "Friday",
      group: "all",
      city: "Gili (Lombok)",
      headline: "Gili Islands — full day",
      summary: "Snorkelling with turtles, beach time, sunset on the west side.",
      hotel: { name: "Gili Islands stay", area: "Gili Trawangan / Air / Meno — TBC", note: "Second night in the Gilis." },
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
      headline: "Beach Party",
      summary: "Optional mainland Lombok beaches + a beach party in the evening.",
      hotel: { name: "Gili Islands stay", area: "Gili Trawangan / Air / Meno — TBC", note: "Third night in the Gilis (or 1 night mainland Lombok if doing Selong Belanak)." },
      schedule: [
        { time: "Morning", activity: "Boat / transfer to mainland Lombok or extended Gili day", location: "Lombok" },
        { time: "Afternoon", activity: "Beach activities — swim, snorkel, surf at Selong Belanak (mainland) or chill on Gili", location: "Lombok / Gili" },
        { time: "Evening", activity: "Beach Party — music, food, drinks on the sand", location: "Gili Trawangan / Lombok" }
      ]
    },
    {
      date: "2026-05-17",
      weekday: "Sunday",
      group: "all",
      city: "Yogyakarta (Java)",
      headline: "Flight to Yogyakarta",
      summary: "Travel day. Land in Java in time for a gudeg dinner.",
      hotel: { name: "Yogyakarta hotel", area: "Yogyakarta — TBC", note: "First of two nights in Yogyakarta." },
      schedule: [
        { time: "Morning", activity: "Boat to Bali / transfer to Lombok airport", location: "→ airport" },
        { time: "Midday", activity: "Flight to Yogyakarta", location: "Flight → YIA / JOG" },
        { time: "Afternoon", activity: "Arrival in Yogyakarta — check in", location: "Yogyakarta" },
        { time: "Evening", activity: "Dinner — try gudeg (jackfruit specialty)", location: "Yogyakarta" }
      ]
    },
    {
      date: "2026-05-18",
      weekday: "Monday",
      group: "all",
      city: "Yogyakarta (Java)",
      headline: "Kota Gede, Pottery & Borobudur Sunset",
      summary: "Silver district markets, hands-on pottery, then Borobudur at golden hour.",
      hotel: { name: "Yogyakarta hotel", area: "Yogyakarta — TBC", note: "Second night in Yogyakarta." },
      schedule: [
        { time: "09:00–11:30", activity: "Kota Gede — silver-smithing district, markets and crafts", location: "Kota Gede" },
        { time: "12:00", activity: "Lunch", location: "Yogyakarta" },
        { time: "13:00–15:00", activity: "Karanganyar Pottery Village — traditional pottery workshop", location: "Karanganyar" },
        { time: "15:30", activity: "Drive to Borobudur (~1 hr)", location: "→ Borobudur" },
        { time: "16:30–18:30", activity: "Borobudur Temple Sunset Tour — climb the stupa terraces at golden hour", location: "Borobudur" },
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
      hotel: { name: "Malang hotel", area: "Malang — TBC", note: "First of two nights in Malang." },
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
      headline: "Jomblang Cave + Coban Pelangi Waterfall",
      summary: "Vertical cave descent for the “heavenly light”, then a jungle waterfall.",
      tag: "Confirm Jomblang day-trip distance",
      hotel: { name: "Malang hotel", area: "Malang — TBC", note: "Second night in Malang." },
      schedule: [
        { time: "Early AM", activity: "Depart for Jomblang Cave (note: it’s closer to Yogyakarta — confirm or substitute a local Malang cave)", location: "Cave site" },
        { time: "Late AM", activity: "Cave tour — vertical descent, mid-day “heavenly light” phenomenon", location: "Jomblang / alternative" },
        { time: "Afternoon", activity: "Coban Pelangi Waterfall — short jungle hike, rainbow effect on sunny afternoons", location: "Coban Pelangi" },
        { time: "Evening", activity: "Dinner in Malang", location: "Malang" }
      ]
    },
    {
      date: "2026-05-21",
      weekday: "Thursday",
      group: "all",
      city: "Bromo (Java)",
      headline: "Mount Bromo — Sunrise & Crater",
      summary: "Pre-dawn jeep, sunrise at King Kong Hill, walk to the crater rim.",
      hotel: { name: "Bromo lodge", area: "Cemoro Lawang / Bromo area — TBC", note: "Stay in Bromo for the early Ijen start." },
      schedule: [
        { time: "00:30–01:00", activity: "Wake up — 4WD jeep up to Bromo viewpoint", location: "Malang → Bromo" },
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
      headline: "Mount Ijen — Blue Fire & Crater Lake",
      summary: "Midnight hike, sulfur blue flames, sunrise over the turquoise acid lake.",
      hotel: { name: "Bromo / East Java lodge", area: "Bromo / East Java — TBC", note: "Rest day after Ijen." },
      schedule: [
        { time: "00:30", activity: "Transfer Bromo → Ijen base camp (~4 hrs)", location: "Bromo → Ijen" },
        { time: "01:30", activity: "Start hike up Mount Ijen (~1.5–2 hrs)", location: "Ijen" },
        { time: "03:30", activity: "Descend into the crater for the blue fire (gas masks required)", location: "Ijen crater" },
        { time: "05:30", activity: "Sunrise over the turquoise acid lake", location: "Ijen rim" },
        { time: "07:30", activity: "Hike back down + breakfast", location: "Ijen base" },
        { time: "Afternoon", activity: "Rest day — optional Tumpak Sewu stop if energy allows", location: "East Java" },
        { time: "Evening", activity: "Sleep in Bromo / East Java area", location: "Bromo / Java" }
      ]
    },
    {
      date: "2026-05-23",
      weekday: "Saturday",
      group: "all",
      city: "Denpasar (Bali)",
      headline: "Tumpak Sewu Waterfall → Bali",
      summary: "Iconic “thousand waterfalls” shot, ferry back to Bali, final dinner.",
      hotel: { name: "Bali hotel (final night)", area: "Denpasar / Sanur — TBC", note: "Last night before flying home." },
      schedule: [
        { time: "Early AM", activity: "Drive to Tumpak Sewu — hike down to the base for the iconic shot", location: "Tumpak Sewu" },
        { time: "Midday", activity: "Lunch + drive to Ketapang ferry port", location: "Java east coast" },
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
