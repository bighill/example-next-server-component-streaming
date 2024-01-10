export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const rawDelay = searchParams.get("delay") || "0";
  const delay = parseInt(rawDelay, 10);

  return new Promise<Response>((resolve) => {
    setTimeout(() => {
      //   const result = Response.json({ foo: `Hi ${delay}` });
      const result = Response.json({ foo: `Hello` });
      resolve(result);
    }, delay);
  });
}
