import { NextResponse } from "next/server";

export async function GET() {
  const accessToken = process.env.SPOTIFY_ACCESS_TOKEN; // Use environment variable
  try {
    const response = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (response.status === 200) {
      const data = await response.json();
      return NextResponse.json({ title: data.item.name, artist: data.item.artists[0].name });
    } else {
      return NextResponse.json(null); // No song is currently playing
    }
  } catch (error) {
    console.error("Error fetching Spotify data:", error);
    return NextResponse.json({ error: "Failed to fetch Spotify data" }, { status: 500 });
  }
}