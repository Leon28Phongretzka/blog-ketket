import { Post } from "../../../../sanity/lib/interface";
import { client } from "../../../../sanity/lib/client";
import { urlFor } from "../../../../sanity/lib/image"
import { PortableText } from "@portabletext/react";
import Image from "next/image";

async function getData(slug: string) {
  const query = `*[_type == "post" && slug.current == "${slug}"]{
    _id,
    title,
    slug,
    body,
    _createdAt,
    mainImage,
    author->{
      name,
      image,
    }
  }[0]`;

  const data = await client.fetch(query);

  return data;
}

export default async function SlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = (await getData(params.slug)) as Post;
  return (
    <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
      <header className="pt-6 xl:pb-6">
        <div className="space-y-1 text-center">
          <div className="space-y-10">
            <div className="text-left px-8">
                <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                    {data.title}
                </h1>
                <p className="text-base font-medium leading-6 text-teal-500">
                    {new Date(data._createdAt).toISOString().split("T")[0]}
                </p>
                <div className="flex flex-row items-center gap-x-2">
                    <Image
                        src={urlFor(data.author.image).url()} 
                        alt={data.title} 
                        width={100}
                        height={100}   
                        className="rounded-full w-[50px] h-[50px]"           
                    />
                    <h1 className="text-[20px]">{data.author.name}</h1>

                </div>
            </div>
          </div>
        </div>
      </header>

      <div className="divide-y divide-gray-200 pb-7 dark:divide-gray-700 xl:divide-y-0">
        <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
          <div key={data._id} className="flex flex-1 px-4 py-4">
            <div className="flex-1 prose max-w-none px-4 pl-8 md:pl-16 lg:pl-24 xl:pl-32 pr-8 pb-4 pt-8 dark:prose-invert prose-lg text-justify text-[22px]">
                <PortableText
                    value={data.body}
                />
            </div>
            <div className="pt-8 pr-8 md:pr-16 lg:pr-24 xl:pr-32">
                <Image
                    src={urlFor(data.mainImage).url()} 
                    alt={data.title} 
                    width={500}
                    height={500}   
                    className="item-center rounded-lg"           
                />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}