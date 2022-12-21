export function generateMetaTags(data) {
  const metaTags = [];
  data.forEach((tag) => {
    switch (tag.type) {
      case "default":
        metaTags.push({
          name: tag.name,
          content: tag.content,
        });
        break;
      case "twitter":
        // code block
        metaTags.push({
          name: tag.name,
          content: tag.content,
        });
        break;
      case "og":
        metaTags.push({
          property: tag.name,
          content: tag.content,
        });
        break;
      case "schema":
        metaTags.push({
          itemprop: tag.name,
          content: tag.content,
        });
        break;
      default:
        // default means global
        metaTags.push({
          property: `og:${tag.name}`,
          content: tag.content,
        });
        metaTags.push({
          itemprop: tag.name,
          content: tag.content,
        });
        metaTags.push({
          name: `twitter:${tag.name}`,
          content: tag.content,
        });
    }
  });

  return { metaTags };
}
