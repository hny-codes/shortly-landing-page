const API_BASE = 'https://api.shrtco.de/v2/';

export interface ShrtLink {
  code: string;
  original_link: string;
  full_share_link: string;
  full_short_link: string;
}

interface API_RESPONSE {
  ok: 'string';
  result: ShrtLink
}

export default async function getShortenLink(link: string) {
  const request: Promise<API_RESPONSE> = (await fetch(`${API_BASE}shorten?url=${link}`)).json();
  return request;
}
