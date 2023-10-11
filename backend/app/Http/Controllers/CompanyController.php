<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;
use App\Http\Requests\StoreCompanyRequest;
use App\Http\Requests\UpdateCompanyRequest;
use App\Http\Resources\CompanyCollection;
use App\Http\Resources\CompanyResource;

class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        $filterItem = [];

        if ($request->query('name')) {
            $filterItem = [['name', '=', $request->query('name')]];
        }

        if ($request->query('pageSize')) {
            $pageSize = $request->query('pageSize');

            $companies = Company::where($filterItem)
                ->paginate($pageSize)
                ->appends($request->query());
        } else {
            $companies = Company::where($filterItem)
                ->paginate()
                ->appends($request->query());
        }

        $collection = new CompanyCollection($companies);
        return response()->json($collection);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreCompanyRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCompanyRequest $request)
    {
        //
        return new CompanyResource(Company::create($request->all()));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //

        $message = "Company not found";

        if (Company::where('id', $id)->exists()) {
            $company = Company::find($id);

            $resource = new CompanyResource($company);
            return response()->json($resource);
        } else {
            return response()->json([
                'message' => $message
            ]);
        }
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCompanyRequest  $request
     * @param  \App\Models\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCompanyRequest $request)
    {
        //
        $message = "Company not found";

        if (Company::where('id', $request->id)->exists()) {
            $company = Company::find($request->id);
            $company->update($request->all());

            $message = "Company Updated Successfully";

            return response()->json([
                'message' => $message
            ]);
        } else {
            return response()->json([
                'message' => $message
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $message = "Company not found";

        if (Company::where('id', $id)->exists()) {
            $company = Company::find($id);
            $company->delete();

            $message = "Company Deleted Successfully";

            return response()->json([
                'message' => $message
            ]);
        } else {
            return response()->json([
                'message' => $message
            ]);
        }
    }
}
