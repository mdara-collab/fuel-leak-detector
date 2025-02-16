<?php

namespace App\Mail;

use App\Models\Alert;
use App\Models\Sensor;
use App\Models\SensorReading;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class CriticalAlert extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public function __construct(
        protected Alert $alert,
    ) {}

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Critical Alert',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        $alert = $this->alert;
        $sensorReading = SensorReading::find($alert->sensor_reading_id);
        $sensor = Sensor::find($sensorReading->sensor_id);

        return new Content(
            view: 'emails.critical-alert',
            with: [
                'alertLevel' => $alert->level,
                'location' => $alert->location,
                'description' => $alert->description,
                'value' => $sensorReading->value,
                'threshold' => 5000,
                'sensorType' => $sensor->sensor_type,
                'timeSinceDetection' => '15 minutes',
                'sensorStatus' => $sensor->status,
                'actionRequired' => 'Raise alarm and evacuate immediately.',
                'timestamp' => $sensorReading->timestamp
            ]
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
