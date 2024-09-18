import { NextResponse } from "next/server";

const departmentOptions = [
  { label: "Anesthesias department", value: "Anesthesias department" },
  { label: "Csa", value: "Csa" },
  { label: "Facility", value: "Facility" },
  { label: "Logistics", value: "Logistics" },
  { label: "Medical Clinic Velsen", value: "Medical Clinic Velsen" },
  {
    label: "Medical Specialist department",
    value: "Medical Specialist department",
  },
  { label: "Ok assisting protocols", value: "Ok assisting protocols" },
  { label: "P&O", value: "P&O" },
  { label: "Outpatient clinic", value: "Outpatient clinic" },
  { label: "Radiology", value: "Radiology" },
];

export async function GET() {
  return NextResponse.json(departmentOptions);
}
