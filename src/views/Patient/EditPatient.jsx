import React from 'react';
import { PatientDetailsByIdAPI } from '@apis/Patient';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const EditPatient = () => {
    const { id: patientId } = useParams();

    useQuery({
        queryKey: ['patient_edit', patientId],
        queryFn: () => PatientDetailsByIdAPI(patientId),
        enabled: !!patientId,
        staleTime: 1000 * 60 * 5, // 5 minutes
        retry: false,
        onSuccess: (data) => {
            console.log(data);
        },
        onError: (error) => {
            console.error('Error fetching patient:', error);
        },
    });

    return <div className="flex flex-col gap-5">EditPatient : {patientId}</div>;
};

export default EditPatient;
