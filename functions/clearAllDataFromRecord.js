const clearAllDataFromRecord = (client, recordId) => {
  try {
    client.items.update(recordId, {
      item_type: { type: "item_type", id: "1629358" },
      divison: [],
      description: {
        en: "",
      },
      about: {
        en: "",
      },
      location_info: [],
    });
  } catch (e) {
    console.log("error =>", e.message);
  }
};
export default clearAllDataFromRecord;
