<?php

namespace App\Http\Controllers;

use App\Employee;
use App\Http\Resources\Employee as EmployeeResource;
use App\Http\Resources\EmployeeCollection;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    private static $rules =[
        'name'=>'required|string',
        'email'=>'required|string|email',
        'phone'=>'required|string|numeric',
        'dni'=>'required|string|max:10',
    ];

    private static $messages=[
        'required'=>'El campo :attribute es obligatorio.',
        'string'=>'El campo :attribute no tiene el formato correcto.',
        'email'=>'El campo :attribute no es un email valido.',
        'numeric'=>'El campo :attribute no es un teléfono valido.',
        'max'=>'El campo :attribute supera los :max dígitos.'
    ];

    public function index(){
        return new EmployeeCollection(Employee::all());
    }
    public function show(Employee $employee){
        return response()->json(new EmployeeResource($employee), 200);
    }
    public function store(Request $request){

        $request->validate(self::$rules, self::$messages);

        $employee = Employee::create($request->all());
        return response()->json($employee, 201);
    }
    public function update(Request $request, Employee $employee){
        $employee->update($request->all());
        return response()->json($employee, 200);
    }
    public function delete(Employee $employee){
        $employee->delete();
        return response()->json(null, 204);
    }
}
