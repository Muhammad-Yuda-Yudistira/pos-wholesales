<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Categories;
use App\Http\Resources\PostResource;

class CategoriesController extends Controller
{
    public function addNewCategory(Request $request){
        $validator=Validator::make($request->all(),[
            'name'=>'required',
        ]);
        if($validator->fails()){
            return response()->json(['error'=>$validator->errors()],422);
        }
        $category=Categories::create($request->all());
        return (new PostResource(true,'categories has been created',$category))->response()->setStatusCode(201);
    }

    public function viewAllCategory(){
        $category=Categories::with('product')->get();
        return (new PostResource(true,'list categories',$category))->response()->setStatusCode(201);
    }

    public function viewCategoryWithProduct(){
        $category=Categories::with('product')->get();
        return (new PostResource(true,'list categories',$category))->response()->setStatusCode(201);
    }
}
