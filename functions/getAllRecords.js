const getAllRecords = async (client) => {
  return await client.items.list({
    filter: {
      type: "location",
    },
    page: { limit: 500 },
  });
};
export default getAllRecords;
