'use client'
import React, { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link';

import { client } from '../../../sanity/lib/client';
import { Post } from '../../../sanity/lib/interface';
import { urlFor } from "../../../sanity/lib/image"
async function getData() {
  const query = `*[_type=="post"]{
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
  }`;
  const data = await client.fetch(query);
  return data;
}
export default async function Home() {
  const data = await getData() as Post[];
  const sortedData = data.sort((a, b) => {
    return new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime();
  });

  const latestPosts = sortedData.slice(0, 3);
  const restPosts = sortedData.slice(3);

  return (
    <div>
      <div>
        <h1 className='px-4 py-4 font-bold text-[26px] text-blue-400'>All Posts</h1>
      </div>
      <div>
        <div>
          <ul className='grid grid-cols-3 px-4 py-4 border-2 border-neutral-600'>
            {latestPosts.map((post) => (
              <li key={post._id}>
                <article>
                  <Link 
                    href={`/${post.slug.current}`}
                    prefetch
                  >
                    <div>
                      <div className="pt-8 sm:pr-8 md:pr-16 lg:pr-24 xl:pr-32">
                          <Image
                              src={urlFor(post.mainImage).url()} 
                              alt={post.title} 
                              width={180}
                              height={180}   
                              className="item-center rounded-lg w-[180px] h-[180px]"           
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
                      <p>
                        {new Date(post._createdAt).toISOString().split('T')[0]}
                      </p>
                    </div>
                  </Link>
                </article>
              </li>
            ))}
          </ul>
          <ul>
            {restPosts.map((post) => (
              <li key={post._id}>
                <article>
                  <Link 
                    href={`/${post.slug.current}`}
                    prefetch
                  >
                    <div className='flex flex-row'>
                      <div className="pt-8 sm:pr-8 md:pr-16 lg:pr-24 xl:pr-32">
                          <Image
                              src={urlFor(post.mainImage).url()} 
                              alt={post.title} 
                              width={180}
                              height={180}   
                              className="item-center rounded-lg"           
                          />
                      </div>
                      <div className='flex flex-col pt-12 justify-start'>
                        <div>
                          <h2>
                            {post.title}
                          </h2>
                          <p>
                            {post.author.name}
                          </p>
                        </div>
                        <p>
                          {new Date(post._createdAt).toISOString().split('T')[0]}
                        </p>
                      </div>
                    </div>
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
