<?php

namespace App\Http\Controllers;

use App\Employee;
use App\Http\Resources\Employee as EmployeeResource;
use App\Http\Resources\EmployeeCollection;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function index(){
        return new EmployeeCollection(Employee::paginate());
    }
    public function show(Employee $employee){
        return response()->json(new EmployeeResource($employee), 200);
    }
    public function store(Request $request){
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
