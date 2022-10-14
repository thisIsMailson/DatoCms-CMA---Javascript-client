import { buildBlockRecord } from "@datocms/cma-client-node";

const feedRecord = async (client, recordToFeed, dataToFeed) => {
  let agregatedDivisions;
  //   console.log(recordToFeed.about);

  // return;
  if (recordToFeed.divison.length == 0) {
    agregatedDivisions = [dataToFeed.Division];
  } else {
    agregatedDivisions = [...recordToFeed.divison, dataToFeed.Division];
  }
  let agregatedAbout;
  if (recordToFeed.about.length == 0) {
    agregatedAbout =
      "<p>" +
      String(dataToFeed.About1.replace("n/a", "")) +
      "</p>" +
      "<p>" +
      String(dataToFeed.About2.replace("n/a", "")) +
      "</p>";
  } else {
    agregatedAbout =
      recordToFeed.about.en +
      "<p>" +
      String(dataToFeed.About1.replace("n/a", "")) +
      "</p>" +
      "<p>" +
      String(dataToFeed.About2.replace("n/a", "")) +
      "</p>";
  }
  let locationInfo = [];

  if (dataToFeed.Address.replace("n/a", "").length > 0) {
    const info = buildBlockRecord({
      item_type: { type: "item_type", id: "1989367" },
      title: dataToFeed.AddressTitle,
      details:
        "<h3>Address</h3>" +
        `<p>${dataToFeed.Address.trim().replace("n/a", "").replace(
          /\n/g,
          "<br />"
        )} </p>`,
      description: dataToFeed.AddressText,
    });
    locationInfo.push(info);
  }
  if (dataToFeed.Address2.replace("n/a", "").length > 0) {
    const info = buildBlockRecord({
      item_type: { type: "item_type", id: "1989367" },
      title: dataToFeed.AddressTitle,
      details:
        "<h3>Address</h3>" +
        `<p>${dataToFeed.Address2.trim().replace("n/a", "").replace(
          /\n/g,
          "<br />"
        )} </p>`,
    });
    locationInfo.push(info);
  }
  if (dataToFeed.Address3.replace("n/a", "").length > 0) {
    const info = buildBlockRecord({
      item_type: { type: "item_type", id: "1989367" },
      title: dataToFeed.AddressTitle,
      details:
        "<h3>Address</h3>" +
        `<p>${dataToFeed.Address3.trim().replace("n/a", "").replace(
          /\n/g,
          "<br />"
        )} </p>`,
    });
    locationInfo.push(info);
  }

  try {
    client.items.update(recordToFeed.id, {
      item_type: { type: "item_type", id: "1629358" },
      country: String(dataToFeed.Country),
      divison: agregatedDivisions,

      description: {
        en: "<p>" + String(dataToFeed.Description) + "</p>",
      },
      about: {
        en: agregatedAbout,
      },
      location_info: locationInfo,
    });
  } catch (e) {
    console.log("error =>", e.message);
  }
};
export default feedRecord;
