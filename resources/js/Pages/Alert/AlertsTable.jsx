import React, { useState } from 'react';

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
  {
    id: 4,
    type: 'CRITICAL',
    sector: 'Sector C-1',
    description: 'Fuel leak detected in pipeline',
    timestamp: '2024-03-20 10:40:00',
  },
  {
    id: 5,
    type: 'WARNING',
    sector: 'Sector D-5',
    description: 'Pressure fluctuation in the system',
    timestamp: '2024-03-20 10:45:10',
  },
  {
    id: 6,
    type: 'CRITICAL',
    sector: 'Sector E-8',
    description: 'Emergency shutdown required',
    timestamp: '2024-03-20 10:50:30',
  },
  // Add more alerts as needed
];

const AlertsTable = () => {
  const [acknowledgedAlerts, setAcknowledgedAlerts] = useState([]);
  const [visibleAlerts, setVisibleAlerts] = useState(6); // Show all alerts initially

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

        <div className="py-12">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900">
                    <table className="min-w-full table-auto bg-white rounded-lg">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px-4 py-2 text-left">Type</th>
                                <th className="px-4 py-2 text-left">Sector</th>
                                <th className="px-4 py-2 text-left">Description</th>
                                <th className="px-4 py-2 text-left">Timestamp</th>
                                <th className="px-4 py-2 text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {alertsData.slice(0, visibleAlerts).map((alert) => (
                            <tr
                                key={alert.id}
                                className={`border-b ${acknowledgedAlerts.includes(alert.id) ? 'bg-green-100' : alert.type === 'CRITICAL' ? 'bg-red-100' : 'bg-yellow-100'}`}
                            >
                                <td className="px-4 py-2 font-semibold text-sm text-center">
                                    <span className={`${
                                        alert.type === 'CRITICAL'
                                        ? 'text-red-700'
                                        : alert.type === 'WARNING'
                                        ? 'text-yellow-700'
                                        : 'text-gray-700'
                                    }`}>
                                        {alert.type}
                                    </span>
                                </td>
                                <td className="px-4 py-2">{alert.sector}</td>
                                <td className="px-4 py-2">{alert.description}</td>
                                <td className="px-4 py-2 text-sm text-gray-500">{alert.timestamp}</td>
                                <td className="px-4 py-2">
                                <button
                                    onClick={() => handleAcknowledge(alert.id)}
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                                >
                                    Acknowledge
                                </button>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
  );
};

export default AlertsTable;


import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

