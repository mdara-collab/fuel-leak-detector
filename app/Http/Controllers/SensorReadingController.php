<?php

namespace App\Http\Controllers;

use App\Models\Sensor;
use App\Models\SensorReading;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia; 

class SensorReadingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Analytics/Index',[
            'data' => SensorReading::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'sensor_id' => [
                Rule::in(Sensor::pluck('id')->toArray()),
                'required'
            ],
            'value' => 'min:200|max:10000|required|integer',
            'unit' => [
                Rule::in(['ppm']),
                'required'
            ],
            'timestamp' => 'required|date|after:now'
        ]);

        SensorReading::create([
            'sensor_id' => $request->input('sensor_id'),
            'value' => $request->input('value'),
            'unit' => $request->input('unit'),
            'timestamp' => $request->input('timestamp')
        ]);

        $sensor = Sensor::find($request->sensor_id);
        $sensor->status = 'active';
        $sensor->last_seen = $request->input('timestamp');
        $sensor->save();

        return 'Successfully Stored';
    }

    /**
     * Display the specified resource.
     */
    public function show(SensorReading $sensorReading)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(SensorReading $sensorReading)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, SensorReading $sensorReading)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SensorReading $sensorReading)
    {
        //
    }
}
