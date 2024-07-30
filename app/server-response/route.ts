export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const user = await res.json();
  console.log(res);
  return Response.json({ userData: user });
}
