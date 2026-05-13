"use client";

import Image from "next/image";
import { Oswald, Inter } from "next/font/google";
import { Instagram, Mail, Play } from "lucide-react";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const inter = Inter({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={`${inter.className} bg-black text-white min-h-screen`}>

      {/* HERO HEADER */}
      <section
        className="relative overflow-hidden border-b border-yellow-500/30"
        style={{
          backgroundImage: "url('/images/banner3.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]" />

        {/* Glow */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-yellow-500/10 via-transparent to-orange-500/10" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-14">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

            {/* LEFT */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">

              {/* PROFILE IMAGE */}
              <div className="shrink-0">
                <div className="relative w-32 h-32 md:w-40 md:h-40">

  <Image
    src="/images/profile2.png"
    alt="Aayan Sharma"
    fill
    priority
    className="
      rounded-full
      object-cover
      border-4 border-yellow-400
      shadow-[0_0_35px_rgba(250,204,21,0.35)]
    "
  />

</div>
              </div>

              {/* INFO */}
              <div className="text-center sm:text-left">

                <p className="uppercase tracking-[0.35em] text-yellow-400 text-xs mb-3">
                  Basketball Portfolio
                </p>

                <h1
                  className={`${oswald.className} text-5xl md:text-7xl leading-none uppercase text-white`}
                >
                  Aayan Sharma
                </h1>

                <div className="mt-4 flex flex-wrap justify-center sm:justify-start gap-2 text-sm">
                  <Badge text="Combo Guard" />
                  <Badge text="Sharp Shooter" />
                  <Badge text="Class of 2027" />
                </div>

                {/* PLAYER METRICS */}
<div className="mt-5 flex flex-wrap justify-center sm:justify-start gap-3 text-sm">

  <div className="bg-black/40 border border-yellow-500/20 px-3 py-2 rounded-xl">
    6&apos;3&quot; SG
  </div>

  <div className="bg-black/40 border border-yellow-500/20 px-3 py-2 rounded-xl">
    160 LBS
  </div>

  <div className="bg-black/40 border border-yellow-500/20 px-3 py-2 rounded-xl">
    4.2 GPA
  </div>

</div>
                <div className="mt-5 space-y-1 text-sm uppercase tracking-wide text-gray-300">

                  <p>
                    James Logan High School (#21)
                  </p>

                  <p>
                    Puma Circuit • Roadrunners Sports Club 17U (#25)
                  </p>

                </div>

                {/* CONTACTS MOBILE */}
                <div className="mt-5 flex flex-col gap-3 md:hidden">

                  <ContactLink
                    href="https://instagram.com/aayans325"
                    icon={<Instagram size={16} />}
                    text="@aayans325"
                  />

                  <ContactLink
                    href="mailto:aayanusa2021@gmail.com"
                    icon={<Mail size={16} />}
                    text="aayanusa2021@gmail.com"
                  />

                  {/* MOBILE PDF BUTTON */}
<a
  href="/profile.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="
    mt-1
    bg-yellow-400/10
    border border-yellow-400/30
    text-yellow-300
    text-xs
    font-semibold
    uppercase
    tracking-[0.2em]
    px-4
    py-2
    rounded-lg
    hover:bg-yellow-400/20
    hover:border-yellow-400/60
    transition
  "
>
  Download PDF
</a>  

                </div>

              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="hidden md:flex flex-col items-end gap-4 text-sm">

              <ContactLink
                href="https://instagram.com/aayans325"
                icon={<Instagram size={16} />}
                text="@aayans325"
              />

              <ContactLink
                href="mailto:aayanusa2021@gmail.com"
                icon={<Mail size={16} />}
                text="aayanusa2021@gmail.com"
              />

                {/* DOWNLOAD PDF BUTTON */}
<a
  href="/profile.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="
    mt-1
    bg-yellow-400/10
    border border-yellow-400/30
    text-yellow-300
    text-xs
    font-semibold
    uppercase
    tracking-[0.2em]
    px-4
    py-2
    rounded-lg
    hover:bg-yellow-400/20
    hover:border-yellow-400/60
    transition
  "
>
  Download PDF
</a>

            </div>

          </div>

        </div>

          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-black" />


      </section>

      {/* PLAYER SNAPSHOT */}
      <section className="py-14 px-6">
        <div className="max-w-6xl mx-auto">

          <SectionTitle title="Player Overview" />

          <div className="grid md:grid-cols-2 gap-8">

            {/* PROFILE */}
            <Card>

              <SubTitle title="Profile" />

              <div className="space-y-4">

                <Row label="Height" value={`6'3"`} />
                <Row label="Weight" value="160 lbs" />
                <Row label="Position" value="SG / PG" />
                <Row label="Class" value="2027" />
                <Row label="School" value="James Logan HS" />
                <Row label="Wingspan" value={`6'6"`} />
                <Row label="Vertical" value={`36"`} />

              </div>

            </Card>

            {/* STATS */}
            <Card>

              <SubTitle title="Performance Stats" />

              <div className="space-y-6">

                <StatBar
                  label="Points Per Game"
                  value={22.2}
                  max={30}
                />

                <StatBar
                  label="3PT Shooting"
                  value={40.7}
                  max={50}
                  suffix="%"
                />

                <StatBar
                  label="Assists Per Game"
                  value={8.7}
                  max={12}
                />

              </div>

            </Card>

          </div>

        </div>
      </section>

{/* ACCOMPLISHMENTS */}
<section className="py-14 px-6">
  <div className="max-w-6xl mx-auto">

    <h2
      className={`${oswald.className} text-yellow-400 text-3xl md:text-4xl uppercase tracking-wide mb-6`}
    >
      NOTABLE ACCOMPLISHMENTS
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* CARD 1 */}
      <div className="border border-yellow-400/60 rounded-2xl bg-zinc-950/80 backdrop-blur-md shadow-xl p-6">

        <p className="text-yellow-400 text-xs uppercase tracking-[0.2em] font-semibold">
          Elite Shooting
        </p>

        <h3 className="text-white text-2xl font-bold mt-3 leading-tight">
          Most 3-Pointers Made In League
        </h3>

        <p className="text-gray-400 text-sm mt-4 leading-6">
          Established himself as one of the league’s top perimeter shooters
          with consistent range and high-volume efficiency.
        </p>

      </div>

      {/* CARD 2 */}
      <div className="border border-yellow-400/60 rounded-2xl bg-zinc-950/80 backdrop-blur-md shadow-xl p-6">

        <p className="text-yellow-400 text-xs uppercase tracking-[0.2em] font-semibold">
          Scoring Efficiency
        </p>

        <h3 className="text-white text-2xl font-bold mt-3 leading-tight">
          Averaged 52% Field Goal Shooting
        </h3>

        <p className="text-gray-400 text-sm mt-4 leading-6">
          Demonstrated efficient shot selection and offensive consistency
          throughout the season.
        </p>

      </div>

    </div>

  </div>
</section>


      {/* HIGHLIGHTS */}
      <section className="py-14 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">

          <SectionTitle title="Featured Highlights" />

          {/* FEATURED VIDEO */}
{/* FEATURED VIDEO */}
<div className="relative overflow-hidden rounded-3xl border border-yellow-500/20 shadow-2xl mb-10">

  {/* TITLE OVERLAY */}
  <div className="absolute top-4 left-4 z-10">

    <div className="bg-black/70 backdrop-blur-sm border border-yellow-400/30 px-4 py-2 rounded-xl shadow-lg">

      <p className="text-yellow-400 text-[10px] md:text-xs uppercase tracking-[0.25em]">
        Featured Highlight Film
      </p>

    </div>

  </div>

  {/* VIDEO */}
  <iframe
    className="w-full aspect-video"
    src="https://www.youtube.com/embed/mrbZo39qZj0"
    allowFullScreen
  />

</div>


          <SubTitle title="More Highlights" />

          <div className="grid md:grid-cols-2 gap-6">

            <FilmCard title="AAU Circuit Film" />
            <FilmCard title="vs Oakland High School" />
            <FilmCard title="Clutch Moments" />
            <FilmCard title="Skill Workout Film" />

          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section className="py-14 px-6">
        <div className="max-w-6xl mx-auto">

          <SectionTitle title="2026 Puma Circuit Schedule" />

         <div className="mb-8 flex items-center gap-3">

  <div className="h-px flex-1 bg-gradient-to-r from-yellow-500/40 to-transparent" />

  <div className="px-4 py-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 backdrop-blur-sm">

    <p className="text-yellow-300 text-xs md:text-sm uppercase tracking-[0.3em] font-semibold">
      Roadrunners Sports Club 17U
    </p>

  </div>

  <div className="h-px flex-1 bg-gradient-to-l from-yellow-500/40 to-transparent" />

</div>

          <div className="space-y-5">

            <Game
              date="May 15–17, 2026"
              opponent="Tulsa, OK (LIVE)"
              location="Tulsa Expo Center — Tulsa, OK"
              query="Tulsa Expo Center Tulsa OK"
            />

<Game
  date="May 22–24, 2026"
  opponent="Centralia, WA"
  location="NW Sportshub — Centralia, WA"
  query="NW Sportshub Centralia WA"
/>

<Game
  date="Jul 03–05, 2026"
  opponent="Seal Beach, CA"
  location="Aim Sport Complex — Seal Beach, CA"
  query="Aim Sport Complex Seal Beach CA"
/>

<Game
  date="Jul 09–12, 2026"
  opponent="Richmond, VA (LIVE)"
  location="Greater Richmond Convention Center & Henrico Sports Center — VA"
  query= "Greater Richmond Convention Center & Henrico Sports Center VA"
/>

<Game
  date="Jul 16–19, 2026"
  opponent="Bryan, TX (LIVE)"
  location="Legends Event Center — Bryan, TX"
  query="Legends Event Center Bryan TX"
/>

<Game
  date="Jul 22–26, 2026"
  opponent="FINALS: Orlando, FL (LIVE)"
  location="Orange County Convention Center — Orlando, FL"
  query="Orange County Convention Center Orlando FL"
/>

          </div>

        </div>
      </section>

      {/* EVALUATION */}
      <section className="py-14 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">

          <SectionTitle title="Player Evaluation" />

          <div className="rounded-3xl border border-yellow-500/20 bg-black/40 p-8 text-gray-300 leading-8 shadow-xl">

            Strong perimeter shooter with consistent scoring ability from
            three-point range. Capable secondary ball handler with strong
            court vision and pace control. Plays within the system, makes
            smart decisions under pressure, and competes with confidence.
            Continuing to develop defensive physicality and finishing
            through contact.

          </div>

        </div>
      </section>

      {/* FOOTER */}
<footer className="border-t border-yellow-500/10 py-10 text-center">

  <p className="text-gray-500 text-sm">
    © 2026 Aayan Sharma Basketball Portfolio
  </p>

  <p className="text-gray-700 text-xs mt-2 uppercase tracking-[0.2em]">
    James Logan High School • Puma Circuit
  </p>

</footer>

    </main>
  );
}

/* SECTION TITLE */
function SectionTitle({
  title,
}: {
  title: string;
}) {
  return (
<h2
  className={`${oswald.className} text-3xl md:text-4xl text-yellow-400 mb-8 uppercase tracking-wide`}
>      {title}
    </h2>
  );
}

/* SUBTITLE */
function SubTitle({
  title,
}: {
  title: string;
}) {
  return (
    <h3 className="text-xl font-semibold text-yellow-400 uppercase tracking-wide mb-5">
      {title}
    </h3>
  );
}

/* CARD */
function Card({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-yellow-500/20 bg-zinc-950/70 backdrop-blur-md p-7 shadow-xl">
      {children}
    </div>
  );
}

/* BADGE */
function Badge({
  text,
}: {
  text: string;
}) {
  return (
    <div className="bg-yellow-400/10 border border-yellow-400/20 text-yellow-300 px-3 py-1 rounded-full text-xs uppercase tracking-wide">
      {text}
    </div>
  );
}

/* CONTACT LINK */
function ContactLink({
  href,
  icon,
  text,
}: {
  href: string;
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition"
    >
      {icon}
      <span>{text}</span>
    </a>
  );
}

/* ROW */
function Row({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex justify-between border-b border-zinc-800 pb-3">
      <span className="text-gray-400">
        {label}
      </span>

      <span className="font-semibold text-white">
        {value}
      </span>
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

      <div className="flex justify-between text-sm mb-2">

        <span className="text-gray-300">
          {label}
        </span>

        <span className="font-bold text-white">
          {value}
          {suffix}
        </span>

      </div>

      <div className="h-3 w-full overflow-hidden rounded-full bg-zinc-800">

        <div
          className="h-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"
          style={{ width: `${percent}%` }}
        />

      </div>

    </div>
  );
}

/* FILM CARD */
function FilmCard({
  title,
}: {
  title: string;
}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-yellow-500/20 bg-black shadow-xl hover:-translate-y-1 transition duration-300">

      <iframe
        className="w-full aspect-video"
        src="https://www.youtube.com/embed/mrbZo39qZj0"
        allowFullScreen
      />

      <div className="p-5">

        <div className="flex items-center gap-2 text-yellow-400 mb-2">

          <Play size={16} />

          <p className="font-semibold uppercase tracking-wide text-sm">
            {title}
          </p>

        </div>

        <p className="text-gray-500 text-xs">
          Supporting game film and evaluation footage
        </p>

      </div>

    </div>
  );
}

/* GAME CARD */
/* GAME CARD */
function Game({
  date,
  opponent,
  location,
  query,
}: {
  date: string;
  opponent: string;
  location: string;
  query: string;
}) {

  const openMaps = () => {
    const encoded = encodeURIComponent(query);

    // iPhone / iPad
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      window.location.href = `maps://?q=${encoded}`;
      return;
    }

    // Android
    if (/Android/i.test(navigator.userAgent)) {
      window.location.href = `geo:0,0?q=${encoded}`;
      return;
    }

    // Desktop fallback
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encoded}`,
      "_blank"
    );
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center border border-yellow-400/60 bg-zinc-950/70 backdrop-blur-sm rounded-2xl p-5 gap-4 hover:border-orange-400 transition">

      {/* LEFT INFO */}
      <div>

        <p className="text-gray-400 text-sm uppercase tracking-wide">
          {date}
        </p>

        <p className="text-white font-bold text-lg mt-1">
          {opponent}
        </p>

        <p className="text-gray-400 text-sm mt-2">
          {location}
        </p>

      </div>

      {/* MAP BUTTON */}
      <button
        onClick={openMaps}
        className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-5 py-2 rounded-xl hover:scale-105 transition text-center"
      >
        VIEW MAP
      </button>

    </div>
  );
}