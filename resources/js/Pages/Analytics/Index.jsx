import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import LineChart from './LineChart';
import Select from '@/Components/Select';

export default function Dashboard({
    data
}){
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Analytics
                </h2>
            }
        >
            <Head title="Analytics" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className='mb-6 flex justify-between'>
                        <Select 
                            options={[
                                {
                                    label: 'Last 24 hours',
                                    value: 'Last-24-hours'
                                },
                                {
                                    label: 'Last 7 days',
                                    value: 'Last-7-days'
                                },
                                {
                                    label: 'Last 30 days',
                                    value: 'Last-30-days'
                                },
                                {
                                    label: 'Last Year',
                                    value: 'Last-Year'
                                }
                            ]}
                        />

                        <Select 
                            options={[
                                {
                                    label: '2023',
                                    value: '2023'
                                },
                                {
                                    label: '2022',
                                    value: '2022'
                                },
                                {
                                    label: '2021',
                                    value: '2021'
                                },
                                {
                                    label: '2020',
                                    value: '2020'
                                }
                            ]}

                            placeholder='Select Year'
                        />
                    </div>
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 max-md:overflow-scroll md:flex justify-center">
                            <LineChart 
                                data={data}
                                label={'Acquisitions by year'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
