import { client } from "../../../../sanity/lib/client";
import { Post } from "../../../../sanity/lib/interface";

async function getData(slug: string) {
    const query = `*[_type=="post" && slug.current=="${slug}"][0]`;
    const data = await client.fetch(query);
    return data;
}

export default async function SlugPage (
    { params } : { params: { slug: string } }) 
    {
        const data = (await getData(params.slug)) as Post;
        return (
            <div>
                <header>
                    <div>
                        <div>
                            <p>
                                {data.title}
                                {new Date(data._createdAt).toISOString().split('T')[0]}
                            </p>
                        </div>
                    </div>
                </header>

            </div>
        )
}