const cohortName = "2202-ftb-et-web-ft";
export const ApiURl = `https://strangers-things.herokuapp.com/api/${cohortName}/`;

export async function fetchQueryResultsFromURL(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
