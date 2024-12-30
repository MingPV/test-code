export const dynamic = "force-static";

export async function GET() {
  const data = [{ test: 100 }, { test: 200 }, { test: 300 }, { test: 400 }];

  return Response.json(data);
}
