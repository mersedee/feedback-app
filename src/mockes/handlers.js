import {rest, restContext} from "msw";

export const handlers = [
  rest.post("http://localhost:3100/save-feedback", (req, res) => {
    return res(restContext.json({id: Date.now(), text: req.body.text}))
  }),
]
