import express from "express";
import { getPayloadClient } from "./get-payload";
import { nextApp, nextHandler } from "./next-utils";
import { PORT } from "./next-utils";
const app = express();

const start = async () => {
  const payload = await getPayloadClient({
    initOptions: {
      express: app,
      onInit: (cms) => {
        cms.logger.info(`ADMIN URL ${cms.getAdminURL()}`);
      },
    },
  });
  app.use((req, res) => nextHandler(req, res));
  nextApp.prepare().then(() => {
    payload.logger.info("Next Js Started");
  });

  app.listen(PORT, async () => {
    payload.logger.info("Next Js App Url", process.env.NEXT_JS_PUBLIC_URL);
  });
};

start();
