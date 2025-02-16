<?php

namespace App\Http\Controllers;

use App\Models\Alert;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AlertController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        Alert::all();
        return Inertia::render('Alert/Index');
    }

    public function table() {
        return Inertia::render('Alert/AlertsTable');
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
            'sensor_id' => 'required|exists:sensors,id',
            'location' => 'required|string|max:255',
            'description' => 'required|string|max:1000',
            'status' => 'required|in:active,resolved',
            'level' => 'required|in:critical,warning',
            'user_id' => 'nullable|exists:users,id',
            'timestamp' => 'required|date',
        ]);        

        Alert::create([
            'sensor_id' => $request->input('sensor_id'),
            'location' => $request->input('location'),
            'description' => $request->input('description'),
            'status' => $request->input('status'),
            'level' => $request->input('level'),
            'user_id' => $request->input('user_id'), 
            'timestamp' => $request->input('timestamp')
        ]);

        return 'Successfully Alerted User';
    }

    /**
     * Display the specified resource.
     */
    public function show(Alert $alert)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Alert $alert)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Alert $alert)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Alert $alert)
    {
        //
    }
}
