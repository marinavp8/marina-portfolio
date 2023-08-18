import react from 'react';
import timeline from '../data/timeline';
import TimelineItem from './TimelineItem';
import Title from './title';

function Timeline() {
    return (
        <div className=" flex md:flex-row justify-center my-20 ">
            <div className="w-full md:w-7/12 ">
                <Title>Timeline</Title>
            {timeline.map((item, index) => (
                <TimelineItem key={index}
                    year={item.year}
                    title={item.title}
                    company={item.company}
                    details={item.details}
                />
                    ))}  
                </div>  
        </div>
    )
};

export default Timeline;