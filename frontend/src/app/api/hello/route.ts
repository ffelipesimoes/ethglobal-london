import connect from "../../../lib/db";
import Post from "../../../models/Post";

export async function GET() {
  let database = await connect();
  const Posts = await Post.find({});

  

  //let's create a new Community
  return Response.json("Hello");
}
