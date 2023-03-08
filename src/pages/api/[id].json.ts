import type { APIRoute } from 'astro';

export const get: APIRoute = async ({ params }) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);

  return {
    body: JSON.stringify(await response.json())
  }
};
