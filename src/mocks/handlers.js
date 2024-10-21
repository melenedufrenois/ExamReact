import { http } from 'msw';

export const handlers = [
  http.get('/shoes', async (req, res, ctx) => {
    const response = await fetch('/shoes.json');
    const shoesData = await response.json();
    return res(
        ctx.status(200), 
        ctx.json(shoesData)
    );
  }),
];
