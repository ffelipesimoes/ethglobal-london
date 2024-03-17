// pages/api/posts/create.ts

import connect from "../../../lib/db"; // Adjust path as needed
import Post from "../../../models/Post"; // Adjust path as needed
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // Ensure database connection
  await connect();

  // This is a json data from the request body
  const data = await req.json();
  console.log(data);
  try {
    // Create a new post using the Post model
    const newPost = await Post.create({
      content: data.content,
      community: data.community,
      author: data.author,
    });

    return new Response(JSON.stringify(newPost), {
      headers: {
        "content-type": "application/json",
        },
        });
  } catch (error) {
    // Handle errors, e.g., missing required fields
    return NextResponse.json({ success: false, error });
  }
}
