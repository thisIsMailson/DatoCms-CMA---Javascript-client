const getSpecificRecord = async (client) => {
  const itemId = "111912760";

  return await client.items.find(itemId, {
    nested: "true",
    version: "published",
  });
};
export default getSpecificRecord;
