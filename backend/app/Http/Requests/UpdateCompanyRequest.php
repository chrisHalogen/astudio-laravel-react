<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCompanyRequest extends FormRequest
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
            "id" => ['required'],
            "name" => ['sometimes', 'required', 'min:3'],
            "sector_id" => ['sometimes', 'required', 'numeric'],
            "email" => ['sometimes', 'required', 'email'],
            "phone" => ['sometimes', 'required'],
            "address" =>  ['sometimes', 'required'],
            "city" => ['sometimes', 'nullable'],
            "country" => ['sometimes', 'nullable'],
            "website" => ['sometimes', 'nullable'],
        ];
    }
}
