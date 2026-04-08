import Image from "next/image";
import Link from "next/link";
import { departures } from "@/lib/departures";
import { formatDate, formatDuration } from "@/lib/format";
import { primaryButton, secondaryButton } from "@/lib/styles";

type Props = {
    searchParams: Promise<{
        departureId?: string;
    }>;
};

function getRouteImage(to: string) {
    if (to === "Stavanger") {
        return "/images/route-bergen-stavanger.png";
    }

    if (to === "Hirtshals") {
        return "/images/route-bergen-hirtshals.png";
    }

    return null;
}

export default async function SummaryPage({ searchParams }: Props) {
    const { departureId } = await searchParams;

    const departure = departures.find((item) => item.id === departureId);

    if (!departure) {
        return (
            <main className="min-h-screen bg-[#FFF8F5] px-6 py-20 text-slate-900">
                <section className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-sm">
                    <h1 className="text-2xl font-semibold">Ingen avgang valgt</h1>

                    <p className="mt-3 text-slate-600">
                        Gå tilbake og velg en avgang for å se oppsummeringen.
                    </p>

                    <Link
                        href="/"
                        className={`mt-6 ${primaryButton}`}
                    >
                        Tilbake til søk
                    </Link>
                </section>
            </main>
        );
    }

    const routeImage = getRouteImage(departure.to);

    return (
        <main className="min-h-screen bg-[#FFF8F5] px-6 py-20 text-slate-900">
            <section className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-sm">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand">
                    Oppsummering
                </p>

                <h1 className="mt-4 text-3xl font-semibold tracking-tight">
                    Valgt fergeavgang
                </h1>

                <div className="mt-8 rounded-2xl border border-slate-200 p-6">
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-slate-500">Rute</p>
                                <p className="mt-1 font-medium text-slate-900">
                                    {departure.from} til {departure.to}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-slate-500">Dato</p>
                                <p className="mt-1 font-medium text-slate-900">
                                    {formatDate(departure.date)}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-slate-500">Tid</p>
                                <p className="mt-1 font-medium text-slate-900">
                                    {departure.departureTime} — {departure.arrivalTime}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-slate-500">Varighet</p>
                                <p className="mt-1 font-medium text-slate-900">
                                    {formatDuration(departure.durationMinutes)}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-slate-500">Totalpris</p>
                                <p className="mt-1 font-medium text-slate-900">
                                    {departure.price} NOK
                                </p>
                            </div>
                        </div>

                        {routeImage && (
                            <div className="flex items-start">
                                <div className="flex h-70 w-full items-center justify-end overflow-hidden rounded-2xl bg-slate-50">
                                    <Image
                                        src={routeImage}
                                        alt={`Kart over ruten fra ${departure.from} til ${departure.to}`}
                                        width={400}
                                        height={280}
                                        className="h-full w-auto object-contain"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <Link
                    href="/"
                    className={`mt-6 w-full ${secondaryButton}`}
                >
                    Søk på nytt
                </Link>
            </section>
        </main >
    );
}