import { primaryButton } from "@/lib/styles";
import { ChevronDown, TriangleAlert } from "lucide-react";

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

const fieldBaseClass =
    "h-12 w-full rounded-xl border border-slate-200 bg-white px-4 outline-none transition focus:border-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand";

const selectClass = `${fieldBaseClass} appearance-none pr-12`;

function getFieldTextColor(value: string) {
    return value ? "text-slate-900" : "text-slate-400";
}

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
    const hasRouteError = from !== "" && to !== "" && from === to;

    return (
        <div className="rounded-3xl bg-white p-6 shadow-sm">
            <form
                onSubmit={(event) => {
                    event.preventDefault();

                    if (!isSearchDisabled) {
                        onSearch();
                    }
                }}
            >
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
                                aria-invalid={hasRouteError}
                                aria-describedby={hasRouteError ? "route-error" : undefined}
                                className={`${selectClass} ${getFieldTextColor(from)}`}
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
                                aria-invalid={hasRouteError}
                                aria-describedby={hasRouteError ? "route-error" : undefined}
                                className={`${selectClass} ${getFieldTextColor(to)}`}
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
                            className={`${fieldBaseClass} ${getFieldTextColor(date)}`}
                        />
                    </div>

                    <div className="space-y-2">
                        <span className="block text-sm font-medium text-transparent">
                            Søk
                        </span>

                        <button
                            type="submit"
                            disabled={isSearchDisabled}
                            className={`h-12 w-full disabled:cursor-not-allowed disabled:bg-slate-300 ${primaryButton}`}
                        >
                            Søk avganger
                        </button>

                        {hasRouteError && (
                            <p
                                id="route-error"
                                className="flex items-start gap-2 text-sm text-red-500"
                            >
                                <TriangleAlert
                                    className="mt-0.5 size-5 shrink-0"
                                    aria-hidden="true"
                                />
                                <span>
                                    Avreisested og destinasjon kan ikke være det samme.
                                </span>
                            </p>
                        )}
                    </div>
                </div>
            </form>
        </div>
    );
}