"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import DepartureCard from "@/components/DepartureCard";
import SearchCard from "@/components/SearchCard";
import { departures } from "@/lib/departures";

export default function HomePage() {
  const router = useRouter();

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const filteredDepartures = departures.filter((departure) => {
    return (
      departure.from === from &&
      departure.to === to &&
      departure.date === date
    );
  });

  function handleSearch() {
    setHasSearched(true);
  }

  function handleSelectDeparture(departureId: string) {
    router.push(`/summary?departureId=${departureId}`);
  }

  return (
    <main className="min-h-screen bg-[#FFF8F5] text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#D7002B]">
            Fjordreise
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Finn din neste ferjereise
          </h1>

          <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            En enkel app for å søke etter og velge ferjeavganger.
          </p>
        </div>

        <div className="mt-10">
          <SearchCard
            from={from}
            to={to}
            date={date}
            onFromChange={setFrom}
            onToChange={setTo}
            onDateChange={setDate}
            onSearch={handleSearch}
            isSearchDisabled={!from || !to || !date || from === to}
          />
        </div>

        {hasSearched && (
          <section className="mt-10" aria-live="polite">
            {filteredDepartures.length > 0 ? (
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-slate-900">
                  Tilgjengelige avganger
                </h2>

                <p className="mt-2 text-sm text-slate-600">
                  {from} til {to} · {date}
                </p>

                <div className="mt-6 space-y-4">
                  {filteredDepartures.map((departure) => (
                    <DepartureCard
                      key={departure.id}
                      departure={departure}
                      onSelect={(selected) =>
                        handleSelectDeparture(selected.id)
                      }
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-slate-900">
                  Ingen avganger funnet
                </h2>

                <p className="mt-2 text-sm text-slate-600">
                  Prøv et annet avreisested, reisemål eller en annen dato.
                </p>
              </div>
            )}
          </section>
        )}
      </section>
    </main>
  );
}