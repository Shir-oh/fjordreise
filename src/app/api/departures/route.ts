import { departures } from "@/lib/departures";

export async function GET() {
    return Response.json(departures);
}