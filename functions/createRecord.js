const createRecord = async (client, data) => {
  const record = await client.items.create({
    item_type: { type: "item_type", id: "1234" },
  });
  try {
    const record = await client.items.create({
      item_type: { type: "item_type", id: "1629358" },
      divison: [String(data.Division)],
      description: {
        en: String(data.Description),
      },
      about: {
        en: String(data.About1 + data.About2),
      },
    });
  } catch (e) {
    console.log("error =>", e.message);
  }
};
export default createRecord;
