// pages/api/posts/create.ts

import connect from "../../../lib/db"; // Adjust path as needed
import Post from "../../../models/Post"; // Adjust path as needed
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // Ensure database connection

  // This is a json data from the request body
  const data = await req.json();
  console.log(data);
  // IPFS link, name and symbol for coin get it from data
  const ipfsLink = data.ipfsLink;
  const name = data.name;
  const symbol = data.symbol;
  try {
    
  } catch (error) {
    // Handle errors, e.g., missing required fields
    return NextResponse.json({ success: false, error });
  }
}
