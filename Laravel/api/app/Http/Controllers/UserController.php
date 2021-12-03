<?php

namespace App\Http\Controllers;

use App\User;
use App\Http\Resources\User as UserResource;
use App\Http\Resources\UserCollection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class UserController extends Controller
{
    public function authenticate(Request $request)
    {
        $credentials = $request->only('email', 'password');
        try {
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json(['message' => 'invalid_credentials'], 400);
            }
        } catch (JWTException $e) {
            return response()->json(['message' => 'could_not_create_token'], 500);
        }
        $user = JWTAuth::user();
        return response()->json(compact('token', 'user'));

    }

    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:100',
            'business_name' => 'required|string|max:100',
            'ruc' => 'required|integer|max:13',
            'phone' => 'required|numeric|max:10',
            'address' => 'required|string|max:250',
            'type' => 'required',
            'email' => 'required|string|email|max:50|unique:users',
            'password' => 'required|string|min:6|confirmed',

        ]);

/*        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 400);
        }*/
        $user = User::create([
            'name' => $request->get('name'),
            'business_name' => $request->get('business_name'),
            'ruc' => $request->get('ruc'),
            'phone' => $request->get('phone'),
            'address' => $request->get('address'),
            'type' => $request->get('type'),
            'email' => $request->get('email'),
            'password' => Hash::make($request->get('password')),]);

        $token = JWTAuth::fromUser($user);

        return response()->json(compact('user'), 201);
    }

    public function update(Request $request, User $user){

        $request->validate([
            'name' => 'required|string|max:100',
            'email' => 'required|string|email|unique:users,email,'.$user->id.'|max:255',
            'business_name' => 'required|string|max:100',
            'ruc' => 'required|integer|max:13',
            'phone' => 'required|numeric|max:10',
            'address' => 'required|string|max:250',
            //'password' => 'required|string|min:6|confirmed'
        ]);

        $user->update($request->all());
        return response()->json($user, 200);
    }

    public function update1(Request $request, User $user){

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|unique:users,email,'.$user->id.'|max:255',
            'business_name' => 'required|string|max:100',
            'ruc' => 'required|integer|max:13',
            'phone' => 'required|numeric|max:10',
            'address' => 'required|string|max:250',
            //'password' => 'required|string|min:6|confirmed'
        ]);

        $user->update($request->all());
        return response()->json($user, 200);
    }

    //Visualizar usuarios para el admi
    public function index()
    {
        return new UserCollection(User::paginate());
    }

    public function show(User $user)
    {
        return $user;
    }

    public function getAuthenticatedUser() //Usuario autenticado
    {
        try {
            if (!$user = JWTAuth::parseToken()->authenticate()) {
                return response()->json(['message'=>'user_not_found'], 404);
            }
        } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
            return response()->json(['message'=>'token_expired'], $e->getStatusCode());
        } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
            return response()->json(['message'=>'token_invalid'], $e->getStatusCode());
        } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {
            return response()->json(['message'=>'token_absent'], $e->getStatusCode());
        }
        return response()->json(compact('user'));

    }

    public function logout()
    {
        try {
            JWTAuth::invalidate(JWTAuth::getToken());

            return response()->json([
                "status" => "success",
                "message" => "User successfully logged out."
            ], 200);
        } catch (JWTException $e) {
            // something went wrong whilst attempting to encode the token
            return response()->json([
                "message" => "No se pudo cerrar la sesión."
            ], 500); }

    }

    public function delete(User $user){
        $user->delete();
        return response()->json(null, 204);
    }
}
