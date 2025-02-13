import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import LineChart from './LineChart';
import Select from '@/Components/Select';

export default function Dashboard() {
    const data = [
        { time: "10:00", reading: 42 },
        { time: "10:01", reading: 29 },
        { time: "10:02", reading: 15 },
        { time: "10:03", reading: 38 },
        { time: "10:04", reading: 52 },
        { time: "10:05", reading: 33 },
        { time: "10:06", reading: 47 },
        { time: "10:07", reading: 25 },
        { time: "10:08", reading: 38 },
        { time: "10:09", reading: 31 },
        { time: "10:10", reading: 28 },
        { time: "10:11", reading: 45 },
        { time: "10:12", reading: 37 },
        { time: "10:13", reading: 51 },
        { time: "10:14", reading: 22 },
        { time: "10:15", reading: 30 },
        { time: "10:16", reading: 46 },
        { time: "10:17", reading: 41 },
        { time: "10:18", reading: 27 },
        { time: "10:19", reading: 50 },
        { time: "10:20", reading: 32 },
        { time: "10:21", reading: 44 },
        { time: "10:22", reading: 39 },
        { time: "10:23", reading: 48 },
        { time: "10:24", reading: 26 },
        { time: "10:25", reading: 36 },
        { time: "10:26", reading: 40 },
        { time: "10:27", reading: 49 },
        { time: "10:28", reading: 34 },
        { time: "10:29", reading: 53 },
        { time: "10:30", reading: 43 },
        { time: "10:31", reading: 28 },
        { time: "10:32", reading: 41 },
        { time: "10:33", reading: 46 },
        { time: "10:34", reading: 33 },
        { time: "10:35", reading: 29 },
        { time: "10:36", reading: 55 },
        { time: "10:37", reading: 48 },
        { time: "10:38", reading: 37 },
        { time: "10:39", reading: 45 },
        { time: "10:40", reading: 30 },
        { time: "10:41", reading: 43 },
        { time: "10:42", reading: 50 },
        { time: "10:43", reading: 39 },
        { time: "10:44", reading: 42 },
        { time: "10:45", reading: 49 },
        { time: "10:46", reading: 28 },
        { time: "10:47", reading: 41 },
        { time: "10:48", reading: 53 },
        { time: "10:49", reading: 31 },
        { time: "10:50", reading: 44 },
        { time: "10:51", reading: 38 },
        { time: "10:52", reading: 47 },
        { time: "10:53", reading: 26 },
        { time: "10:54", reading: 40 },
        { time: "10:55", reading: 52 },
        { time: "10:56", reading: 34 },
        { time: "10:57", reading: 49 },
        { time: "10:58", reading: 42 },
        { time: "10:59", reading: 30 },
    ];
    

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
