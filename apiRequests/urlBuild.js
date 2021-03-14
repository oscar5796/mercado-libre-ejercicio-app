import baseUrls from '../constants/baseURLS';

export const urlBuild = ({endpointBaseUrlName, queryParams, urlParams}) => {
  const baseURL = baseUrls[endpointBaseUrlName];
  const requestURLParams =  new URLSearchParams();
  const queryEntries = queryParams ? Object.entries(queryParams) : [];
  const urlParamsEntries = urlParams ? Object.entries(urlParams) : [];

  queryEntries.forEach((query) => {
    requestURLParams.append(query[0], query[1]);
  });

  const queryStringParameters = `${queryEntries.length > 0 ? `?${requestURLParams.toString()}` : "" }`;
  const urlParamsString = urlParamsEntries.length ? `/${Object.values(urlParams).join("/")}` : "";

  return `${baseURL}${queryStringParameters}${urlParamsString}`;
}

export const fetcher = (...args) =>
  fetch(...args).then(res => res.json())