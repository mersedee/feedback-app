import {rest} from "msw";

export const handlers = [
  rest.post("http://localhost:3100/save-feedback", (req, res) => {
    return res({id: Date.now(), text: req.body.text})
  }),
]
