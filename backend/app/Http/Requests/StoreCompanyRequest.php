<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCompanyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {

        return [
            "name" => ['required', 'min:3'],
            "sector_id" => ['required', 'numeric'],
            "email" => ['required', 'email'],
            "phone" => ['required'],
            "address" =>  ['required'],
            "city" => ['nullable'],
            "country" => ['nullable'],
            "website" => ['nullable'],
        ];
    }
}
