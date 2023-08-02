import {
  successResponse,
  errorResponse,
} from "../../../utils";

export const fetchThumbnailController = async (req, res) => {
  try {
    const {
      body: { gameLink },
    } = req;
    const url = new URL(gameLink);
    const gameId = url.pathname.split('/')[2];
    
    const res1 = await fetch(`https://apis.roblox.com/universes/v1/places/${gameId}/universe`);
    const {universeId} = await res1.json();
    const result = await fetch(`https://thumbnails.roblox.com/v1/games/multiget/thumbnails?universeIds=${universeId}&countPerUniverse=1&defaults=true&size=768x432&format=Png&isCircular=false`);
    const data = await result.json();
    const imageUrl = data['data'][0].thumbnails[0].imageUrl || '';

    return successResponse({ res, response: { imageUrl } });
  } catch (err) {
    return errorResponse({ res, err });
  }
};
