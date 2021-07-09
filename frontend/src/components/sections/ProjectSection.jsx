import React, { useState, useEffect } from 'react';
import Project from '../Project';
import sanityClient from '../../../client';

const ProjectSection = () => {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "project"]{
            title,
            tags,
            description,
            "image": image.asset->url,
            link

        }`
            )
            .then(data => setProjectData(data))
            .catch(err => console.log(err));
    }, []);

    console.log(projectData);

    return (
        <div className='py-12 ' id='projects'>
            <div className='px-10 mx-auto container  bg-green-400 rounded-lg pb-12'>
                <h2 className='text-5xl text-center font-bold py-24 text-green-100 italic'>
                    Check Out My <span className='underline'>Work</span>
                </h2>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
                    {projectData &&
                        projectData.map((project, i) => (
                            <Project key={i} project={project} />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectSection;
