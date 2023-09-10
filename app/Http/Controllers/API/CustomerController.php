<?php

namespace App\Http\Controllers\API;

use App\Models\Customer;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\GetResource;
use App\Http\Resources\PostResource;
use Illuminate\Support\Facades\Validator;

class CustomerController extends Controller
{
    public function addNewCustomer(){
        $validator=Validator::make(request()->all(),[
            'first_name'=>'required|max:255',
            'last_name'=>'required|max:255',
            'email'=>'required',
            'phone'=>'required',
            'address'=>'required',
        ]);

        if($validator->fails()){
            return response()->json([
                'success'=>false,
                'message'=>$validator->errors()
            ],400);
        }
        $customer=Customer::create(request()->all());
        return (new PostResource(true,'Customer has been created',$customer))->response()->setStatusCode(201);

    }

    public function editCustomer($id){
        $customer = Customer::findOrFail($id);
        if(empty($customer)){
            return response()->json([
                'success'=>false,
                'message'=>'Customer not found'
            ],404);
        }else{
            return (new GetResource(true,'show Customer detail',$customer))->response()->setStatusCode(200);
        }
    }

    public function updateCustomer(Request $request, $id){  
        $validator=Validator::make($request->all(),[
            'first_name'=>'required|max:255',
            'last_name'=>'required|max:255',
            'email'=>'required|email|unique:customers,email,'.$id,
            'phone'=>'required',
            'address'=>'required',
        ]);
        if($validator->fails()){
            return response()->json([
                'success'=>false,
                'message'=>$validator->errors()
            ],400);
        }
        $customer = Customer::findOrFail($id);
        $customer->update($request->all());
        return (new PostResource(true,'Customer has been updated',$customer))->response()->setStatusCode(200);
    }

    public function searchCustomer(Request $request){
        $keyword = $request->input('keyword');
        $customer = Customer::where('first_name','like','%'.$keyword.'%')
        ->orWhere('last_name', 'like', "%$keyword%")
        ->get();
        if ($customer->isEmpty()) {
            return response()->json([
                'success' => false,
                'message' => 'Tidak ada customer yang ditemukan dengan kata kunci tersebut.',
            ], 404);
        }
        return (new PostResource(true,'Customer searched',$customer))->response()->setStatusCode(200);
    }

    public function viewAllCustomer(){
        $customer = Customer::all();
        return (new PostResource(true,'All Customers',$customer))->response()->setStatusCode(200);
    }
}
