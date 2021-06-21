import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../../client';
import BlockContent from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}

const SinglePost = () => {
    const [postData, setPostData] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        sanityClient
            .fetch(
                `*[slug.current == "${slug}"]{
            title,
            slug,
            tags,
            mainImage{
              asset->{
                _id,
                url
               }
             },
           body,
          "name": author->name,
          "authorImage": author->image
         }`,
                { slug }
            )
            .then(data => setPostData(data[0]))
            .catch(console.error);
    }, [slug]);

    if (!postData) return <div>Loading...</div>;

    return (
        <div>
            <div className='mx-auto px-10 bg-gradient-to-r from-orange-300 to-pink-300 flex flex-col  items-center'>
                <h1 className='text-5xl font-bold text-center  py-20 text-gray-600 items-center justify-center'>
                    {postData.title}
                </h1>
                <div className='flex space-x-2'>
                    {postData.tags.map((tag, i) => (
                        <span
                            key={i}
                            className='bg-blue-400 py-2 px-4 rounded-xl text-xs text-blue-100 m-4'
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <div className='mt-10 lg:mt-20 mx-auto px-10 lg:px-60 container pt-12 text-lg text-gray-700 min-h-screen'>
                <BlockContent
                    blocks={postData.body}
                    projectId='bp2794g4'
                    dataset='production'
                />
            </div>
        </div>
    );
};

export default SinglePost;
