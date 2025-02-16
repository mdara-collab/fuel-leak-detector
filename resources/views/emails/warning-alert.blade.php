<style>
    .alert-container {
        max-width: 28rem; /* 448px */
        margin: 0 auto;
        padding: 16px;
        background-color: #FEE2E2;
        border-left: 4px solid #efdb44;
        color: #b9b91c;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        font-family: Arial, sans-serif;
    }

    .alert-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .alert-title {
        font-size: 1.125rem; /* 18px */
        font-weight: bold;
    }

    .acknowledge-btn {
        font-size: 0.875rem; /* 14px */
        background-color: #efdb44;
        color: white;
        padding: 8px 16px;
        border-radius: 8px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .ack-link {
        text-decoration: none; /* Removes underline */
        color: white; /* Keeps the text color white */
        display: inline-block; /* Ensures the link behaves like a button */
    }

    .acknowledge-btn:hover {
        background-color: #dccd26;
    }

    .alert-info {
        margin-top: 8px;
        color: #1F2937; /* Gray 800 */
    }

    .alert-timestamp {
        margin-top: 12px;
        font-size: 0.75rem; /* 12px */
        color: #4B5563; /* Gray 600 */
    }

    .alert-details {
        margin-top: 12px;
        color: #4B5563; /* Gray 600 */
    }

    .alert-details strong {
        color: #1F2937; /* Gray 800 */
    }

    .alert-action {
        margin-top: 16px;
        color: #1F2937; /* Gray 800 */
    }
</style>

<div class="alert-container">
    <div class="alert-header">
        <h2 class="alert-title">⚠️ {{ $alertLevel }} ALERT</h2>
        <button class="acknowledge-btn">
            <a class="ack-link" href="#">
                Acknowledge
            </a>
        </button>
    </div>
    <p class="alert-info"><strong>Location:</strong> {{ $location }}</p>
    <p class="alert-info"><strong>Issue:</strong> {{ $description }}</p>
    <p class="alert-info"><strong>Detected Methane Level:</strong> {{ $value }} ppm</p>
    <p class="alert-info"><strong>Threshold for Critical Alert:</strong> {{ $threshold }} ppm</p>
    <p class="alert-info"><strong>Sensor:</strong> {{ $sensorType }}</p>
    <p class="alert-info"><strong>Time since Detection:</strong> {{ '15 minutes' }}</p>
    <p class="alert-info"><strong>Sensor Status:</strong> {{ $sensorStatus }}</p>
    <div class="alert-details">
        <p><strong>Action Required:</strong> {{ $actionRequired }}</p>
    </div>
    <p class="alert-timestamp"><strong>Timestamp:</strong> {{ $timestamp }}</p>
    <div class="alert-action">
        <p>For more information, please visit sensor site.</p>
    </div>
</div>
