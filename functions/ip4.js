export async function onRequest(context) {
    const response = await fetch('http://ip4.as8.net');
    const ip = await response.text();
    return new Response(ip, { status: 200 });
  }