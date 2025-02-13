import { Head, Link } from '@inertiajs/react';
import React, { useState } from 'react';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import TextInput from '@/Components/TextInput';
import Select from '@/Components/Select';
import PrimaryButton from '@/Components/PrimaryButton';

// Dummy data for alerts
const alertsData = [
  {
    id: 1,
    type: 'CRITICAL',
    sector: 'Sector A-1',
    description: 'High concentration of methane detected',
    timestamp: '2024-03-20 10:30:45',
  },
  {
    id: 2,
    type: 'WARNING',
    sector: 'Sector B-3',
    description: 'Unexpected pressure decrease in main pipeline',
    timestamp: '2024-03-20 10:28:30',
  },
  {
    id: 3,
    type: 'WARNING',
    sector: 'Sector A-2',
    description: 'Sensor calibration required',
    timestamp: '2024-03-20 10:25:15',
  },
];

export default function Index() {
  const [acknowledgedAlerts, setAcknowledgedAlerts] = useState([]);

  // Handle Acknowledge button click
  const handleAcknowledge = (alertId) => {
    setAcknowledgedAlerts([...acknowledgedAlerts, alertId]);
  };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Alerts
                </h2>
            }
        >
            <Head title="Alerts" />

            <div className="py-12 flex justify-center">
                <div className='lg:w-[36rem]'>
                    <div className='mb-7 sm:px-6 lg:px-8 flex items-center space-x-4'>
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={""}
                            placeholder="Search alerts..."
                            className="block w-full"
                            autoComplete="username"
                            isFocused={true}
                            onChange={()=>{}}
                        />

                        <Select
                            options={[
                                {
                                    id: 1,
                                    value: 'dicks',
                                    label: 'All Alerts'
                                },
                                {
                                    id: 2,
                                    value: 'vjs',
                                    label: 'VJs'
                                }
                            ]}

                            placeholder={"All Types Of Alerts"}
                        />
                    </div>
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                <h3 className='text-lg mb-4 font-semibold leading-tight text-gray-800'>
                                    Recent Alerts
                                </h3>

                                <div className='space-y-4'>
                                    {alertsData.map((alert) => (
                                        <div
                                            key={alert.id}
                                            className={`p-4 border rounded-lg ${
                                            acknowledgedAlerts.includes(alert.id)
                                                ? 'bg-green-100 border-green-500'
                                                : alert.type === 'CRITICAL'
                                                ? 'bg-red-100 border-red-500'
                                                : 'bg-yellow-100 border-yellow-500'
                                            }`}
                                        >
                                            <div className="flex justify-between items-center mb-3">
                                                <span
                                                    className={`text-sm font-semibold ${
                                                    alert.type === 'CRITICAL'
                                                        ? 'text-red-700'
                                                        : alert.type === 'WARNING'
                                                        ? 'text-yellow-700'
                                                        : 'text-gray-700'
                                                    }`}
                                                >
                                                    {alert.type}
                                                </span>
                                                <button
                                                    onClick={() => handleAcknowledge(alert.id)}
                                                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                                                >
                                                    Acknowledge
                                                </button>
                                            </div>
                                            <div className="text-lg font-semibold text-gray-800">{alert.sector}</div>
                                            <p className="text-gray-700">{alert.description}</p>
                                            <div className="mt-2 text-sm text-gray-500">{alert.timestamp}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="text-center mt-4 flex justify-start">
                                    <PrimaryButton>
                                        <Link href={route('alerts.table')}>
                                            Load More
                                        </Link>
                                    </PrimaryButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
  );
};
