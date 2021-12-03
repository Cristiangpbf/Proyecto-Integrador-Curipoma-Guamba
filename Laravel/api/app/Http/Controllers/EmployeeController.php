<?php

namespace App\Http\Controllers;

use App\Employee;
use App\Http\Resources\Employee as EmployeeResource;
use App\Http\Resources\EmployeeCollection;
use Illuminate\Http\Request;
use App\Http\Resources\Production as ProductionResource;

class EmployeeController extends Controller
{
    private static $rules =[
        'name'=>'required|string',
        'email'=>'required|string|email',
        'phone'=>'required|numeric|digits_between:6,10',
        'dni'=>'required|numeric|digits:10',
    ];

    private static $messages=[
        'name.required'=>'Agregue el nombre.',
        'email.required'=>'Agregue el email.',
        'phone.required'=>'Agregue el teléfono.',
        'dni.required'=>'Agregue el dni.',
        'name.string'=>'El nombre no tiene el formato correcto.',
        'email.email'=>'El email no tiene el formato correcto.',
        'phone.numeric'=>'El campo teléfono solo admite números.',
        'dni.numeric'=>'El campo dni solo admite números.',
        'phone.max'=>'El campo teléfono solo admite :max dígitos.',
        'dni.max'=>'El campo dni solo admite :max dígitos.'
    ];

    public function index(){
        return new EmployeeCollection(Employee::all());
    }
    public function show(Employee $employee){
        return response()->json(new EmployeeResource($employee), 200);
    }
    public function showEmployeeProd(Employee $employee){
        $productions = $employee->productions;
        return ProductionResource::collection($productions);
//        return response()->json($employee->productions, 200);
    }

    public function store(Request $request){

        $request->validate(self::$rules, self::$messages);

        $employee = Employee::create($request->all());
        return response()->json($employee, 201);
    }

    public function update(Request $request, Employee $employee){

        $request->validate(self::$rules, self::$messages);

        $employee->update($request->all());
        return response()->json($employee, 200);
    }

    public function delete(Employee $employee){
        $employee->delete();
        return response()->json(null, 204);
    }
}
