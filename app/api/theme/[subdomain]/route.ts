import { THEMES } from "@/constants";

export async function GET(request: Request) {
  const subdomain = request.url.split("/")[request.url.split("/").length - 1];
  const theme = THEMES[subdomain];

  if (!theme) {
    return Response.json({ message: "Theme not found" }, { status: 404 });
  }

  return Response.json(theme);
}
