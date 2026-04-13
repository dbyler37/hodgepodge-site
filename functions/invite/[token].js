export async function onRequest(context) {
  const response = await context.env.ASSETS.fetch(
    new Request('https://hodgepodge.social/invite/index.html')
  );
  return response;
}
