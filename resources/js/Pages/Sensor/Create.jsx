import { Head, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';

export default function Create() {
    const { data, setData, post, processing, errors, reset } = useForm({
        sensor_type: '',
        location: '',
        installation_date: '',
        sensor_identifier: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('sensors.store'));
    };

    return (
        <AuthenticatedLayout
        header={
            <h2 className="text-xl font-semibold leading-tight text-gray-800">
                Register Sensor
            </h2>
        }
        >
        <Head title="Register Sensor" />

        <div className="py-6 md:px-32 lg:px-72">
            <div className="p-6 bg-white md:rounded-2xl shadow-lg max-md:overflow-x-scroll">
                <form onSubmit={submit}>
                    <div>
                        <InputLabel htmlFor="sensor_type" value="Sensor Type" />

                        <TextInput
                            id="sensor_type"
                            name="sensor_type"
                            value={data.sensor_type}
                            className="mt-1 block w-full"
                            autoComplete="sensor_type"
                            isFocused={true}
                            onChange={(e) => setData('sensor_type', e.target.value)}
                            required
                        />

                        <InputError message={errors.sensor_type} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="location" value="Location" />

                        <TextInput
                            id="location"
                            type="text"
                            name="location"
                            value={data.location}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            onChange={(e) => setData('location', e.target.value)}
                            required
                        />

                        <InputError message={errors.location} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="installation_date" value="Installation Date" />

                        <TextInput
                            id="installation_date"
                            type="date"
                            name="installation_date"
                            value={data.installation_date}
                            className="mt-1 block w-full"
                            autoComplete="new-installation_date"
                            onChange={(e) => setData('installation_date', e.target.value)}
                            required
                        />

                        <InputError message={errors.installation_date} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel
                            htmlFor="sensor_identifier"
                            value="Sensor Identifier"
                        />

                        <TextInput
                            id="sensor_identifier"
                            type="text"
                            name="sensor_identifier"
                            value={data.sensor_identifier}
                            className="mt-1 block w-full"
                            autoComplete="sensor_identifier"
                            onChange={(e) =>
                                setData('sensor_identifier', e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.sensor_identifier}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                        <SecondaryButton>
                            Cancel
                        </SecondaryButton>

                        <PrimaryButton className="ms-4" disabled={processing}>
                            Register
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
        </AuthenticatedLayout>
    );
};
