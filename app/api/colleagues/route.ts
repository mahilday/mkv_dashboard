import { NextResponse } from "next/server";

const colleagueOptions = [
  { label: "John Doe", value: "John Doe" },
  { label: "Jane Smith", value: "Jane Smith" },
  { label: "Regal Smith", value: "Regal Smith" },
];

export async function GET() {
  return NextResponse.json(colleagueOptions);
}
