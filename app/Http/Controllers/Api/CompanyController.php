<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Company;
use Exception;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    public function index()
    {
        try {
            $data = Company::all();
        } catch (Exception $e) {
            return response()->json(['data' => [], 'message' => $e->getMessage()], 500);
        }
        return response()->json(['data' => $data, 'message' => 'Company Details'], 200);
    }
}