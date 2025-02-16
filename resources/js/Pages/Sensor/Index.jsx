import { Head, Link } from '@inertiajs/react';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Index({
    sensors
}) {
    return (
        <AuthenticatedLayout
            header={
                <div className='flex items-center justify-between'>
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Sensors List
                    </h2>
                    <PrimaryButton>
                        <Link href={route('sensors.create')}>
                            New Sensor
                        </Link>
                    </PrimaryButton>
                </div>
            }
        >
            <Head title="Alerts" />

            <div className="py-6">
                <div className="p-6 bg-white shadow-lg max-md:overflow-x-scroll">
                    <table className="min-w-full text-sm border-collapse border border-gray-200">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4 text-start py-2">Type</th>
                                <th className="border border-gray-300 px-4 text-start py-2">Location</th>
                                <th className="border border-gray-300 px-4 text-start py-2">Status</th>
                                <th className="border border-gray-300 px-4 text-start py-2">Last Calibration</th>
                                <th className="border border-gray-300 px-4 text-start py-2">Last Seen</th>
                                <th className="border border-gray-300 px-4 text-start py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sensors.map(sensor => (
                                <tr key={sensor.id} className="border-b border-gray-200">
                                    <td className="border border-gray-300 px-4 py-2">{sensor.sensor_type}</td>
                                    <td className="border border-gray-300 px-4 py-2">{sensor.location}</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <span className={sensor.status === "active" ? "bg-green-500 text-white px-2 py-1 rounded" : "bg-gray-500 text-white px-2 py-1 rounded"}>
                                            {sensor.status}
                                        </span>
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {sensor.last_calibration_date ? new Date(sensor.last_calibration_date).toLocaleString() : ''}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {sensor.last_seen ? new Date(sensor.last_seen).toLocaleString() : ''}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <button className="px-3 py-1 bg-blue-500 text-white rounded-lg text-xs">View More</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
  );
};
