import { JsonConvert } from "../data/jsonConvert";
import { Title } from "../types/Title";

/** Function that fetches all of the titles from the API */
export async function fetchAllTitles(): Promise<Title[]> {
    try {
        const response = await window.fetch('https://owfetechtask.blob.core.windows.net/titledata/testdata.json');

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
        const response = await window.fetch('https://owfetechtask.blob.core.windows.net/titledata/testdata.json');

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