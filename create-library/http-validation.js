import fetch from "node-fetch";

function handleErrors(error) {
  throw new Error(error.message);
}

async function checkStatus(arrayURLs) {
  try {
    const arrayStatus = await Promise.all(
      arrayURLs.map(async (url) => {
        const response = await fetch(url);
        return response.status;
      })
    );
    return arrayStatus;
  } catch (error) {
    handleErrors(error);
  }
}

function createArrayURLs(arrayLinks) {
  return arrayLinks.map((objectLink) => Object.values(objectLink).join());
}

async function validatedURL(arrayLinks) {
  const links = createArrayURLs(arrayLinks);
  const statusLinks = await checkStatus(links);

  const results = arrayLinks.map((object, index) => ({
    ...object,
    status: statusLinks[index],
  }));

  return results;
}

export default validatedURL;
