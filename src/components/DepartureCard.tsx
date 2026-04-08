import { ArrowRight } from "lucide-react";
import { Departure } from "@/lib/departures";
import { formatDuration } from "@/lib/format";
import { primaryButton } from "@/lib/styles";

type Props = {
    departure: Departure;
    onSelect: (departure: Departure) => void;
};

export default function DepartureCard({ departure, onSelect }: Props) {
    return (
        <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 p-4 md:flex-row md:items-center md:justify-between hover:border-slate-300 transition-colors">
            <div>
                <p className="flex items-center gap-2 font-medium text-slate-900">
                    <span>{departure.from}</span>
                    <ArrowRight className="size-4 text-slate-400" aria-hidden="true" />
                    <span>{departure.to}</span>
                </p>

                <p className="mt-1 text-sm text-slate-600">
                    {departure.departureTime} — {departure.arrivalTime}
                </p>

                <p className="mt-1 text-sm text-slate-600">
                    {formatDuration(departure.durationMinutes)}
                </p>
            </div>

            <div className="flex items-center justify-between md:gap-6">
                <p className="font-semibold text-slate-900">{departure.price} NOK</p>

                <button
                    type="button"
                    onClick={() => onSelect(departure)}
                    className={primaryButton}
                >
                    Velg avgang
                </button>
            </div>
        </div>
    );
}