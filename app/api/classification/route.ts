import { NextResponse } from "next/server";

const classificationOptions = [
  { label: "Public", value: "Public" },
  { label: "Internal", value: "Internal" },
  { label: "Confidential", value: "Confidential" },
  { label: "Highly Confidential", value: "Highly Confidential" },
];

export async function GET() {
  return NextResponse.json(classificationOptions);
}
