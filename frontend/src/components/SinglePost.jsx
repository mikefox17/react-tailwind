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
            <h1>{postData.title}</h1>
            <BlockContent
                blocks={postData.body}
                projectId='bp2794g4'
                dataset='production'
            />
        </div>
    );
};

export default SinglePost;
