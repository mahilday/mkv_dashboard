import { NextResponse } from "next/server";

const functionOptions = [
  { label: "Manager", value: "Manager" },
  { label: "Developer", value: "Developer" },
  { label: "Associate", value: "Associate" },
  { label: "Operations", value: "Operations" },
];

export async function GET() {
  return NextResponse.json(functionOptions);
}
