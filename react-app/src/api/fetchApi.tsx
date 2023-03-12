import { JsonConvert } from "../data/jsonConvert";
import { Title } from "../types/Title";

const apiEndpoint = "https://owfetechtask.blob.core.windows.net/titledata/testdata.json";

/** Function that fetches all of the titles from the API */
export async function fetchAllTitles(): Promise<Title[]> {
    try {
        const response = await window.fetch(apiEndpoint);

        if (response.ok) {
            const data = await response.text();
            return JsonConvert.toTitleArrayFromJson(data);
        }
        else {
            const error = new Error("Error retrieving data from the API");
            return Promise.reject(error);
        }

    } catch (err: any) {
        return Promise.reject(err && err.message ? err.message : undefined);
    }
}

/** Function that fetches all of the titles from the API and then pulls out the specific title that was passed in via params */
export async function fetchSpecificTitleDetails(titleNumber: string): Promise<Title | undefined> {
    try {
        // In an ideal world we would have a different api endpoint that would accept titleNumber as a param which returns
        // only data for that. This would save us having to pull all the data and filter here in the client.
        const response = await window.fetch(apiEndpoint);

        if (response.ok) {
            const data = await response.text();
            const titles = JsonConvert.toTitleArrayFromJson(data);          
            return titles.find(x => x.titleNumber == titleNumber);
        }
        else {
            const error = new Error("Error retrieving data from the API");
            return Promise.reject(error);
        }

    } catch (err: any) {
        return Promise.reject(err && err.message ? err.message : undefined);
    }
}