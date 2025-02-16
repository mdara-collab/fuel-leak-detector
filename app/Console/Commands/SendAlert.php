<?php

namespace App\Console\Commands;

use App\Events\NewSensorReadingSaved;
use App\Mail\CriticalAlert;
use App\Models\SensorReading;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

class SendAlert extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:send-alert';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        NewSensorReadingSaved::dispatch(SensorReading::find(7));
    }
}
