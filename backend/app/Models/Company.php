<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;

    protected $fillable = [
        "name",
        "sector_id",
        "email",
        "phone",
        "address",
        "city",
        "country",
        "website"
    ];

    public function invoices()
    {
        return $this->belongsTo(Sector::class);
    }
}
