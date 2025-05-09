<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class UserPermissionSeeder extends Seeder
{
    //inisiasi permission 
    private $permissions = [ 
        'role', 
    ]; 

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //di dalan run() seeder 
        foreach ($this->permissions as $permission) { 
            Permission::create(['name' => $permission]); 
        } 
        
        
        $user = User::create([ 
            'name' => 'Anisa', 
            'username' => 'anisaps', 
            'email' => 'anisa@gmail.com', 
            'password' => Hash::make('12345678') 
        ]); 
        
        $role = Role::create(['name' => 'Superadmin']); 
        
        $permissions = Permission::pluck('id', 'id')->all(); 
        
        $role->syncPermissions($permissions); 
        
        if ($user && $role) { 
            $user->assignRole([$role->id]); 
        }
    }
}