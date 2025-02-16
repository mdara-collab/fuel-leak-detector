<?php

namespace App\Http\Controllers;

use App\Models\Sensor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class SensorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Sensor/Index',[
            'sensors' => Sensor::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Sensor/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        dd($request->all());

        $request->validate([
            'sensor_type' => 'required|string|in:petrol,diesel',
            'location' => 'required|string|max:255',
            'installation_date' => 'required|date',
            'sensor_identifier' => 'required|string|max:255|unique:sensors,sensor_identifier',
        ]);

        $sensor = new Sensor();

        $sensor->sensor_type = $request->sensor_type;
        $sensor->location = $request->location;
        $sensor->installation_date = $request->installation_date;
        $sensor->sensor_identifier = $request->sensor_identifier;
        $sensor->status = 'inactive';
        $sensor->last_seen = null;
        $sensor->last_calibration_date = null;
        $sensor->owner_id = Auth::id();

        $sensor->save();

        return redirect()
            ->route('sensors.index')
            ->withInput([
                'message' => 'Sensor registered successfully!'
            ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Sensor $sensor)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Sensor $sensor)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Sensor $sensor)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Sensor $sensor)
    {
        //
    }
}
