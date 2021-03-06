const client = require("../../modules/elasticModule");

const SearchController = {
  search: async (req, res) => {
    const { q } = req.query;

    try {
      const result = await client.search({
        index: "post_index",
        body: {
          size: 3,
          query: {
            match: {
              "title.ngram": q,
            },
          },
          highlight: {
            fields: {
              "title.ngram": {},
            },
          },
        },
      });

      console.log(result.hits.hits);

      const searchResult = result.hits.hits;

      const findResult = searchResult.map((item) => {
        const data = item.highlight["title.ngram"];
        return { title: data, score: item._score };
      });

      res.status(200).json({
        message: "검색 성공",
        data: findResult,
      });
    } catch (error) {
      res.status(500).json({
        message: "ELS 서버 에러",
      });
    }
  },
};

module.exports = SearchController;
