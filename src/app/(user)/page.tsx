import Image from 'next/image'
import { client } from '../../../sanity/lib/client';
import { Post } from '../../../sanity/lib/interface';
import Link from 'next/link';
import { urlFor } from "../../../sanity/lib/image"
async function getData() {
  const query = `*[_type=="post"]`;
  const data = await client.fetch(query);
  return data;
}
export default async function Home() {
  const data = await getData() as Post[];
  return (
    <div>
      <div>
        <h1>All Posts</h1>
      </div>
      <div>
        <ul className='flex flex-row'>
          {data.map((post) => (
            <li key={post._id}>
              <article>
                <div>
                  <p>
                    {new Date(post._createdAt).toISOString().split('T')[0]}
                  </p>
                </div>
                <Link 
                  href={`/${post.slug.current}`}
                  prefetch
                >
                  <div>
                    <div className="pt-8 sm:pr-8 md:pr-16 lg:pr-24 xl:pr-32">
                        <Image
                            src={urlFor(post.mainImage).url()} 
                            alt={post.title} 
                            width={200}
                            height={200}   
                            className="item-center rounded-lg"           
                        />
                    </div>
                  </div>
                  <div>
                    <h2>
                      {post.title}
                    </h2>
                    <p>
                      {post.author.name}
                    </p>
                  </div>
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
