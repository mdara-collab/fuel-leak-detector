<?php

namespace App\Console\Commands;

use App\Models\Sensor;
use Illuminate\Console\Command;
use Illuminate\Support\Carbon;

class MarkInactiveSensors extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:mark-inactive-sensors';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Marks sensors who have not yet received any data in more than 20 seconds as inactive';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $threshold = Carbon::now('Africa/Harare')->subSeconds(20)->timestamp;
        $sensors = Sensor::where('status', '=', 'active')
            ->where('last_seen', '!=', 'null')
            ->get();
        
        $inactiveSensors = 0;

        foreach ($sensors as $sensor) {
            if($sensor->last_seen === null)
                continue;

            $lastSeenTimeStamp = Carbon::parse($sensor->last_seen, 'Africa/Harare')->timestamp;
            if($sensor->status === 'active' && $lastSeenTimeStamp < $threshold){
                $sensor->status = 'inactive';
                $sensor->save();
                ++$inactiveSensors;
            }
        }

        $this->info("Marked $inactiveSensors sensors as inactive.");
    }
}
