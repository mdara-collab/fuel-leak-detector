<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Sensor extends Model
{
    protected $fillable = [
        'sensor_type',
        'location',
        'installation_date',
        'sensor_identifier'
    ];
}
