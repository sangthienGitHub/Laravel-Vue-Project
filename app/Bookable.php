<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Bookable extends Model
{
    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }
}
