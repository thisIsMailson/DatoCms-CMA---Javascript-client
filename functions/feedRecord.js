import { buildBlockRecord } from "@datocms/cma-client-node";

const feedRecord = async (client, recordId, data) => {
  // console.log("feeder =>", data);
  try {
    client.items.update(recordId, {
      item_type: { type: "item_type", id: "1629358" },
      country: String(data.Country),
      divison: [String(data.Division)],
      description: {
        en: String(data.Description),
      },
      about: {
        en: String(data.About1 + data.About2),
      },
      location_info: [
        buildBlockRecord({
          item_type: { type: "item_type", id: "1989367" },
          title: data.AddressTitle,
          details:
            "<h3>Address</h3>" +
            `<br /> ${data.Address.replace(/\n/g, "<br />")}`,
          description: data.AddressText,
        }),
      ],
    });
  } catch (e) {
    console.log("error =>", e.message);
  }
};
export default feedRecord;
