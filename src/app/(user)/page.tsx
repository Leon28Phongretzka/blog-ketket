import Image from 'next/image'
import { client } from '../../../sanity/lib/client';
import { Post } from '../../../sanity/lib/interface';
import Link from 'next/link';
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
        <ul>
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
                    <h3>
                      {post.title}
                    </h3>
                    <h3>
                      {post.slug.current}
                    </h3>
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
