import react from 'react';
import timeline from '../data/timeline';
import TimelineItem from '../components/TimelineItem';

function Timeline() {
    return (
        <div className=" flex flex-col md:flex-row justify-center my-20 w-full md:w-7/12">
            {timeline.map(item => (
                <TimelineItem 
                    year={item.year}
                    title={item.title}
                    company={item.company}
                    details={item.details}
                />
                    ))}    
        </div>
    )
};

export default Timeline;