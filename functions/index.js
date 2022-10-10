import { buildClient, LogLevel } from "@datocms/cma-client-node";
import getSpecificRecord from "./getSpecificRecord.js";
import updateRecords from "./updateRecords.js";
import getAllRecords from "./getAllRecords.js";

async function run() {
  console.log;
  const client = buildClient({
    apiToken: ">YOUR_API_TOKE<",
    baseUrl: "https://site-api.datocms.com",
    extraHeaders: ["Content-Type: application/vnd.api+json"],
    environment: "dev", // The invirornment to work on
    logLevel: LogLevel.BASIC, // For logging purposes
  });

  const neustadtData = await getSpecificRecord(client);
  const allLocations = await getAllRecords(client);
  const updatedRecord = await updateRecords(
    client,
    allLocations,
    neustadtData.graphic,
    neustadtData.representative,
    neustadtData.carousel[0].attributes
  );
}

run();