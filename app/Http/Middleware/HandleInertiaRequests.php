<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;
use App\Models\Sales_order;

class HandleInertiaRequests extends Middleware
{

    protected $sales_id;

    public function __construct(){
        $this->sales_id = Sales_order::with('items', 'items.product')
            ->where('payment_status', 'unpaid')
            ->orderBy('id', 'desc')
            ->firstOr(function () {
                return null; // Setel ke null jika tidak ada hasil yang ditemukan
            });
    }
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'ziggy' => fn () => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
            'flash' => [
                'message' => fn () => $request->session()->get('message')
            ],
            'response' => [
                'response' => fn () => $request->session()->get('response')
            ],
            'id_sales' =>[
                'id_sales' => fn () => $request->session()->get('id_sales') ?? ($this->sales_id ? $this->sales_id->id : null)
            ],
        ];
    }
}
