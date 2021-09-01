import { getPostData } from "../../lib/posts"

// api executed in server, lib like 'fs' or accessing backend files are possible.
// Don't call api in getStatic (fetch localhost:3000/api/...), instead, copy and paste the logic inside.
export default async function handler(req, res) {
    const postData = await getPostData("ssg-ssr")
    res.status(200).json({ postData: postData, req: String(req) })
}