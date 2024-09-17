import Button from '@components/Button';
import React from 'react';
import { useParams } from 'react-router-dom';

const EditPatient = () => {
    const { id } = useParams();

    return (
        <div className="flex flex-col gap-5">
            EditPatient : {id}
            {/* small */}
            <Button size="small" title="Small" className="bg-sky-700" />
            {/* medium */}
            <Button size="medium" title="Medium" className="bg-sky-700" />
            {/* large */}
            <Button size="large" title="Large" className="border border-sky-700" />
        </div>
    );
};

export default EditPatient;
