export async function GET() {
  const uTorId = "pate2078";
  const content = `Hi. I am ${uTorId}, and I have learned how to develop a full-stack web app and deploy it!`;

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>CSC309 E11</title>
      </head>
      <body>
        <div id="auto-tester">${content}</div>
      </body>
    </html>
  `;

  return new Response(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html",
    },
  });
}
