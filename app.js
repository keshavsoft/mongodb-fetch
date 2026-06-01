import DigestFetch from "digest-fetch";
// console.log("process.env : ", process.env);

const client = new DigestFetch(process.env.mpublic, process.env.mprivate);

const res = await client.fetch(
    "https://cloud.mongodb.com/api/atlas/v2/groups",
    {
        headers: {
            Accept: "application/vnd.atlas.2023-11-15+json"
        }
    }
);

const data = await res.json();

console.log("data : ", data);
