// pages/api/posts/create.ts

import connect from "../../../lib/db"; // Adjust path as needed
import Post from "../../../models/Post"; // Adjust path as needed
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  // Ensure database connection
  await connect();

  // This is a json data from the request body
  const data = req;
  try {
    // Create a new post using the Post model
    const posts = await Post.find({
      community: "Barcelona",
    }).sort({ createdAt: -1 });

    console.log(posts[0].content)

    return new Response(JSON.stringify(posts), {
      headers: {
        "content-type": "application/json",
      },
    });
  } catch (error) {
    // Handle errors, e.g., missing required fields
    return NextResponse.json({ success: false, error });
  }
}
