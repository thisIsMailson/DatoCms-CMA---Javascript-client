import { buildClient, LogLevel } from "@datocms/cma-client-node";
import getSpecificRecord from "./getSpecificRecord.js";
import updateRecords from "./updateRecords.js";
import getAllRecords from "./getAllRecords.js";
import getRecordByName from "./getRecordByName.js";

async function run() {
  const client = buildClient({
    apiToken: "YOUR_API_KEY",
    baseUrl: "https://site-api.datocms.com",
    extraHeaders: ["Content-Type: application/vnd.api+json"],
    // environment: "dev",
    logLevel: LogLevel.BASIC,
  });

  const neustadtData = await getSpecificRecord(client);
  const allLocations = await getAllRecords(client);
  await updateRecords(client, allLocations, neustadtData.representative);
}

run();
