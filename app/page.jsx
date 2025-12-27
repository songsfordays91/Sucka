"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Select } from "../components/ui/select";

export default function RegalCreationsWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-28">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-extrabold mb-6"
        >
          Regal Creations
        </motion.h1>
        <p className="text-2xl text-zinc-300 mb-2">by Romaldo Franco</p>
        <p className="max-w-3xl text-zinc-400 mb-10">
          Write it. Choose a voice. Drop your next hit instantly.
        </p>
        <div className="flex gap-4">
          <Button className="rounded-2xl px-8 py-6 text-lg">Order Services</Button>
          <Button variant="outline" className="rounded-2xl px-8 py-6 text-lg">Shop Products</Button>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-12">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard title="Mixtape & Album Covers" description="Custom artwork tailored to your sound and image." />
          <ServiceCard title="Logo Design" description="Luxury logos for artists, labels, and businesses." />
          <ServiceCard title="AI Music Creation" description="AI-generated beats, vocals, and full songs." />
          <ServiceCard title="Songwriting" description="Hooks, verses, full songs written professionally." />
          <ServiceCard title="Branding Packages" description="Visuals, sound, and identity all in one." />
          <ServiceCard title="Custom Projects" description="Have a vision? Let’s bring it to life." />
        </div>
      </section>

      {/* SHOP */}
      <section className="bg-zinc-950 px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-12">Shop Digital Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <ProductCard name="Mixtape Cover Template" price="$49" />
          <ProductCard name="AI Beat Pack" price="$99" />
          <ProductCard name="AI Song Bundle" price="$149" />
        </div>
      </section>

      {/* AI SONG CREATOR */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-6">AI Song Creator</h2>
        <p className="text-center text-zinc-400 mb-10">
          Write your lyrics, choose a genre and an AI artist, and instantly receive your fully produced track.
        </p>

        <Card className="bg-zinc-900 border-zinc-800 rounded-2xl">
          <CardContent className="p-8 space-y-6">
            <Input placeholder="Song Title" />

            <Select label="Choose Genre" options={[
              { value: "hiphop", label: "Hip Hop / Rap" },
              { value: "rnb", label: "R&B" },
              { value: "pop", label: "Pop" },
              { value: "drill", label: "Drill" },
              { value: "trap", label: "Trap" },
              { value: "afrobeats", label: "Afrobeats" }
            ]} />

            <Select label="Choose AI Artist" options={[
              { value: "ghost", label: "Ghost (Rap)" },
              { value: "regal", label: "Regal (R&B)" },
              { value: "bigface", label: "Big Face" },
              { value: "savage", label: "Savage" },
              { value: "boobookitty", label: "Boo Boo Kitty" },
              { value: "luscious", label: "Luscious" }
            ]} />

            <Select label="AI Performance Style" options={[
              { value: "rap", label: "Rap" },
              { value: "sing", label: "Singing" },
              { value: "melodic", label: "Melodic Rap" }
            ]} />

            <Textarea placeholder="Write or paste your lyrics here..." className="min-h-[200px]" />

            <Button className="w-full rounded-2xl py-6 text-lg">
              Generate Beat & Vocals (Instant Delivery)
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* CONTACT / ORDER */}
      <section className="px-6 py-28 text-center">
        <h2 className="text-4xl font-bold mb-6">Start Your Project</h2>
        <p className="text-zinc-400 mb-10">
          Submit your project and pay instantly via Cash App ($abovesbelow).
        </p>
        <Button className="rounded-2xl px-10 py-6 text-lg">Submit & Generate</Button>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-zinc-500 text-sm">
        © {new Date().getFullYear()} Regal Creations by Romaldo Franco. All rights reserved.
      </footer>
    </div>
  );
}

function ServiceCard({ title, description }) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 rounded-2xl shadow-xl">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-zinc-400">{description}</p>
      </CardContent>
    </Card>
  );
}

function ProductCard({ name, price }) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 rounded-2xl shadow-xl">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-2xl font-bold mb-4">{price}</p>
        <Button className="rounded-xl">Buy Now</Button>
      </CardContent>
    </Card>
  );
}
