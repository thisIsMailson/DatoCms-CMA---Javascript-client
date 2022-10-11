import { buildClient, LogLevel } from "@datocms/cma-client-node";
import getSpecificRecord from "./getSpecificRecord.js";
import updateRecords from "./updateRecords.js";
import getAllRecords from "./getAllRecords.js";
import getRecordByName from "./getRecordByName.js";

async function run() {
  const client = buildClient({
    apiToken: "8617d634a33c44ef657b709d3edb5c",
    baseUrl: "https://site-api.datocms.com",
    extraHeaders: ["Content-Type: application/vnd.api+json"],
    environment: "dev",
    logLevel: LogLevel.BASIC,
  });

  const neustadtData = await getSpecificRecord(client);
  const allLocations = await getAllRecords(client);
  await updateRecords(
    client,
    allLocations,
    neustadtData.graphic,
    neustadtData.representative,
    neustadtData.carousel[0].attributes
  );
}

run();

//! run this for a more detailed log error
//?  node index.js --es-module-specifier-resolution=node

// check this doc for api refs
// https://www.datocms.com/docs/content-management-api/resources/item/self
