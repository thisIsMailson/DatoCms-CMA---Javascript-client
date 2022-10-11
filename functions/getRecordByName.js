const getRecordByName = async (client, name) => {
  const missingLocations = [
    ["Białogard", "Bialogard"],
    ["Bruchköbel", "Bruchkobel"],
    ["Bursa", ""],
    ["Chennai", "CHENNAI"],
    ["Dammerie les Lys", "Dammarie Les Lys"],
    ["Epila", "Épila"],
    ["GDT", ""],
    ["Gujarat", ""],
    ["Hérouville", ""],
    ["Huehuetoca", ""],
    ["Klaipėda", ""],
    ["LPR", ""],
    ["Medina", "Medina De Rioseco"],
    ["Otto Krause", ""],
    ["Panevėžys", "Panevezys"],
    ["Pozarevac", ""],
    ["RGT", ""],
    ["Salceda", "Salceda De Caselas"],
    ["San Luis Potosi", "San Luis Potosí"],
    ["Tanger", ""],
    ["Yangcheng", "Yancheng"],
  ];

  missingLocations.forEach((element) => {
    if (name === element[0] && element[1] !== "") name = element[1];
  });
  return await client.items.list({
    filter: {
      type: "location",
      fields: {
        name: {
          eq: name,
        },
      },
    },
    page: { limit: 500 },
  });
};

export default getRecordByName;
