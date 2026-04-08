import { ChevronDown } from "lucide-react";

type Props = {
    from: string;
    to: string;
    date: string;
    onFromChange: (value: string) => void;
    onToChange: (value: string) => void;
    onDateChange: (value: string) => void;
    onSearch: () => void;
    isSearchDisabled: boolean;
};

const locations = ["Bergen", "Stavanger", "Hirtshals"];

export default function SearchCard({
    from,
    to,
    date,
    onFromChange,
    onToChange,
    onDateChange,
    onSearch,
    isSearchDisabled,
}: Props) {
    return (
        <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="grid gap-4 md:grid-cols-4">
                <div className="space-y-2">
                    <label htmlFor="from" className="text-sm font-medium text-slate-700">
                        Fra
                    </label>
                    <div className="relative">
                        <select
                            id="from"
                            value={from}
                            onChange={(event) => onFromChange(event.target.value)}
                            className={`h-12 w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 pr-12 outline-none transition focus:border-slate-400 ${from ? "text-slate-900" : "text-slate-400"
                                }`}
                        >
                            <option value="">Velg avreisested</option>
                            {locations.map((location) => (
                                <option key={location} value={location}>
                                    {location}
                                </option>
                            ))}
                        </select>

                        <ChevronDown
                            className="pointer-events-none absolute top-1/2 right-4 size-5 -translate-y-1/2 text-slate-400"
                            aria-hidden="true"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="to" className="text-sm font-medium text-slate-700">
                        Til
                    </label>
                    <div className="relative">
                        <select
                            id="to"
                            value={to}
                            onChange={(event) => onToChange(event.target.value)}
                            className={`h-12 w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 pr-12 outline-none transition focus:border-slate-400 ${to ? "text-slate-900" : "text-slate-400"
                                }`}
                        >
                            <option value="">Velg destinasjon</option>
                            {locations.map((location) => (
                                <option key={location} value={location}>
                                    {location}
                                </option>
                            ))}
                        </select>

                        <ChevronDown
                            className="pointer-events-none absolute top-1/2 right-4 size-5 -translate-y-1/2 text-slate-400"
                            aria-hidden="true"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="date" className="text-sm font-medium text-slate-700">
                        Dato
                    </label>
                    <input
                        id="date"
                        type="date"
                        value={date}
                        onChange={(event) => onDateChange(event.target.value)}
                        className={`h-12 w-full rounded-xl border border-slate-200 bg-white px-4 outline-none transition focus:border-slate-400 ${date ? "text-slate-900" : "text-slate-400"
                            }`}
                    />
                </div>

                <div className="space-y-2">
                    <span className="block text-sm font-medium text-transparent">
                        Søk
                    </span>
                    <button
                        type="button"
                        onClick={onSearch}
                        disabled={isSearchDisabled}
                        className="h-12 w-full rounded-xl bg-[#D7002B] px-4 font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:bg-slate-300"
                    >
                        Søk avganger
                    </button>
                </div>
            </div>
        </div>
    );
}