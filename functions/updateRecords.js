import { buildBlockRecord } from "@datocms/cma-client-node";
const updateRecords = async (
  client,
  records,
  representativeData
) => {
  try {
    records.map(
      (r) =>
        r.id !== "111912760" &&
        client.items.update(r.id, {
          // we just pass the field that we want to change
          // new block record
          representative: String(representativeData), //! this one is working fine
          // graphic: [
          //   buildBlockRecord({
          //     item_type: { type: "item_type", id: "1690861" },
          //     visual_type: "Image",
          //     image: { upload_id: "48480442" },
          //   }),
          // ],
          carousel: [
            buildBlockRecord({
              item_type: { type: "item_type", id: "1989365" }, //? id of the carousel's block
              items: [
                //! 1
                buildBlockRecord({
                  item_type: { type: "item_type", id: "1989366" }, //? id of the carousel item's block
                  person: Array(
                    buildBlockRecord({
                      item_type: { type: "item_type", id: "1756293" }, //? id of the person's block
                      person: "102905946",
                    })
                  ),
                  description:
                    "A film that charts the journey of Motherson from 1975 to its present form of continuously evolving in different parameters. ",
                  visual: Array(
                    buildBlockRecord({
                      item_type: { type: "item_type", id: "1690861" }, //? id of the visual block
                      visual_type: "Video",
                      video: {
                        provider: "youtube",
                        provider_uid: "YMk_e-OYCWw",
                        url: "https://youtu.be/YMk_e-OYCWw",
                        width: 200,
                        height: 113,
                        thumbnail_url:
                          "https://i.ytimg.com/vi/YMk_e-OYCWw/hqdefault.jpg",
                        title: "About Motherson",
                      },
                    })
                  ),
                }),
                //! 2
                buildBlockRecord({
                  item_type: { type: "item_type", id: "1989366" }, //? id of the carousel item's block
                  description:
                    "<p><strong>Say somthing nice about your sights</strong></p><p>In geography, location or place are used to denote a region (point, line, or area) on Earth's surface or elsewhere. The term location generally implies a higher degree of certainty than place, the latter often indicating an entity with an ambiguous boundary, relying more on human or social attributes of place identity and sense of place than on geometry.</p>",
                  visual: Array(
                    buildBlockRecord({
                      item_type: { type: "item_type", id: "1690861" }, //? id of the visual block
                      visual_type: "Image",
                      image: { upload_id: "44109123" },
                    })
                  ),
                }),
                //! 3
                buildBlockRecord({
                  item_type: { type: "item_type", id: "1989366" }, //? id of the carousel item's block
                  person: Array(
                    buildBlockRecord({
                      item_type: { type: "item_type", id: "1756293" }, //? id of the person's block
                      person: "102905929",
                    })
                  ),
                  description:
                    "<p><em> 'We are setting the ambitious goal of becoming</em><br /><em>Carbon Net Zero across our current global operations by 2040.' </em></p><p><strong>Laksh Vaaman Sehgal</strong><br />Vice Chairman Motherson</p><p>Learn more about our activites on <strong>Motherson.com</strong></p>",
                  visual: Array(
                    buildBlockRecord({
                      item_type: { type: "item_type", id: "1690861" }, //? id of the visual block
                      visual_type: "Image",
                      image: { upload_id: "48480762" },
                    })
                  ),
                }),
                //! 4
                buildBlockRecord({
                  item_type: { type: "item_type", id: "1989366" }, //? id of the carousel item's block
                  person: Array(
                    buildBlockRecord({
                      item_type: { type: "item_type", id: "1756293" }, //? id of the person's block
                      person: "102905946", // Stephan
                    })
                  ),
                  description:
                    "<p><span>Motherson offers a work environment in which you can become the best version of yourself. An environment in which you collaborate with people who care and respect each other and who are focused on our common vision, to be a globally preferred solutions provider.</span></p><p><span>What does it mean for our employees to be part of Motherson? The three main value propositions briefly explained. Learn more and watch the video.</span></p>",
                  visual: Array(
                    buildBlockRecord({
                      item_type: { type: "item_type", id: "1690861" }, //? id of the visual block
                      visual_type: "Video",
                      video: {
                        provider: "youtube",
                        provider_uid: "aGmxZtYiKGA",
                        url: "https://youtu.be/aGmxZtYiKGA",
                        width: 200,
                        height: 113,
                        thumbnail_url:
                          "https://i.ytimg.com/vi/aGmxZtYiKGA/hqdefault.jpg",
                        title: "Working at Motherson",
                      },
                    })
                  ),
                }),
                //! 5
                buildBlockRecord({
                  item_type: { type: "item_type", id: "1989366" }, //? id of the carousel item's block
                  description:
                    "<p><strong>Why work at Motherson</strong></p><p><span>Our company is built on enduring relationships</span><span>, where each of us can develop and grow as a professional and a human being</span><span>.&nbsp;</span><span>W</span><span>e&nbsp;</span><span>work together&nbsp;</span><span>across functions&nbsp;</span><span>and&nbsp;</span><span>divisions to&nbsp;</span><span>delight our customers together and be&nbsp;</span><span>part of something larger than ourselves.</span><span>&nbsp;If you want to work in an environment that provides meaningful work and often produces lifelong friendships, Motherson might be your next home.</span></p>",
                  visual: Array(
                    buildBlockRecord({
                      item_type: { type: "item_type", id: "1690861" }, //? id of the visual block
                      visual_type: "Image",
                      image: { upload_id: "48480821" },
                    })
                  ),
                }),
              ],
            }),
          ],
        })
    );
  } catch (e) {
    console.log("error =>", e.message);
  }
};
export default updateRecords;
