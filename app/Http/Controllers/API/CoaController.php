<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\ChartOfAccount as Coa;
use App\Http\Resources\PostResource;

class CoaController extends Controller
{
    public function addNewCoa(Request $request){
        $validator = Validator::make($request->all(), [
            'account_name' => 'required',
            'account_type' => 'required',
        ]);
        
        if($validator->fails()){
            return response()->json([
                'status' => false,
                'messagge'=>$validator->errors()], 422);
        }
        $coa=Coa::create($request->all());
        return (new PostResource(true,'account has been created',$coa))->response()->setStatusCode(201);
    }

    public function viewAllCoa(){
        $coa= Coa::all();
        return (new PostResource(true,'list chart of account',$coa))->response()->setStatusCode(201);
    }
}
