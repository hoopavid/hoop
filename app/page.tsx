export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

{/* HEADER */}
<section className="bg-zinc-950 border-b border-yellow-400 p-8">
  <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">

    {/* LEFT: PLAYER INFO */}
    <div className="flex items-center gap-6">

      <img
        src="/images/profile.jpg"
        alt="AAYAN SHARMA"
        className="w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-yellow-400 object-cover"
      />

      <div>

        <h1 className="text-4xl font-bold text-yellow-400">
          AAYAN SHARMA
        </h1>

        <p className="text-gray-400 mt-1">
          Combo Guard • Sharp Shooter • Class of 2027 • #25
        </p>

        <p className="text-gray-500 text-sm mt-1">
          James Logan High School • Road Runner AAU
        </p>

        {/* MOBILE INSTAGRAM (only shows on small screens) */}
        <div className="mt-2 md:hidden text-xs text-gray-400">
          Instagram:{" "}
          <a
            href="https://instagram.com/aayans325"
            target="_blank"
            className="text-yellow-400 font-semibold hover:underline"
          >
            @aayans325
          </a>
        </div>

      </div>

    </div>

    {/* DESKTOP INSTAGRAM */}
    <div className="hidden md:block md:text-right text-xs text-gray-400">
      Instagram:{" "}
      <a
        href="https://instagram.com/aayans325"
        target="_blank"
        className="text-yellow-400 font-semibold hover:underline"
      >
        @aayans325
      </a>
    </div>

  </div>
</section>


      {/* PLAYER SNAPSHOT */}
      <section className="p-8">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-yellow-400 text-2xl font-bold mb-6">
            PLAYER SNAPSHOT
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {/* PHYSICAL PROFILE */}
            <div className="border border-yellow-400 rounded-xl p-6 bg-zinc-950">

              <h3 className="text-yellow-400 font-bold mb-4">
                PHYSICAL PROFILE
              </h3>

              <div className="space-y-3 text-gray-300">

                <Row label="Height" value="6'3”" />
                <Row label="Weight" value="160 lbs" />
                <Row label="Position" value="SG / PG" />
                <Row label="Class" value="2027" />
                <Row label="School" value="James Logan HS, California" />

              </div>

            </div>

            {/* STATS */}
            <div className="border border-yellow-400 rounded-xl p-6 bg-zinc-950">

              <h3 className="text-yellow-400 font-bold mb-4">
                PERFORMANCE STATS
              </h3>

              <div className="space-y-4">

                <StatBar label="Points Per Game" value={22.2} max={30} />
                <StatBar label="3PT Shooting" value={40.7} max={50} suffix="%" />
                <StatBar label="Assists Per Game" value={8.7} max={12} />

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* FEATURED HIGHLIGHTS */}
      <section className="p-8 bg-zinc-950">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-yellow-400 text-2xl font-bold mb-6">
            FEATURED HIGHLIGHTS
          </h2>

          {/* FEATURED */}
          <div className="mb-8 border border-yellow-400 rounded-xl overflow-hidden">

            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/mrbZo39qZj0"
              allowFullScreen
            />

          </div>

          {/* More Highlights */}
          <h3 className="text-yellow-400 font-bold mb-4">
            MORE HIGHLIGHTS
          </h3>

          <div className="grid md:grid-cols-2 gap-6">

            <FilmCard title="AAU Circuit Film" />
            <FilmCard title="vs Oakland High School" />
            <FilmCard title="Clutch Moments" />
            <FilmCard title="Skill Workout Film" />

          </div>

        </div>
      </section>


{/* SCHEDULE */}
<section className="p-8">
  <div className="max-w-5xl mx-auto">

    <h2 className="text-yellow-400 text-2xl font-bold mb-6">
      UPCOMING SCHEDULE
    </h2>

    <div className="space-y-4">

      <Game
        date="May 15–17, 2026"
        opponent="Tulsa, OK (LIVE)"
        location="Tulsa Expo Center — Tulsa, OK"
        map="https://www.google.com/maps/search/?api=1&query=Tulsa+Expo+Center+Tulsa+OK"
      />

      <Game
        date="May 22–24, 2026"
        opponent="Centralia, WA"
        location="NW Sportshub — Centralia, WA"
        map="https://www.google.com/maps/search/?api=1&query=NW+Sportshub+Centralia+WA"
      />

      <Game
        date="Jul 03–05, 2026"
        opponent="Seal Beach, CA"
        location="Aim Sport Complex — Seal Beach, CA"
        map="https://www.google.com/maps/search/?api=1&query=Aim+Sport+Complex+Seal+Beach+CA"
      />

      <Game
        date="Jul 09–12, 2026"
        opponent="Richmond, VA (LIVE)"
        location="Greater Richmond Convention Center & Henrico Sports Center — VA"
        map="https://www.google.com/maps/search/?api=1&query=Greater+Richmond+Convention+Center+Henrico+Sports+Center+VA"
      />

      <Game
        date="Jul 16–19, 2026"
        opponent="Bryan, TX (LIVE)"
        location="Legends Event Center — Bryan, TX"
        map="https://www.google.com/maps/search/?api=1&query=Legends+Event+Center+Bryan+TX"
      />

      <Game
        date="Jul 22–26, 2026"
        opponent="FINALS: Orlando, FL (Live)"
        location="Orange County Convention Center — Orlando, FL"
        map="https://www.google.com/maps/search/?api=1&query=Orange+County+Convention+Center+Orlando+FL"
      />

    </div>

  </div>
</section>


      {/* EVALUATION */}
      <section className="p-8 bg-zinc-950">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-yellow-400 text-2xl font-bold mb-4">
            PLAYER EVALUATION
          </h2>

          <div className="border border-yellow-400 rounded-xl p-6 text-gray-300">

            Strong perimeter shooter with consistent scoring ability from three-point range.
            Capable secondary ball handler with solid court vision.
            Plays within system and makes smart decisions under pressure.
            Needs continued development in defensive strength and physicality.

          </div>

        </div>
      </section>

    </main>
  );
}

/* ROW COMPONENT */
function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <span>{label}</span>
      <span className="text-white font-bold">{value}</span>
    </div>
  );
}

/* STAT BAR */
function StatBar({
  label,
  value,
  max,
  suffix = "",
}: {
  label: string;
  value: number;
  max: number;
  suffix?: string;
}) {
  const percent = Math.min((value / max) * 100, 100);

  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-300">{label}</span>
        <span className="text-white font-bold">
          {value}
          {suffix}
        </span>
      </div>

      <div className="w-full bg-zinc-800 h-2 rounded-full">
        <div
          className="bg-yellow-400 h-2 rounded-full"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

/* FILM CARD */
function FilmCard({ title }: { title: string }) {
  return (
    <div className="border border-yellow-400 rounded-xl overflow-hidden">

      <iframe
        className="w-full aspect-video"
        src="https://www.youtube.com/embed/mrbZo39qZj0"
        allowFullScreen
      />

      <div className="p-3 bg-black">
        <p className="text-yellow-400 font-bold text-sm">{title}</p>
        <p className="text-gray-500 text-xs">Supporting game film</p>
      </div>

    </div>
  );
}

/* GAME CARD */
function Game({
  date,
  opponent,
  location,
  map,
}: {
  date: string;
  opponent: string;
  location: string;
  map: string;
}) {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center border border-yellow-400 rounded-xl p-4 gap-3">

      {/* LEFT INFO */}
      <div>
        <p className="text-gray-400 text-sm">{date}</p>
        <p className="text-white font-bold">{opponent}</p>
        <p className="text-gray-400 text-sm">{location}</p>
      </div>

      {/* MAP BUTTON */}
      <a
        href={map}
        target="_blank"
        className="bg-yellow-400 text-black font-bold px-4 py-2 rounded-lg hover:bg-yellow-300 transition text-center"
      >
        VIEW MAP
      </a>

    </div>
  );
}