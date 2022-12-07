import SongDetail from "../Models/SongDetail";

class SongApi {
    static async getSongs() : Promise<SongDetail[]> {
        const apiUrl = SongApi.getAppUrl();
        if (apiUrl) {
            const response = await fetch("http://127.0.0.1:8080/songs");
            const data = await (response.json() as Promise<SongDetail[]>);
            return data;
        } else {
            return new Array<SongDetail>();
        }
    }

    static getAppUrl() : string | undefined {
        if (!process.env.REACT_APP_API_URL) {
            alert("WARNING: The environment variable for REACT_APP_API_URL is not set. " +
            "Please run the command `source local.env` from the repo root, then restart the react app.");
            return;
        } else {
            console.log("API  URL", process.env.REACT_APP_API_URL);
            return process.env.REACT_APP_API_URL;
        }
    }
}

export default SongApi;