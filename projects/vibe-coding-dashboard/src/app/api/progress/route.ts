import { NextResponse } from "next/server";
import { getAllProgress, upsertProgress } from "@/lib/db";

export async function GET() {
  try {
    const rows = getAllProgress();
    const data = rows.map((r) => ({
      id: r.id,
      day: r.day,
      completed: Boolean(r.completed),
      notes: r.notes ?? "",
      updated_at: r.updated_at,
    }));
    return NextResponse.json(data);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Failed to fetch progress" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const day = Number(body.day);
    if (!Number.isInteger(day) || day < 1 || day > 30) {
      return NextResponse.json(
        { error: "day must be an integer between 1 and 30" },
        { status: 400 }
      );
    }
    const completed =
      typeof body.completed === "boolean" ? body.completed : undefined;
    const notes = typeof body.notes === "string" ? body.notes : undefined;
    upsertProgress(day, completed, notes);
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Failed to update progress" },
      { status: 500 }
    );
  }
}
