<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Station extends Model
{
    /**
     * Get the history of the station.
     */
    public function stationHistories()
    {
        return $this->hasMany(StationHistory::class);
    }

    public function printHistories()
    {
        // $histories = App\
    }
}
