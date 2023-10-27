import {rest} from "msw";

export const handlers = [
  rest.post("http://localhost:3100/save-feedback", (req, res, ctx) => {
    return res.once(
      ctx.status(201),
      ctx.json({id: Date.now(), text: req.body.text})
    )
  })
]
