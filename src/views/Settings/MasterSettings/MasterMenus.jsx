import { FaHandHoldingDollar, FaRegHospital } from 'react-icons/fa6';
import { TbReportMedical } from 'react-icons/tb';

const MasterMenus = [
    {
        title: 'Hospitals & Clinics',
        link: 'hospitals',
        icon: FaRegHospital,
    },
    {
        title: 'Insurance Companies',
        link: 'insurance-companies',
        icon: FaHandHoldingDollar,
    },
    {
        title: 'Diagnosis',
        link: 'diagnosis',
        icon: TbReportMedical,
    },
    {
        title: 'Diseases',
        link: 'diseases',
        icon: TbReportMedical,
    },
];

export default MasterMenus;
