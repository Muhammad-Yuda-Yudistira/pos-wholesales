<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Supplier;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\PostResource;
use App\Http\Resources\GetResource;

class SupplierController extends Controller
{
    
    public function addNewSupplier(Request $request){
        $validator = Validator::make($request->all(), [
            'company_name'=>'required|unique:suppliers',
            'contact_name'=>'required',
            'contact_email'=>'required|email|unique:suppliers',
            'contact_phone'=>'required',
        ]);
        if($validator->fails()){
            return response()->json([
                'success' => false,
                'message' => $validator->errors()
            ], 422);
        }
        Supplier::create($request->all());
        return (new PostResource(true,'Supplier hasbeen added successfully',request()->all()))
        ->response()
        ->setStatusCode(200);
    }

    public function showSupplier($id){
        $data = Supplier::findOrFail($id);
        if(empty($data)){
            return response()->json([
                'success' => false,
                'message' => 'Not Found'], 404);
        }else{
            return (new GetResource(true,'show details supplier',$data))->response()->setStatusCode(200);
        }
    }

    public function updateSupplier(Request $request, $id){
        $data = Supplier::findOrFail($id);
        if(empty($data)){
            return response()->json([
                'success' => false,
                'message' => 'Not Found'], 404);
        }
        $validator = Validator::make($request->all(), [
            'company_name'=>'required|unique:suppliers,company_name,'.$id,
            'contact_name'=>'required',
            'contact_email'=>'required|email|unique:suppliers,contact_email,'.$id,
            'contact_phone'=>'required',
        ]);
        if($validator->fails()){
            return response()->json([
                'success' => false,
                'message' => $validator->errors()
            ], 422);
        }
        $data->update($request->all());
        return (new GetResource(true,'Supplier hasbeen updated successfully',$data))
        ->response()
        ->setStatusCode(200);
    }

    public function showAllSupplier(){
        $data = Supplier::all();
        return (new GetResource(true,'get all suppliers',$data))
        ->response()
        ->setStatusCode(200);
    }

}
