<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Alert extends Model
{
    protected $fillable = [
        'sensor_id',
        'location',
        'description',
        'status',
        'level',
        'user_id', 
        'timestamp',
        'sensor_reading_id'
    ];
}
