export type Departure = {
    id: string;
    from: string;
    to: string;
    date: string;
    departureTime: string;
    arrivalTime: string;
    durationMinutes: number;
    price: number;
};

export const departures: Departure[] = [
    {
        id: "bgs-svg-2026-04-15-0800",
        from: "Bergen",
        to: "Stavanger",
        date: "2026-04-15",
        departureTime: "08:00",
        arrivalTime: "13:30",
        durationMinutes: 330,
        price: 499,
    },
    {
        id: "bgs-svg-2026-04-15-1400",
        from: "Bergen",
        to: "Stavanger",
        date: "2026-04-15",
        departureTime: "14:00",
        arrivalTime: "19:30",
        durationMinutes: 330,
        price: 549,
    },
    {
        id: "svg-bgs-2026-04-15-0900",
        from: "Stavanger",
        to: "Bergen",
        date: "2026-04-15",
        departureTime: "09:00",
        arrivalTime: "14:30",
        durationMinutes: 330,
        price: 499,
    },
    {
        id: "svg-bgs-2026-04-15-1500",
        from: "Stavanger",
        to: "Bergen",
        date: "2026-04-15",
        departureTime: "15:00",
        arrivalTime: "20:30",
        durationMinutes: 330,
        price: 529,
    },
    {
        id: "bgs-hir-2026-04-15-2000",
        from: "Bergen",
        to: "Hirtshals",
        date: "2026-04-15",
        departureTime: "20:00",
        arrivalTime: "12:00",
        durationMinutes: 960,
        price: 899,
    },
    {
        id: "hir-bgs-2026-04-15-0800",
        from: "Hirtshals",
        to: "Bergen",
        date: "2026-04-15",
        departureTime: "08:00",
        arrivalTime: "00:00",
        durationMinutes: 960,
        price: 899,
    },
    {
        id: "bgs-svg-2026-04-16-0800",
        from: "Bergen",
        to: "Stavanger",
        date: "2026-04-16",
        departureTime: "08:00",
        arrivalTime: "13:30",
        durationMinutes: 330,
        price: 519,
    },
    {
        id: "bgs-hir-2026-04-16-2000",
        from: "Bergen",
        to: "Hirtshals",
        date: "2026-04-16",
        departureTime: "20:00",
        arrivalTime: "12:00",
        durationMinutes: 960,
        price: 929,
    },
];