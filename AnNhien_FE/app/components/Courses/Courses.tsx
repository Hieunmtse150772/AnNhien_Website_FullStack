"use client"
import * as React from "react";
import { useState } from "react";
import { GlobeAltIcon, DevicePhoneMobileIcon, CircleStackIcon, CloudIcon } from '@heroicons/react/24/outline';


interface Name {
    course: string;
    imageSrc: string;
    profession: string
    price: string
    category: 'mobiledevelopment' | 'webdevelopment' | 'datascience' | 'cloudcomputing';
}

const names: Name[] = [
    {
        course: 'HTML, CSS, JS',
        imageSrc: '/assets/courses/coursesOne.svg',
        profession: 'HTML, CSS, Javascript Development',
        price: '40',
        category: 'webdevelopment'
    },
    {
        course: 'Node.js',
        imageSrc: '/assets/courses/coursesTwo.svg',
        profession: 'Backend with Node.js and Express.js',
        price: '21',
        category: 'webdevelopment'
    },
    {
        course: 'Database',
        imageSrc: '/assets/courses/coursesThree.svg',
        profession: 'Learn Mongodb with Mongoose',
        price: '21',
        category: 'webdevelopment'
    },
    {
        course: 'React.js',
        imageSrc: '/assets/courses/coursesFour.svg',
        profession: 'Learn React with Redux toolkit',
        price: '99',
        category: 'webdevelopment'
    },
    {
        course: 'React Native',
        imageSrc: '/assets/courses/coursesOne.svg',
        profession: 'Learn React Native with Node.js',
        price: '89',
        category: 'mobiledevelopment'
    },
    {
        course: 'Swift',
        imageSrc: '/assets/courses/coursesThree.svg',
        profession: 'Learn Swift from Scratch',
        price: '89',
        category: 'mobiledevelopment'
    },
    {
        course: 'Flutter',
        imageSrc: '/assets/courses/coursesFour.svg',
        profession: 'Flutter App Development',
        price: '69',
        category: 'mobiledevelopment'
    },
    {
        course: 'Onsen UI',
        imageSrc: '/assets/courses/coursesTwo.svg',
        profession: 'Learn Onsen Ui with HTML, CSS',
        price: '69',
        category: 'mobiledevelopment'
    },
    {
        course: 'TensorFlow',
        imageSrc: '/assets/courses/coursesTwo.svg',
        profession: 'Learn TensorFlow with SQL',
        price: '99',
        category: 'datascience'
    },
    {
        course: 'AWS',
        imageSrc: '/assets/courses/coursesFour.svg',
        profession: 'AWS Deep Learning AMI',
        price: '99',
        category: 'datascience'
    },
    {
        course: 'Bokeh',
        imageSrc: '/assets/courses/coursesOne.svg',
        profession: 'Learn Bokeh with Python',
        price: '99',
        category: 'datascience'
    },
    {
        course: 'Scikit',
        imageSrc: '/assets/courses/coursesThree.svg',
        profession: 'Scikit with Python Development',
        price: '89',
        category: 'datascience'
    },
    {
        course: 'Laas',
        imageSrc: '/assets/courses/coursesThree.svg',
        profession: 'Infra-as-a-Service',
        price: '21',
        category: 'cloudcomputing'
    },
    {
        course: 'Iaas',
        imageSrc: '/assets/courses/coursesFour.svg',
        profession: 'Info-as-a-Service',
        price: '29',
        category: 'cloudcomputing'
    },
    {
        course: 'Paas',
        imageSrc: '/assets/courses/coursesOne.svg',
        profession: 'Platform-as-a-Service',
        price: '99',
        category: 'cloudcomputing'
    },
    {
        course: 'Saas',
        imageSrc: '/assets/courses/coursesTwo.svg',
        profession: 'Software-as-a-Service',
        price: '58',
        category: 'cloudcomputing'
    }
];

const NamesList = () => {

    const [selectedButton, setSelectedButton] = useState<'mobiledevelopment' | 'webdevelopment' | 'datascience' | 'cloudcomputing' | 'all' | null>('webdevelopment');


    return (
        <div>
            <div id='courses-section' className="mx-auto max-w-2xl py-16 px-4 sm:py-36 sm:px-6 lg:max-w-7xl lg:px-8 mt-40">

                <div className='sm:flex justify-between items-center pb-12'>
                    <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-4">Lợi ích của ăn chay</h2>
                </div>


                <div>
                   
                </div>

            </div>
        </div>
    );
}

export default NamesList;




