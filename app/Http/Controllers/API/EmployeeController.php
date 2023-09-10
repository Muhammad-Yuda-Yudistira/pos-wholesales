<?php

namespace App\Http\Controllers\API;

use App\Models\Employee;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\PostResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class EmployeeController extends Controller
{
    public function store(Request $request){
        $validator=Validator::make($request->all(),[
            'first_name'=>'required|string|unique:employees',
            'last_name'=>'required|string|unique:employees',
            'position'=>'required',
            'phone'=>'required',
            'supervisor_id'=>'required',
        ]);

        if($validator->fails()){
            return response()->json([
                'success'=>false,
                'message'=>$validator->errors()
            ],400);
        }
        try {
            $data =$request->all();
            $data['user_id']=Auth::id();
            $employee=Employee::create($data);
            return (new PostResource(true,'Employee has been created',$employee))->response()->setStatusCode(201);
        } catch (\Throwable $th) {
            return response()->json([
                'success'=>false,
                'message'=>$th->getMessage()
            ],400);
        }
    }

    public function show($id){
        $employee=Employee::findOrFail($id);
        if(empty($employee)){
            return response()->json([
                'success'=>false,
                'message'=>'Employee not found'
            ],404);
        }else{
            return (new PostResource(true,'Employee has been edited',$employee))->response()->setStatusCode(200);
        }
    }

    public function update(Request $request, $id){
        $employee=Employee::findOrFail($id);
        if(empty($employee)){
            return response()->json([
                'success'=>false,
                'message'=>'Employee not found'
            ],404);
        }
        $employee->update([
            'first_name'=>$request->first_name,
            'last_name'=>$request->last_name,
            'position'=>$request->position,
            'phone'=>$request->phone,
            'user_id'=>Auth::id(),
            'supervisor_id'=>$request->supervisor_id
        ]);
        return (new PostResource(true,'show details employee',$employee))->response()->setStatusCode(200);
    }
    public function search(Request $request)
    {
        $keyword = $request->input('keyword');
        $employees = Employee::where('first_name', 'like', "%$keyword%")
            ->orWhere('last_name', 'like', "%$keyword%")
            ->orWhere('position', 'like', "%$keyword%")
            ->get();

        if ($employees->isEmpty()) {
            return response()->json([
                'success' => false,
                'message' => 'Tidak ada karyawan yang ditemukan dengan kata kunci tersebut.',
            ], 404);
        }
        return (new PostResource(true, 'Karyawan ditemukan', $employees))->response()->setStatusCode(200);
    }

    public function viewAllEmployee(){
        $employees=Employee::all();
        if (!auth()->check()) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        return (new PostResource(true,'All Employees',$employees))->response()->setStatusCode(200);
    }
}
