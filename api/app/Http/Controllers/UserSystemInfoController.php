<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Symfony\Component\HttpFoundation\Cookie;
use App\Http\Requests;
use App\Helpers\UserSystemInfoHelper;
use App\Http\Controllers\Controller;

class UserSystemInfoController extends Controller
{
    function getusersysteminfo()
    {
        $getip = UserSystemInfoHelper::get_ip();
        $getbrowser = UserSystemInfoHelper::get_browsers();
        $getdevice = UserSystemInfoHelper::get_device();
        $getos = UserSystemInfoHelper::get_os();

        // return ...
    }
}
