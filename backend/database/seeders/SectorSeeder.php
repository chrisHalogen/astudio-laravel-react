<?php

namespace Database\Seeders;

use App\Models\Sector;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SectorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //

        $businessSectors = [
            "Accounting",
            "Arts and Culture",
            "Information Technology",
            "Finance and Banking",
            "Healthcare and Medical",
            "Manufacturing",
            "Retail and E-commerce",
            "Real Estate and Property",
            "Hospitality and Tourism",
            "Education and E-Learning",
            "Entertainment and Media",
            "Automotive",
            "Agriculture and Farming",
            "Energy and Utilities",
            "Transportation and Logistics",
            "Food and Beverage",
            "Telecommunications",
            "Fashion and Apparel",
            "Construction and Engineering",
            "Legal Services",
            "Environmental Services",
            "Non-Profit and Charity",
            "Government and Public Sector",
            "Sports and Recreation",
            "Pharmaceuticals",
            "Consulting and Advisory",
            "Architecture and Design",
            "Advertising and Marketing",
            "Aerospace and Defense",
            "Consumer Electronics",
            "Mining and Minerals",
            "Aviation",
            "Renewable Energy"
        ];

        foreach ($businessSectors as $sector) {
            Sector::factory()
                ->hasCompanies(20)
                ->create([
                    'name' => $sector
                ]);
        }
    }
}
