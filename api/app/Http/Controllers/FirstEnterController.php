<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Symfony\Component\HttpFoundation\Response as SymfonyResponse;
use App\Helpers\UserSystemInfoHelper;

class FirstEnterController extends Controller
{
    public function firstEnter(Request $request)
    {
        // Is there any first enter Cookie?
        $cookie = $request->cookie('firstEnter');
        if($cookie) {
            // do nothing
        } else {
            //Set Cookie for first customer enter.
            $userSystemInfo = $this->getUserSystemInfo();
            $cookieName = 'firstEnter';

            $response = new Response();
            $response->withCookie(cookie($cookieName, $userSystemInfo, 1 ));
            return $response;
        }
    }


    private function getUserSystemInfo()
        {
            $getip = UserSystemInfoHelper::get_ip();
            $getbrowser = UserSystemInfoHelper::get_browsers();
            $getdevice = UserSystemInfoHelper::get_device();
            $getos = UserSystemInfoHelper::get_os();

            // Entry the Index page. Check if customer is first time on webpage.

            return $getip;
        }
}
