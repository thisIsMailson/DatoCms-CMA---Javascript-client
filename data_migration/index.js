import fs from "fs";
import { parse } from "csv-parse";
import { buildClient, LogLevel } from "@datocms/cma-client-node";
import getRecordByName from "../functions/getRecordByName.js";
import feedRecord from "../functions/feedRecord.js";

const client = buildClient({
  apiToken: "8617d634a33c44ef657b709d3edb5c",
  baseUrl: "https://site-api.datocms.com",
  extraHeaders: ["Content-Type: application/vnd.api+json"],
  // environment: "dev",
  logLevel: LogLevel.BASIC,
});
const divisions = [
  {
    name: "Services",
    id: "102864511",
  },
  {
    name: "Health & Medical",
    id: "102864509",
  },
  {
    name: "Logistics Solutions",
    id: "102864485",
  },
  {
    name: "Aerospace",
    id: "102864482",
  },
  {
    name: "Lighting & Electronics",
    id: "102864467",
  },
  {
    name: "Technology & Industrial Solutions ",
    id: "102864450",
  },
  {
    name: "Precision Metals & Modules",
    id: "102864446",
  },
  {
    name: "Modules & Polymer Products",
    id: "102864417",
  },
  {
    name: "Vision Systems",
    id: "102864406",
  },
  {
    name: "Wiring Harness",
    id: "102864402",
  },
];
async function run() {
  let data = [];
  fs.createReadStream("./data.csv")
    .pipe(parse({ delimiter: ",", columns: true, ltrim: true }))
    /* columns option, the first line will be considered as column names, while subsequent lines will be the values.
            ltrim option is used to trim the whitespace from your data.
           */
    .on("data", function (row) {
      data.push(row);
    })
    .on("error", function (error) {
      console.log("error =>", error.message);
    })
    .on("end", function () {
      // Making some data normalization
      const mappedDivision = divisionMapper(data);
      const mappedCountries = countryMapper(mappedDivision);
      integrator(mappedCountries);
      console.log("finished");
    });
}
run();

const divisionMapper = (data) => {
  const newData = [];
  data.map((d) => {
    if (d.Division === "Wiring Harness") {
      const obj = { ...d, Division: "102864402" };
      newData.push(obj);
    } else if (d.Division === "Modules and Polymers") {
      const obj = { ...d, Division: "102864417" };
      newData.push(obj);
    } else if (d.Division === "Vision Systems") {
      const obj = { ...d, Division: "102864406" };
      newData.push(obj);
    } else if (d.Division === "SMP Automotive Interiors (Beijing) Co., Ltd.") {
      const obj = { ...d, Division: "142459139" }; //31364164 for the dev env
      newData.push(obj);
    } else if (d.Division === "Technolgy & Industrial Solutions") {
      const obj = { ...d, Division: "102864450" };
      newData.push(obj);
    } else if (d.Division === "Headquarter") {
      const obj = { ...d, Division: "142459126" }; //31364161 for the dev env
      newData.push(obj);
    }
  });
  return newData;
};
const locationMapper = (data) => {};
const countryMapper = (data) => {
  let newData = [];
  const countries_id = [
    {
      name: "Argentina",
      id: "111908902",
    },
    {
      name: "Australia",
      id: "111908927",
    },
    {
      name: "Brazil",
      id: "91708500",
    },
    {
      name: "China",
      id: "91708522",
    },
    {
      name: "Croatia",
      id: "98974223",
    },
    {
      name: "Cyprus",
      id: "111908916",
    },
    {
      name: "Czech Republic",
      id: "111908904",
    },
    {
      name: "Estonia",
      id: "111908905",
    },
    {
      name: "Finland",
      id: "111908909",
    },
    {
      name: "France",
      id: "91708497",
    },
    {
      name: "Germany",
      id: "91708488",
    },
    {
      name: "Hungary",
      id: "93811316",
    },
    {
      name: "India",
      id: "111908923",
    },
    {
      name: "Indonesia",
      id: "111908933",
    },
    {
      name: "Ireland",
      id: "111908907",
    },
    {
      name: "Italy",
      id: "111908908",
    },
    {
      name: "Japan",
      id: "91708524",
    },
    {
      name: "Jersey",
      id: "111908917",
    },
    {
      name: "Lithuania",
      id: "98974233",
    },
    {
      name: "Luxembourg",
      id: "111908913",
    },
    {
      name: "Macedonia",
      id: "111908914",
    },
    {
      name: "Mauritius",
      id: "111908925",
    },
    {
      name: "Mexico",
      id: "111908901",
    },
    {
      name: "Morocco",
      id: "111908919",
    },
    {
      name: "Philippines",
      id: "111908922",
    },
    {
      name: "Poland",
      id: "111908910",
    },
    {
      name: "Portugal",
      id: "91708557",
    },
    {
      name: "Russia",
      id: "111908918",
    },
    {
      name: "Russian",
      id: "111908911",
    },
    {
      name: "Serbia",
      id: "111908912",
    },
    {
      name: "Singapore",
      id: "111908928",
    },
    {
      name: "Slovakia",
      id: "111908903",
    },
    {
      name: "South Africa",
      id: "111908929",
    },
    {
      name: "South Korea",
      id: "111908931",
    },
    {
      name: "Spain",
      id: "93811310",
    },
    {
      name: "Sri Lanka",
      id: "111908926",
    },
    {
      name: "Thailand",
      id: "111908932",
    },
    {
      name: "The Netherlands",
      id: "91708492",
    },
    {
      name: "Turkey",
      id: "111908935",
    },
    {
      name: "United Arab Emirates",
      id: "111908924",
    },
    {
      name: "United Kingdom",
      id: "91708519",
    },
    {
      name: "USA",
      id: "91708520",
    },
  ];
  data.map((d) => {
    countries_id.map((c) => {
      if (d.Country === c.name) {
        const obj = { ...d, Country: c.id };
        newData.push(obj);
      }
    });
    if (d.Country === "PL") {
      const obj = { ...d, Country: "111908910" };
      newData.push(obj);
    }
    if (d.Country === "UK") {
      const obj = { ...d, Country: "91708519" };
      newData.push(obj);
    }
  });
  return newData;
};
const integrator = async (data) => {
  const missing = [];
  for (let i = 0; i < data.length; i++) {
    const item = await getRecordByName(client, data[i].Location);
    if (item[0] && item[0].id !== "111912760") {
      await feedRecord(client, item[0].id, data[i]);
    }
    if (!data[i].Division) missing.push([data[i].Location, data[i].Division]);
  }
};
